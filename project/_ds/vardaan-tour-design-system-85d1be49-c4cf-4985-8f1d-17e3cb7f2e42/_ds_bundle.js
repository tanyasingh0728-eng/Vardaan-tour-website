/* @ds-bundle: {"format":3,"namespace":"VardaanTourDesignSystem_85d1be","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"PackageCard","sourcePath":"components/marketplace/PackageCard.jsx"},{"name":"RatingDisplay","sourcePath":"components/marketplace/RatingDisplay.jsx"},{"name":"SearchBar","sourcePath":"components/marketplace/SearchBar.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"c4c453158349","components/core/Badge.jsx":"80450d77346d","components/core/Button.jsx":"dd736e51a2b7","components/core/IconButton.jsx":"360cb967a6c2","components/core/Tag.jsx":"48b86fde05f7","components/forms/Input.jsx":"754674fff2ff","components/marketplace/PackageCard.jsx":"c725f12adc73","components/marketplace/RatingDisplay.jsx":"6d14c75e9a3f","components/marketplace/SearchBar.jsx":"412dd20bf555","ui_kits/website/Chrome.jsx":"9d2e830106a6","ui_kits/website/HomeScreen.jsx":"25cc5b70ca0f","ui_kits/website/Icons.jsx":"0c225f7f6c2f","ui_kits/website/ListingDetailScreen.jsx":"d6799fc7043e","ui_kits/website/SearchResultsScreen.jsx":"f55014be68e0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VardaanTourDesignSystem_85d1be = window.VardaanTourDesignSystem_85d1be || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vardaan Tour — Avatar
 * Round photo or initials. Used for guide/host blocks and review authors.
 */
function Avatar({
  src,
  name = "",
  size = 40,
  style = {},
  ...rest
}) {
  const initials = name.split(" ").map(w => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  const base = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "var(--radius-full)",
    flexShrink: 0,
    objectFit: "cover",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--color-surface-strong)",
    color: "var(--color-ink)",
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    fontSize: `${Math.round(size * 0.4)}px`,
    overflow: "hidden",
    ...style
  };
  if (src) {
    return /*#__PURE__*/React.createElement("img", _extends({
      src: src,
      alt: name,
      style: base
    }, rest));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base,
    "aria-label": name
  }, rest), initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vardaan Tour — Badge
 * Small floating pill that sits over photography. "tour-favourite" is the
 * white elevated pill; "new" is the tiny uppercase recency tag; "premium"
 * carries the temple-gold Vardaan Plus trim.
 */
function Badge({
  children,
  variant = "favourite",
  style = {},
  ...rest
}) {
  const variants = {
    favourite: {
      backgroundColor: "var(--color-canvas)",
      color: "var(--color-ink)",
      boxShadow: "var(--shadow-float)",
      fontSize: "var(--t-badge-size)",
      fontWeight: 600,
      padding: "6px 12px",
      letterSpacing: 0,
      textTransform: "none"
    },
    new: {
      backgroundColor: "var(--color-primary)",
      color: "var(--color-on-primary)",
      fontSize: "var(--t-uppercase-tag-size)",
      fontWeight: 700,
      padding: "3px 6px",
      letterSpacing: "var(--t-uppercase-tag-tracking)",
      textTransform: "uppercase"
    },
    premium: {
      backgroundColor: "var(--color-gold)",
      color: "#ffffff",
      fontSize: "var(--t-badge-size)",
      fontWeight: 600,
      padding: "5px 11px",
      letterSpacing: 0,
      textTransform: "none"
    }
  };
  const styles = {
    display: "inline-flex",
    alignItems: "center",
    gap: "5px",
    fontFamily: "var(--font-sans)",
    lineHeight: 1.18,
    borderRadius: "var(--radius-full)",
    whiteSpace: "nowrap",
    ...variants[variant],
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: styles
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vardaan Tour — Button
 * The system's primary action. Saffron fill by default; modest 500 weight,
 * 8px radius, 48px tall. Variants cover secondary (outline), tertiary (text),
 * and the pill CTA used on featured cells.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  pill = false,
  fullWidth = false,
  disabled = false,
  leftIcon = null,
  rightIcon = null,
  style = {},
  ...rest
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontFamily: "var(--font-sans)",
    fontWeight: 500,
    lineHeight: 1.25,
    border: "1px solid transparent",
    borderRadius: pill ? "var(--radius-full)" : "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    textDecoration: "none",
    whiteSpace: "nowrap",
    width: fullWidth ? "100%" : "auto",
    transition: "background-color .15s ease, border-color .15s ease, color .15s ease",
    boxSizing: "border-box"
  };
  const sizes = {
    sm: {
      fontSize: "var(--t-button-sm-size)",
      height: "36px",
      padding: "0 16px"
    },
    md: {
      fontSize: "var(--t-button-md-size)",
      height: "48px",
      padding: "0 24px"
    },
    lg: {
      fontSize: "var(--t-button-md-size)",
      height: "54px",
      padding: "0 28px"
    }
  };
  if (pill) {
    sizes.sm.padding = "0 20px";
    sizes.md.padding = "0 24px";
  }
  const variants = {
    primary: {
      backgroundColor: disabled ? "var(--color-primary-disabled)" : "var(--color-primary)",
      color: "var(--color-on-primary)"
    },
    secondary: {
      backgroundColor: "var(--color-canvas)",
      color: "var(--color-ink)",
      borderColor: disabled ? "var(--color-border-strong)" : "var(--color-ink)"
    },
    tertiary: {
      backgroundColor: "transparent",
      color: "var(--color-ink)",
      textDecoration: "underline",
      height: "auto",
      padding: "0"
    },
    char_dham: {
      backgroundColor: "var(--color-char-dham)",
      color: "var(--color-on-primary)"
    }
  };
  const styles = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: styles
  }, rest), leftIcon, children, rightIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vardaan Tour — IconButton
 * Circular icon affordance. Two surfaces: a translucent/white "save heart"
 * that floats over photography, and a soft-fill toolbar button. When `active`
 * the heart fills Saffron.
 */
function IconButton({
  children,
  variant = "soft",
  size = 40,
  active = false,
  ariaLabel,
  style = {},
  ...rest
}) {
  const surfaces = {
    soft: {
      backgroundColor: "var(--color-surface-strong)",
      color: "var(--color-ink)",
      border: "none"
    },
    outline: {
      backgroundColor: "var(--color-canvas)",
      color: "var(--color-ink)",
      border: "1px solid var(--color-hairline)"
    },
    overlay: {
      backgroundColor: "rgba(255,255,255,0.92)",
      color: "var(--color-ink)",
      border: "none"
    }
  };
  const styles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "var(--radius-full)",
    cursor: "pointer",
    padding: 0,
    color: active ? "var(--color-primary)" : surfaces[variant].color,
    transition: "transform .12s ease, background-color .15s ease",
    ...surfaces[variant],
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    "aria-pressed": active,
    style: styles
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vardaan Tour — Tag / category pill
 * Used in the category strip ("Char Dham", "Trekking", "Temples"). Selected
 * state carries a 2px ink underline; inactive is muted text, no border.
 */
function Tag({
  children,
  selected = false,
  icon = null,
  style = {},
  ...rest
}) {
  const styles = {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "8px 4px",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--t-button-sm-size)",
    fontWeight: 500,
    color: selected ? "var(--color-ink)" : "var(--color-muted)",
    borderBottom: selected ? "2px solid var(--color-ink)" : "2px solid transparent",
    opacity: selected ? 1 : 0.85,
    transition: "color .15s ease, opacity .15s ease",
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    style: styles
  }, rest), icon, /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vardaan Tour — Text input
 * White surface, 1px hairline outline, 8px radius, 56px tall, stacked label.
 * On focus the border thickens to 2px ink — no glow, no ring.
 */
function Input({
  label,
  id,
  type = "text",
  placeholder,
  value,
  defaultValue,
  error,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const border = error ? "var(--color-error)" : focused ? "var(--color-ink)" : "var(--color-hairline)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      width: "100%",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: disabled ? "var(--color-surface-soft)" : "var(--color-canvas)",
      border: `${focused || error ? "2px" : "1px"} solid ${border}`,
      borderRadius: "var(--radius-sm)",
      padding: focused || error ? "11px 13px" : "12px 14px",
      transition: "border-color .12s ease"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "block",
      fontSize: "var(--t-uppercase-tag-size)",
      fontWeight: 700,
      letterSpacing: "var(--t-uppercase-tag-tracking)",
      textTransform: "uppercase",
      color: "var(--color-muted)",
      marginBottom: "2px"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      border: "none",
      outline: "none",
      width: "100%",
      background: "transparent",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--t-body-md-size)",
      color: "var(--color-ink)",
      padding: 0
    }
  }, rest))), error && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "6px 2px 0",
      fontSize: "var(--t-body-sm-size)",
      color: "var(--color-error)"
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/marketplace/PackageCard.jsx
try { (() => {
function HeartIcon({
  filled
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: filled ? "var(--color-primary)" : "rgba(0,0,0,0.45)",
    stroke: "#ffffff",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s-7.5-4.6-10-9.3C.6 8.9 2 5.5 5.2 5.5c2 0 3.3 1.2 4 2.3.7-1.1 2-2.3 4-2.3 3.2 0 4.6 3.4 3.2 6.2C19.5 16.4 12 21 12 21z"
  }));
}

/**
 * Vardaan Tour — PackageCard
 * Photo-first tour package card. 1:1 photo with 14px corner clipping, a
 * floating badge top-left, a save heart top-right, then 4–5 meta lines with
 * an ink rating and "₹X / person" right-aligned.
 */
function PackageCard({
  image,
  title,
  region,
  meta,
  price,
  priceUnit = "person",
  rating,
  badge,
  saved = false,
  onToggleSave,
  onClick,
  style = {}
}) {
  const [isSaved, setSaved] = React.useState(saved);
  return /*#__PURE__*/React.createElement("article", {
    onClick: onClick,
    style: {
      cursor: onClick ? "pointer" : undefined,
      fontFamily: "var(--font-sans)",
      width: "100%",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "1 / 1",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      backgroundColor: "var(--color-surface-strong)",
      backgroundImage: "linear-gradient(135deg, #c9cbe6, #7d6fae)"
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(160deg, rgba(219,36,29,0.05), rgba(40,22,111,0.18))",
      mixBlendMode: "multiply"
    }
  }), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "12px",
      left: "12px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: badge.variant || "favourite"
  }, badge.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "10px",
      right: "10px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    variant: "overlay",
    size: 32,
    active: isSaved,
    ariaLabel: isSaved ? "Saved" : "Save",
    onClick: (e) => {
      e.stopPropagation();
      setSaved(!isSaved);
      onToggleSave && onToggleSave(!isSaved);
    },
    style: {
      backgroundColor: "transparent"
    }
  }, /*#__PURE__*/React.createElement(HeartIcon, {
    filled: isSaved
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: "12px",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      gap: "6px"
    }
  }, [0, 1, 2, 3, 4].map(d => /*#__PURE__*/React.createElement("span", {
    key: d,
    style: {
      width: "6px",
      height: "6px",
      borderRadius: "var(--radius-full)",
      backgroundColor: d === 0 ? "#fff" : "rgba(255,255,255,0.6)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "12px",
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-title-md-size)",
      fontWeight: 600,
      color: "var(--color-ink)"
    }
  }, title), rating != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "4px",
      fontSize: "var(--t-body-sm-size)",
      color: "var(--color-star-rating)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z"
  })), rating)), region && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-body-sm-size)",
      color: "var(--color-muted)"
    }
  }, region), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-body-sm-size)",
      color: "var(--color-muted)"
    }
  }, meta), price && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-body-sm-size)",
      color: "var(--color-ink)",
      marginTop: "2px"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600
    }
  }, price), " / ", priceUnit)));
}
Object.assign(__ds_scope, { PackageCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketplace/PackageCard.jsx", error: String((e && e.message) || e) }); }

// components/marketplace/RatingDisplay.jsx
try { (() => {
function Laurel({
  flip
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "62",
    viewBox: "0 0 22 62",
    fill: "none",
    style: {
      transform: flip ? "scaleX(-1)" : "none",
      color: "var(--color-ink)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 2C9 12 6 26 7 44c.3 6 1.6 12 4 16",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }), [10, 18, 26, 34, 42].map((y, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: `M${8 - i * 0.2} ${y} q-7 1 -8 7 q7 1 8 -7z`,
    fill: "currentColor",
    opacity: "0.9"
  })));
}

/**
 * Vardaan Tour — RatingDisplay
 * The signature package-detail moment and the loudest type in the system:
 * a 64px/700 rating number flanked by laurel ornaments, a "Tour favourite"
 * tagline, and a row of ink stat columns.
 */
function RatingDisplay({
  rating = 4.92,
  tagline = "Tour favourite",
  stats = [],
  style = {}
}) {
  const defaultStats = stats.length ? stats : [{
    value: "Top 5%",
    label: "of yatras"
  }, {
    value: "1,240",
    label: "reviews"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      textAlign: "center",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement(Laurel, null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-rating-size)",
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: "var(--t-rating-tracking)",
      color: "var(--color-ink)"
    }
  }, rating), /*#__PURE__*/React.createElement(Laurel, {
    flip: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-display-sm-size)",
      fontWeight: 600,
      color: "var(--color-ink)",
      marginTop: "6px"
    }
  }, tagline), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: "24px",
      marginTop: "16px"
    }
  }, defaultStats.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s.label
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: "1px",
      backgroundColor: "var(--color-hairline)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      padding: "0 8px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-title-md-size)",
      fontWeight: 700,
      color: "var(--color-ink)"
    }
  }, s.value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-caption-sm-size)",
      color: "var(--color-muted)"
    }
  }, s.label))))));
}
Object.assign(__ds_scope, { RatingDisplay });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketplace/RatingDisplay.jsx", error: String((e && e.message) || e) }); }

// components/marketplace/SearchBar.jsx
try { (() => {
/**
 * Vardaan Tour — SearchBar
 * The signature global search pill. White surface, fully rounded, 64px tall,
 * divided by hairlines into Where / When / Who segments, terminated by a
 * circular Saffron search orb. Resting state carries the single shadow tier.
 */
function SearchBar({
  segments,
  onSearch,
  style = {}
}) {
  const items = segments || [{
    label: "Where",
    placeholder: "Search pilgrimages"
  }, {
    label: "Dates",
    placeholder: "Add dates"
  }, {
    label: "Pilgrims",
    placeholder: "Add guests"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      backgroundColor: "var(--color-canvas)",
      border: "1px solid var(--color-hairline)",
      borderRadius: "var(--radius-full)",
      boxShadow: "var(--shadow-float)",
      height: "64px",
      padding: "0 8px 0 0",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, items.map((seg, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: seg.label
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: "1px",
      height: "32px",
      backgroundColor: "var(--color-hairline)"
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "1px",
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "0 24px",
      textAlign: "left",
      borderRadius: "var(--radius-full)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-uppercase-tag-size)",
      fontWeight: 700,
      letterSpacing: "var(--t-uppercase-tag-tracking)",
      textTransform: "uppercase",
      color: "var(--color-ink)"
    }
  }, seg.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-caption-size)",
      color: seg.value ? "var(--color-ink)" : "var(--color-muted)"
    }
  }, seg.value || seg.placeholder)))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Search",
    onClick: onSearch,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "48px",
      height: "48px",
      flexShrink: 0,
      borderRadius: "var(--radius-full)",
      border: "none",
      cursor: "pointer",
      backgroundColor: "var(--color-primary)",
      color: "var(--color-on-primary)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  }))));
}
Object.assign(__ds_scope, { SearchBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketplace/SearchBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
// Vardaan Tour — shared site chrome: TopNav, CategoryStrip, Footer.
const {
  Badge,
  SearchBar
} = window.VardaanTourDesignSystem_85d1be;
const I = window.VIcon;
function ProductTab({
  icon,
  label,
  isNew,
  active,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "4px",
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "6px 4px",
      color: active ? "var(--color-ink)" : "var(--color-muted)",
      borderBottom: active ? "2px solid var(--color-ink)" : "2px solid transparent",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--t-nav-link-size)",
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative"
    }
  }, icon, isNew && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "-6px",
      left: "calc(100% - 4px)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "new"
  }, "New"))), /*#__PURE__*/React.createElement("span", null, label));
}
function TopNav({
  active = "yatras",
  onNav,
  onSearch
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: "var(--color-canvas)",
      borderBottom: "1px solid var(--color-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      height: "80px",
      padding: "0 40px",
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav("home");
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-vrc.png",
    height: "40",
    alt: "Vardaan",
    style: {
      height: "40px",
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "22px",
      fontWeight: 700,
      letterSpacing: "-0.5px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-navy)"
    }
  }, "Vardaan"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-primary)"
    }
  }, "Tour"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "32px",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(ProductTab, {
    icon: /*#__PURE__*/React.createElement(I.Mountain, {
      size: 28
    }),
    label: "Yatras",
    active: active === "yatras",
    onClick: () => onNav && onNav("home")
  }), /*#__PURE__*/React.createElement(ProductTab, {
    icon: /*#__PURE__*/React.createElement(I.Tent, {
      size: 28
    }),
    label: "Treks",
    isNew: true,
    active: active === "treks"
  }), /*#__PURE__*/React.createElement(ProductTab, {
    icon: /*#__PURE__*/React.createElement(I.Sparkles, {
      size: 28
    }),
    label: "Experiences",
    isNew: true,
    active: active === "experiences"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      fontWeight: 600,
      color: "var(--color-ink)",
      textDecoration: "none",
      padding: "12px 14px",
      borderRadius: "var(--radius-full)"
    }
  }, "Become a guide"), /*#__PURE__*/React.createElement("button", {
    style: {
      width: "42px",
      height: "42px",
      borderRadius: "var(--radius-full)",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--color-ink)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(I.Globe, {
    size: 18
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      height: "42px",
      padding: "0 8px 0 14px",
      borderRadius: "var(--radius-full)",
      border: "1px solid var(--color-hairline)",
      background: "var(--color-canvas)",
      cursor: "pointer",
      boxShadow: "var(--shadow-float)"
    }
  }, /*#__PURE__*/React.createElement(I.Menu, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "30px",
      height: "30px",
      borderRadius: "var(--radius-full)",
      background: "var(--color-ink)",
      color: "#fff",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(I.User, {
    size: 16
  }))))));
}
const CATEGORIES = ["Char Dham", "Kedarnath", "Badrinath", "Gangotri", "Yamunotri", "Haridwar", "Rishikesh", "Treks", "Temples", "Helicopter"];
function CategoryStrip({
  active = "Char Dham",
  onPick
}) {
  const icons = {
    "Char Dham": I.Mountain,
    Treks: I.Tent,
    Temples: I.Sparkles
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--color-hairline)",
      background: "var(--color-canvas)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "12px 40px",
      display: "flex",
      gap: "28px",
      overflowX: "auto"
    }
  }, CATEGORIES.map(c => {
    const Glyph = icons[c] || I.MapPin;
    const on = c === active;
    return /*#__PURE__*/React.createElement("button", {
      key: c,
      onClick: () => onPick && onPick(c),
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "6px",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "6px 2px",
        whiteSpace: "nowrap",
        color: on ? "var(--color-ink)" : "var(--color-muted)",
        opacity: on ? 1 : 0.75,
        borderBottom: on ? "2px solid var(--color-ink)" : "2px solid transparent",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--t-button-sm-size)",
        fontWeight: 500
      }
    }, /*#__PURE__*/React.createElement(Glyph, {
      size: 24
    }), /*#__PURE__*/React.createElement("span", null, c));
  })));
}
const FOOTER = {
  Support: ["Help centre", "Cancellation options", "Safety on a yatra", "Report a concern"],
  Pilgrimage: ["Char Dham guide", "Best season to travel", "Pilgrim resources", "Group bookings"],
  Vardaan: ["About us", "Local guides", "Careers", "Press"]
};
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--color-canvas)",
      borderTop: "1px solid var(--color-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "48px 40px",
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "24px"
    }
  }, Object.entries(FOOTER).map(([head, links]) => /*#__PURE__*/React.createElement("div", {
    key: head
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "16px",
      fontWeight: 500,
      color: "var(--color-ink)",
      margin: "0 0 14px"
    }
  }, head), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: "14px",
      color: "var(--color-ink)",
      textDecoration: "none"
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--color-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "24px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "12px",
      fontFamily: "var(--font-sans)",
      fontSize: "13px",
      color: "var(--color-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Vardaan Tour Pvt. Ltd. \xB7 Privacy \xB7 Terms \xB7 Sitemap"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "18px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px"
    }
  }, /*#__PURE__*/React.createElement(I.Globe, {
    size: 16
  }), " English (IN)"), /*#__PURE__*/React.createElement("span", null, "\u20B9 INR")))));
}
Object.assign(window, {
  TopNav,
  CategoryStrip,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
// Vardaan Tour — Home screen.
const {
  PackageCard,
  SearchBar: HomeSearchBar
} = window.VardaanTourDesignSystem_85d1be;
const PACKAGES_KEDAR = [{
  id: "kedar",
  image: "https://picsum.photos/seed/kedarnath9/600/600",
  title: "Kedarnath Dham Yatra",
  region: "Rudraprayag, Uttarakhand",
  meta: "7 nights · Helicopter option",
  price: "₹24,500",
  rating: 4.92,
  badge: {
    label: "Tour favourite",
    variant: "favourite"
  }
}, {
  id: "badri",
  image: "https://picsum.photos/seed/badrinath4/600/600",
  title: "Badrinath & Mana Village",
  region: "Chamoli, Uttarakhand",
  meta: "5 nights · Small group",
  price: "₹19,800",
  rating: 4.86,
  badge: {
    label: "New",
    variant: "new"
  }
}, {
  id: "char",
  image: "https://picsum.photos/seed/chardham2/600/600",
  title: "Complete Char Dham Circuit",
  region: "Garhwal Himalaya",
  meta: "11 nights · Premium",
  price: "₹62,000",
  rating: 4.95,
  badge: {
    label: "Vardaan Plus",
    variant: "premium"
  }
}, {
  id: "gangotri",
  image: "https://picsum.photos/seed/gangotri7/600/600",
  title: "Gangotri & Gaumukh",
  region: "Uttarkashi, Uttarakhand",
  meta: "6 nights · Moderate trek",
  price: "₹21,400",
  rating: 4.81
}];
const PACKAGES_RISHI = [{
  id: "haridwar",
  image: "https://picsum.photos/seed/haridwar3/600/600",
  title: "Haridwar Ganga Aarti Retreat",
  region: "Haridwar, Uttarakhand",
  meta: "3 nights · Riverside stay",
  price: "₹11,900",
  rating: 4.78
}, {
  id: "rishikesh",
  image: "https://picsum.photos/seed/rishikesh5/600/600",
  title: "Rishikesh Yoga & Temples",
  region: "Rishikesh, Uttarakhand",
  meta: "4 nights · Wellness",
  price: "₹14,600",
  rating: 4.83,
  badge: {
    label: "Tour favourite",
    variant: "favourite"
  }
}, {
  id: "yamunotri",
  image: "https://picsum.photos/seed/yamunotri1/600/600",
  title: "Yamunotri Pilgrim Trail",
  region: "Uttarkashi, Uttarakhand",
  meta: "5 nights · Guided",
  price: "₹18,200",
  rating: 4.74
}, {
  id: "valley",
  image: "https://picsum.photos/seed/valleyofflowers8/600/600",
  title: "Hemkund Sahib & Valley of Flowers",
  region: "Chamoli, Uttarakhand",
  meta: "6 nights · Trek",
  price: "₹23,700",
  rating: 4.9,
  badge: {
    label: "New",
    variant: "new"
  }
}];
const DESTINATIONS = [["Kedarnath", "Helicopter yatras"], ["Badrinath", "Temple circuits"], ["Gangotri", "Source of the Ganga"], ["Yamunotri", "Pilgrim trails"], ["Haridwar", "Ganga aarti stays"], ["Rishikesh", "Yoga retreats"], ["Auli", "Himalayan meadows"], ["Chopta", "Tungnath treks"], ["Mussoorie", "Hill getaways"], ["Nainital", "Lake retreats"], ["Almora", "Kumaon temples"], ["Joshimath", "Char Dham basecamp"]];
function PackageRow({
  heading,
  items,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      marginBottom: "var(--space-section)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "22px",
      fontWeight: 600,
      color: "var(--color-ink)",
      margin: "0 0 20px",
      letterSpacing: "-0.3px"
    }
  }, heading), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "16px"
    }
  }, items.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => onOpen && onOpen(p),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(PackageCard, p)))));
}
function HomeScreen({
  onSearch,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: "var(--color-canvas)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-editorial)",
      margin: "0 auto",
      padding: "56px 40px 40px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "28px",
      fontWeight: 700,
      color: "var(--color-ink)",
      margin: "0 0 8px",
      lineHeight: 1.2
    }
  }, "Inspiration for your next yatra"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "16px",
      color: "var(--color-muted)",
      margin: "0 0 28px"
    }
  }, "Guided pilgrimages across the Himalayan dhams of Uttarakhand."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(HomeSearchBar, {
    onSearch: onSearch
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-editorial)",
      margin: "0 auto",
      padding: "8px 40px 0"
    }
  }, /*#__PURE__*/React.createElement(PackageRow, {
    heading: "Popular Char Dham yatras",
    items: PACKAGES_KEDAR,
    onOpen: onOpen
  }), /*#__PURE__*/React.createElement(PackageRow, {
    heading: "Stays around Haridwar & Rishikesh",
    items: PACKAGES_RISHI,
    onOpen: onOpen
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBottom: "var(--space-section)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "22px",
      fontWeight: 600,
      color: "var(--color-ink)",
      margin: "0 0 24px",
      letterSpacing: "-0.3px"
    }
  }, "Explore destinations"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: "16px 16px"
    }
  }, DESTINATIONS.map(([city, sub]) => /*#__PURE__*/React.createElement("a", {
    key: city,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      textDecoration: "none",
      paddingTop: "14px",
      borderTop: "1px solid var(--color-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "16px",
      fontWeight: 600,
      color: "var(--color-ink)"
    }
  }, city), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      color: "var(--color-muted)"
    }
  }, sub)))))));
}
Object.assign(window, {
  HomeScreen,
  ALL_PACKAGES: [...PACKAGES_KEDAR, ...PACKAGES_RISHI]
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Vardaan Tour — UI-kit icon set.
// SUBSTITUTION: the brand's intended icon set is hand-illustrated 32px line
// icons. Until those assets are supplied we use Lucide-derived line icons
// (MIT, 24×24, 2px stroke) — the same humanist stroke weight the brand wants.
// Exposed on window for the other kit scripts.
const Ic = ({
  d,
  size = 24,
  stroke = 2,
  fill = "none",
  children,
  style
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: fill,
  stroke: "currentColor",
  strokeWidth: stroke,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: style
}, d ? /*#__PURE__*/React.createElement("path", {
  d: d
}) : children);
const Mountain = p => /*#__PURE__*/React.createElement(Ic, _extends({}, p, {
  d: "M8 3l4 8 5-5 5 11H2L8 3z"
}));
const Tent = p => /*#__PURE__*/React.createElement(Ic, p, /*#__PURE__*/React.createElement("path", {
  d: "M3.5 21 14 3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.5 21 10 3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.5 21 12 15l-3.5 6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 21h20"
}));
const Sparkles = p => /*#__PURE__*/React.createElement(Ic, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z"
}));
const Globe = p => /*#__PURE__*/React.createElement(Ic, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "9"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 12h18M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z"
}));
const Menu = p => /*#__PURE__*/React.createElement(Ic, p, /*#__PURE__*/React.createElement("path", {
  d: "M3 6h18M3 12h18M3 18h18"
}));
const User = p => /*#__PURE__*/React.createElement(Ic, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "8",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 21c0-4 4-6 8-6s8 2 8 6"
}));
const Heart = ({
  filled,
  ...p
}) => /*#__PURE__*/React.createElement(Ic, _extends({}, p, {
  fill: filled ? "currentColor" : "none",
  d: "M12 21s-7.5-4.6-10-9.3C.6 8.9 2 5.5 5.2 5.5c2 0 3.3 1.2 4 2.3.7-1.1 2-2.3 4-2.3 3.2 0 4.6 3.4 3.2 6.2C19.5 16.4 12 21 12 21z"
}));
const Star = p => /*#__PURE__*/React.createElement(Ic, _extends({}, p, {
  fill: "currentColor",
  stroke: "none",
  d: "M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z"
}));
const Search = p => /*#__PURE__*/React.createElement(Ic, p, /*#__PURE__*/React.createElement("circle", {
  cx: "11",
  cy: "11",
  r: "7"
}), /*#__PURE__*/React.createElement("line", {
  x1: "21",
  y1: "21",
  x2: "16.65",
  y2: "16.65"
}));
const MapPin = p => /*#__PURE__*/React.createElement(Ic, p, /*#__PURE__*/React.createElement("path", {
  d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "3"
}));
const Share = p => /*#__PURE__*/React.createElement(Ic, p, /*#__PURE__*/React.createElement("path", {
  d: "M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 6l-4-4-4 4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2v14"
}));
const Award = p => /*#__PURE__*/React.createElement(Ic, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "8",
  r: "6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 13.5 7 22l5-3 5 3-2-8.5"
}));
const Check = p => /*#__PURE__*/React.createElement(Ic, p, /*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));
const Plus = p => /*#__PURE__*/React.createElement(Ic, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 5v14M5 12h14"
}));
const Minus = p => /*#__PURE__*/React.createElement(Ic, p, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14"
}));
const ChevronRight = p => /*#__PURE__*/React.createElement(Ic, p, /*#__PURE__*/React.createElement("path", {
  d: "M9 6l6 6-6 6"
}));
const Wind = p => /*#__PURE__*/React.createElement(Ic, p, /*#__PURE__*/React.createElement("path", {
  d: "M3 8h12a3 3 0 1 0-3-3M3 16h16a3 3 0 1 1-3 3M3 12h18"
}));
const Wifi = p => /*#__PURE__*/React.createElement(Ic, p, /*#__PURE__*/React.createElement("path", {
  d: "M2 8.5a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0M8.5 15.5a6 6 0 0 1 7 0"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "19",
  r: "1",
  fill: "currentColor"
}));
const Utensils = p => /*#__PURE__*/React.createElement(Ic, p, /*#__PURE__*/React.createElement("path", {
  d: "M4 3v7a2 2 0 0 0 4 0V3M6 11v10M18 3c-2 0-3 2-3 5s1 4 3 4v9"
}));
const Car = p => /*#__PURE__*/React.createElement(Ic, p, /*#__PURE__*/React.createElement("path", {
  d: "M5 13l1.5-5h11L19 13M5 13h14v4H5zM5 17v2M19 17v2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "8",
  cy: "15",
  r: "1",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "16",
  cy: "15",
  r: "1",
  fill: "currentColor"
}));
Object.assign(window, {
  VIcon: {
    Mountain,
    Tent,
    Sparkles,
    Globe,
    Menu,
    User,
    Heart,
    Star,
    Search,
    MapPin,
    Share,
    Award,
    Check,
    Plus,
    Minus,
    ChevronRight,
    Wind,
    Wifi,
    Utensils,
    Car
  }
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ListingDetailScreen.jsx
try { (() => {
// Vardaan Tour — Listing (package) detail screen.
const DS = window.VardaanTourDesignSystem_85d1be;
const {
  RatingDisplay,
  Button: DBtn,
  Avatar: DAvatar,
  Badge: DBadge,
  IconButton: DIconBtn
} = DS;
const DI = window.VIcon;
const AMENITIES = [[DI.Car, "Private AC transport throughout"], [DI.Utensils, "All sattvic meals included"], [DI.Wifi, "Wi-Fi at every overnight stay"], [DI.Mountain, "Helicopter transfer to Kedarnath"], [DI.Award, "Certified local Garhwali guides"], [DI.Wind, "Oxygen support at altitude"]];
const REVIEWS = [{
  name: "Sunita Joshi",
  date: "May 2026",
  text: "The arrangements were seamless from Haridwar onward. Our guide Anil knew every shortcut and every story behind the temples. The helicopter leg saved us a hard climb."
}, {
  name: "Rakesh Menon",
  date: "April 2026",
  text: "Deeply moving yatra, handled with great care for the elders in our group. Meals were warm and sattvic, stays were clean and close to the temples."
}];
function PhotoBanner() {
  const seeds = ["kedarmain3", "kedar2a", "kedar3b", "kedar4c", "kedar5d"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-detail)",
      margin: "0 auto",
      padding: "20px 40px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      gap: "8px",
      height: "420px",
      borderRadius: "var(--radius-md)",
      overflow: "hidden"
    }
  }, seeds.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      gridRow: i === 0 ? "1 / span 2" : "auto",
      background: "var(--color-surface-strong)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `https://picsum.photos/seed/${s}/800/800`,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(160deg, rgba(219,36,29,0.05), rgba(40,22,111,0.14))",
      mixBlendMode: "multiply"
    }
  })))));
}
function Stepper({
  label,
  sub,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "14px 0"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "16px",
      fontWeight: 600,
      color: "var(--color-ink)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "13px",
      color: "var(--color-muted)"
    }
  }, sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement(DIconBtn, {
    variant: "outline",
    size: 32,
    ariaLabel: "Decrease",
    onClick: () => onChange(Math.max(1, value - 1))
  }, /*#__PURE__*/React.createElement(DI.Minus, {
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: "18px",
      textAlign: "center",
      fontFamily: "var(--font-sans)",
      fontSize: "16px"
    }
  }, value), /*#__PURE__*/React.createElement(DIconBtn, {
    variant: "outline",
    size: 32,
    ariaLabel: "Increase",
    onClick: () => onChange(value + 1)
  }, /*#__PURE__*/React.createElement(DI.Plus, {
    size: 16
  }))));
}
function ReservationCard({
  pkg
}) {
  const [pilgrims, setPilgrims] = React.useState(2);
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "sticky",
      top: "100px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-canvas)",
      border: "1px solid var(--color-hairline)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-float)",
      padding: "24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "6px",
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "21px",
      fontWeight: 700,
      color: "var(--color-ink)"
    }
  }, pkg.price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      color: "var(--color-muted)"
    }
  }, "/ person")), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--color-hairline)",
      borderRadius: "var(--radius-sm)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 12px",
      borderRight: "1px solid var(--color-hairline)",
      borderBottom: "1px solid var(--color-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "8px",
      fontWeight: 700,
      letterSpacing: "0.32px",
      textTransform: "uppercase",
      color: "var(--color-muted)"
    }
  }, "Departure"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      color: "var(--color-ink)"
    }
  }, "12 May 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 12px",
      borderBottom: "1px solid var(--color-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "8px",
      fontWeight: 700,
      letterSpacing: "0.32px",
      textTransform: "uppercase",
      color: "var(--color-muted)"
    }
  }, "Return"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      color: "var(--color-ink)"
    }
  }, "19 May 2026"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "2px 12px"
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    label: "Pilgrims",
    sub: "Adults travelling",
    value: pilgrims,
    onChange: setPilgrims
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "16px"
    }
  }, /*#__PURE__*/React.createElement(DBtn, {
    fullWidth: true
  }, "Reserve")), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      color: "var(--color-muted)",
      margin: "12px 0 16px"
    }
  }, "You won't be charged yet"), [["₹24,500 × 2 pilgrims", "₹49,000"], ["Helicopter transfer", "₹8,000"], ["Vardaan service fee", "₹2,400"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      color: "var(--color-body)",
      padding: "6px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      textDecoration: "underline"
    }
  }, k), /*#__PURE__*/React.createElement("span", null, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      borderTop: "1px solid var(--color-hairline)",
      marginTop: "10px",
      paddingTop: "14px",
      fontFamily: "var(--font-sans)",
      fontSize: "16px",
      fontWeight: 700,
      color: "var(--color-ink)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, "\u20B959,400"))));
}
function ListingDetailScreen({
  pkg
}) {
  const p = pkg || window.ALL_PACKAGES[0];
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: "var(--color-canvas)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-detail)",
      margin: "0 auto",
      padding: "24px 40px 8px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "22px",
      fontWeight: 500,
      color: "var(--color-ink)",
      margin: "0 0 4px",
      letterSpacing: "-0.44px"
    }
  }, p.title, " \u2014 guided pilgrimage"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      color: "var(--color-ink)"
    }
  }, /*#__PURE__*/React.createElement(DI.Star, {
    size: 14
  }), " ", p.rating, " \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      textDecoration: "underline"
    }
  }, "1,240 reviews"), " \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-muted)"
    }
  }, p.region))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement(DBtn, {
    variant: "tertiary",
    leftIcon: /*#__PURE__*/React.createElement(DI.Share, {
      size: 16
    }),
    style: {
      padding: "8px 10px"
    }
  }, "Share"), /*#__PURE__*/React.createElement(DBtn, {
    variant: "tertiary",
    leftIcon: /*#__PURE__*/React.createElement(DI.Heart, {
      size: 16
    }),
    style: {
      padding: "8px 10px"
    }
  }, "Save"))), /*#__PURE__*/React.createElement(PhotoBanner, null), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-detail)",
      margin: "0 auto",
      padding: "32px 40px 64px",
      display: "grid",
      gridTemplateColumns: "1.7fr 1fr",
      gap: "64px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--color-hairline)",
      paddingBottom: "24px",
      marginBottom: "24px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "21px",
      fontWeight: 700,
      color: "var(--color-ink)",
      margin: "0 0 8px"
    }
  }, "A guided seven-night yatra into the Garhwal Himalaya"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "16px",
      lineHeight: 1.5,
      color: "var(--color-body)",
      margin: 0
    }
  }, "Begin at Haridwar with the evening Ganga aarti, then journey through Guptkashi to the seat of Lord Shiva at Kedarnath \u2014 with the option of a helicopter transfer over the final ascent. Small groups, sattvic meals, and Garhwali guides who carry the stories of every shrine.")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--color-hairline)",
      padding: "8px 0 28px",
      marginBottom: "28px"
    }
  }, /*#__PURE__*/React.createElement(RatingDisplay, {
    rating: p.rating,
    tagline: "Tour favourite",
    stats: [{
      value: "Top 5%",
      label: "of yatras"
    }, {
      value: "1,240",
      label: "reviews"
    }, {
      value: "11 yrs",
      label: "guiding"
    }]
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "21px",
      fontWeight: 700,
      color: "var(--color-ink)",
      margin: "0 0 16px"
    }
  }, "What this yatra includes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "4px 24px",
      borderBottom: "1px solid var(--color-hairline)",
      paddingBottom: "24px",
      marginBottom: "28px"
    }
  }, AMENITIES.map(([Glyph, label]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
      padding: "12px 0",
      fontFamily: "var(--font-sans)",
      fontSize: "16px",
      color: "var(--color-ink)"
    }
  }, /*#__PURE__*/React.createElement(Glyph, {
    size: 22,
    style: {
      color: "var(--color-ink)"
    }
  }), " ", label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      background: "var(--color-canvas)",
      border: "1px solid var(--color-hairline)",
      borderRadius: "var(--radius-md)",
      padding: "24px",
      marginBottom: "32px"
    }
  }, /*#__PURE__*/React.createElement(DAvatar, {
    name: "Anil Negi",
    size: 56
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--font-sans)",
      fontSize: "16px",
      fontWeight: 600,
      color: "var(--color-ink)"
    }
  }, "Anil Negi ", /*#__PURE__*/React.createElement(DBadge, {
    variant: "premium"
  }, "Superguide")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      color: "var(--color-muted)"
    }
  }, "Responds within an hour \xB7 100% response rate \xB7 Based in Guptkashi")), /*#__PURE__*/React.createElement(DBtn, {
    variant: "secondary"
  }, "Contact guide")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "21px",
      fontWeight: 700,
      color: "var(--color-ink)",
      margin: "0 0 18px"
    }
  }, "What pilgrims say"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "32px"
    }
  }, REVIEWS.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.name
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement(DAvatar, {
    name: r.name,
    size: 40
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      fontWeight: 600,
      color: "var(--color-ink)"
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "13px",
      color: "var(--color-muted)"
    }
  }, r.date))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "16px",
      lineHeight: 1.5,
      color: "var(--color-body)",
      margin: "0 0 6px"
    }
  }, r.text), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      color: "var(--color-ink)",
      textDecoration: "underline"
    }
  }, "Show more"))))), /*#__PURE__*/React.createElement(ReservationCard, {
    pkg: p
  })));
}
Object.assign(window, {
  ListingDetailScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ListingDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SearchResultsScreen.jsx
try { (() => {
// Vardaan Tour — Search results screen.
const {
  PackageCard: SRPackageCard,
  Button: SRButton
} = window.VardaanTourDesignSystem_85d1be;
const SRI = window.VIcon;
function FilterPill({
  children
}) {
  return /*#__PURE__*/React.createElement("button", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      height: "44px",
      padding: "0 18px",
      borderRadius: "var(--radius-full)",
      border: "1px solid var(--color-hairline)",
      background: "var(--color-canvas)",
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      fontWeight: 500,
      color: "var(--color-ink)",
      cursor: "pointer"
    }
  }, children);
}
function MapPanel({
  items
}) {
  const spots = [[22, 30], [55, 18], [40, 55], [70, 60], [30, 75], [62, 42], [80, 28], [48, 80]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: "92px",
      height: "calc(100vh - 120px)",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      background: "linear-gradient(135deg,#eef1ec,#e4e9e0 55%,#dbe6e6)",
      border: "1px solid var(--color-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "repeating-linear-gradient(115deg, rgba(255,255,255,0.35) 0 2px, transparent 2px 26px)"
    }
  }), items.slice(0, spots.length).map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      position: "absolute",
      left: spots[i][0] + "%",
      top: spots[i][1] + "%",
      transform: "translate(-50%,-50%)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: "30px",
      padding: "0 12px",
      borderRadius: "var(--radius-full)",
      background: "var(--color-canvas)",
      color: "var(--color-ink)",
      fontFamily: "var(--font-sans)",
      fontSize: "13px",
      fontWeight: 700,
      boxShadow: "var(--shadow-float)"
    }
  }, p.price))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "16px",
      bottom: "16px",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      height: "44px",
      padding: "0 16px",
      borderRadius: "var(--radius-full)",
      background: "var(--color-ink)",
      color: "#fff",
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement(SRI.MapPin, {
    size: 16
  }), " Map of Uttarakhand"));
}
function SearchResultsScreen({
  packages,
  onOpen
}) {
  const items = packages || window.ALL_PACKAGES;
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: "var(--color-canvas)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--color-hairline)",
      background: "var(--color-surface-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "16px 40px",
      display: "flex",
      gap: "12px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(FilterPill, null, "Dates"), /*#__PURE__*/React.createElement(FilterPill, null, "Pilgrims"), /*#__PURE__*/React.createElement(FilterPill, null, "Price"), /*#__PURE__*/React.createElement(FilterPill, null, "Helicopter"), /*#__PURE__*/React.createElement(FilterPill, null, "Difficulty"), /*#__PURE__*/React.createElement(FilterPill, null, /*#__PURE__*/React.createElement(SRI.Check, {
    size: 16
  }), " Vardaan Plus"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "24px 40px",
      display: "grid",
      gridTemplateColumns: "1.35fr 1fr",
      gap: "32px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "20px",
      fontWeight: 600,
      color: "var(--color-ink)",
      margin: "0 0 20px"
    }
  }, items.length * 9, " yatras across Uttarakhand"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "24px"
    }
  }, items.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => onOpen && onOpen(p),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(SRPackageCard, p)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: "40px"
    }
  }, /*#__PURE__*/React.createElement(SRButton, {
    variant: "secondary"
  }, "Show more yatras"))), /*#__PURE__*/React.createElement(MapPanel, {
    items: items
  })));
}
Object.assign(window, {
  SearchResultsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SearchResultsScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.PackageCard = __ds_scope.PackageCard;

__ds_ns.RatingDisplay = __ds_scope.RatingDisplay;

__ds_ns.SearchBar = __ds_scope.SearchBar;

})();
