document.addEventListener('DOMContentLoaded',function() {
    var NewsListScrollToTopBtn = document.getElementById('news-list-scroll-to-top-btn');

    NewsListScrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
})