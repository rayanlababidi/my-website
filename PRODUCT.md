# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary visitors are recruiters and hiring managers, engineering leaders, Siemens Energy colleagues, other power generation professionals, technical sales leaders, and people arriving from LinkedIn. They are evaluating Rayan Lababidi's engineering background — verifying scope of experience, platforms worked, and technical depth for a role, referral, or professional relationship.

## Product Purpose

A personal professional portfolio for Rayan Lababidi, scoped exclusively to his mechanical engineering career: gas turbine commissioning, combustion tuning, controls, troubleshooting, outage execution, and field engineering for Siemens Energy. It exists to give a technical, evaluative audience a credible, detailed, verifiable account of his engineering experience. Success is a visitor coming away with a clear picture of his engineering scope and depth — not a persuaded impression, a verified one.

This is deliberately not a dual biography. Up&Elevate and entrepreneurship are out of scope for this site entirely.

## Positioning

Field-based power generation engineering performed directly at customer facilities, on machines already in service — commissioning, tuning, and troubleshooting live combustion turbines under fixed outage windows, in front of the people who own the consequence. Most engineering careers start one or two steps removed from the equipment; this one does not.

## Operating Context

Work covers commissioning and combustion tuning of industrial gas turbines at operating power plants across North America for Siemens Energy, spanning commissioning, combustion tuning, controls, root-cause troubleshooting, and outage execution. Internally the specific turbine platforms and named field engagements (customer/site names, e.g. Langley Gulch, Kinmundy, HF Lee) are confirmed real history — see the confidentiality rule below for what is safe to publish.

## Capabilities and Constraints

Static site — plain HTML/CSS/vanilla JS, no framework or build tooling — deployed via Cloudflare Pages/Workers assets (`wrangler.jsonc`, served from `./public`). Currently one page, `public/index.html`, plus `public/404.html`.

The nav currently links to `/journal.html` and `/about.html`, neither of which exists. These are not planned surfaces — they should not be treated as committed work, and the nav should not promise pages that don't exist.

No downloadable résumé yet — the user deferred this explicitly; leave the structure ready for one later rather than adding it now.

### Confidentiality rule (binding, from the user, applies to every future edit)

This is a public site. Do not publish customer names, plant/site names, unit numbers, site-specific operating values, internal procedures, proprietary Siemens terminology, confidential troubleshooting details, or anything reasonably considered customer-sensitive or Siemens-confidential — regardless of what appears in earlier drafts, git history, or this file's own working notes.

Named field engagements (Langley Gulch Power Plant/Idaho, Kinmundy Energy Center/Illinois, HF Lee Energy Complex/North Carolina) must be published anonymized by region and engagement type, e.g. "Utility-scale gas turbine commissioning project — Western U.S.," "Combustion tuning / commissioning engagement — Midwest U.S.," "Field commissioning engagement — Southeast U.S." The underlying technical lessons and responsibilities are preserved; the customer/site identity is not.

Publicly known Siemens turbine family names may be referenced only at a high level if appropriate. Never publish internal settings, tuning values, procedures, controls logic, or proprietary performance information.

Do not invent numerical achievements (counts, MW totals, dates the user hasn't confirmed). Use qualitative engineering language unless a metric is explicitly verified by the user as safe to publish.

## Evidence on Hand

Real, confirmed, but subject to the confidentiality rule above before anything is published: the field engagements, platforms, and disciplines. Photography on file at `public/images/`: portrait and environmental shots (`rayan-portrait*`, `turbine-hall*`, `field-langley-gulch*`, `field-kinmundy*`, `field-hf-lee*`); `rayan-founder*` belongs to the Up&Elevate material being removed. No testimonials, press mentions, case studies, or verified numerical metrics are on file — do not invent any. Ask the user before publishing anything not already covered by this file.

## Product Principles

- Engineering-only scope. Up&Elevate/entrepreneurship content is not part of this site — remove it, don't soften it to a mention.
- Confidentiality first. No customer/site identity, internal values, or proprietary Siemens material ever ships publicly; anonymize by region and engagement type instead.
- Built for a technical, evaluative read. Recruiters, engineering leaders, and peers scan for verifiable depth — platforms, disciplines, anonymized engagements — rather than being persuaded by narrative.
- Precision over promotion. Claims and language should read as an accurate professional record, not marketing copy, and never include invented metrics.
- Don't promise what isn't built. No nav item or section should imply a page or capability that doesn't exist.
