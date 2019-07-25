FOOTER = "Strumenti di modellazione dello spazio, sez. I4-I5 - prof. Marco " +
	"Ferrara - A.A. 2018-2019<br>Politecnico di Milano, Scuola del Design, " +
	"Corso di Laurea in Design degli Interni"

LOCAL = location.protocol == 'file:' ? true : false
//LOCAL = false;

document.getElementById("footer").innerHTML = FOOTER;
var choose = function(a,b){return LOCAL?a:b}

var dates = ['18.9.18', '27.9.18', '4.10.18', '11.10.18', '18.10.18', 
	'25.10.18', '8.11.18', '15.11.18', '22.11.18', '29.11.18', '6.12.18', 
	'13.12.18', '20.12.18']


//var intro_date = new Date('September 18, 2018 14:15:00');
//var normal_date = new Date('September 20, 2018 09:15:00');
//var holiday = new Date('November 1, 2018 00:00:01');

//var get_lesson_date = function(d, i) {
//	dt = new Date();
//	dt.setDate(d.getDate() + (i * 7));
//	after_holiday = dt.getTime() > holiday.getTime();
//	date = after_holiday ? new Date(dt.getTime() + 7 * 24 * 60 * 60 * 1000) : 
//		new Date(dt);
//	return date.getDate() + '.' + (date.getMonth()) + '.' + 
//		date.getFullYear()%2000;
//}

syl = [
	'Curve @ NURBS, spline, Bézier e algoritmi di suddivisione @ ' +
		'<a href="https://strumet.github.io/strumod/lessons/l_01_curves/">' +
		'slides</a><br>' +
		'<a href="https://beep.metid.polimi.it/web/2018-19-strumenti-di-' +
		'modellazione-dello-spazio-marco-ferrara-/documenti-e-media?' +
		'p_p_id=20&p_p_lifecycle=0&p_p_state=normal&p_p_mode=' +
		'view&_20_struts_action=%2Fdocument_library%2Fview&_20_folderId=' +
		'151073376&_20_entryStart=0&_20_entryEnd=20&_20_folderStart=0' +
		'&_20_folderEnd=20&#p_20">esercizi</a>',
	'Topologia @ Representation schemes, struttura di una mesh, manifold, ' +
		'quad mesh @ ' +
		'<a href="https://strumet.github.io/strumod/lessons/l_02_topology/">' +
		'slides</a><br>' +
		'<a href="https://beep.metid.polimi.it/documents/' +
		'150916119/0/ACT_0927">esercizi</a>',
	'Trasformazioni @ World space e object space, matrici di trasformazione, ' +
		'strategie operative @ ' +
		'<a href="https://github.com/strumet/strumet.github.io/raw/master/' +
		'strumod/lessons/l_03_tranformation.pdf">appunti</a><br>' +
		'<a href="https://github.com/strumet/modeling/tree/master/' +
		'activities/1">attività 1</a>',
	'Pratica ed esercizio in aula @ @ ' +
		'<a href="https://github.com/strumet/modeling/tree/master/' +
		'activities/2">attività 2</a>',
	'<div class="ex-tempore">Ex tempore</div> @ Mid-term 1 @ ' +
		'<a href="https://github.com/strumet/modeling/tree/master/' +
		'midterm_1">midterm 1</a>',
	'Casi studio: Architettura classica @ Immagini di riferimento, creasing, ' +
		'smooth/flat shading, operazioni seriali, bending @' +
		'<a href="https://strumet.github.io/strumod/lessons/' +
		'l_04_classical/">argomenti</a><br>' +
		'<a href="https://github.com/strumet/modeling/tree/master/activities/' +
		'3">attività 3</a>',
	'Casi studio: Scale decò @ Concetto di mappatura, uso delle curve ' +
		'bézier, cage transforming @' +
		'<a href="https://strumet.github.io/strumod/lessons/' +
		'l_05_stairs/">argomenti</a><br>' +
		'<a href="https://github.com/strumet/modeling/tree/master/activities/' +
		'4">attività 4</a>',
	'Casi studio : Forme organiche @ Importazione di disegni cad, superfici ' +
		'di interpolazione, operazioni proiettive @' +
		'<a href="https://strumet.github.io/strumod/lessons/' +
		'l_06_organic/">argomenti</a><br>' +
		'<a href="https://github.com/strumet/modeling/tree/master/' +
		'activities/5">attività 5</a>',
	'Pratica ed esercizio in aula @ @' +
		'<a href="https://github.com/strumet/modeling/tree/master/' +
		'activities/6">attività 6</a>',
	'<div class="ex-tempore">Ex tempore</div> @ Mid-term 2 @ ' +
		'<a href="https://github.com/strumet/modeling/tree/master/' +
		'midterm_2">midterm 2</a>',
	'Sistemi linkati @ Gestione di scene complesse, istanze e proxy, clay ' +
		'rendering @' +
		'<a href="https://strumet.github.io/strumod/lessons/' +
		'l_07_linked_systems/">argomenti</a><br>' +
		'<a href="https://github.com/strumet/modeling/tree/master/' +
		'activities/7">attività 7</a>',
	'Camera matching @ @',
	'Revisioni @ @'
]

var get_table = function(x){
	index = syl.indexOf(x);
	//date = index > 0 ? normal_date : intro_date;
	main_note = x.split('@')
	return '<tr>' +
		//'<td class="date">' + get_lesson_date(date, index) + '</td>' +
		'<td class="date">' + dates[index] + '</td>' +
		'<td><div>' + main_note[0] + '</div><span style="font-size: .66em">' +
		main_note[1] + '</td>' +
		'<td style="font-style: italic; font-size: .66em">' + main_note[2] + 
		'</td>' +
		'</tr>'
};

var syl_table = syl.map(get_table);

var lesson_slides = [
	[	
		'Calendario', '', '',
		'<div style="display:flex">' +
		'<div style="flex: 1 1 auto"><table class="syllabus"><thead><tr>' +
				'<th>Data</th>' +
				'<th>Argomento</th>' +
				'<th>Note</th>' +
			'</tr></thead>' +
			'<tbody>' + syl_table.slice(0,6).join('') + '</tbody>' +
		'</table></div>' +
		'<div style="flex: 1 1 auto"><table class="syllabus">' +
			'<tbody>' + syl_table.slice(6).join('') + '</tbody>' +
		'</table></div>' +
		'</div>',
	]

]
