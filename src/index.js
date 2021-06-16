import './styles.css';
import NewApiService from './api';
import hitsTpl from './hits.hbs';

const refs = {
    searchForm: document.querySelector('.js-search-form'),
    galleryContainer: document.querySelector('.js-gallery'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]'),
    imageClick: document.querySelector('.photo-card'),
}

const newApiService = new NewApiService();
console.log(newApiService);

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(el) {
    el.preventDefault();

    newApiService.query = el.currentTarget.elements.query.value;
    
    if (newApiService.query === '') {
        return alert("TRY SEARCH FORM!!!")
    } 
        
    newApiService.resetPage();
    newApiService.fetchArticles().then(hits => {
        clearHitsContainer();
        appendHitsMarcup(hits);
    });
    refs.loadMoreBtn.removeAttribute("disabled");
}

function onLoadMore() {
    const scrollValue = document.documentElement.scrollHeight;
    console.log(scrollValue);
    
        newApiService.fetchArticles().then(appendHitsMarcup);
     setTimeout(() => {
         window.scrollTo({
            left: 0,
            top: scrollValue,
            behavior: 'smooth'
        });   
        }, 500)              
};

function appendHitsMarcup(hits) {
    refs.galleryContainer.insertAdjacentHTML('beforeend', hitsTpl(hits))
};

function clearHitsContainer() {
    refs.galleryContainer.innerHTML = '';
};

