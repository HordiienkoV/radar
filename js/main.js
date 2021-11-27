let burger = document.querySelector('.header-top__burger')

burger.addEventListener('click', showTopMenu)

function showTopMenu() {
    let burgerMenu = document.querySelector('.header-top__nav')
    burgerMenu.classList.toggle('header-top__nav--active')
    if (burgerMenu.classList.contains('header-top__nav--active')) {
        burger.classList.add('header-top__burger--active')
        document.body.style.overflow = 'hidden'
    } else {
        burger.classList.remove('header-top__burger--active')
        document.body.style.overflow = 'visible'
    }
}

let headerBottomText = document.querySelector('.header-bottom__text')
let headerBottomList = document.querySelector('.header-bottom__list')
let footerBottom = document.querySelector('.footer-bottom')
let footerBottomItem = document.querySelector('.footer-bottom__items')
let footerBottomInner = footerBottomItem.innerHTML;
if (window.innerWidth < 601) {
    headerBottomText.insertAdjacentElement('beforeEnd', headerBottomList)
    headerBottomText.addEventListener('click', showServices)
    function showServices() {
        headerBottomList.classList.toggle('header-bottom__list--active')
    }
    footerBottomItem.remove()
    footerBottom.innerHTML += footerBottomInner;
}
let footerTopTitle = document.querySelectorAll('#footer-top-btn')
if (window.innerWidth <= 481) {
    const infoSwiper = new Swiper('.info-swiper.swiper', {
        loop: true,
        watchOverflow: true,
        autoHeight: true,
        pagination: {
            el: '.info-pagination.swiper-pagination',
            type: 'bullets',
        }
    })
    const protectSwiper = new Swiper('.protect-swiper.swiper', {
        loop: true,
        watchOverflow: true,
        slidesPerView: 1,
        spaceBetween: 5,
        pagination: {
            el: '.protect-pagination.swiper-pagination',
            type: 'bullets',
        },
        breakpoints: {
            321: {
                slidesPerView: 2,
            }
        }
    })
    for (let i = 0; i < footerTopTitle.length; i++) {
        footerTopTitle[i].addEventListener('click', function () {
            this.nextElementSibling.classList.toggle('footer-top__list--active')
        })
    }
}


const realizedSwiper = new Swiper('.realized-swiper.swiper', {
    loop: true,
    spaceBetween: 24,
    centeredSlides: true,
    watchOverflow: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.realized-pagination.swiper-pagination',
        type: 'bullets',
    },
    breakpoints: {
        1600: {
            slidesPerView: 2,
        },
        1279: {
            slidesPerView: 1.5,
        },
        991: {
            spaceBetween: 15,
            slidesPerView: 1.1,
        },
        599: {
            spaceBetween: 0,
            slidesPerView: 1,
        }
    }
});
const aboutSwiper = new Swiper('.about-swiper.swiper', {
    loop: true,
    spaceBetween: 24,
    watchOverflow: true,
    autoHeight: true,
    pagination: {
        el: '.about-pagination.swiper-pagination',
        type: 'bullets',
    },
    breakpoints: {
        599: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        601: {
            slidesPerView: 2,
        }
    }
})

let questionBtn = document.querySelectorAll('.question__item-title');
for (let i = 0; i < questionBtn.length; i++) {
    questionBtn[i].addEventListener('click', showText)
    function showText() {
        let secondDash = this.querySelector('.second-dash')
        this.nextElementSibling.classList.toggle('question__item-text--active');
        if (this.nextElementSibling.classList.contains('question__item-text--active')) {
            secondDash.classList.add('question__btn--active')
        } else {
            secondDash.classList.remove('question__btn--active')
        }
    }
}
let consultationSelect = document.querySelector('.consultation__select-wrap')
let consultationOptions = document.querySelector('.consultation__option-wrap')
let consultationSelectArrow = consultationSelect.querySelector('svg')
consultationSelect.addEventListener('click', showOptions)
function showOptions() {
    consultationOptions.classList.toggle('consultation__option-wrap--active')
    if (consultationOptions.classList.contains('consultation__option-wrap--active')) {
        consultationSelectArrow.style.transform = "rotate(180deg)"
    } else {
        consultationSelectArrow.style.transform = "rotate(0deg)"
    }
}