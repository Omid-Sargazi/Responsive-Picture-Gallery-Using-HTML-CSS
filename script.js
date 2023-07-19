var image = document.querySelectorAll("img");
image.forEach((img) =>
  img.addEventListener("click", () => {
    img.classList.toggle("active");
  })
);
