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

	textTrain: {
		en: 'Train your AIM with us and reach heights',
		ru: 'Тренируй свой АИМ вместе с нами и достигай высот',
		ua: 'Тренуй свій АІМ разом з нами та досягай висот',
	},

	textPlay: {
		en: 'Play the Google dinosaur analog, without turning off the Internet',
		ru: 'Играйте в аналог гугл-динозавров, не выключая интернет',
		ua: 'Грайте в аналог гугл-динозаврів, не вимикаючи інтернет',
	},

	textRemember: {
		en: 'Remember your childhood playing the popular Snake-game',
		ru: 'Вспомните свое детство, играя в популярную игру - змейку',
		ua: 'Згадайте дитинство, граючи в гру - змійку.',
	},

	textEnjoy: {
		en: 'Enjoy every moment with our games',
		ru: 'Наслаждайтесь каждым моментом с нашими играми',
		ua: 'Насолоджуйтесь кожною миттю з нашими іграми',
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

	addGameTitle: {
		en: 'Are you a developer? Do you want to add your game to our website? Everything is very simple!',
		ru: 'Вы разработчик? Вы хотите добавить свою игру на наш сайт? Все очень просто!',
		ua: 'Ви розробник? Ви бажаєте додати свою гру на наш сайт? Все дуже просто!',
	},

	addGameSubTitle: {
		en: 'All you need to do is fill out a small form so that we can carry out quality control of your game. We guarantee you fast and high-quality testing',
		ru: 'Все, что вам нужно сделать, это заполнить небольшую форму, чтобы мы могли провести контроль качества вашей игры. Гарантируем быстрое и качественное тестирование',
		ua: 'Все, що вам потрібно зробити, це заповнити невелику форму, щоб ми могли контролювати якість вашої гри. Ми гарантуємо швидке та якісне тестування',
	},

	addGameButton: {
		en: 'Send a request',
		ru: 'Отправить заявку',
		ua: 'Відправити заявку',
	},

	siteNew: {
		en: 'We`ve updated our website! Now it is much more comfortable and beautiful. Enjoy your new design with us. And we also added new ones ...',
		ru: 'Мы обновили наш веб-сайт! Теперь он намного комфортнее и красивее. Наслаждайтесь новым дизайном вместе с нами. А также мы добавили новые...',
		ua: 'Ми оновили наш веб-сайт! Тепер він набагато комфортніший і красивіший. Насолоджуйтесь новим дизайном разом із нами. А також ми додали нові...',
	},

	snakeNew: {
		en: 'We have finished development of our third game - the snake! Now you can finally remember your childhood and try your skills years later ...',
		ru: 'Мы закончили разработку своей третьей игры - змейка! Теперь вы наконец-то можете вспомнить детство и попробовать свои навыки спустя года ...',
		ua: 'Ми закінчили розробку своєї третьої гри – змійка! Тепер ви нарешті можете згадати дитинство і спробувати свої навички через роки',
	},

	bounceNew: {
		en: 'We are pleased to inform you that we have completed the development of the second game in a row. We have been working for a long time and we hope that you will appreciate it. The game is called ...',
		ru: 'С радостью сообщаем вам, что мы закончили разработку второй игры по счету. Мы вели долгую работу и надеемся, что вы оцените её. Игра называется ...',
		ua: 'З радістю повідомляємо вам, що ми закінчили розробку другої гри. Ми вели довгу роботу і сподіваємось, що ви оціните її. Гра називається ...',
	},

	aimNew: {
		en: 'Good day, readers. We are glad to welcome you to our website. The subject of this site is games developed by our company ...',
		ru: 'Доброго времени суток, читатели. Мы рады приветствовать вас на нашем сайте. Тематикой данного сайта является игры, разработанные нашей компанией ...',
		ua: 'Доброго часу, читачі. Ми раді вітати Вас на нашому сайті. Тематикою даного сайту є ігри, розроблені нашою компанією.',
	},

	popUpTextTitle: {
		en: 'Your name',
		ru: 'Ваше имя',
		ua: 'Ваше им`я',
	},

	popUpEmailTitle: {
		en: 'Email',
		ru: 'электронная почта',
		ua: 'электронна пошта',
	},

	popUpTextareaTitle: {
		en: 'briefly describe your gamet',
		ru: 'Кратко опишите вашу игру',
		ua: 'Коротко опишіть вашу гру',
	},

	popUpModalBtn: {
		en: 'Send',
		ru: 'Отправить',
		ua: 'Відправити',
	},

	newsTitle: {
		en: 'Latest News',
		ru: 'Последние новости',
		ua: 'Останні новини',
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
	document.querySelector('.button--slide_lang').innerHTML =
		langArr['slideButton'][langHash]
	//для текста слайдера
	document.querySelector('.slide__text--train').innerHTML =
		langArr['textTrain'][langHash]
	document.querySelector('.slide__text--play').innerHTML =
		langArr['textPlay'][langHash]
	document.querySelector('.slide__text--remember').innerHTML =
		langArr['textRemember'][langHash]
	document.querySelector('.slide__text--enjoy').innerHTML =
		langArr['textEnjoy'][langHash]
	//для линка в футере
	document.querySelector('.about-link--terms').innerHTML =
		langArr['termsOfUse'][langHash]
	document.querySelector('.about-link--protection').innerHTML =
		langArr['protection'][langHash]
	document.querySelector('.about-link--map').innerHTML =
		langArr['siteMap'][langHash]
	//попытка автоматизировать работу через цикл, которые должен был искать подходящие значения, добавляя к ним ключ, пока не будут получаться элементы, требующие перевода. Данный цикл возможен в однок экхемпляре, неизвестно почему. Именно это стало причиной ручной проходки
	document.querySelector('.add-game__title--lang').innerHTML =
		langArr['addGameTitle'][langHash]
	document.querySelector('.add-game__sub-title--lang').innerHTML =
		langArr['addGameSubTitle'][langHash]
	document.querySelector('.button--add-game').innerHTML =
		langArr['addGameButton'][langHash]
	//для новостного блока
	document.querySelector('.blog__title--aim').innerHTML =
		langArr['aimNew'][langHash]
	document.querySelector('.blog__title--bounce').innerHTML =
		langArr['bounceNew'][langHash]
	document.querySelector('.blog__title--snake').innerHTML =
		langArr['snakeNew'][langHash]
	document.querySelector('.blog__title--site').innerHTML =
		langArr['siteNew'][langHash]
	//для поп-апа
	document.querySelector('.input__title--text').innerHTML =
		langArr['popUpTextTitle'][langHash]
	document.querySelector('.input__title--email').innerHTML =
		langArr['popUpEmailTitle'][langHash]
	document.querySelector('.input__title--textarea').innerHTML =
		langArr['popUpTextareaTitle'][langHash]
	document.querySelector('.button--modal').innerHTML =
		langArr['popUpModalBtn'][langHash]

	document.querySelector('.news__title').innerHTML =
		langArr['newsTitle'][langHash]

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
