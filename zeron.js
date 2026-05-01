// Code by Developer Xeron

(function () {

  function start() {

    const div = document.createElement("div");
    div.style.position = "fixed";
    div.style.top = "0";
    div.style.left = "0";
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.background = "black";
    div.style.zIndex = "99999";
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.color = "#00ffcc";
    div.style.fontSize = "30px";
    div.style.fontFamily = "monospace";

    div.innerText = "Developer Xeron 🚀";

    document.body.appendChild(div);

    setTimeout(() => {
      div.style.transition = "1s";
      div.style.opacity = "0";
      setTimeout(() => div.remove(), 1000);
    }, 3000);

  }

  // wait until page load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }

})();
