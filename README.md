<div align="center">
  <img src="assets/img/vsbet.svg" alt="VSbet" width="280">

  # VSbet
  **A green-accented, dark casino interface — built as a static portfolio demo.**

  HTML5 · CSS3 · Bootstrap · jQuery · Owl Carousel
</div>

> **Demo only.** This project does not offer real gambling, betting, user accounts, deposits, payments or prizes. Displayed player names, balances and results are sample content. It is not affiliated with a gambling operator.

## Overview

VSbet explores the visual design of a gaming dashboard: a dark canvas, vivid green accents, game cards, promotional banners and compact navigation. It is a front-end presentation project, with no server or gambling engine behind it.

## Features

- Responsive layouts with desktop navigation and mobile controls
- Rotating hero banners and horizontal game carousels
- Game categories, provider cards and illustrative results tables
- Custom VS monogram, VSbet wordmark, favicon and phone preview in SVG
- Visible demo disclosures throughout the page
- Simple static files — no build step or package installation

## Run locally

Download or clone this repository and open `index.html` in your browser.

For a local HTTP server, run this command from the project folder:

```sh
python3 -m http.server 8000
```

Then visit [localhost:8000](http://localhost:8000).

Google Fonts and Flaticon Uicons load from external services, so an internet connection is needed for those resources.

## Project structure

```text
VSbet/
├── index.html                 # Main page and demo disclosures
├── assets/
│   ├── css/                   # Theme styles and vendor stylesheets
│   ├── icons/                 # Interface icons
│   ├── img/                   # VSbet branding and artwork
│   └── js/                    # UI interactions and vendor scripts
├── THIRD_PARTY_NOTICES.md
└── README.md
```

## Design

| Token | Value |
| --- | --- |
| Accent green | `#1EDF84` |
| Main background | `#0A1119` |
| Panel background | `#0F1921` |
| Typeface | Inter |

The wordmark lives in `assets/img/vsbet.svg`, the standalone monogram in `assets/img/vs-mark.svg`, and the phone illustration in `assets/img/home/vsbet-demo-phone.svg`. Theme variables are defined at the top of `assets/css/style.css`.

## Demo behaviour

Play, registration and other placeholder controls do not connect to a real service. Carousels, menus and modal interactions demonstrate the interface only. Results tables do not represent live activity.

## Credits and usage

Built with [Bootstrap](https://getbootstrap.com/), [jQuery](https://jquery.com/) and [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/). Typography uses [Inter](https://fonts.google.com/specimen/Inter); interface icons use [Uicons by Flaticon](https://www.flaticon.com/uicons).

Game artwork and provider marks are third-party assets included with permission; their presence does not imply partnership or endorsement. That permission should not be assumed to extend to other users of this repository. No blanket open-source licence is granted for the project or its artwork. Vendor components retain their respective licences; see [third-party notices](THIRD_PARTY_NOTICES.md).
