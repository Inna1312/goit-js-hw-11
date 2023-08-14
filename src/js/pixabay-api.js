import axios from "axios";

export class PixabayAPI {
    #BASE_URL = 'https://pixabay.com/api/';
    #API_KEY = '38793454-fa2bc2c38fb343cb826e2dd02';

    page = 1;
    query = null;
    per_page = 40;

    async fetchPhotos() {
         const searchParams = new URLSearchParams({
             key: this.#API_KEY,
             image_type: 'photo',
             orientation: 'horizontal',
             safesearch: true,
             per_page: this.per_page,
             q: this.q,
             page: this.page,
         }
         );
        return await axios.get(`${this.#BASE_URL}?${searchParams}`);
    }
    
     changePage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}