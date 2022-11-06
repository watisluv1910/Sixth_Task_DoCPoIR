let notificationButton = document.querySelector('.btn-notify');

// Add click event listener to the button to add and remove active class
notificationButton.addEventListener('click', function() {
    if (!notificationButton.classList.contains('active')) {
        notificationButton.classList.add('active');
    }
});

// Add mouseover event listener to the button to remove active class
notificationButton.addEventListener('focusout', function() {
    if (notificationButton.classList.contains('active')) {
        notificationButton.classList.remove('active');
    }
});