Drop one ambient audio file here, e.g.:

  ambient-loop.mp3

Then on each page, find the <audio id="ambientAudio" ...> element in the
<header>, and uncomment the <source> line inside it, pointing at your file:

  <audio id="ambientAudio" loop preload="none">
    <source src="../assets/audio/ambient-loop.mp3" type="audio/mpeg">
  </audio>

(On index.html at the root, the path doesn't have the "../" prefix — use
src="assets/audio/ambient-loop.mp3" there instead.)

Notes:
- Keep it "light" as you described — a quiet instrumental loop works best;
  loud music competing with a recruiter's headphones is a fast way to get
  a tab closed. Aim for a file under ~2–3MB.
- It never autoplays — browsers block that anyway, and it's better UX for
  visitors to opt in. The toggle button in the header handles play/pause.
- Because this is a static multi-page site (not a single-page app),
  playback restarts if the visitor navigates to a different page. Their
  on/off *preference* is remembered across pages, but the audio itself
  isn't. If this bugs you later, converting the nav to a single page (or
  adding a small iframe-based persistent player) would fix it — ask me
  when you're ready and I'll help.
