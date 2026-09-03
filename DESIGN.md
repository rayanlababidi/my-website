---
name: Rayan Lababidi — The Data Plate
description: Engineering-credibility portfolio; facts read stamped on a nameplate, not sold in prose.
colors:
  paper: "#F5F7F9"
  paper-2: "#ECEFF2"
  ink: "#14181D"
  ink-75: "#333B44"
  ink-50: "#5B646D"
  ink-30: "#8B939B"
  rule: "#D7DCE1"
  rule-soft: "#E4E8EC"
  void: "#0E1114"
  void-2: "#171C21"
  lit: "#F2F4F6"
  lit-70: "#B7BFC7"
  lit-45: "#7E8894"
  rule-dark: "#262D34"
  amber: "#8F4C12"
  amber-bar: "#C97A2E"
  amber-lit: "#E3A458"
typography:
  display:
    fontFamily: "'Big Shoulders Display', 'Arial Narrow', Arial, sans-serif"
    fontSize: "clamp(2.6rem, 4.6vw + 1.3rem, 5.5rem)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "'Big Shoulders Display', 'Arial Narrow', Arial, sans-serif"
    fontSize: "clamp(2rem, 2.6vw + 1.2rem, 3.4rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.005em"
  title:
    fontFamily: "'Big Shoulders Text', 'Arial Narrow', Arial, sans-serif"
    fontSize: "clamp(1.5rem, 1.3vw + 1.12rem, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.04
  body:
    fontFamily: "'Archivo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "clamp(1rem, 0.16vw + 0.95rem, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.7
  lede:
    fontFamily: "'Archivo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.15rem, 0.55vw + 0.98rem, 1.4375rem)"
    fontWeight: 400
    lineHeight: 1.52
    letterSpacing: "-0.004em"
  label:
    fontFamily: "'Archivo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    letterSpacing: "0.14em"
  data:
    fontFamily: "'Roboto Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "13.5px"
    fontWeight: 400
rounded:
  none: "0px"
spacing:
  s1: "clamp(6px, .15vw + 5.4px, 8px)"
  s2: "clamp(10px, .30vw + 8.8px, 14px)"
  s3: "clamp(14px, .45vw + 12.2px, 20px)"
  s4: "clamp(20px, .70vw + 16.6px, 30px)"
  s5: "clamp(28px, 1.10vw + 22.6px, 44px)"
  s6: "clamp(38px, 1.60vw + 30.8px, 60px)"
  s7: "clamp(52px, 2.30vw + 42.2px, 84px)"
  s8: "clamp(72px, 3.20vw + 58.4px, 120px)"
components:
  data-plate:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.s5} {spacing.s5}"
  data-plate-value-now:
    textColor: "{colors.amber}"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.ink-75}"
    typography: "{typography.data}"
    rounded: "{rounded.none}"
    padding: "{spacing.s2} {spacing.s4}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  nav-link-active:
    textColor: "{colors.ink}"
  text-link:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
---

# Design System: Rayan Lababidi — The Data Plate

## Overview

**Creative North Star: "The Data Plate"**

The page proves credibility the way a nameplate proves a machine's rating: precise, stamped facts read at a glance, verified rather than sold. It refuses the incumbent site's soft editorial-magazine register (italic serif, broadsheet hairlines) in favor of a condensed-grotesk, engineering-record voice. The nameplate is a typographic and spacing discipline, not a literal metal prop — there is no rivet texture, no embossed chrome, no skeuomorphic hardware anywhere in the shipped CSS. The one recurring "stamped" object is the hairline-bordered data-plate widget with amber corner ticks; everything else is quiet, high-legibility, editorial-grade type on a flat paper/void ground.

Density is calm: generous vertical rhythm between bands (`--s7`/`--s8`), tight internal rhythm inside stamped rows (`--s2`). Motion is almost entirely a slow, single fade/rise (`.9s` cubic-bezier ease-out) with one deliberate exception — the hero data-plate rows "stamp" in on a fast snap easing (`.38s`, `cubic-bezier(.16,1,.3,1)`), distinct from every other reveal on the page. That contrast is the system's one signature motion moment and is not repeated elsewhere.

**Key Characteristics:**
- Condensed grotesk display (Big Shoulders Display/Text, uppercase, tight leading) paired with a warm humanist sans (Archivo) for body copy and a tabular monospace (Roboto Mono) reserved strictly for data/measurement values.
- Graphite/steel/paper neutrals, dark-void alternate sections, exactly one amber accent spent only on the current/active state.
- Flat surfaces, no shadows, no radius anywhere — depth comes from tonal banding (paper → paper-2 → void → void-2) and hairline rule borders.
- One signature widget (the data plate: hairline border, amber corner ticks, label/value rows) recurs as the system's stamped-fact motif.
- No eyebrows or kickers anywhere in the build; section headers stand alone.

## Colors

Neutrals dominate; color is nearly monochrome graphite-on-paper with a dark-void counter-section, and amber is the only chromatic note in the entire palette.

### Primary
- **Amber (Text)** (`#8F4C12`, `--amber`): the sole accent, spent only for the "now/current" data value — the hero plate's active role row and the timeline's "Present" year. Text-safe on paper (~5.3:1).
- **Amber (Bar)** (`#C97A2E`, `--amber-bar`): decorative-only amber for hairline elements on paper — corner ticks on the data plate, the nav underline, selection highlight, focus ring.
- **Amber (Lit)** (`#D6934A`, `--amber-lit`): the void-section equivalent of amber-bar/amber-text, used for hover states and focus rings inside dark bands. Muted relative to an earlier, brighter draft (`#E3A458`) to keep the accent restrained against the softened dark ground.

### Neutral
- **Paper** (`#F5F7F9`, `--paper`): primary light background.
- **Paper 2** (`#ECEFF2`, `--paper-2`): tonal band background (alternating sections) and the data-plate fill.
- **Ink** (`#14181D`, `--ink`): primary text on paper, `strong` emphasis.
- **Ink 75** (`#333B44`, `--ink-75`): lede/secondary text on paper.
- **Ink 50** (`#5B646D`, `--ink-50`): tertiary text, labels, mono metadata on paper.
- **Ink 30** (`#8B939B`, `--ink-30`): quietest marks — tick-rule endpoints, divider accents.
- **Rule / Rule Soft** (`#D7DCE1` / `#E4E8EC`, `--rule` / `--rule-soft`): hairline borders and dividers on paper.
- **Void / Void 2** (`#171B20` / `#20262C`, `--void` / `--void-2`): dark alternate-section background and its frame fill. A softened graphite/charcoal, not pure black — revised from an earlier near-black draft (`#0E1114` / `#171C21`) for a more executive, less terminal-like register.
- **Lit / Lit 70 / Lit 45** (`#F3F5F7` / `#AEB6BE` / `#838D96`, `--lit` / `--lit-70` / `--lit-45`): primary/secondary/tertiary text on void. Lit-45 was lightened slightly from an earlier draft (`#7E8894`) to hold ≥4.5:1 against the lighter void.
- **Rule Dark** (`#2C333A`, `--rule-dark`): hairline borders inside void sections.

### Named Rules
**The One Amber Rule.** Amber is spent only on the current/active state — the live role in the hero plate, the "Present" year in the timeline, hover/focus/selection accents. It never decorates a static fact. If a value isn't the current one, it stays neutral.

**The No-Prop Rule.** The nameplate is a discipline of typography and spacing, not a literal object. Don't add rivets, embossed/metal textures, or skeuomorphic chrome to sell the metaphor — the hairline border and corner ticks are the entire vocabulary.

## Typography

**Display Font:** Big Shoulders Display / Big Shoulders Text (condensed grotesk, with Arial Narrow/Arial fallback)
**Body Font:** Archivo (with system sans fallback)
**Label/Mono Font:** Roboto Mono (with system mono fallback) — reserved for data, never decorative

**Character:** A condensed, uppercase, engineering-record display voice set against a warm, legible humanist body face; monospace is the system's "measured value" register, used only where a fact is literal data (role, dates, platform names, credentials, tag rows).

### Hierarchy
- **Display / Hero** (800, `clamp(2.6rem, 4.6vw + 1.3rem, 5.5rem)`, line-height .94, uppercase, Big Shoulders Display): the name lockup in the hero and the contact close.
- **Display / Section** (700, `clamp(2rem, 2.6vw + 1.2rem, 3.4rem)`, line-height .98, uppercase, `.t-display`): every section h2.
- **Headline** (600, `clamp(1.5rem, 1.3vw + 1.12rem, 2.25rem)`, line-height 1.04, uppercase, `.t-h2`): reserved but present in the ramp; unused headline weight between display and title in current content.
- **Title** (600, `clamp(1.15rem, .4vw + 1.02rem, 1.375rem)`, line-height 1.2, Big Shoulders Text, `.t-h3`): discipline/subsection headers (e.g. "Commissioning", "Combustion tuning").
- **Lede** (400, `clamp(1.15rem, .55vw + .98rem, 1.4375rem)`, line-height 1.52, `.t-lede`): the one opening paragraph per major section, max-width 34em.
- **Body** (400, `clamp(1rem, .16vw + .95rem, 1.0625rem)`, line-height 1.7, `.t-body`): running prose, max-width 36–40em.
- **Label** (600, 11px, letter-spacing .14em, uppercase, `.t-label`): field names on the data plate, "Based in"/"Practice"/"Elsewhere" close labels, credential group headers.
- **Data/Mono** (400–500, 11–14px, tabular-nums, `.t-mono` / `--mono`): every literal value — plate rows, tag chips, timeline years, platform names, footer copyright/nav.

### Named Rules
**The Mono-Is-Data Rule.** Roboto Mono renders only measured/verifiable facts — role, employer, platform family, dates, credentials, tag labels. It never appears in narrative prose or headings; if a string is an opinion or a sentence, it is Archivo, not mono.

**The Condensed-Uppercase-for-Headers Rule.** Every section header (`.t-hero`, `.t-display`, `.t-h2`, `.t-h3`) is a condensed grotesk in uppercase. Body and lede copy are always sentence case in Archivo — the two families never trade roles.

## Layout

Single-column content capped at `--maxw: 1360px`, centered, with responsive inline padding `--edge: clamp(22px, 4vw + 8px, 72px)`. Sections stack in full-bleed color bands (`.rlb-band`, vertical padding `--s8`) that alternate paper / paper-2 / void to mark rhythm without borders between every section.

Two-column grids appear only where content is genuinely paired: hero (name+plate vs. portrait, `7fr/5fr`), profile (lede vs. body, `4fr/7fr`), discipline items, scale items, experience records, and credentials (`repeat(3, 1fr)`). All of these collapse to a single column at `980px` (and `640px` for finer sub-grids like the timeline).

Spacing runs on an 8-step fluid scale (`--s1` 6–8px through `--s8` 72–120px, all `clamp()`), used consistently: `--s1`/`--s2` for tight intra-component gaps (plate rows, label-to-value), `--s5`/`--s6` for internal block spacing, `--s7`/`--s8` for spacing between major content groups and bands. Nav is fixed-position with a hide-on-scroll-down / reveal-on-scroll-up behavior and a backdrop-blur "set" state once scrolled past 24px.

## Elevation & Depth

The system is flat: no `box-shadow` appears anywhere in the stylesheet. Depth is conveyed entirely by tonal layering (paper → paper-2 → void → void-2) and 1px hairline borders (`--rule` on light sections, `--rule-dark` on dark sections). The data plate and portrait frame use a 1px border rather than a shadow to separate from their background.

### Named Rules
**The Flat-By-Default Rule.** No section, card, or widget ever lifts on a shadow. Separation is tonal-band contrast or a hairline border, never elevation.

## Shapes

Every corner in the build is square — `border-radius` is not used anywhere in `index.html` or `404.html`. Borders are always 1px hairlines (`--rule` / `--rule-dark` / `--ink-30` / `--lit-45`). The one drawing-adjacent ornament is the tick-rule: a 1px horizontal rule with two short 1px-wide, 7px-tall tick marks at each end (`.rlb-tick-rule`), used once beneath the hero name block as a deliberate, singular flourish, not a repeating pattern.

## Components

### Buttons
No filled or bordered button component exists anywhere in the build. All calls to action are text links (see Navigation below).

### Chips / Tags
- **Style:** 1px hairline border (`--rule`), transparent/paper background, monospace text (`.rlb-tag`), no radius, padding `--s2 --s4`. Used for the "Core Expertise" tag row.
- **State:** static; no selected/unselected variants exist — tags are declarative facts, not filters.

### Cards / Containers
No shadowed card pattern exists. The closest containers are the data plate and the education block (`.rlb-edu`), both a flat fill with a 1px hairline border and square corners, internal padding `--s5`–`--s6`.

### Navigation
Fixed top rail, condensed-grotesk wordmark left, uppercase 12px-letterspaced link row right (`.t-label`-adjacent styling but via `.rlb-menu a`, weight 600, letter-spacing .09em). Default opacity .68; hover raises to full opacity with an amber underline that grows in from the left (`transform: scaleX`); the active/"here" section keeps the underline solid via scroll-spy. Below 820px the link row collapses to a burger that opens a full-screen void-background drawer with large display-type links. Mobile drawer and desktop rail share the same five anchors (Profile / Expertise / Experience / Timeline / Contact); the scroll-spy JS maps several page sections onto each nav zone rather than 1:1.

### The Data Plate (signature component)
A hairline-bordered (1px `--rule`), `--paper-2`-filled block with amber (`--amber-bar`) corner ticks drawn as two 14px `border-top+border-left` / `border-bottom+border-right` pseudo-elements at opposite corners. Interior rows (`.rlb-plate__row`) are label/value pairs: an 11px uppercase mono-adjacent label (`.rlb-plate__k`, Archivo) left, a 13.5px monospace value right (`.rlb-plate__v`), separated by 1px hairline rules between rows. The one "now/active" value in each plate is set in amber (`.rlb-plate__v--now`). This is the system's signature recurring motif and its only stamped/tick ornament besides the tick-rule. Rows animate in on the fast "stamp" snap easing (`.38s`, `--snap`), distinct from the slow fade/rise used for every other reveal (`.9s`, `--out`).

## Do's and Don'ts

### Do:
- **Do** reserve Roboto Mono exclusively for data/measured values — the Mono-Is-Data Rule above.
- **Do** spend amber only on the current/active state (The One Amber Rule).
- **Do** use the data-plate widget (hairline border, amber corner ticks, label/value rows) for any new "stamped fact" block; don't invent a second competing stamped-widget style.
- **Do** keep corners square and shadows absent everywhere; separation comes from tonal banding and 1px hairlines only.
- **Do** use the fast snap easing (`.38s`, `cubic-bezier(.16,1,.3,1)`) only for the data-plate stamp-in; every other reveal uses the slow fade/rise (`.9s`, `cubic-bezier(.19,1,.22,1)`).

### Don't:
- **Don't** add rivets, embossed metal texture, or literal hardware chrome to sell the nameplate metaphor — the border and corner ticks are the entire vocabulary (The No-Prop Rule).
- **Don't** add eyebrows or kickers above headings. None exist in the shipped build; section titles stand alone.
- **Don't** introduce a filled/bordered button component. The system's only interactive affordance is the underline text link with a directional arrow glyph (`→` / `↗`).
- **Don't** apply border-radius anywhere; the system's corner language is uniformly square.
- **Don't** use amber as a general decorative color on static facts — it signals "current" and nothing else.
