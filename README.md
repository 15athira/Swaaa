# Swathika & Akshay Janardanan — Wedding Invitation

A responsive digital wedding invitation built with HTML, CSS, and vanilla JavaScript. No build step or package installation is required.

## Wedding details

- **Couple:** Swathika & Akshay Janardanan
- **Date:** Saturday, 2 January 2027
- **Muhurtham:** 11:30 AM–12:15 PM
- **Traditional feast (Kalyana Sadya):** 12:30 PM onwards
- **Venue:** Opulent Convention Centre, Kottedath Bazar, Chettikulam, Kozhikode, Kerala
- **Bride's parents:** Mr. Raveendran M & Mrs. Mini K
- **Groom's parents:** Mr. Kulappurath Janardanan Nair & Mrs. Bindu Manappalakandy

## Pages

| File | Contents |
| --- | --- |
| `index.html` | Invitation home page, calendar, live countdown, couple highlights, gallery preview, venue map, and sharing |
| `meet-the-couple.html` | Couple profiles, family details, and both family photographs |
| `gallery.html` | Couple, portrait, and family photographs with a keyboard-accessible lightbox |
| `wedding-details.html` | Ceremony date, muhurtham, venue, Google Calendar link, and countdown |
| `location.html` | Venue address, embedded Google Map, directions, and sharing |
| `events.html` | Redirect to `wedding-details.html` |

## Project files and photographs

- `style.css` — shared responsive styles and page layouts
- `script.js` — mobile navigation, countdown, gallery lightbox, invitation sharing, calendar downloads, and optional ambient music
- `images/` — original couple, individual, and family photographs

The gallery contains 18 photographs: `couple-hero.jpg`, `couple-1.jpg` through `couple-12.jpg`, both individual portraits, both family photographs, and `VN__6094.JPG`. To add or replace a gallery image, put the photograph in `images/` and update its card in `gallery.html`.

`groom-family.jpg` is the optimized gallery copy of the original `Groom_family.JPG`; the original family photographs remain in `images/`.

The invitation is shared using the canonical URL: <https://15athira.github.io/Swaaa/>.

## Features

- Responsive navigation with a mobile menu
- Wedding calendar and live countdown to the muhurtham
- Google Calendar event link and Google Maps directions
- Gallery lightbox with next/previous controls and keyboard navigation
- Invitation sharing via WhatsApp, email, link copy, and native sharing where available
- Optional ambient music generated with the browser's Web Audio API

Google Fonts and the embedded Google Map require an internet connection.

## Run locally

Open `index.html` in a browser. For more reliable local behavior, serve the folder over HTTP:

```powershell
python -m http.server 8000
```

Then open <http://localhost:8000> in a browser. In VS Code, you can also open `index.html` with the Live Server extension.
