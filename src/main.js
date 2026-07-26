import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, showLoader, hideLoader } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

async function loadImages(query) {
  showLoader();

  try {
    const data = await getImagesByQuery(query);
    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        theme: 'light',
        position: 'topRight',
      });
      return;
    }
    createGallery(data.hits);
  } catch (error) {
    console.error(error);
  } finally {
    hideLoader();
  }
}

const form = document.querySelector('.form');
const searchInput = document.querySelector('input[name="search-text"]');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const searchValue = searchInput.value.trim();

  if (!searchValue) {
    iziToast.error({
      message: 'Please enter a search query',
      theme: 'light',
      position: 'topRight',
    });

    return;
  }

  loadImages(searchValue);
}
