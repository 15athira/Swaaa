# Swathika & Akshay Janardanan — Wedding Invitation Website

A luxury, romantic, Pinterest-inspired digital wedding invitation website celebrating the wedding of **Swathika** and **Akshay Janardanan** on **Saturday, 2 January 2027** at **Opulent Convention Centre, Kozhikode, Kerala**.

Built with pure **HTML5**, **CSS3**, and **Vanilla JavaScript** (Zero frameworks, zero Node.js, zero build steps required).

---

## 💍 Wedding Information Summary

- **Bride**: Swathika
  - **Parents**: Mr. Raveendran M & Mrs. Mini K
  - **Grandparents**:
    - *Paternal*: Late Sri. Mangalasseri Balakrishnan Nair & Late Smt. C.M. Rathnavally Amma
    - *Maternal*: Late Sri. Puthiyedath Karunakaran Menoky & Smt. Kallodi Thankamma
- **Groom**: Akshay Janardanan
  - **Parents**: Mr. Kulappurath Janardanan Nair & Mrs. Bindu Manappalakandy
  - **Family Residence**: Kesavan House, Nochikkattu Paramba, Puthoor P.O., Puthiyangadi, Kozhikode, Kerala
- **Auspicious Date**: Saturday, 2 January 2027
- **Auspicious Muhurtham**: 11:30 AM – 12:15 PM
- **Traditional Feast (Kalyana Sadya)**: 12:30 PM onwards
- **Venue**: Opulent Convention Centre, Kottedath Bazar, Chettikulam, Kozhikode, Kerala

---

## 📂 Project Structure

```text
Swaaa/
├── index.html              # Home page: Full-screen couple hero, countdown, Jan 2027 calendar, RSVP
├── meet-the-couple.html    # Meet the Couple: Individual bride & groom portraits, parents & family lineage
├── gallery.html            # Pinterest-style masonry photo gallery with full-screen lightbox
├── wedding-details.html    # Auspicious Muhurtham, timing schedule, calendar & .ics download
├── events.html             # Clean redirect alias to wedding-details.html
├── location.html           # Venue address, interactive Google Maps embed & travel guide
├── style.css               # Complete luxury Kerala wedding styling, champagne gold palette
├── script.js               # Live countdown, masonry filter, lightbox, RSVP, Web Audio music
├── README.md               # Website guide and documentation
└── images/                 # Uploaded couple and individual portrait photography
    ├── swathika.jpg        # Individual portrait of Bride Swathika
    ├── akshay.jpg          # Individual portrait of Groom Akshay
    ├── couple-hero.jpg     # Couple full-length photo in Kerala heritage hall
    ├── couple-1.jpg        # Couple portrait in traditional attire
    ├── couple-2.jpg        # Couple outdoor moment
    ├── couple-3.jpg        # Kerala heritage hallway photo
    ├── couple-4.jpg        # Couple portrait
    ├── couple-5.jpg        # Couple outdoor photo
    ├── couple-6.jpg        # Couple photo
    └── Couple_1.jpeg … Couple_11.jpeg # Additional couple portraits in the gallery
```

---

## 🚀 How to Open and Run

You do **not** need any command line or installation!

1. **Option 1 (Instant)**:
   - Double-click `index.html` in your file manager (Windows File Explorer). It will open right in your web browser (Chrome, Edge, Safari, Firefox).
2. **Option 2 (Local Web Server)**:
   - If using VS Code: Right-click `index.html` and click **"Open with Live Server"**.
   - Or with PowerShell: `python -m http.server 8000` (then open `http://localhost:8000` in your browser).

---

## 📸 Real Photo Handling (Preserving Facial Identities)

The actual uploaded photographs were automatically cropped and formatted into `images/`:
- **`images/swathika.jpg`**: Dedicated high-resolution portrait of Bride Swathika.
- **`images/akshay.jpg`**: Dedicated high-resolution portrait of Groom Akshay.
- **`images/couple-hero.jpg`**, **`images/couple-1.jpg`**, **`images/couple-2.jpg`**, etc.: High-resolution couple photography used in the hero section, masonry gallery, and page headers.
- **`images/Couple_1.jpeg`** through **`images/Couple_11.jpeg`**: Additional couple portraits displayed in the gallery.

If you ever wish to swap or add more photos, simply place your photo in the `images/` folder with the corresponding filename.

---

## 🌟 Key Features

1. **Accurate January 2027 Calendar**:
   - January 1, 2027 is a Friday.
   - **Saturday, 2 January 2027** is prominently highlighted with a gold seal ring and heart indicator.
2. **Live Countdown to Muhurtham**:
   - Real-time countdown clock targeting Saturday, 2 January 2027 at 11:30 AM IST.
3. **Pinterest Masonry Gallery & Full-Screen Lightbox**:
   - Asymmetric Pinterest-style cards supporting portrait, landscape, and square layouts.
   - Displays all 20 couple and individual portraits; the 11 additional couple photos are included in the gallery lightbox.
   - Interactive lightbox with previous/next arrows, photo counter, and keyboard navigation (`Esc`, `ArrowLeft`, `ArrowRight`).
4. **Interactive Google Maps & Directions**:
   - Embedded Google Map of Opulent Convention Centre, Chettikulam, Kozhikode.
   - Working **Get Directions** button that opens Google Maps navigation directly.
5. **Calendar Integration**:
   - One-click Google Calendar add link.
   - Downloadable `.ics` calendar file for Apple Calendar and Outlook.
6. **Digital RSVP & Social Sharing**:
   - Guest RSVP modal saved locally via `localStorage` with warm toast confirmation.
   - WhatsApp share button with pre-written auspicious invitation message.
   - One-click link copying to clipboard.
7. **Floating Ambient Romantic Music Player**:
   - Uses browser-native Web Audio API to play gentle, romantic chords in E♭ major. Requires zero external audio files.
