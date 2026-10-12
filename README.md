# Clipboard Stats HQ

Static, responsive brand hub for clipboardstats.com. No build step, framework, backend, or runtime API calls.

## Preview

Run `python3 -m http.server 8000` in this directory and open http://localhost:8000.

## Content

- Add tracker objects to the `trackers` array in `script.js`. The grid scales automatically.
- Set `contactEmail` in `script.js` when a contact address is ready. It is currently omitted at the owner's request.
- Donations link to https://ko-fi.com/sshb4.
- `assets/clipboard-mark.svg` is a temporary original clipboard mark, not the existing brand logo. Replace it with the approved logo and adjust the image references if the filename changes.
- The animated numbers describe the project (tracker count, one stat, zero cost), not live player statistics. The tracker count updates from the array automatically.
- Google Fonts supplies Barlow and Barlow Condensed; system font fallbacks work without it.

## GitHub Pages

The deployment target is https://sshb4.github.io/ClipboardStats/ from the `main` branch at **/ (root)**. Push changes to `main` to update the site. `.nojekyll` makes GitHub Pages serve the static files directly. The site uses relative asset paths and works on a project URL or custom domain.

For clipboardstats.com, set that domain in Pages settings and configure its DNS as instructed by GitHub. No custom domain file is included until the domain is ready to be connected. Custom-domain settings and DNS have not been changed.
