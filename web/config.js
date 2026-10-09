// Configuración del panel público (sin secretos).
// En local (localhost / file://) lee el data.json de esta carpeta; publicado lee la rama "data" de GitHub.
(function () {
  var GITHUB_USER = "trendtiktokradar", GITHUB_REPO = "trading-bot-panel";
  var local = /^(localhost|127\.0\.0\.1|0\.0\.0\.0)$/.test(location.hostname) || location.protocol === "file:";
  var remote = "https://raw.githubusercontent.com/" + GITHUB_USER + "/" + GITHUB_REPO + "/data/data.json";
  window.PANEL_CONFIG = {
    dataUrl: local || GITHUB_USER.indexOf("__") === 0 ? "data.json" : remote,
    fallbackUrl: "data.json",
    refreshSeconds: 90
  };
})();
