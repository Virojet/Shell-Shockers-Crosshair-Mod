<div align="center">

# Shell Shockers — Crosshair Mod

**Better HUD's full crosshair editor on its own: customizable arms, center dot, plus & static cross, saved profiles, a drag-to-reorder gallery, and Valorant / `X-` share codes, built right into the [Shell Shockers](https://shellshock.io) settings menu.**

<br>

[![Install Crosshair Mod](https://img.shields.io/badge/Install_Crosshair_Mod-one_click-2ea44f?style=for-the-badge&logo=tampermonkey&logoColor=white)](https://raw.githubusercontent.com/Virojet/Shell-Shockers-Crosshair-Mod/main/Shell-Shockers-Crosshair-Mod.user.js)

[![Version](https://img.shields.io/badge/version-1.0.0-0E7697?style=flat-square)](#changelog)
[![License: MIT](https://img.shields.io/badge/license-MIT-lightgrey?style=flat-square)](./LICENSE)
[![Auto-updates](https://img.shields.io/badge/updates-automatic-f79520?style=flat-square)](#updating)
[![Installs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fabacus.jasoncameron.dev%2Fget%2Fvirojet-crosshair-mod%2Finstalls&query=%24.value&label=installs&color=2ea44f&style=flat-square)](#privacy)
[![YouTube](https://img.shields.io/badge/YouTube-Better_HUD-FF0000?style=flat-square&logo=youtube&logoColor=white)](https://www.youtube.com/channel/UC0tvOmAiozrBas9b6ZnCUyw)
[![Discord](https://img.shields.io/badge/Discord-join-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.com/invite/yWnDAYKA9n)

[**Install**](#install) &nbsp;·&nbsp; [**What's in v1.0**](#whats-in-v10) &nbsp;·&nbsp; [**Features**](#features) &nbsp;·&nbsp; [**Help**](#troubleshooting) &nbsp;·&nbsp; [**Changelog**](#changelog) &nbsp;·&nbsp; [**Discord**](https://discord.com/invite/yWnDAYKA9n) &nbsp;·&nbsp; [**YouTube**](https://www.youtube.com/channel/UC0tvOmAiozrBas9b6ZnCUyw)

</div>

---

## Install

**About a minute, and free.** Updates install on their own afterwards.

1. **Get Tampermonkey** for your browser: [Chrome](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) · [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd) · [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/) · [Opera GX & others](https://www.tampermonkey.net/) (or use [Violentmonkey](https://violentmonkey.github.io/))
2. **[Click here to install Crosshair Mod](https://raw.githubusercontent.com/Virojet/Shell-Shockers-Crosshair-Mod/main/Shell-Shockers-Crosshair-Mod.user.js)**, then press **Install** on the page that opens
3. **Open [shellshock.io](https://shellshock.io)** → **Settings** → the new **CROSSHAIR** tab

> [!TIP]
> **Nothing happens in step 3?** Chrome, Edge, Brave and Opera need one extra switch: open your browser's **Extensions** page → **Tampermonkey** → **Details** → turn on **Allow User Scripts** (on some browsers it's **Developer Mode**, top-right of the Extensions page). Then reload the game. [Step-by-step for each browser ↓](#allow-user-scripts)

<a name="allow-user-scripts"></a>
<details>
<summary><b>Allow user scripts, step by step</b></summary>

<br>

**1. Open the Extensions page**

| Browser | How |
|---|---|
| **Chrome** | ⋮ menu → **Extensions** → **Manage Extensions**, or go to `chrome://extensions` |
| **Edge** | ⋯ menu → **Extensions**, or go to `edge://extensions` |
| **Brave** | ≡ menu → **Extensions**, or go to `brave://extensions` |
| **Opera GX** | Cube icon in the left sidebar, or go to `opera://extensions` |

**2. Turn on Developer Mode** with the toggle near the top-right of the page.

**3. Allow user scripts:** find **Tampermonkey** (or Violentmonkey), click **Details**, and switch **Allow User Scripts** / **Allow Unreviewed Scripts** on.

> [!NOTE]
> On Opera GX, close the window and open a new one for the change to take effect.

</details>

### Updating

You don't need to do anything. Tampermonkey and Violentmonkey pick up new versions automatically from `Shell-Shockers-Crosshair-Mod.meta.js`. You can also reinstall any time from the button above; your saved profiles and active crosshair are kept.

---

## What's in v1.0

- **Standalone Crosshair Customizer:** Better HUD's complete **Settings ▸ CROSSHAIR** tab as a lightweight standalone userscript for players who only want the crosshair editor
- **Shared profiles with Better HUD:** uses the same `ch2-*` storage keys as [Better HUD](https://github.com/Virojet/Shell-Shockers-Better-Hud-Mod), so your active crosshair, saved profiles and gallery order carry over automatically. If Better HUD is running, this script steps aside so the two never conflict
- **Valorant & `X-` codes:** import crosshair codes copied straight from Valorant (`0;P;...`), compact `X-...` codes, or older `SSB-...` codes, and export your design in one click
- **Pixel-aligned arms & static cross:** four-arm alignment to the screen-pixel grid and crisp **Still** center crosshairs across high-DPI displays and Windows scaling
- **Visual gallery & quick picker:** starter profiles (**Default**, **Techno**, **Green Dot**, **No Hair**, **No Center Dot**), mini-tile quick switcher, and a drag-to-reorder gallery

[Full changelog ↓](#changelog)

---

## Features

| Feature | What it does |
|---|---|
| **Arms editor** | Customize arm color, length, width, gap, opacity, rotation, scale and outline (with an on / off switch and hide original crosshair) |
| **Center dot / plus / still** | Switch between a round or square **Dot** (with its own outline color and width), a **Plus** (`+`), or a 4-arm **Still** static cross |
| **Smart in-game visibility** | Automatically hides the custom center reticle while spectating, with an optional **Hide Dot on Shotgun** toggle for the Dozen Gauge |
| **Live preview** | Real-time preview canvas with one-click **Sky**, **Grey**, **Dark** and **White** background swatches plus a custom color picker |
| **Profiles & gallery** | Save, load, rename, duplicate, delete and drag-to-reorder profiles in the visual gallery, or switch in one click from the quick picker |
| **Share codes** | Copy compact `X-...` codes to your clipboard and import `X-...`, `SSB-...`, Base64 JSON, or **Valorant (`0;P;...`)** crosshair codes |
| **Undo / Redo / Revert** | 40-step editing history with **Undo**, **Redo** (`Ctrl+Z` / `Ctrl+Y`) and **Revert** to the saved profile |

<details>
<summary><b>Full feature list</b></summary>

#### Crosshair editor
- **Profiles**: save / load / duplicate / export / import, with a visual **gallery** you can reorder by dragging (or with **Alt + arrow keys**)
- **Valorant codes**: Import also takes a crosshair code copied from Valorant (`0;P;...`) and turns the shape and color of your main crosshair into a profile
- **Starter crosshairs** to try (**Default**, **Techno**, **Green Dot**, **No Hair**, **No Center Dot**), and a **quick picker** of small previews under **Gallery**
- **Arms**: color, length, width, gap, opacity, rotation (`0°`–`360°`), scale, outline color and outline on / off switch, plus **Hide Original Crosshair**
- **Center Dot**: choose **Dot** (square or rounded, with independent outline color, outline width, opacity and scale), **Plus** (length, width, color, opacity and scale), or **Still** (4-arm static cross with color, outline, length, width, gap, opacity and scale)
- **Hide Dot on Shotgun**: automatically hides the center dot while holding the Dozen Gauge
- **Spectate-aware**: hides the custom center dot / static cross while spectating so your view stays clean
- **Live preview** with **Sky**, **Grey**, **Dark** and **White** preset backgrounds and custom hex / color picker
- **Undo / Redo / Revert**, with `Ctrl+Z` and `Ctrl+Y` while the Crosshair tab is open
- **In-game pop-ups** for copying, importing, naming and confirming profile actions instead of browser dialogs
- **Mod Menu support**: registers with [Mod Menu](https://github.com/Virojet/Shell-Shockers-Mod-Menu) (`id: "crosshair-mod"`) with an on / off toggle and a direct **Settings** shortcut

</details>

---

## Using it

- **Find everything** under the game's **Settings** menu, in the **CROSSHAIR** tab.
- **Switch profiles fast** using the mini preview tiles under **Gallery**, or open **Gallery** to see every saved crosshair and drag cards to reorder them.
- **Share or import a crosshair** with the **Export** and **Import** icon buttons next to the profile dropdown.

---

## More mods by Virojet

Each one is its own userscript. Install any of them next to Crosshair Mod; they update themselves the same way.

| Mod | What it does | |
|---|---|---|
| **[Better HUD](https://github.com/Virojet/Shell-Shockers-Better-Hud-Mod)** | The all-in-one HUD mod: FPS & ping display, crosshair editor, match stats, server picker, Uncap FPS and more | [Install](https://raw.githubusercontent.com/Virojet/Shell-Shockers-Better-Hud-Mod/main/Shell-Shockers-Better-Hud.user.js) |
| **[Mod Menu](https://github.com/Virojet/Shell-Shockers-Mod-Menu)** | One menu to switch your mods and themes on or off, with game sounds on every control | [Install](https://raw.githubusercontent.com/Virojet/Shell-Shockers-Mod-Menu/main/Shell-Shockers-Mod-Menu.user.js) |
| **[Gun Sounds](https://github.com/Virojet/Shell-Shockers-Gun-Sounds)** | Pick weapon, meme or your own sounds for shots, melee swings, reloads and the empty click | [Install](https://raw.githubusercontent.com/Virojet/Shell-Shockers-Gun-Sounds/main/Shell-Shockers-Gun-Sounds.user.js) |
| **[Valorant Kill Sounds](https://github.com/Virojet/Shell-Shockers-Valorant-Kill-Sounds)** | Valorant-style kill sounds and banners that climb with your streak, from fifteen packs or your own files | [Install](https://raw.githubusercontent.com/Virojet/Shell-Shockers-Valorant-Kill-Sounds/main/Shell-Shockers-Valorant-Kill-Sounds.user.js) |
| **[Valorant Sensitivity](https://github.com/Virojet/Shell-Shockers-Valorant-Sensitivity)** | Use your Valorant sensitivity, typed in or read from Valorant's settings, from the hip and scoped | [Install](https://raw.githubusercontent.com/Virojet/Shell-Shockers-Valorant-Sensitivity/main/Shell-Shockers-Valorant-Sensitivity.user.js) |
| **[Stats Mod](https://github.com/Virojet/Shell-Shockers-Stats-Mod)** | Better HUD's Match History on its own, for players who don't want the rest. Skip it if you use Better HUD | [Install](https://raw.githubusercontent.com/Virojet/Shell-Shockers-Stats-Mod/main/Shell-Shockers-Stats-Mod.user.js) |
| **[Blossom V4 Theme](https://github.com/Virojet/Shell-Shockers-Blossom-V4-Theme)** | Black and pink menus over cherry blossom art, a pink HUD and "You blossomed" kill messages | [Install](https://raw.githubusercontent.com/Virojet/Shell-Shockers-Blossom-V4-Theme/main/Shell-Shockers-Blossom-V4.user.js) |
| **[Cherry Blossom Theme](https://github.com/Virojet/Shell-Shockers-Cherry-Blossom-Theme)** | Pink menus, a plum background and falling petals | [Install](https://raw.githubusercontent.com/Virojet/Shell-Shockers-Cherry-Blossom-Theme/main/Shell-Shockers-Cherry-Blossom.user.js) |

---

## Troubleshooting

<details>
<summary><b>The CROSSHAIR tab doesn't appear</b></summary>

<br>

Make sure Tampermonkey is on and **Allow User Scripts** is enabled ([how](#allow-user-scripts)), then reload the game with **F5**. Check that Crosshair Mod is switched on in the Tampermonkey dashboard.

</details>

<details>
<summary><b>I also have Better HUD installed</b></summary>

<br>

If **Better HUD** is enabled, Crosshair Mod automatically stands down so the two never conflict, and Better HUD handles the **CROSSHAIR** tab using the exact same saved profiles and `ch2-*` settings.

</details>

<details>
<summary><b>An update isn't showing up</b></summary>

<br>

Click the Tampermonkey icon → **Check for userscript updates**, or install again from the [button at the top](#install). Your saved profiles and active crosshair are kept.

</details>

---

## Compatibility

Works on **shellshock.io and 70+ mirror domains**, in any browser that runs Tampermonkey or Violentmonkey.

<details>
<summary>Show all domains</summary>

<br>

`shellshock.io`, `algebra.best`, `algebra.vip`, `biologyclass.club`, `deadlyegg.com`, `deathegg.world`, `eggboy.club`, `eggboy.xyz`, `eggcombat.com`, `egg.dance`, `eggfacts.fun`, `egghead.institute`, `eggisthenewblack.com`, `eggsarecool.com`, `geometry.best`, `geometry.monster`, `geometry.pw`, `geometry.report`, `hardboiled.life`, `hardshell.life`, `humanorganising.org`, `mathactivity.xyz`, `mathactivity.club`, `mathdrills.info`, `mathdrills.life`, `mathfun.rocks`, `mathgames.world`, `math.international`, `mathlete.fun`, `mathlete.pro`, `overeasy.club`, `risenegg.com`, `scrambled.tech`, `scrambled.today`, `scrambled.us`, `scrambled.world`, `shellshockers.club`, `shellshockers.life`, `shellshockers.site`, `shellshockers.us`, `shellshockers.world`, `shellshockers.xyz`, `shellsocks.com`, `softboiled.club`, `urbanegger.com`, `violentegg.club`, `violentegg.fun`, `yolk.best`, `yolk.life`, `yolk.rocks`, `yolk.tech`, `yolk.quest`, `yolk.today`, `zygote.cafe`, `shellshockers.best`, `eggboy.me`, `algebra.monster`, `combateggs.com`, `deathegg.life`, `eggbattle.com`, `egggames.best`, `eggshock.com`, `eggshock.me`, `eggshock.net`, `eggshooter.best`, `eggshooter.com`, `eggwarfare.com`, `eggwars.io`, `scrambled.best`, `shellgame.me`, `shellplay.live`, `shellshock.guru`, `shellshockers.ca`, `shellshockers.today`, `shellshockers.website`, `shellshockers.wiki`, `yolk.monster`.

</details>

---

## Privacy

Crosshair Mod sends nothing about you, your crosshairs or your settings:

- **Install count:** the first time it runs, one anonymous hit goes to a public counter ([Abacus](https://abacus.jasoncameron.dev)) so the installs badge above stays current. No settings, crosshairs, names or IDs. It's sent once per browser; the `ssCrosshairMod-install-counted` key in site storage remembers it
- **Your crosshairs:** your active crosshair, saved profiles and gallery order stay in your browser under `ch2-*` keys in `localStorage`

---

## Changelog

#### v1.0.0 — current

- **Initial standalone release:** extracted Better HUD's **Settings ▸ CROSSHAIR** customizer into its own standalone userscript
- **Arms & Center Dot:** full control over dynamic arms, **Dot** (with independent outline color and width), **Plus** (`+`), and pixel-aligned **Still** static cross
- **Profiles & Gallery:** 5 starter profiles (**Default**, **Techno**, **Green Dot**, **No Hair**, **No Center Dot**), mini-tile quick picker, and drag-to-reorder visual gallery
- **Share codes:** one-click export and import for `X-...`, `SSB-...`, Base64 JSON, and **Valorant (`0;P;...`)** crosshair codes
- **Undo / Redo / Revert:** 40-step session history with `Ctrl+Z` / `Ctrl+Y` support
- **Coexistence & Mod Menu:** shares `ch2-*` storage with Better HUD, stands down automatically when Better HUD is active, and registers with `window.ssModMenuQueue`

---

## Development

The userscript is a single self-contained file (`Shell-Shockers-Crosshair-Mod.user.js`). On push to `main`, the **Sync Userscript Header (.meta.js)** workflow copies the header into `Shell-Shockers-Crosshair-Mod.meta.js`, the file userscript managers check for updates.

---

<div align="center">

### Made by Virojet

Shell Shockers gameplay, montages and mod content.

[![Subscribe on YouTube](https://img.shields.io/badge/Subscribe-%40subtovirojet-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@subtovirojet)
[![Join the Discord](https://img.shields.io/badge/Join_the-Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/invite/yWnDAYKA9n)

</div>

---

## License & disclaimer

[MIT](./LICENSE) © ViroGear.

A client-side cosmetic and quality-of-life mod. It does **not** modify game logic, give unfair advantages, or interact with the server beyond what the official client does. Use at your own discretion; moderators may still act against use of any third-party scripts.
