# Analytics hooks

The site emits privacy-conscious events to `window.dataLayer` without loading an analytics provider.

Key events:
- `nav_submit`
- `hero_intake`
- `hero_control_room`
- `problem_route_selected`
- `control_room_tab`
- `intake_step_view`
- `intake_copy`
- `intake_email_open`

Add a consent-aware provider only after the privacy and cookie position is approved.
