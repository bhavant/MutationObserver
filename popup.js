function checkPageChanges() {
  console.log("Detecting");
  chrome.tabs.executeScript(
    {file: 'checkLoad.js'}, 
    );
}

function start() {
  document.getElementById("DOMStableDetect").addEventListener("click", checkPageChanges);
}

window.onload = start;