<div align="center">

<img src="icon.svg" width="88" height="88" alt="Shell Shockers Crosshair Mod icon">

# Shell Shockers Crosshair Mod

**Better HUD's Crosshair Customizer as its own userscript.**
Customize your Shell Shockers crosshair arms, center dot / plus / static cross, outlines, rotation, saved profiles, gallery, undo/redo history, and `X-` / `SSB-` / Valorant share codes inside the native **Settings ▸ CROSSHAIR** tab.

[![Install Userscript](https://img.shields.io/badge/Install-Shell--Shockers--Crosshair--Mod.user.js-FAB704?style=for-the-badge&logo=tampermonkey&logoColor=0C576F)](https://raw.githubusercontent.com/Virojet/Shell-Shockers-Crosshair-Mod/main/Shell-Shockers-Crosshair-Mod.user.js)
[![Version](https://img.shields.io/badge/version-1.0.0-2db8d4?style=for-the-badge)](Shell-Shockers-Crosshair-Mod.user.js)
[![License: MIT](https://img.shields.io/badge/License-MIT-0C576F?style=for-the-badge)](LICENSE)

</div>

---

## Install

1. Install a userscript manager in your browser:
   - **[Tampermonkey](https://www.tampermonkey.net/)** (Chrome, Edge, Brave, Opera, Firefox, Safari)
   - **[Violentmonkey](https://violentmonkey.github.io/)** (Chrome, Edge, Firefox)
2. Open **[`Shell-Shockers-Crosshair-Mod.user.js`](https://raw.githubusercontent.com/Virojet/Shell-Shockers-Crosshair-Mod/main/Shell-Shockers-Crosshair-Mod.user.js)** and click **Install**.
3. Open [shellshock.io](https://shellshock.io/) (or any official proxy) and open **Settings ▸ CROSSHAIR**.

> **Note:** If you also have **[Shell Shockers Better HUD](https://github.com/Virojet/Shell-Shockers-Better-Hud-Mod)** installed and active, this script automatically stands down so the two never conflict. Both scripts share the same `ch2-*` `localStorage` keys, so your active crosshair, saved profiles, and profile order carry over either way.

---

## Features

- **Native Settings Tab (`Settings ▸ CROSSHAIR`)**:
  - Injects a **CROSSHAIR** tab directly into the game's Settings popup with frosted-glass cards and automatic UI scaling.
- **Arms Customization**:
  - Toggle the game's dynamic crosshair arms (`Hide Original Crosshair`), set arm color, length (`4px`–`60px`), thickness (`1px`–`16px`), rotation (`0°`–`360°`), and arm outline color/thickness (`1px`–`6px`) with DPR subpixel alignment.
- **Center Dot / Plus / Static Cross (`Still`)**:
  - Choose between **Dot** (round or square), **Plus** (`+`), or **Still** (4-arm static cross with independent length, thickness, gap, color, opacity, and outline).
  - Automatically hides your custom center reticle while spectating (`#spectate`), and optionally hides the center dot while holding the **Dozen Gauge** (`Hide Dot on Shotgun`).
- **Live Preview**:
  - Interactive preview canvas with **Sky**, **Grey**, **Dark**, **White**, and custom hex/color-picker background presets.
- **Profiles, Quick-Picker & Drag-to-Reorder Gallery**:
  - Ships with 5 starter profiles (**Default**, **Techno**, **Green Dot**, **No Hair**, **No Center Dot**).
  - Save, overwrite, duplicate, delete, or reorder profiles in the full-width **Saved Profiles Gallery**, and switch instantly from the mini-tile strip.
- **Share Codes (`X-`, `SSB-`, Base64 & Valorant)**:
  - Export compact `X-...` codes to the clipboard in one click, and import `X-...`, `SSB-...`, legacy base64 JSON, or **Valorant (`0;P;...`)** crosshair codes.
- **Undo / Redo / Revert**:
  - Full 40-step session history (`Ctrl+Z` / `Ctrl+Y` while the Crosshair tab is open, plus **Undo**, **Redo**, and **Revert** buttons).
- **Mod Menu Support**:
  - Registers with `window.ssModMenuQueue` (`id: "crosshair-mod"`) and exposes `window.ssCrosshairMod` (`open()`, `enable()`, `disable()`, `isEnabled()`, `exportCode()`, `importCode()`, `version`).

---

## License

[MIT](LICENSE) © Virojet
