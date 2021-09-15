const album = document.querySelector(".album");
const closeBtn = document.querySelector(".closeBtn");
const bg = document.querySelector(".bg");
const modal = document.querySelector(".modal");

const open = () => {
    modal.classList.remove("hidden");
}

const close = () => {
    modal.classList.add("hidden");
}

album.addEventListener("click", open);
closeBtn.addEventListener("click", close);
bg.addEventListener("click", close);