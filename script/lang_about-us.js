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

	andrewTitle: {
		en: 'Andrew. Responsible for the development of the client side of the site',
		ru: 'Андрей. Отвечает за разработку клиентской части сайта',
		ua: 'Андрій. Відповідає за меню клієнтської частини сайту',
	},

	olegTitle: {
		en: 'Oleg. Server side developer and responsible for game development',
		ru: 'Олег. Разработчик серверной части и отвечает за разработку игр',
		ua: 'Олег. Розробник серверної частини та відповідає за розробку ігор',
	},

	artemTitle: {
		en: 'Artyom. Andrey`s assistant, designer responsible for the look and feel of our website and games',
		ru: 'Артём. Помощник Андрея, дизайнер, отвечающий за внешний вид нашего сайта и игр',
		ua: 'Артем. Помічник Андрія, дизайнер, який відповідає за зовнішній вигляд нашого сайту та ігор',
	},

	maximTitle: {
		en: 'Maksim. He is the person responsible for the SEO and optimization of our website on the Internet. Also responsible for filling the site',
		ru: 'Максим. Является лицом, ответственным за СЕО и оптимизацию нашего веб-сайта на просторах интернета. Также ответственен за наполнение сайта',
		ua: 'Максим. Особа, відповідальна за СЕО та оптимізацію нашого веб-сайту на просторах інтернету. Також відповідальний за наповнення сайту',
	},

	igorTitle: {
		en: 'Igor. QA leader in our team. Responsible for testing games and website for various bugs and shortcomings',
		ru: 'Игор. Лидер QA в нашей команде. Ответственен за тестирование игр и веб-сайта на наличие различных багов и недочётов',
		ua: 'Ігор. Лідер QA у нашій команді. Відповідальний за тестування ігор та веб-сайту на наявність різних багів та недоліків',
	},

	stasTitle: {
		en: 'Stas. QA. Igor`s assistant. Responsible for testing the front-end and back-end of the website',
		ru: 'Стас. QA. Помощник Игоря. Ответственен за тестирование клиентской и серверной части веб-сайта',
		ua: 'Стас. QA. Помічник Ігоря. Відповідальний за тестування клієнтської та серверної частини веб-сайту',
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
	//попытка автоматизировать работу через цикл, которые должен был искать подходящие значения, добавляя к ним ключ, пока не будут получаться элементы, требующие перевода. Данный цикл возможен в однок экхемпляре, неизвестно почему. Именно это стало причиной ручной проходки

	document.querySelector('.info-col__title--contact').innerHTML =
		langArr['contactTitle'][langHash]
	document.querySelector('.info-col__title--media').innerHTML =
		langArr['mediaTitle'][langHash]

	document.querySelector('.about-us__title--andrew').innerHTML =
		langArr['andrewTitle'][langHash]
	document.querySelector('.about-us__title--oleg').innerHTML =
		langArr['olegTitle'][langHash]
	document.querySelector('.about-us__title--artem').innerHTML =
		langArr['artemTitle'][langHash]
	document.querySelector('.about-us__title--maxim').innerHTML =
		langArr['maximTitle'][langHash]
	document.querySelector('.about-us__title--igor').innerHTML =
		langArr['igorTitle'][langHash]
	document.querySelector('.about-us__title--stas').innerHTML =
		langArr['stasTitle'][langHash]

	for (let key in langArr) {
		document.querySelector(`.item__m-link-${key}`).innerHTML =
			langArr[key][langHash]
		document.querySelector('.item__link-' + key).innerHTML =
			langArr[key][langHash]
	}
}

changeLang()
