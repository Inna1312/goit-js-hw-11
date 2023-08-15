
import axios from 'axios';

export default class PixabayAPI {
  #BASE_KEY = '38793454-fa2bc2c38fb343cb826e2dd02';
  #BASE_URL = 'https://pixabay.com/api/';

  page = 1;
  query = null;
  per_page = 40;

  async fetchImages() {
    const baseSearchParams = new URLSearchParams({
      key: this.#BASE_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: this.per_page,
      page: this.page,
      q: this.query,
    });

    const data = await axios.get(`${this.#BASE_URL}?${baseSearchParams}`);
    return data;
  }

  changePage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}