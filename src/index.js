import './styles.css';
import NewApiService from './api';
import hitsTpl from './hits.hbs';

const refs = {
    searchForm: document.querySelector('.js-search-form'),
    galleryContainer: document.querySelector('.js-gallery'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]'),
}

const newApiService = new NewApiService();
console.log(newApiService);

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(el) {
    el.preventDefault();
    
    newApiService.query = el.currentTarget.elements.query.value;
    
    newApiService.resetPage();
    newApiService.fetchArticles().then(appendHitsMarcup);
        
}
    function onLoadMore() {
        newApiService.fetchArticles().then(appendHitsMarcup);
        window.scrollTo({
    top: 1200,
    behavior: "behavior"
});
};

function appendHitsMarcup(hits) {
    refs.galleryContainer.insertAdjacentHTML('beforeend', hitsTpl(hits))
}

