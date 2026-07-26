import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const loader = document.querySelector('#loader');
const galleryList = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
  scrollZoom: false,
  animationSpeed: 250,
});

function createGallery(images) {
  console.log(images);

  const markup = images
    .map(
      img =>
        `<li class="gallery-item">
        <a class="gallery-link" href="${img.largeImageURL}">
          <img
            class="gallery-image"
            src="${img.webformatURL}"
            alt="${img.tags}"
          />
          <div class='metrics'>
            <div class='metric'>
              <img src="../img/ic-like.svg" alt="Like icon" width="18" height="18">
              <p>${img.likes}</p>
            </div>
            <div class='metric'>
              <img src="../img/ic-views.svg" alt="Views icon" width="20" height="20">
              <p>${img.views}</p>
            </div>
            <div class='metric'>
              <img src="../img/ic-comment.svg" alt="Comments icon" width="20" height="20">
              <p>${img.comments}</p>
            </div>
            <div class='metric'>
              <img src="../img/ic-download.svg" alt="Downloads icon" width="20" height="20">
              <p>${img.downloads}</p>
            </div>
          </div>
        </a>
      </li>`
    )
    .join('');

  galleryList.innerHTML = markup;

  lightbox.refresh();
}

function showLoader() {
  loader.classList.add('loader');
}

function hideLoader() {
  loader.classList.remove('loader');
}

export { createGallery, showLoader, hideLoader };
