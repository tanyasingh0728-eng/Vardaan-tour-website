/* Vardaan Tour — shared header / footer / floating WhatsApp, injected on every page. */
(function () {
  var PHONE_DISPLAY = "+91 99118 79555";
  var PHONE_TEL = "+919911879555";
  var WHATSAPP_URL = "https://wa.me/919318400926?text=Hi%20Vardaan%20team,%20I'm%20interested%20in%20learning%20more%20about%20your%20tour%20packages.";

  var ICON = {
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
    whatsapp: '<svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16.004 3C8.837 3 3.004 8.832 3.004 16c0 2.293.6 4.533 1.74 6.508L3 29l6.65-1.71A12.95 12.95 0 0 0 16.004 29C23.17 29 29 23.168 29 16S23.17 3 16.004 3zm0 23.636a10.6 10.6 0 0 1-5.41-1.48l-.388-.23-3.947 1.015 1.054-3.848-.253-.396A10.6 10.6 0 0 1 5.37 16c0-5.864 4.77-10.636 10.634-10.636S26.636 10.136 26.636 16 21.866 26.636 16.004 26.636zm5.83-7.963c-.32-.16-1.89-.933-2.183-1.04-.293-.106-.506-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.186.213-.373.24-.693.08-.32-.16-1.35-.498-2.572-1.588-.95-.848-1.592-1.895-1.779-2.215-.186-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.186.213-.32.32-.533.106-.213.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.623-.523-.538-.72-.548l-.613-.011c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.666s1.146 3.093 1.306 3.306c.16.213 2.256 3.444 5.466 4.83.764.33 1.36.527 1.825.674.767.244 1.465.21 2.017.127.615-.092 1.89-.773 2.157-1.52.266-.746.266-1.386.186-1.52-.08-.133-.293-.213-.613-.373z"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>'
  };

  var NAV = [
    { label: "Home", href: "index.html", page: "home" },
    { label: "About", href: "about.html", page: "about" },
    { label: "Tour packages", href: "packages.html", page: "packages" },
    { label: "Contact", href: "contact.html", page: "contact" }
  ];

  var current = document.body.getAttribute("data-page") || "home";

  function wordmark(cls) {
    return '<a href="index.html" class="brand ' + (cls || "") + '">' +
      '<img src="assets/logo-vrc.png" alt="Vardaan Tour">' +
      '<span class="wordmark"><span>Vardaan</span> <span class="t">Tour</span></span>' +
      '</a>';
  }

  function headerHTML() {
    var links = NAV.map(function (n) {
      return '<a href="' + n.href + '"' + (n.page === current ? ' class="active"' : '') + '>' + n.label + '</a>';
    }).join("");
    var mlinks = NAV.map(function (n) {
      return '<a href="' + n.href + '"' + (n.page === current ? ' class="active"' : '') + '>' + n.label + '</a>';
    }).join("");
    return '' +
      '<div class="topbar"><div class="container">' +
        '<div class="tb-left"><a href="tel:' + PHONE_TEL + '">' + ICON.phone + ' ' + PHONE_DISPLAY + '</a></div>' +
        '<div class="topbar-right">' +
          '<a class="tb-hide" href="about.html">About us</a>' +
          '<a class="tb-hide" href="contact.html">Contact</a>' +
          '<a href="mailto:reservation@vardaanrentacar.com">' + ICON.mail + ' reservation@vardaanrentacar.com</a>' +
        '</div>' +
      '</div></div>' +
      '<div class="container"><nav class="navbar">' +
        wordmark() +
        '<div class="nav-links">' + links + '</div>' +
        '<div class="nav-cta">' +
          '<a class="nav-call" href="tel:' + PHONE_TEL + '">' + ICON.phone + '<span>' + PHONE_DISPLAY + '</span></a>' +
          '<a class="v-btn v-btn--primary" href="contact.html">Enquire now</a>' +
          '<button class="hamburger" aria-label="Menu" id="vt-burger">' + ICON.menu + '</button>' +
        '</div>' +
      '</nav></div>' +
      '<div class="mobile-menu" id="vt-mobile">' + mlinks +
        '<a class="v-btn v-btn--secondary" href="tel:' + PHONE_TEL + '">' + ICON.phone + ' Call ' + PHONE_DISPLAY + '</a>' +
        '<a class="v-btn v-btn--primary" href="contact.html">Enquire now</a>' +
      '</div>';
  }

  function footerHTML() {
    return '<div class="container"><div class="footer-grid">' +
      '<div class="footer-col">' + wordmark() +
        '<p>Guided pilgrimages across the Himalayan dhams of Uttarakhand — comfortable travel, trusted stays, and caring support so you can focus on darshan.</p>' +
      '</div>' +
      '<div class="footer-col"><h4>Explore</h4>' +
        '<a href="packages.html">Tour packages</a><a href="about.html">About us</a>' +
        '<a href="contact.html">Contact</a><a href="packages.html">Char Dham yatra</a>' +
      '</div>' +
      '<div class="footer-col"><h4>Destinations</h4>' +
        '<a href="packages.html">Kedarnath</a><a href="packages.html">Badrinath</a>' +
        '<a href="packages.html">Gangotri & Yamunotri</a><a href="packages.html">Haridwar & Rishikesh</a>' +
      '</div>' +
      '<div class="footer-col"><h4>Plan your yatra</h4>' +
        '<p style="margin-top:0">Speak with a pilgrimage specialist:</p>' +
        '<a class="footer-call" href="tel:' + PHONE_TEL + '">' + PHONE_DISPLAY + '</a>' +
        '<a href="mailto:reservation@vardaanrentacar.com" style="margin-top:8px">reservation@vardaanrentacar.com</a>' +
      '</div>' +
      '</div>' +
      '<div class="footer-bottom"><span>© 2026 Vardaan Tour — a unit of Vardaan Rent a Car (VRC).</span>' +
        '<span>Your sacred journey, handled with care.</span>' +
        '<span>Destination photography: Arpita Tripathy, Neilsatyam, Geet Arts, Sutharsan Shekhar, AaS, Athulvis, Varun Shiv Kapur, McKay Savage, Karz09, Fowler&amp;fowler, Kcsr.ntl, Bheinskitang, Harshit SR, Prateek as a traveller, ShalinishuklaV, Shobhit Gosain, Bodhisattwa, Ms Sarah Welch, Atudu, Sanjeev travelgrapher, Ekabhishek, Yogabrata Chakraborty, AverageGuyPU, Lalit.bhandari86, Nitin Maletha, Kanishkapant98, ArmouredCyborg, solarshakti, UnpetitproleX, Subhapal3187, Biswajit Majumdar, Vaibhav78545, Sanjoyg, Himanshu Punetha, Ashish Gupta, Sneha G Gupta, Paul Hamilton, Nilesh.shintre, Nickk Bisht, Rajborah123 — Wikimedia Commons (CC BY / CC BY-SA); Bhupendra Singh Bhandari, Aditya Siva, Meriç Dağlı (Unsplash); Dinesh Verma, Frank van Dijk, Hemant Singh Chauhan, Tony Zebastian, Tshewang Rigzin Sharpa, Vikas Bhandari (Pexels)</span></div>' +
      '</div>';
  }

  function mount() {
    var h = document.querySelector("[data-site-header]");
    if (h) { h.className = "site-header"; h.innerHTML = headerHTML(); }
    var f = document.querySelector("[data-site-footer]");
    if (f) { f.className = "site-footer"; f.innerHTML = footerHTML(); }

    // floating WhatsApp widget (callout stays dismissed for the rest of the session)
    var waLink = 'href="' + WHATSAPP_URL + '" target="_blank" rel="noopener noreferrer"';
    var calloutDismissed = false;
    try { calloutDismissed = sessionStorage.getItem("vt-wa-callout") === "dismissed"; } catch (e) {}
    var wa = document.createElement("div");
    wa.className = "wa-widget";
    wa.innerHTML =
      (calloutDismissed ? "" :
        '<div class="wa-callout">' +
          '<button type="button" class="wa-callout-close" aria-label="Dismiss message">' + ICON.close + '</button>' +
          '<a class="wa-callout-body" ' + waLink + '>' +
            '<span class="wa-online"><span class="wa-dot"></span>Online now</span>' +
            '<strong>Planning a Tour?</strong>' +
            '<span>Ask us about custom packages or car/traveller bookings.</span>' +
          '</a>' +
        '</div>') +
      '<a class="fab-whatsapp" ' + waLink + ' aria-label="Chat with Vardaan on WhatsApp">' +
        ICON.whatsapp +
      '</a>';
    document.body.appendChild(wa);
    var waClose = wa.querySelector(".wa-callout-close");
    if (waClose) waClose.addEventListener("click", function () {
      var c = wa.querySelector(".wa-callout");
      c.parentNode.removeChild(c);
      try { sessionStorage.setItem("vt-wa-callout", "dismissed"); } catch (e) {}
    });

    var burger = document.getElementById("vt-burger");
    var menu = document.getElementById("vt-mobile");
    if (burger && menu) {
      burger.addEventListener("click", function () { menu.classList.toggle("open"); });
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
