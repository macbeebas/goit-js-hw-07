import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const items = [];

for (let i = 0; i < galleryItems.length; i++) {
  const galleryItem = document.createElement("div");
  const imageLink = `<a class="gallery__link" href="${galleryItems[i].original}">\n<img class="gallery__image" src="${galleryItems[i].preview}" alt="${galleryItems[i].description}" />\n</a>`;
  galleryItem.classList.add("gallery__item");
  items.push(galleryItem);
  galleryItem.insertAdjacentHTML("afterbegin", imageLink);
}
gallery.append(...items);

let lightbox = new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionsData: "alt",
  captionDelay: 250,
});
