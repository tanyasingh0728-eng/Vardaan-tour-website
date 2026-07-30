/* Vardaan Tour — shared header / footer / floating call, injected on every page. */
(function () {
  var PHONE_DISPLAY = "+91 99118 79555";
  var PHONE_TEL = "+919911879555";

  var ICON = {
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
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
        '<span>Destination photography: Arpita Tripathy, Neilsatyam, Geet Arts, Sutharsan Shekhar, AaS, Athulvis, Varun Shiv Kapur, McKay Savage, Karz09, Fowler&amp;fowler, Kcsr.ntl, Bheinskitang, Harshit SR, Prateek as a traveller, ShalinishuklaV, Shobhit Gosain, Bodhisattwa, Ms Sarah Welch, Atudu, Sanjeev travelgrapher, Ekabhishek, Yogabrata Chakraborty, AverageGuyPU, Lalit.bhandari86, Nitin Maletha, Kanishkapant98, ArmouredCyborg, solarshakti, UnpetitproleX, Subhapal3187, Biswajit Majumdar, Vaibhav78545, Sanjoyg, Himanshu Punetha, Ashish Gupta, Sneha G Gupta — Wikimedia Commons (CC BY / CC BY-SA)</span></div>' +
      '</div>';
  }

  function mount() {
    var h = document.querySelector("[data-site-header]");
    if (h) { h.className = "site-header"; h.innerHTML = headerHTML(); }
    var f = document.querySelector("[data-site-footer]");
    if (f) { f.className = "site-footer"; f.innerHTML = footerHTML(); }

    // floating call
    var fab = document.createElement("a");
    fab.className = "fab-call";
    fab.href = "tel:" + PHONE_TEL;
    fab.innerHTML = ICON.phone + "<span>Call us</span>";
    document.body.appendChild(fab);

    var burger = document.getElementById("vt-burger");
    var menu = document.getElementById("vt-mobile");
    if (burger && menu) {
      burger.addEventListener("click", function () { menu.classList.toggle("open"); });
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
