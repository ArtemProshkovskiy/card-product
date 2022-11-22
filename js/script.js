const popupsHeaders = document.querySelectorAll('.down-menu_popup');

popupsHeaders.forEach(popupHeader => {
    const popupButtonHeader = popupHeader.querySelector('.down-menu_button');
    const popupMenu = popupHeader.querySelector(".popup_content");

    popupButtonHeader.addEventListener('click', function (e) {
        popupMenu.classList.toggle('open');

        document.addEventListener('click', (e) => {
            const withinBoundaries = e.composedPath().includes(popupButtonHeader);

            if (!withinBoundaries) {
                popupMenu.classList.remove('open');
            }
        })


    });
});


const applyButton = document.querySelector('.form_button-apply');

applyButton.addEventListener('click', function () {
    applyButton.classList.toggle('active');
});

const counters = document.querySelectorAll('[data-counter]');

if (counters) {
    counters.forEach(counter => {
        counter.addEventListener('click', e => {
            const target = e.target;
            let spanCount = target.closest('.counter').querySelector('p')

            if (target.closest('.counter__button')) {
                if (spanCount.innerText === '' && (target.classList.contains('counter__button_minus') || target.classList.contains('counter__button_plus'))) {
                    spanCount.innerText = 1
                }

                let value = parseInt(spanCount.innerText);

                if (target.classList.contains('counter__button_plus')) {
                    value++;
                } else {
                    --value;
                }

                if (value <= 1) {
                    value = 1;
                    target.closest('.counter').querySelector('.counter__button_minus').classList.add('disabled')
                } else {
                    target.closest('.counter').querySelector('.counter__button_minus').classList.remove('disabled')
                }

                spanCount.innerText = value + " шт.";
            }
        })
    })
}

const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function (item) {
                item.classList.remove('active');
            });

            tabsItems.forEach(function (item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.tabs__nav-btn').click();

const productSlider = document.querySelectorAll(".same-product")
console.log(productSlider)
productSlider.forEach(sliderWrapper => {
    new Swiper(sliderWrapper.querySelector(".swiper_same-product"), {
        // Navigation arrows
        navigation: {
            nextEl: sliderWrapper.querySelector('.swiper_product-button-next'),
            prevEl: sliderWrapper.querySelector('.swiper_product-button-prev'),
        },
        slidesPerView: 4,
    });
})

const swiperElements = document.querySelectorAll(".swiper_img")
swiperElements.forEach(slider => {
    new Swiper(slider, {
        // Navigation arrows
        navigation: {
            nextEl: slider.querySelector('.swiper_img-button-next'),
            prevEl: slider.querySelector('.swiper_img-button-prev'),
        },
    });
})

const swiperCard = new Swiper('.swiper-slider_card', {
  navigation: {
    nextEl: '.swiper-button-next_card',
    prevEl: '.swiper-button-prev_card',
  },
    loop: true,
    slidesPerView: 1,
    thumbs: {
      swiper: {
          el: '.swiper-virtual-slider_card',
          slidesPerView: 4,
      }
    },

});
