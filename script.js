const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");

inputFile.addEventListener("change", uploadImage);

function uploadImage() {
  const file = inputFile.files[0];
  if (file && file.type.startsWith("image/")) {
    const imgLink = URL.createObjectURL(file);
    imageView.style.backgroundImage = `url(${imgLink})`;
    imageView.innerHTML = "";
    imageView.style.border = "none";
  } else {
    alert(
      "Please upload a valid image file, such as .gif, .jpeg, .jpg, .svg, .png, etc. "
    );
  }
}

dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropArea.classList.add("dragover");
});

dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("dragover");
});

dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  dropArea.classList.remove("dragover");
  inputFile.files = e.dataTransfer.files;
  uploadImage();
});
