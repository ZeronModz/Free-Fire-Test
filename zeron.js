// Code by Developer Xeron

(function () {

  // Create main container
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.top = "0";
  container.style.left = "0";
  container.style.width = "100%";
  container.style.height = "100%";
  container.style.background = "black";
  container.style.zIndex = "99999";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.alignItems = "center";
  container.style.justifyContent = "center";
  container.style.overflow = "hidden";

  // Title text
  const title = document.createElement("h1");
  title.innerText = "Developer Xeron";
  title.style.color = "#00ffcc";
  title.style.fontSize = "30px";
  title.style.fontFamily = "monospace";
  title.style.letterSpacing = "3px";
  title.style.opacity = "0";
  title.style.transition = "1s";

  // Scan line
  const scan = document.createElement("div");
  scan.style.position = "absolute";
  scan.style.width = "100%";
  scan.style.height = "3px";
  scan.style.background = "#00ffcc";
  scan.style.top = "0";

  container.appendChild(scan);
  container.appendChild(title);
  document.body.appendChild(container);

  // Scan animation
  let pos = 0;
  let scanInterval = setInterval(() => {
    pos += 2;
    scan.style.top = pos + "%";

    if (pos >= 100) {
      clearInterval(scanInterval);
      showText();
    }
  }, 20);

  // Show name animation
  function showText() {
    title.style.opacity = "1";
    typeEffect(title, "Developer Zeron");
  }

  // Typing effect
  function typeEffect(el, text) {
    el.innerText = "";
    let i = 0;

    let typing = setInterval(() => {
      el.innerText += text.charAt(i);
      i++;

      if (i >= text.length) {
        clearInterval(typing);
        setTimeout(removeScreen, 2000);
      }
    }, 100);
  }

  // Remove overlay
  function removeScreen() {
    container.style.transition = "1s";
    container.style.opacity = "0";

    setTimeout(() => {
      container.remove();
    }, 1000);
  }

})();
