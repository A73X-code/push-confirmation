var translation = {
	source: {
		title: 'Click Allow',
		text1: 'Click «Allow» to confirm that you are not a robot!'
	},
	en: {
		title: 'Click Allow',
		text1: 'Click «Allow» to confirm that you are not a robot!'
	},
	ar: {
		title: 'انقر تمكين',
		text1: 'انقر فوق "السماح" لتأكيد أنّك لست إنسانًا آليًا!',
	},
	bg: {
		title: 'Натиснете Разреши',
		text1: 'Кликни «Разреши», за да потвърдиш, че не си робот!',
	},
	cs: {
		title: 'Stiskněte Povolit',
		text1: 'Kliknutím na «Povolit» potvrďte, že nejste robot!',
	},
	nl: {
		title: 'Druk op Toestaan',
		text1: 'Klik op \'Toestaan\' om te bevestigen dat je geen robot bent!',
	},
	fr: {
		title: 'Appuyez sur Autoriser',
		text1: 'Cliquez sur « autoriser » pour confirmer que vous n\'êtes pas un robot !',
	},
	de: {
		title: 'Zulassen drücken',
		text1: 'Klicken Sie auf „Erlauben“, um zu bestätigen, dass Sie kein Roboter sind!',
	},
	hu: {
		title: 'Nyomj az Engedélyezésre',
		text1: 'Kattints az «Engedélyez» gombra annak megerősítéséhez, hogy nem vagy robot!',
	},
	it: {
		title: 'Premi Autorizza',
		text1: 'Clicca su «Consenti» per confermare di non essere un robot!',
	},
	ja: {
		title: '「許可」を押します',
		text1: '«許可»をクリックして、ロボットではないことを確認してください！',
	},
	ko: {
		title: '허용을 누르세요',
		text1: '로봇이 아니라는 것을 확인하려면 «Allow»를 클릭하세요!',
	},
	pl: {
		title: 'Naciśnij przycisk Zezwól',
		text1: 'Kliknij „Zezwól”, by potwierdzić, że nie jesteś robotem!',
	},
	ro: {
		title: 'Apăsați „Permiteți”',
		text1: 'Dați clic pe „Permite” pentru a confirma că nu sunteți robot!',
	},
	ru: {
		title: 'Нажмите "Разрешить"',
		text1: 'Нажмите «Разрешить» для подтверждения что Вы не робот!',
	},
	sr: {
		title: 'Притисните Дозволи',
		text1: 'Кликните на «Дозволи» да бисте потврдили да нисте робот!',
	},
	es: {
		title: 'Pulsa en Permitir',
		text1: '¡Haz clic en "Permitir" para confirmar que no eres un robot!',
	},
	th: {
		title: 'กดอนุญาต',
		text1: 'ฉคลิก «อนุญาต» เพื่อยืนยันว่าคุณไม่ใช่หุ่นยนต์!',
	},
	uk: {
		title: 'Натисніть Дозволити',
		text1: 'Натисніть "Дозволити", щоб довести, що ви не робот!',

	},
	zh: {
		title: '按下允许',
		text1: '点击«允许»，以确认您并非机器人！',
	},
	fa: {
		title: 'اجازه دادن را بزنید ',
		text1: 'روی «اجازه دادن» بزنید تا مشخص شود که ربات نیستید!',
	},
	pt: {
		title: 'Prima Permitir',
		text1: 'Clique em «Permitir» para confirmar que não é um robô!',
	},
	no: {
		title: 'Klikk Tillat',
		text1: 'Klikk «Tillat» for å bekrefte at du ikke er en robot!',
	},
	sk: {
		title: 'Kliknite na Povoliť',
		text1: 'Kliknutím na tlačidlo "Povoliť" potvrďte, že nie ste robot!',
	},
	el: {
		title: 'Κάντε κλικ στην επιλογή Να επιτρέπεται',
		text1: 'Κάντε κλικ στο κουμπί «Επιτρέπεται» για να επιβεβαιώσετε ότι δεν είστε ρομπότ!',
	},
	lv: {
		title: 'Spustelėkite Leisti',
		text1: 'Spustelėkite «Leisti», kad patvirtintumėte, jog nesate robotas!',
	},
	lt: {
		title: 'Noklikšķiniet uz Atļaut',
		text1: 'Noklikšķiniet uz «Atļaut», lai apstiprinātu, ka neesat robots!',
	},
	ee: {
		title: 'Klõpsake nuppu Luba',
		text1: 'Vajuta «Luba», et kinnitada, et te ei ole robot!',
	},
	hi: {
		title: 'अनुमति दें पर क्लिक करें',
		text1: '«पुष्टि करें» पर क्लिक करें कि आप रोबोट नहीं हैं!',
	},
	my: {
		title: 'Klik Benarkan',
		text1: 'Klik «Benarkan» untuk mengesahkan bahawa anda bukan robot!',
	},
	hr: {
		title: 'Kliknite Dopusti',
		text1: 'Kliknite «Dopusti» da biste potvrdili da niste robot!',
	},
	bn: {
		title: 'অনুমতি দিন ক্লিক করুন',
		text1: 'আপনি একটি রোবট না নিশ্চিত করতে «অনুমতি» ক্লিক করুন!'
	},
	tr: {
		title: 'İzin Ver Düğmesine Bas',
		text1: 'Robot olmadığını onaylamak için «İzin Ver» düğmesine tıkla!',
	}
};

var rtlLangs = ['ar', 'fa'];

var browserLang = detect_language();
var siteLang = getParameterByName("siteLang", false);
var extTpl = getParameterByName("extTpl", 1);

/** docReady provides a method of scheduling one or more javascript functions to run at some later point when the DOM has finished loading. */
!function(t,e){"use strict";function n(){if(!a){a=!0;for(var t=0;t<o.length;t++)o[t].fn.call(window,o[t].ctx);o=[]}}function d(){"complete"===document.readyState&&n()}t=t||"docReady",e=e||window;var o=[],a=!1,c=!1;e[t]=function(t,e){return a?void setTimeout(function(){t(e)},1):(o.push({fn:t,ctx:e}),void("complete"===document.readyState||!document.attachEvent&&"interactive"===document.readyState?setTimeout(n,1):c||(document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):(document.attachEvent("onreadystatechange",d),window.attachEvent("onload",n)),c=!0)))}}("docReady",window);

function detect_language() {
	var userLang = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage;
	if (userLang == "zh-CN" || userLang == "zh-SG" || userLang == "zh-MY" || userLang == "zh-CHS") {
		userLang = "zh-Hans";
	} else if (userLang == "zh-HK" || userLang == "zh-MO" || userLang == "zh-TW" || userLang == "zh-CHT") {
		userLang = "zh-Hant";
	} else if (userLang.length > 2) {
		userLang = userLang[0] + userLang[1];
	}
	return userLang;
}

function replace_text(lang, text, objTrls) {
	var y = document.querySelectorAll("#"+text);

	if (y.length > 0) {
		for (var j=0; j < y.length; j++) {

			if(y[j].placeholder != undefined) {
				y[j].placeholder = objTrls[lang][text];
			} else {
				y[j].innerHTML = objTrls[lang][text];
			}
		}
	}  else {
		console.log("element not Found: " + text);
	}
}

function translation_available(objTrls, lang) {
	if (objTrls[lang]) {
		return lang;
	} else {
		console.log("Translation not Found: " + lang + ". Used default");
		return "source";
	}
}

function translate(siteLang, objTrls) {
	var lang = siteLang ? siteLang : browserLang;
	var availableLang = translation_available(objTrls, lang);

	var body = document.getElementsByTagName('body')[0];
	body.classList.add(lang);
	body.classList.add('style' + extTpl);

	body.style.height = window.innerHeight + "px";

	if(rtlLangs.indexOf(lang) !== -1) {
		body.classList.add('rtl');
		body.style.direction = 'rtl';
	}

	if (availableLang) {
		for (var x in objTrls["source"]) {
			replace_text(availableLang, x, objTrls);
		}
	}
}

function getParameterByName(name, defaultValue) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(location.search),
		value = defaultValue ? defaultValue : "";
	return results === null ? value : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var MESSAGES = {
	ru: {
		title: '... запрашивает разрешение на:',
		permission: 'Показ уведомлений',
		allow: 'Разрешить',
		disallow: 'Блокировать'
	},
	uk: {
		title: '... запрашивает разрешение на:',
		permission: 'Показ уведомлений',
		allow: 'Разрешить',
		disallow: 'Блокировать'
	},
	en: {
		title: '... wants to:',
		permission: 'Show notifications',
		allow: 'Allow',
		disallow: 'Block'
	},
	it: {
		title: '... chiede il permesso di:',
		permission: 'Mostra notifiche',
		allow: 'Permettere',
		disallow: 'Bloccare'
	},
	id: {
		title: '... meminta izin untuk:',
		permission: 'Tampilkan pemberitahuan',
		allow: 'Mengizinkan',
		disallow: 'Blok'
	},
	vi: {
		title: '... xin phép:',
		permission: 'Hiển thị thông báo',
		allow: 'Cho phép',
		disallow: 'Khối'
	},
	ar: {
		title: '... يطلب إذن ل:',
		permission: 'إظهار الإخطارات',
		allow: 'السماح',
		disallow: 'منع'
	},
	pl: {
		title: '... prosi o pozwolenie:',
		permission: 'Pokaż powiadomienia',
		allow: 'Dopuszczać',
		disallow: 'Blok'
	},
	pt: {
		title: '... pede permissão para:',
		permission: 'Mostrar notificações',
		allow: 'Permitir',
		disallow: 'Quadra'
	},
	fr: {
		title: '... demande la permission de:',
		permission: 'Afficher les notifications',
		allow: 'Permettre',
		disallow: 'Bloc'
	},
	de: {
		title: '... bittet um Erlaubnis:',
		permission: 'Zeige Benachrichtigungen',
		allow: 'Ermöglichen',
		disallow: 'Block'
	},
	es: {
		title: '... pide permiso para:',
		permission: 'Mostrar notificaciones',
		allow: 'Permitir',
		disallow: 'Bloquear'
	},
	th: {
		title: '... ขออนุญาตกับ:',
		permission: 'แสดงการแจ้งเตือน',
		allow: 'อนุญาต',
		disallow: 'กลุ่ม'
	}
};

MESSAGES.current = MESSAGES[detect_language()] || MESSAGES.en;

docReady(function() {
	translate(siteLang, translation);
});
