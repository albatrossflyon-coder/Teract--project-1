# Teract--project-1

Bootcamp Module 2 final project — a static clone of [Treact](https://www.treact.owaiskhan.me/), a popular open-source React landing page template set, built in plain HTML/CSS/JS against a provided design spec (`TReact.pdf`).

## Tech Stack

Plain HTML/CSS/JavaScript, FontAwesome icons. No framework or build step.

## Known Issues

- [ ] `feather.replace()` throws a console error (`feather is not defined`) — harmless leftover from the original template; there are no `data-feather` elements on the page, so it can be removed safely.
- [ ] Duplicate files (`index.html`/`index_clean.html`, `script.js`/`script_clean.js`, `style.css`/`style_clean.css`) — looks like an earlier cleanup pass that never got consolidated. Worth picking one canonical set and removing the other.
- [ ] `YouTube_Channel_Blueprint_Chris.md` appears unrelated to this project — looks like it was committed here by mistake.
