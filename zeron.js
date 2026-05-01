// Code by Developer Xeron

(function () {

  function run() {

    // main overlay
    const box = document.createElement("div");
    box.style.position = "fixed";
    box.style.top = "0";
    box.style.left = "0";
    box.style.width = "100%";
    box.style.height = "100%";
    box.style.background = "black";
    box.style.zIndex = "999999";
    box.style.display = "flex";
    box.style.flexDirection = "column";
    box.style.alignItems = "center";
    box.style.justifyContent = "center";
    box.style.color = "#00ffcc";
    box.style.fontFamily = "monospace";

    // text
    const text = document.createElement("h1");
    text.innerText = "Hacked By Xeron 😈";
    text.style.fontSize = "24px";
    text.style.opacity = "0";
    text.style.transition = "1s";

    box.appendChild(text);
    document.body.appendChild(box);

    // animation
    setTimeout(() => {
      text.style.opacity = "1";
    }, 500);

    // auto remove
    setTimeout(() => {
      box.style.transition = "1s";
      box.style.opacity = "0";
      setTimeout(() => box.remove(), 1000);
    }, 4000);
  }

  // auto run fix
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }

})();
