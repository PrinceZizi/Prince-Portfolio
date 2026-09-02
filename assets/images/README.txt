Drop your own banner photos here. Recommended filenames (already referenced
as commented-out examples in the HTML, and matching the "has-image" class
system in css/style.css):

  create-banner.jpg     → pages/animation.html
  connect-banner.jpg    → pages/ugc.html
  perform-banner.jpg    → pages/multimedia.html
  build-banner.jpg      → pages/informatics.html
  about-banner.jpg      → pages/about.html

You're not limited to these names — they're just what the comments in each
HTML file already suggest. Use whatever filename you like as long as the
path in the HTML matches it.

To use an image:
1. Add the file here.
2. Open the relevant page in pages/, find the commented instructions just
   above the <div class="section-banner ...">, and follow them — add
   class="has-image" and a style="--bg-image:url('../assets/images/your-file.jpg')"
   to that div.

Tips:
- Keep files under ~300KB where you can (compressed JPG or WebP) — this
  keeps pages fast, especially on slower connections/hardware.
- Roughly 1600×600px (or any wide, short aspect ratio) works best, since
  the banner is a short horizontal strip, not a full-height photo.
- The dark gradient overlay is automatic — you don't need to darken the
  image yourself, just pick something with reasonably even tone so text
  in the lighter areas doesn't get lost.
