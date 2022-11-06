let loaderButton = document.querySelector('.loader-btn');

loaderButton.addEventListener('click', function() {
    loaderButton.classList.add('loading');
    setTimeout(function() {
        loaderButton.classList.remove('loading');
    }
    , 30000);
});