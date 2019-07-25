FOOTER = "Strumenti di modellazione dello spazio, sez. I4-I5 - prof. Marco Ferrara - A.A. 2018-2019<br>" +
	"Politecnico di Milano, Scuola del Design, Corso di Laurea in Design degli Interni";

LOCAL = location.protocol == 'file:' ? true : false;
//LOCAL = false;

document.getElementById("footer").innerHTML = FOOTER;
var choose = function(a,b){return LOCAL?a:b};

var disp_none = 'style="display:none"';

var lesson_slides = [

	[
		[
			'Casi studio', '', 'Architettura classica',
			'',
		],

		[
			'Argomenti trattati', '', '',
			'<ul>' +
				'<li>Uso delle immagini di riferimento</li>' +
				'<li>Crease</li>' +
				'<li>Smooth e flat shading</li>' +
				'<li>Operazioni seriali</li>' +
				'<li>Altre trasformazioni: <em>bending</em></li>' +
			'</ul>',
		],
	]

]

