import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import likeIcon from '../img/ic-like.svg';
import viewsIcon from '../img/ic-views.svg';
import commentIcon from '../img/ic-comment.svg';
import downloadIcon from '../img/ic-download.svg';

const loader = document.querySelector('span');
const galleryList = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
  scrollZoom: false,
  animationSpeed: 250,
});

function createGallery(images) {
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
              <img src="${likeIcon}" alt="Like icon" width="18" height="18">
              <p>${img.likes}</p>
            </div>
            <div class='metric'>
              <img src="${viewsIcon}" alt="Views icon" width="20" height="20">
              <p>${img.views}</p>
            </div>
            <div class='metric'>
              <img src="${commentIcon}" alt="Comments icon" width="20" height="20">
              <p>${img.comments}</p>
            </div>
            <div class='metric'>
              <img src="${downloadIcon}" alt="Downloads icon" width="20" height="20">
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

function clearGallery() {
  galleryList.innerHTML = '';
}

function showLoader() {
  loader.classList.add('loader');
}

function hideLoader() {
  loader.classList.remove('loader');
}

export { createGallery, clearGallery, showLoader, hideLoader };
