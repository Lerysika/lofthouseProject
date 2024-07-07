//nav icon

const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header_top-row')

navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header_top-row--mobile');
    document.body.classList.toggle('no-scroll');
}

//Phone mask
mask('[data-tel-input]');

// Удаляем '+' если больше ничего не введено, чтобы показать placeholder
const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input) => {
    input.addEventListener('input', () => {
        if (input.value == '+') input.value = '';
    })
    input.addEventListener('blur', () => {
        if (input.value == '+') input.value = '';
    })
});

//yandex map

initMap();

async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer} = ymaps3;

    // Иницилиазируем карту
    const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('map'),

        // Передаём параметры инициализации карты
        {
            location: {
                // Координаты центра карты
                center: [30.338928, 59.943543],

                // Уровень масштабирования
                zoom: 16
            }
        }
    );


    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer());

    const markerElement = document.createElement('div');
markerElement.className = 'marker-class';
markerElement.innerText = "I'm marker!";

const marker = new YMapMarker(
  {
    source: 'markerSource',
    coordinates: [30.338928, 59.943543],
    draggable: true,
    mapFollowsOnDrag: true
  },
  markerElement
);

map.addChild(marker);
}



