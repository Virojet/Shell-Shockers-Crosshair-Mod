#!/usr/bin/env python3
"""Accumulate GitHub repository traffic (views & clones) beyond the 14-day window
and write Shields.io endpoint JSON files under traffic/."""

import json
import os
import pathlib
import sys
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parents[2]
TRAFFIC_DIR = ROOT / "traffic"
HISTORY_FILE = TRAFFIC_DIR / "history.json"
VIEWS_BADGE = TRAFFIC_DIR / "views-badge.json"
CLONES_BADGE = TRAFFIC_DIR / "clones-badge.json"


def fetch(endpoint: str, token: str, repo: str) -> dict:
    url = f"https://api.github.com/repos/{repo}/traffic/{endpoint}"
    req = urllib.request.Request(
        url,
        headers={
            "Accept": "application/vnd.github+json",
            "Authorization": f"Bearer {token}",
            "X-GitHub-Api-Version": "2022-11-28",
            "User-Agent": "traffic-tracker",
        },
    )
    with urllib.request.urlopen(req, timeout=20) as resp:
        return json.loads(resp.read().decode("utf-8"))


def fmt(n: int) -> str:
    if n >= 1_000_000:
        return f"{n / 1_000_000:.1f}M"
    if n >= 1_000:
        return f"{n / 1_000:.1f}k"
    return f"{n:,}"


def load_history() -> dict:
    if HISTORY_FILE.exists():
        try:
            return json.loads(HISTORY_FILE.read_text(encoding="utf-8"))
        except Exception:
            pass
    return {"views": {}, "clones": {}}


def merge_series(bucket: dict, entries: list) -> None:
    for item in entries or []:
        ts = item.get("timestamp")
        if not ts:
            continue
        prev = bucket.get(ts, {"count": 0, "uniques": 0})
        bucket[ts] = {
            "count": max(int(prev.get("count", 0)), int(item.get("count", 0))),
            "uniques": max(int(prev.get("uniques", 0)), int(item.get("uniques", 0))),
        }


def write_badge(path: pathlib.Path, label: str, total: int, uniques: int, color: str) -> None:
    payload = {
        "schemaVersion": 1,
        "label": label,
        "message": f"{fmt(total)} ({fmt(uniques)} unique)",
        "color": color,
    }
    path.write_text(json.dumps(payload, indent=2) + "\n", encoding="utf-8")


def main() -> int:
    token = os.environ.get("TRAFFIC_TOKEN", "").strip()
    repo = os.environ.get("GITHUB_REPOSITORY", "").strip()
    TRAFFIC_DIR.mkdir(parents=True, exist_ok=True)
    history = load_history()

    if token and repo:
        try:
            views = fetch("views", token, repo)
            clones = fetch("clones", token, repo)
            merge_series(history.setdefault("views", {}), views.get("views", []))
            merge_series(history.setdefault("clones", {}), clones.get("clones", []))
        except Exception as exc:
            print(f"[traffic] warning: API fetch failed: {exc}", file=sys.stderr)
    else:
        print("[traffic] TRAFFIC_TOKEN not configured; writing existing totals.", file=sys.stderr)

    views_map = dict(sorted(history.get("views", {}).items()))
    clones_map = dict(sorted(history.get("clones", {}).items()))
    history["views"] = views_map
    history["clones"] = clones_map

    total_views = sum(v.get("count", 0) for v in views_map.values())
    unique_views = sum(v.get("uniques", 0) for v in views_map.values())
    total_clones = sum(v.get("count", 0) for v in clones_map.values())
    unique_clones = sum(v.get("uniques", 0) for v in clones_map.values())

    history["totals"] = {
        "views": {"count": total_views, "uniques": unique_views},
        "clones": {"count": total_clones, "uniques": unique_clones},
    }

    HISTORY_FILE.write_text(json.dumps(history, indent=2) + "\n", encoding="utf-8")
    write_badge(VIEWS_BADGE, "views", total_views, unique_views, "2db8d4")
    write_badge(CLONES_BADGE, "installs / clones", total_clones, unique_clones, "FAB704")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
