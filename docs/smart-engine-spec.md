<!-- Roadmap scaffold for the planned Smart Bypass Engine. This spec is intentionally high-level and not yet implemented. -->
# Smart Bypass Engine Spec

## Purpose

This document captures the planned design for a future routing engine that can rank bypass services dynamically instead of relying on a static list.

## Goals

- Learn which services work best for each supported domain
- Prefer reliable and fast services automatically
- Keep all learning local to the user unless an explicit community feature is introduced later

## Inputs

- Current page domain
- Current service registry data
- User-confirmed success/failure feedback
- Probe results such as status, latency, or archive availability

## Proposed Algorithm

1. Build the candidate service list for the current domain.
2. Filter out services marked inactive or unsupported for the site.
3. Run a lightweight probe strategy where feasible.
4. Combine probe health with historical success/failure data.
5. Produce a ranked list and choose a default action for the page.
6. Store per-domain outcomes locally for future sessions.

## Open Questions

- Which probe types are safest and most compatible across browsers?
- Should the engine use `HEAD`, `GET`, iframe checks, or pure user-confirmed feedback?
- How should per-domain history expire or be re-weighted over time?
- How much transparency should be exposed in the UI for ranking decisions?

## Future Data Model

- Domain key
- Service ID
- Success count
- Failure count
- Last successful timestamp
- Average response time
- Last probe status
