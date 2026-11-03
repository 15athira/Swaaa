/**
 * ==============================================================================
 * SWATHIKA & AKSHAY JANARDANAN — WEDDING INVITATION SCRIPT
 * Beginner-friendly, modular Vanilla JavaScript for all wedding pages
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// CENTRAL WEDDING CONFIGURATION
// Swathika & Akshay Janardanan — Saturday, 02 January 2027
// ------------------------------------------------------------------------------
const WEDDING_CONFIG = {
  brideName: 'Swathika',
  groomName: 'Akshay Janardanan',
  coupleNames: 'Swathika & Akshay Janardanan',
  shortNames: 'Swathika & Akshay',
  monogram: 'S & A',
  weddingDateDisplay: 'Saturday, 02 January 2027',
  ceremonyTime: '11:30 AM – 12:15 PM (Muhurtham)',
  // Target date for live countdown: Saturday, January 2, 2027 at 11:30 AM IST
  countdownTarget: '2027-01-02T11:30:00',
  venueName: 'Opulent Convention Centre',
  venueAddress: 'Kottedath Bazar, Chettikulam, Kozhikode, Kerala',
  groomAddress: 'Kesavan House, Nochikkattu Paramba, Puthoor P.O., Puthiyangadi, Kozhikode',
  invitationUrl: 'https://swathika-akshay-weddinginvitation.netlify.app',
};

// ------------------------------------------------------------------------------
// DOM READY INITIALIZATION
// ------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCountdown();
  initGallery();
  initModals();
  initCalendarDownloads();
  initMusicPlayer();
});

// ------------------------------------------------------------------------------
// 1. NAVBAR & MOBILE DRAWER
// ------------------------------------------------------------------------------
function initNavbar() {
  const header = document.querySelector('.header-nav');
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  let drawerOpen = false;

  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  if (toggleBtn && drawer) {
    const setDrawerOpen = (open) => {
      drawerOpen = open;
      drawer.classList.toggle('open', open);
      drawer.setAttribute('aria-hidden', String(!open));
      drawer.inert = !open;
      toggleBtn.setAttribute('aria-expanded', String(open));
      toggleBtn.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    };

    toggleBtn.addEventListener('click', () => setDrawerOpen(!drawerOpen));

    // Close mobile drawer when clicking any link inside
    drawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        setDrawerOpen(false);
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && drawerOpen) {
        setDrawerOpen(false);
        toggleBtn.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 920 && drawerOpen) setDrawerOpen(false);
    });
  }
}

// ------------------------------------------------------------------------------
// 2. LIVE COUNTDOWN TIMER (Saturday, 2 January 2027 at 11:30 AM)
// ------------------------------------------------------------------------------
function initCountdown() {
  const daysEl = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minutesEl = document.getElementById('cd-minutes');
  const secondsEl = document.getElementById('cd-seconds');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  const targetDate = new Date(WEDDING_CONFIG.countdownTarget).getTime();

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// ------------------------------------------------------------------------------
// 3. PINTEREST MASONRY GALLERY & FULL-SCREEN LIGHTBOX
// ------------------------------------------------------------------------------
function initGallery() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');
  const lightbox = document.getElementById('gallery-lightbox');

  if (!galleryCards.length) return;

  // Category Filtering
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      const filter = btn.getAttribute('data-filter');

      galleryCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        card.hidden = filter !== 'all' && category !== filter;
      });
    });
  });

  // Lightbox functionality
  if (!lightbox) return;

  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const closeBtn = document.querySelector('.lightbox-close');
  const prevBtn = document.querySelector('.lightbox-prev');
  const nextBtn = document.querySelector('.lightbox-next');
  const lightboxImageWrap = lightbox.querySelector('.lightbox-img-wrap');

  let currentItems = [];
  let currentIndex = 0;
  let previousFocus = null;
  let touchStart = null;

  function updateVisibleItems() {
    currentItems = Array.from(galleryCards).filter(
      (card) => !card.hidden
    );
  }

  function showImage(index) {
    if (!currentItems.length) updateVisibleItems();
    if (!currentItems.length) return;

    if (index < 0) index = currentItems.length - 1;
    if (index >= currentItems.length) index = 0;
    currentIndex = index;

    const targetCard = currentItems[currentIndex];
    const img = targetCard.querySelector('img');
    const title = targetCard.getAttribute('data-title') || '';
    const caption = targetCard.getAttribute('data-caption') || '';

    if (lightboxImg && img) {
      lightboxImg.src = img.src;
      lightboxImg.alt = title;
    }
    if (lightboxTitle) lightboxTitle.textContent = title;
    if (lightboxCaption) lightboxCaption.textContent = caption;
    if (lightboxCounter) lightboxCounter.textContent = `Photo ${currentIndex + 1} of ${currentItems.length}`;
  }

  galleryCards.forEach((card) => {
    const openCard = () => {
      updateVisibleItems();
      const index = currentItems.indexOf(card);
      if (index !== -1) {
        showImage(index);
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        previousFocus = document.activeElement;
        if (closeBtn) closeBtn.focus();
      }
    };

    card.addEventListener('click', openCard);
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openCard();
      }
    });
  });

  const requestedPhoto = new URLSearchParams(window.location.search).get('photo');
  if (requestedPhoto) {
    const targetCard = Array.from(galleryCards).find(
      (card) => card.querySelector('img')?.getAttribute('src') === `images/${requestedPhoto}`
    );
    if (targetCard) targetCard.click();
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showImage(currentIndex + 1));

  if (lightboxImageWrap) {
    lightboxImageWrap.addEventListener('touchstart', (event) => {
      if (event.touches.length !== 1) {
        touchStart = null;
        return;
      }

      touchStart = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
      };
    }, { passive: true });

    lightboxImageWrap.addEventListener('touchend', (event) => {
      if (!touchStart || !event.changedTouches.length) return;

      const deltaX = event.changedTouches[0].clientX - touchStart.x;
      const deltaY = event.changedTouches[0].clientY - touchStart.y;
      touchStart = null;

      if (Math.abs(deltaX) < 50 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
      showImage(currentIndex + (deltaX < 0 ? 1 : -1));
    }, { passive: true });
  }

  // Close on backdrop click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
    if (e.key === 'ArrowRight') showImage(currentIndex + 1);
  });
}

// ------------------------------------------------------------------------------
// 4. INVITATION SHARING
// ------------------------------------------------------------------------------
function initModals() {
  const shareModal = document.getElementById('share-modal');
  const shareButtons = document.querySelectorAll('.open-share-btn');
  const shareClose = document.getElementById('share-close-btn');
  const whatsappBtn = document.getElementById('whatsapp-share-btn') || document.getElementById('share-whatsapp-btn');
  const emailBtn = document.getElementById('share-email-btn');

  if (shareModal) {
    shareButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        shareModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeShare = () => {
      shareModal.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (shareClose) shareClose.addEventListener('click', closeShare);
    shareModal.addEventListener('click', (e) => {
      if (e.target === shareModal) closeShare();
    });

    if (whatsappBtn) {
      whatsappBtn.addEventListener('click', () => {
        const url = WEDDING_CONFIG.invitationUrl;
        const msg = encodeURIComponent(
          `✨ Wedding Invitation: Swathika & Akshay Janardanan\n` +
          `Date: Saturday, 2 January 2027\n` +
          `Muhurtham: 11:30 AM – 12:15 PM\n` +
          `Venue: Opulent Convention Centre, Kozhikode, Kerala\n\n` +
          `We joyfully invite you to celebrate with us. Explore the invitation and wedding details here:\n${url}`
        );
        window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank', 'noopener,noreferrer');
        closeShare();
      });
    }
    if (emailBtn) {
      emailBtn.addEventListener('click', () => {
        const url = WEDDING_CONFIG.invitationUrl;
        const subject = encodeURIComponent('Wedding Invitation: Swathika & Akshay Janardanan');
        const body = encodeURIComponent(
          `We joyfully invite you to celebrate the wedding of Swathika & Akshay Janardanan on Saturday, 2 January 2027 at Opulent Convention Centre, Kozhikode.\n\nView the invitation: ${url}`
        );
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
        closeShare();
      });
    }
  } else {
    shareButtons.forEach((btn) => {
      btn.addEventListener('click', async () => {
        const url = WEDDING_CONFIG.invitationUrl;
        if (navigator.share) {
          try {
            await navigator.share({
              title: 'Swathika & Akshay Janardanan — Wedding Invitation',
              text: 'Join us on Saturday, 2 January 2027 at Opulent Convention Centre, Kozhikode.',
              url,
            });
          } catch (err) {
            if (err.name !== 'AbortError') {
              console.error('Unable to share invitation.', err);
              showToast('The invitation could not be shared. Please try another sharing method.');
            }
          }
        } else if (navigator.clipboard && navigator.clipboard.writeText) {
          try {
            await navigator.clipboard.writeText(url);
            showToast('Invitation link copied to clipboard!');
          } catch (err) {
            console.error('Unable to copy invitation link.', err);
            prompt('Copy this link:', url);
          }
        } else {
          prompt('Copy this link:', url);
        }
      });
    });
  }
}

// ------------------------------------------------------------------------------
// 5. CALENDAR DOWNLOAD INTEGRATION (.ICS)
// ------------------------------------------------------------------------------
function initCalendarDownloads() {
  const icsButtons = document.querySelectorAll('.download-ics-btn');
  icsButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      downloadEventIcs(
        'Wedding of Swathika & Akshay Janardanan',
        '2027-01-02T11:30:00',
        '2027-01-02T14:30:00',
        'Opulent Convention Centre, Kottedath Bazar, Chettikulam, Kozhikode, Kerala',
        'Wedding Ceremony and Auspicious Muhurtham of Swathika & Akshay Janardanan. Muhurtham: 11:30 AM to 12:15 PM followed by traditional wedding feast (Kalyana Sadya).'
      );
    });
  });
}

function downloadEventIcs(title, startDateIso, endDateIso, location, description) {
  const format = (iso) => new Date(iso).toISOString().replace(/-|:|\.\d\d\d/g, '');
  const start = format(startDateIso);
  const end = format(endDateIso);
  const now = format(new Date().toISOString());

  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Swathika & Akshay Janardanan Wedding//EN',
    'BEGIN:VEVENT',
    `UID:wedding-${Date.now()}@swathikaandakshay.wedding`,
    `DTSTAMP:${now}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${title}`,
    `LOCATION:${location}`,
    `DESCRIPTION:${description}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', `${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('Calendar invite (.ics) downloaded!');
}

// ------------------------------------------------------------------------------
// 6. TOAST NOTIFICATION
// ------------------------------------------------------------------------------
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// ------------------------------------------------------------------------------
// 7. AMBIENT ROMANTIC PIANO MUSIC (Web Audio API - zero external files)
// ------------------------------------------------------------------------------
function initMusicPlayer() {
  const toggleBtn = document.getElementById('music-toggle-btn');
  if (!toggleBtn) return;

  let audioCtx = null;
  let isPlaying = false;
  let loopInterval = null;

  // Gentle acoustic chords (Eb maj9 -> Cm9 -> Ab maj7 -> Bb sus4)
  const chordNotes = [
    [155.56, 196.0, 233.08, 311.13, 392.0],
    [130.81, 196.0, 233.08, 261.63, 311.13, 392.0],
    [103.83, 155.56, 207.65, 261.63, 311.13],
    [116.54, 174.61, 233.08, 293.66, 349.23],
  ];

  function playNote(ctx, freq, time, duration = 2.4) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0.001, time);
    gain.gain.exponentialRampToValueAtTime(0.04, time + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(time);
    osc.stop(time + duration + 0.1);
  }

  function startMelody() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    let chordIndex = 0;
    const playNext = () => {
      if (!audioCtx || audioCtx.state === 'closed') return;
      const notes = chordNotes[chordIndex % chordNotes.length];
      const now = audioCtx.currentTime;

      notes.forEach((freq, i) => {
        playNote(audioCtx, freq, now + i * 0.22, 2.8);
      });
      chordIndex++;
    };

    playNext();
    loopInterval = setInterval(playNext, 3200);
  }

  function stopMelody() {
    if (loopInterval) {
      clearInterval(loopInterval);
      loopInterval = null;
    }
    if (audioCtx && audioCtx.state === 'running') {
      audioCtx.suspend();
    }
  }

  toggleBtn.addEventListener('click', () => {
    if (isPlaying) {
      stopMelody();
      isPlaying = false;
      toggleBtn.classList.remove('playing');
      const label = toggleBtn.querySelector('.music-btn-text');
      if (label) label.textContent = 'Play Music';
    } else {
      startMelody();
      isPlaying = true;
      toggleBtn.classList.add('playing');
      const label = toggleBtn.querySelector('.music-btn-text');
      if (label) label.textContent = 'Music Playing';
    }
  });
}
