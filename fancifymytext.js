function makeBigger() {
  document.getElementById("textInput").style.fontSize = "24pt";
}

function changeStyle() {
  const textArea = document.getElementById("textInput");

  if (document.getElementById("fancyShmancy").checked) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "";
    textArea.style.textDecoration = "none";
  }
}

function moo() {
  const textArea = document.getElementById("textInput");
  const sentences = textArea.value.toUpperCase().split(".");

  for (let i = 0; i < sentences.length - 1; i++) {
    if (sentences[i].trim() !== "") {
      sentences[i] = sentences[i].trimEnd() + "-Moo";
    }
  }

  textArea.value = sentences.join(".");
}