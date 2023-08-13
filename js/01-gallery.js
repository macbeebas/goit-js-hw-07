import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const dives = [];

for (let i = 0; i < galleryItems.length; i++) {
  const galleryItem = document.createElement("div");
  const imageLink = `<a class="gallery__link" href="${galleryItems[i].original}">\n<img class="gallery__image" src="${galleryItems[i].preview}" data-source="${galleryItems[i].original}" alt="${galleryItems[i].description}" />\n</a>`;
  galleryItem.classList.add("gallery__item");
  dives.push(galleryItem);
  console.log("galleryItem: ", galleryItem);
  console.log("dives:", dives);
  galleryItem.insertAdjacentHTML("afterbegin", imageLink);
}
gallery.append(...dives);

document.querySelector(".gallery").onclick = (event) => {
  event.preventDefault();
  basicLightbox
    .create(
      `<img src="${event.target.dataset.source}" alt="${event.target.alt}">`
    )
    .show();
};
