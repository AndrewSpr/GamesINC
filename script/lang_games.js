//массив, содержащий в себе языковые ключи

const langArr = {
	home: {
		en: 'Home',
		ru: 'Главная',
		ua: 'Головна',
	},

	about: {
		en: 'About us',
		ru: 'О нас',
		ua: 'Про нас',
	},

	games: {
		en: 'Games',
		ru: 'Игры',
		ua: 'Ігри',
	},

	slideButton: {
		en: 'start',
		ru: 'начать',
		ua: 'почати',
	},

	termsOfUse: {
		en: 'Terms of use of the site',
		ru: 'Условия использования сайта',
		ua: 'Умови користування сайтом',
	},

	protection: {
		en: 'Protection of personal information',
		ru: 'Защита личной информации',
		ua: 'Захист особистої інформації',
	},

	siteMap: {
		en: 'Site map',
		ru: 'Карта сайта',
		ua: 'Карта сайту',
	},

	mediaTitle: {
		en: 'Social media',
		ru: 'Наши соц. сети',
		ua: 'Наші соц. мережі',
	},

	contactTitle: {
		en: 'Contact us',
		ru: 'Свяжитесь с нами',
		ua: 'Зв`яжіться з нами',
	},

	aimTitle: {
		en: 'Aim training',
		ru: 'Тренировка меткости',
		ua: 'Тренування влучності',
	},

	bounceTitle: {
		en: 'Bounce',
		ru: 'Попрыгун',
		ua: 'Пострибун',
	},

	snakeTitle: {
		en: 'Snake',
		ru: 'Змейка',
		ua: 'Змійка',
	},
}

const select = document.querySelector('select') //указываем на активное значение языка
const Lang = ['en', 'ru', 'ua'] //массив со всеми значениями языка

select.addEventListener('change', changeURLLanguage) //создаем ивент смены языка

function changeURLLanguage() {
	//реализуем его путём добавление к ссылке # + значение языка, en/ru/ua, исходя из значения переменной select. соответственно
	let lang = select.value //переменная которая будет отвечать за хранение данных об текущем языке
	location.href = window.location.pathname + '#' + lang //перенаправляем УРЛ
	location.reload() //перезагружаем страницу, чтобы изменения вступили в силу
}

function changeLang() {
	//реализуем смену языка путём поиска соответствующих классов через querySelector и присвоения им соответствующего ключа из langArr
	let langHash = window.location.hash //создаем переменную, которая будет хранить в себе хэш языка
	langHash = langHash.substr(1) //забираем текущее значение переменной
	console.log(langHash) //выводим значение переменной в консоль
	if (!Lang.includes(langHash)) {
		//проверяем URL на соответствие с массивом Lang
		location.href = window.location.pathname + '#en' //в случае несоответствия перенаправляем пользователя на английскую версию сайта
		location.reload()
	}

	//дальнейший говнокод является ИСТИННЫМ говнокодом, похлеще того, что вы видели выше, поэтому рекомендуются прочитать молитву и закапать глаза святой водой. А лучше закрыть файл, пока ещё не поздно. Если вы решились продолжить чтение - рекомендую приготовиться к обилию дерьма

	select.value = langHash //устанавливаем значение, которое выбрал пользователь, в поле select
	//через queryselector ищем вручную перебираем все требующие перевода элементы и устанавливаем им необходимые ключи
	//для кнопки слайдера

	//для линка в футере
	document.querySelector('.about-link--terms').innerHTML =
		langArr['termsOfUse'][langHash]
	document.querySelector('.about-link--protection').innerHTML =
		langArr['protection'][langHash]
	document.querySelector('.about-link--map').innerHTML =
		langArr['siteMap'][langHash]

	document.querySelector('.game__title--aim').innerHTML =
		langArr['aimTitle'][langHash]
	document.querySelector('.game__title--bounce').innerHTML =
		langArr['bounceTitle'][langHash]
	document.querySelector('.game__title--snake').innerHTML =
		langArr['snakeTitle'][langHash]

	document.querySelector('.button--aim').innerHTML =
		langArr['slideButton'][langHash]
	document.querySelector('.button--bounce').innerHTML =
		langArr['slideButton'][langHash]
	document.querySelector('.button--snake').innerHTML =
		langArr['slideButton'][langHash]
	//попытка автоматизировать работу через цикл, которые должен был искать подходящие значения, добавляя к ним ключ, пока не будут получаться элементы, требующие перевода. Данный цикл возможен в однок экхемпляре, неизвестно почему. Именно это стало причиной ручной проходки

	document.querySelector('.info-col__title--contact').innerHTML =
		langArr['contactTitle'][langHash]
	document.querySelector('.info-col__title--media').innerHTML =
		langArr['mediaTitle'][langHash]

	for (let key in langArr) {
		document.querySelector(`.item__m-link-${key}`).innerHTML =
			langArr[key][langHash]
		document.querySelector('.item__link-' + key).innerHTML =
			langArr[key][langHash]
	}
}

changeLang()
