(function () {
  function cssUrl(url) {
    if (!url) return "";
    return `url("${String(url).trim().replace(/\\/g, "/").replace(/"/g, "%22")}")`;
  }

  function applyMediaUrls() {
    const M = window.ELEVALOOK_MEDIA;
    if (!M) return;

    const favLinks = document.querySelectorAll('link[rel="icon"]');
    if (M.favicon) {
      favLinks.forEach((link) => {
        link.href = M.favicon;
      });
    }

    document.querySelectorAll(".compare-wrap[data-compare]").forEach((wrap) => {
      const slot = wrap.getAttribute("data-compare");
      const pair = M.compare && M.compare[slot];
      if (!pair) return;

      const beforeCss = cssUrl(pair.before);
      const afterCss = cssUrl(pair.after);
      if (beforeCss) wrap.style.setProperty("--before-image", beforeCss);
      if (afterCss) wrap.style.setProperty("--after-image", afterCss);
    });

    const heroVideo = document.querySelector(".hero-bg-video");
    if (heroVideo && M.heroVideo) {
      heroVideo.src = M.heroVideo.trim();
      heroVideo.play().catch(() => {
        const startHeroVideo = () => {
          heroVideo.play().catch(() => {});
          document.removeEventListener("click", startHeroVideo);
          document.removeEventListener("touchstart", startHeroVideo);
        };
        document.addEventListener("click", startHeroVideo, { once: true });
        document.addEventListener("touchstart", startHeroVideo, { once: true });
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyMediaUrls);
  } else {
    applyMediaUrls();
  }
})();
