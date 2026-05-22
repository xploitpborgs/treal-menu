tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        "on-surface": "var(--color-on-surface)",
        "on-surface-variant": "var(--color-on-surface-variant)",
        "warm-brown": "var(--color-warm-brown)"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        gutter: "1.5rem",
        "container-max-width": "1200px",
        "item-gap": "2.5rem",
        "margin-mobile": "1.25rem",
        "margin-desktop": "4rem",
        "section-gap": "5rem"
      },
      fontFamily: {
        "display-lg-mobile": ["Gelasio"],
        "body-md": ["Lato"],
        "body-lg": ["Lato"],
        "price-display": ["Lato"],
        "label-caps": ["Lato"],
        "headline-sm": ["Gelasio"],
        "headline-md": ["Gelasio"],
        "display-lg": ["Gelasio"]
      },
      fontSize: {
        "display-lg-mobile": ["40px", { lineHeight: "1.2", fontWeight: "600" }],
        "body-md": ["12px", { lineHeight: "1.5", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "price-display": ["11px", { lineHeight: "1", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "1", letterSpacing: "0.1em", fontWeight: "700" }],
        "headline-sm": ["20px", { lineHeight: "1.4", fontWeight: "600" }],
        "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
        "display-lg": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }]
      }
    }
  }
};
