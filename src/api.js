export default class NewApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    
    fetchArticles() {          
        const API_KEY = '21271693-9f15050c6f3761d48e024dcb2';
        const BASE_URL = 'https://pixabay.com/';
      
    return fetch(`${BASE_URL}api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                this.page += 1;
                return data.hits;
            })
            .catch(
                console.log()
            )
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }

}


// Тебе интересны следующие свойства:

// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение (смотри пункт 'дополнительно')
// likes - количество лайков
// views - количество просмотров
// comments - количество комментариев
// downloads - количество загрузок

// const options = {
//             headers: {
//                 authorization: '21271693-9f15050c6f3761d48e024dcb2'
//             },
//         };
//         // const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12`
//         fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=cat`, options)
//             .then(r => r.json())
//             .then(console.log);