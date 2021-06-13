function updateAge() {
    let age = document.querySelector("#age"),
        date = new Date();

    let calculatedAge = date.getFullYear() - 2000;

    if ((date.getMonth() + 1 < 9) || (date.getMonth() + 1 === 9 && date.getDate() < 5)) {
        calculatedAge -= 1;
    }

    age.innerHTML = calculatedAge;
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function checkFAB() {
    let fab = document.querySelector(".btn-fab");
    
    if (window.scrollY >= 900 && window.innerWidth >= 512) {
        fab.classList.add("animate__bounceIn");
        fab.classList.remove("animate__bounceOut");
    } else {
        fab.classList.add("animate__bounceOut");
        fab.classList.remove("animate__bounceIn");
    }
}

function init() {
    checkFAB();
    updateAge();
}

window.onscroll = function(e) {
    checkFAB();
}