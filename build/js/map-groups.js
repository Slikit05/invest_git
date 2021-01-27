$(document).ready(function () {
	$("#city").selectmenu({
		select: function (event, ui) {
			if (!window.city) return false;
			if (!window.js_yandex_map) return false;

			var
				val = 0;

			if (this.value)
				val = parseInt(this.value);

			if (val) {
				if (window.city.items[val]) {
					var
						city = window.city.items[val],
						coord = city.center;
					window.js_yandex_map.setCenter(coord, 14);

				}
				console.log(window.city.items[val]);
			}
			addMarkers(this.value);
		}
	});
});

function addMarkers(id) {
	if (typeof id === 'undefined') return false;
	if (!window.groups) return false;
	if (!window.js_yandex_map) return false;
	var item = false;
	try {
		js_yandex_map.geoObjects.removeAll();
		for (j in groups[id]['items']) {
			item = groups[id]['items'][j];

			var myBalloonContentLayout_html = '';

			myBalloonContentLayout_html += '' +
				'<div class="balloon-wrap">';

			myBalloonContentLayout_html += '' +
				'<div class="ballun-up">' +
					'<h4 class="ballun-up__caption">' + 'Дополнительный офис ОАО «ЮГ-Инвестбанк» в г. Краснодаре, ул. Зиповская, 8' + '</h4>' +
				'</div>' + 
				'<div class="ballun-row">' + 
					'<div class="ballun-wrap-icon">' +
						'<img src="../img/address-icon.svg">' + 
					'</div>' +
					'<span class="ballun-text">' + 'г. Краснодар, ул. Зиповская, 8' + '</span>' + 
				'</div>' + 
				'<div class="ballun-row">' +
					'<div class="ballun-wrap-icon">' +
						'<img src="../img/tel.svg">' +
					'</div>' + 	
					'<span class="ballun-text">' + '<b>' + '(861) 201-93-56, 201-93-57, 201-93-58' + '</b>' + '</span>' + 
				'</div>' + 
				'<div class="ballun-row">' +
					'<div class="ballun-wrap-icon">' +
						'<img src="../img/mail.svg">' + 
					'</div>' + 	
					'<a class="ballun-mail" href="mailto:">' + 'zip@invb.ru' + '</a>' + 
				'</div>' + 
				'<div class="ballun-down">' + 
					'<a class="ballun-link" href="#">' + 'подробнее' + '</a>' + 
				'</div>';

			

			myBalloonContentLayout = ymaps.templateLayoutFactory.createClass('' + myBalloonContentLayout_html, {
				build: function () {
					myBalloonContentLayout.superclass.build.call(this);
				},
				clear: function () {},
			});
			// Создаем метку.
			var placemark = new ymaps.Placemark(groups[id]['items'][j].center, {
				hintContent: "Хинт метки",
				//balloonContent: groups[id]['items'][j].name
			}, {
				balloonContentLayout: myBalloonContentLayout,
				hasBalloon: true,
				iconLayout: 'default#image',
				iconImageHref: 'http://localhost:3000/img/mark.svg',
				iconImageSize: [52, 80],
				iconImageOffset: [-5, -18]
			});

			js_yandex_map.geoObjects.add(placemark);
		}

	} catch (e) {
		console.log(e);
	}


	return true;
}


$(document).ready(function () {
	//v-1
	ymaps.ready(init);

	function init() {

		// Создание экземпляра карты.
		var myMap = new ymaps.Map('map', {
			center: [55.755814, 37.617635],
			zoom: 14
		}, {
			searchControlProvider: 'yandex#search'
		});

		myMap.behaviors
			// Отключаем часть включенных по умолчанию поведений:
			//  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
			.disable(['rightMouseButtonMagnifier', 'scrollZoom'])

		// Изменяем свойство поведения с помощью опции:
		// изменение масштаба колесом прокрутки будет происходить медленно,
		// на 1/2 уровня масштабирования в секунду.
		//  myMap.options.set('scrollZoomSpeed', 1);


		// Контейнер для меню.
		menu = $('<ul class="map-filter__mark-list"></ul>');

		// console.log(menu);
		for (var i = 0, l = groups.length; i < l; i++) {
			$('<li class="map-filter__mark-item"><a class="map-filter__mark-link" href="javascript:addMarkers(' + i + ')">' + groups[i]['name'] + '</a></li>').appendTo(menu);

			for (j in groups[i]['items']) {
				var myBalloonContentLayout_html = '';

				myBalloonContentLayout_html += '' +
					'<div class="city__balloon">' +
					'  <div class="row no-gutters">';

				if (groups[i]['items'][j]['image']) {
					myBalloonContentLayout_html += '' +
						'  <div class="col-auto">' +
						'    <a href="' + groups[i]['items'][j]['link'] + '" class="city__balloon-image">' +
						'        <img src="' + groups[i]['items'][j]['image'] + '" />' +
						'        <div class="city__balloon-image-marker">' + groups[i]['items'][j]['discount'] + '</div>' +
						'    </a>' +
						'  </div>';
				}

				myBalloonContentLayout_html += '' +
					'  <div class="col">' +
					'    <div class="city__balloon-content">' +
					'        <a href="' + groups[i]['items'][j]['link'] + '" class="city__balloon-name">' + groups[i]['name'] + '</a>' +
					'        <span class="city__balloon-address">' + groups[i]['items'][j]['address'] + '</span>' +
					'        <span class="city__balloon-price">' + groups[i]['items'][j]['price'] + '</span>' +
					'        <span class="city__balloon-reviews">' + groups[i]['items'][j]['reviews'] + '</span>' +
					'    </div>' +
					'  </div>' +
					'  </div>' +
					'</div>';

				myBalloonContentLayout = ymaps.templateLayoutFactory.createClass('' + myBalloonContentLayout_html, {
					build: function () {
						myBalloonContentLayout.superclass.build.call(this);
					},
					clear: function () {},
				});
				// Создаем метку.
				var placemark = new ymaps.Placemark(groups[i]['items'][j].center, {
					balloonContentLayout: myBalloonContentLayout,
				});

				myMap.geoObjects.add(placemark);
			}
		}

		window.js_yandex_map = myMap;
	}
});