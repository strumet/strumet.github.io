FOOTER = "Strumenti di modellazione dello spazio, sez. I4-I5 - prof. Marco Ferrara - A.A. 2018-2019<br>" +
	"Politecnico di Milano, Scuola del Design, Corso di Laurea in Design degli Interni"

LOCAL = location.protocol == 'file:' ? true : false
//LOCAL = false;

document.getElementById("footer").innerHTML = FOOTER;
var choose = function(a,b){return LOCAL?a:b}

var lesson_slides = [
	[	
	//  Titolo
		[
			'Curve', '',
			'...ovvero come rappresentare le curve in Computer Graphics',
		],

	//  Sommario argomenti
		[
			'Argomenti trattati:', '', '',
			'<ul>' +
				'<li><em>Computer Graphics</em> ed ambito di riferimento per l\'interior design</li>' + 
				'<li>Il problema della rappresentazione digitale delle curve</li>' + 
				'<li>Le curve NURBS</li>' + 
				'<li>La continuità delle curve</li>' + 
				'<li>Le curve Bezier</li>' + 
				'<li>Gli algoritmi di suddivisione</li>' + 
				'<li>L\'algoritmo di suddivisione di Chaikin</li>' + 
				'<li>L\'algoritmo di suddivisione Catmull-Clark</li>',
			'</ul>',
		],
		
	//  In breve
		[
			'In sostanza', '', '...quello che dobbiamo portarci a casa', 
			'<ul>' +
				'<li>Tutti gli oggetti contengono parti curve</li>' +
				'<li>In CG le curve sono definite attraverso un algoritmo di suddivisione</li>' +
			'</ul>' + 
			'<p class="fragment">...ergo...</p>' + 
			'<p class="fragment">...su <strong>tutti i modelli</strong> prodotti durante il corso dovrà essere applicato ' +
			'<strong>l\'algoritmo di suddivisione</strong></p>',
		],
	],

//  partiamo dal 1995 -> Toy story video
	[
		[
			'Toy story video', 'style="visibility: hidden"', '',
			choose('','<div class="video-background">' +
				'<div class="video-foreground">' +
					'<iframe src="https://www.youtube.com/embed/rNk1Wi8SvNc?rel=0&showinfo=0&start=30&controls=1&loop=1" ' +
					'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' +
				'</div>' +
			'</div>'),
			'',
			choose({'data-background-video': "local_img/toy_story.mp4", 'data-background-transition': 'zoom'},'')
		],
		[
			'Toy story', '', 'by John Lasseter, 1995',
			choose('<img src="local_img/toy_story.jpg">','<p class="img_caption">' +
				'<a href="https://en.wikipedia.org/wiki/File:Toy_Story.jpg#/media/File:Toy_Story.jpg">' +
				'<img src="https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg" alt="Toy story poster"></a>' +
				'<br>By From <a rel="nofollow" class="external text" ' +
				'href="http://www.impawards.com/1995/toy_story_ver1.html">impawards</a>., ' +
				'<a href="https://en.wikipedia.org/w/index.php?curid=26009601">Link</a></p>'),
		],
		
//  perché Toy story -> Definisce il campo: computer graphics (differente da altri ambiti in cui si usa la modellazione)...
		[
			'Representation schemes', '', 'le molteplici accezioni del termine "modellazione"',
			'<ul>' +
				'<li><em><strong>Computer Graphics</strong></em>  &xrArr; rendering, animation, interaction</li>' +
				'<li><em><strong>Wireframe</strong></em>  &xrArr; CAD systems</li>' +
				'<li><em><strong>Free-form curve and surface</strong></em>  &xrArr; automotive and aerospace industry</li>' +
				'<li><em><strong>Solid modeling</strong></em>  &xrArr; mechanical and engineering' +
				'<li><em>...voxel, parametric, BIM...</em>'  +
			'</ul>' +
			'<p class="note">classificazione tratta da Aristides A. G. Requicha; GEOMETRIC MODELING: A First Course; in ' +
			'<a href="https://www-bcf.usc.edu/~requicha/book.html">https://www-bcf.usc.edu/~requicha/book.html</a>, ' +
			'1996-2010<\p>',
		],
	],

//  ...ma anche perché introduce l'argomento di oggi: le curve. Come rappresentare le curve in computer graphics
	[
//  perché nel 1995 per rappresentare una superficie curva generica l'unico sistema era quello delle NURBS
		[
			'Come rappresentare le curve?', '', '',
			'<p class="fragment" style="float:left">NURBS?<br>' +
			choose('<img src="local_img/nurbs_modeling.gif" style="vertical-align:middle; margin:20px"></p>',
			'<a title="By Nicola L.K. [GFDL (http://www.gnu.org/copyleft/fdl.html) or CC BY-SA 3.0 ' +
				'(https://creativecommons.org/licenses/by-sa/3.0)], from Wikimedia Commons" ' +
				'href="https://commons.wikimedia.org/wiki/File:NURBS_Modeling.gif">' +
				'<img alt="NURBS Modeling" src="https://upload.wikimedia.org/wikipedia/commons/d/d3/NURBS_Modeling.gif" ' +
				'style="vertical-align:middle; margin:20px"></a>') +
			'</p>' +
//  ma le NURBS comportano importanti limitazioni e questo ha reso il lavoro degli animatori di Toy Story molto laborioso
//  	(la scelta di raccontare un mondo fatto di plastica e di forme semplificate è funzionale ai limiti di calcolo dell'epoca)
			choose('<img class="fragment" src="local_img/headache.gif" style="float:right; width: 50%">', 
				'<img class="fragment" src="https://78.media.tumblr.com/abb2c028fafb98e13639474899ccfd93/' +
				'tumblr_inline_pdvieoVHN31qafrh6_250.gif" style="float:right; width: 50%">'),
		],

//  Quali sono queste limitazioni? Per rispondere è utile riprendere la definizione di NURBS e capirne il significato geometrico
//  		(la matematica che sottostà a questi argomenti è utile perché ci fornisce i termini
//  	 	per parlare di forma e quindi di progetto)
		[
			'Ma cosa sono le NURBS?', '', '...e quali sono i problemi connessi al loro uso?'
		],

		[
			'NURBS definition', 'style="visibility:hidden; display: none"', '',
			'Una curva NURBS è una particolare forma di <strong>spline</strong>*' +
			'<p class="note">*ovvero una B-Spline non uniforme e razionale</p>'
		],

		[
			'Spline definition', 'style="visibility:hidden; display:none"', '',
			'<p style="line-height:1em">una spline è una curva<br>' +
			'<span class="fragment fade-down" style="font-size:66%">composta da differenti pezzi di curva</span><br>' +
			'dipendente da punti di controllo detti nodi...</p>' +
// Whiteboard example
			choose('<img class="fragment" src="local_img/spline.png" style="box-shadow:none">',
				'<a title="By Garry R. Osgood [CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0) ' +
					'or GFDL (http://www.gnu.org/copyleft/fdl.html)], from Wikimedia Commons" ' +
					'href="https://commons.wikimedia.org/wiki/File:Parametic_Cubic_Spline.svg"><img width="512" ' +
					'alt="Parametic Cubic Spline" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55' +
					'/Parametic_Cubic_Spline.svg/512px-Parametic_Cubic_Spline.svg.png" class="fragment" ' +
					'style="box-shadow:none"></a>'),
		],

		[
			'Parametric definition', 'style="visibility:hidden; display: none"', '',
			'Ognuno dei pezzi che compongono la spline è definito da una funzione parametrica*' +
			'<iframe width="100%" height="300" src="https://richardfuhr.neocities.org/BusyBCurves.html"></iframe>' +
			'<p class="note">* ad esempio P(t) = (1-t)<sup>3</sup>P<sub>0</sub> + 3t(1-t)<sup>2</sup>P<sub>1</sub> + ' +
			'3t<sup>2</sup>(1-t)P<sub>2</sub> + 3t<sup>3</sup>P<sub>3</sub>  con 0 &#8804; t &#8804; 1/5', 
		],

// Continuità: una caratteristica determinante per la forma
		[
			'Continuity definition', 'style="visibility:hidden; display: none"', '',
			'Vista la natura "composita" delle spline particolare attenzione è posta sul modo in cui si connettono ' +
			'le diverse curve che la compongono.' +
			'<p class="fragment">Questo elemento viene definito <br><em><strong>continuità</strong></em></p>',
		],

		[
			'Gradi di continuità', '', '',
			'La continuità si esprime in gradi:' +
			'<ul>' +
				'<li class="fragment"><strong>C</strong><b><sup>0</sup></b> indica che il punto terminale di una ' +
					'curva si trova nella stessa posizione del punto iniziale della curva successiva</li>' +
				'<li class="fragment"><strong>C</strong><b><sup>1</sup></b> indica una continuità tra le tangenti ' +
					'finale ed iniziale delle curve adiacenti</li>' +
				'<li class="fragment"><strong>C</strong><b><sup>2</sup></b> indica una continuità della curvatura ' +
					'finale ed iniziale delle curve adiacenti</li>' +
			'</ul>'
		],

//  Esempi: curva lineare, curva parabolica (funzione quadratica), curva cubica 
//  		(è importante saper gestire l'influenza dei nodi sulla curva per definire e controllare le forme da noi progettate)
		[
			'Influence definition', 'style="visibility:hidden; display:none"', '',
			'Al crescere del grado di continuità aumenta l\'influenza che i nodi hanno sulle parti distanti della curva.' +
			'<p>Verifica tu stesso alla pagina<br><a target="_blank" href="http://geometrie.foretnik.net/files/NURBS-en.swf">' +
			'http://geometrie.foretnik.net/files/NURBS-en.swf</a>', 
		],

		[
			'...e le NURBS?', '', '',
			'Rispetto alla spline le <em>NURBS</em> si caratterizzano per avere la possibilità di attribuire un "peso" ' +
			'differente ad ogni nodo (<strong>Rational</strong>) e che la suddivisione possa avvenire secondo intervalli ' +
			'differenti (<strong>Non Uniform</strong>)' +
			'<p class="note">* <em><strong>B-Spline</strong></em> se il grado di continuità è costante su tutta la curva</p>',
		],

		[
			'NURBS inadeguate', 'style="visibility:hidde; display:nonen"', '',
			'L\'impalcatura matematica delle NURBS vincola tali superfici a topologie bidimensionali* e ' +
			'rende molto difficile la generazione di forme come quelle umane, animali, vegetali**' +
			'<p class="fragment">Inoltre la natura interpolativa e parametrica di tali superfici rende laborioso e ' +
			'soggetto ad errori il calcolo di operazioni quali tagli e giunzioni</p>' +
			'<p class="note">* Ovvero quelle superfici derivabili da un foglio, un cilindro o un toro<br>' +
			'** Ma anche molte superfici comuni nell\'ambito dell\'interior design come quelle dei sanitari, ' +
			'della rubinetteria, degli imbottiti, etc...</p>',
		],

		[
			'Patches', '', '',

			'<p style="float: left;text-align: left;width: 50%;clear: left;">' +
			'Per tali forme era pertanto necessario ricorrere a superfici composte da pezzi di NURBS definiti ' +
			'<strong>patches</strong></p>' +

			choose('<img src="local_img/patch_face.jpg" style="float:right">', '<img src="https://www.edharriss.com/' +
				'tutorials/tutorial_xsi_curse_of_the_nurbs/Curse_of_the_NURBS2_files/mag1art1fig29.jpg" style="float:right">') +

			'<p class="img_caption" style="float: right; clear: right; text-align: right">Immagini tratte da<br>' +
			'<a href="https://www.edharriss.com/tutorials/tutorial_xsi_curse_of_the_nurbs/Curse_of_the_NURBS2.htm">' +
			'https://www.edharriss.com/tutorials/tutorial_xsi_curse_of_the_nurbs/Curse_of_the_NURBS2.htm</a></p>' +

			choose('<img src="local_img/patch_hand.jpg">', '<img src="https://www.edharriss.com/tutorials/' +
				'tutorial_xsi_curse_of_the_nurbs/Curse_of_the_NURBS2_files/mag1art1fig34.jpg">'),
		],

		[
			'Patches 2', 'style="visibility:hidden; display:none"', '',
			'<p style="float: left;text-align: left;width: 50%;clear: left;">' +
			'...in questo modo era molto difficile garantire la continuità tra superfici diverse...</p>' +
			'<figure style="float:right; width:40%"><img src="img/woody_hand.png" style="box-shadow:none">' +
			'<figcaption class="img_caption">Immagine tratta da<br>' +
			'W. Jarosz; <em>Computer Graphics. Subdivision Curves & Surfaces; CS 77/177, Fall 2017</em><br>' +
			'published in <a href="https://canvas.dartmouth.edu/courses/22235/files/3142786/">' +
			'https://canvas.dartmouth.edu/courses/22235/files/3142786/</a></figcaption></figure>',
		],

		[
			'Patches 3', 'style="visibility:hidden; display:none"', '',

			'<div style="position: absolute;width: 100%;color: white;">...soprattutto se animate!</div>' +
			choose('', '<iframe src="https://giphy.com/embed/xTiIzP2OhX0xjpwXrq" width="100%" height="600" ' +
				'frameBorder="0" allowFullScreen style="background: black"></iframe>'),
			'',
			choose({'data-background': "local_img/c3po.gif", 'data-background-transition': 'zoom'},'')
		],
	],

	[
		[
			'Algoritmi di suddivisione', '', '...ovvero: un modo semplice per risolvere il problema delle curve',
		],
		[
			'Catmull-Clark paper',  'style="visibility:hidden; display: none"', '',
			'<p style="width: 50%; float: left">La soluzione era stata individuata nel 1978 da <strong>Ed Catmull</strong> e ' +
			'<strong>James Clark</strong><br>' +
			choose('<img src="local_img/catmull.jpg" style="width: 45%; float: left">' +
				'<img src="local_img/clark.jpg" style="width: 45%; float: right">',
				'<a title="By VES_Awards_89.jpg: Jeff Heusser derivative work: Ahonc (This file was derived from: ' +
					'VES Awards 89.jpg:) [CC BY 2.0 (https://creativecommons.org/licenses/by/2.0 )], via Wikimedia ' +
					'Commons" href="https://commons.wikimedia.org/wiki/File:VES_Awards_89_cropped.jpg">' +
					'<img width="256" alt="VES Awards 89 cropped" src="https://upload.wikimedia.org/wikipedia/commons/' +
					'thumb/a/aa/VES_Awards_89_cropped.jpg/256px-VES_Awards_89_cropped.jpg" style="width: 45%; float: left">' +
				'</a>' +
				'<a title="By Knnkanda [CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0)], from ' +
					'Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:James_H._Clark.jpg">' +
					'<img width="256" alt="James H. Clark" src="https://upload.wikimedia.org/wikipedia/commons/0/07/' +
					'James_H._Clark.jpg" style="width: 45%; float: right">' +
				'</a>') +
			'</p>' +
			'<img src="img/catmull-clark_paper.png" style="width: 40%; float:right">'
		],

		[
			'Catmull-Clark references',  'style="visibility:hidden; display: none"', '',
			'L\'algoritmo <em>Catmull-Clark</em> prendeva le mosse da due schemi esistenti:' +
			'<ul><li class="fragment">la curva <strong>Bézier</strong></li>' +
			'<li class="fragment">l\'algoritmo di <strong>suddivisione</strong> di George <strong>Chaikin</strong></li></ul>',
		],

		[
			'Bézier curve',  '', '',
			'La curva Bézier venne formalizzata alla fine degli anni \'50 da Paul <strong>de Casteljau</strong> ' +
			'e da Pierre <strong>Bézier</strong> per l\'industria automobilistica francese*<br>' +
			choose('<img class="fragment" style="box-shadow: none" src="local_img/bezier_curve.png">',
				'<a title="By No machine-readable author provided. MarianSigler assumed (based on copyright claims). ' +
					'[Public domain], via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Bezier_curve.svg">' +
					'<img width="512" alt="Bezier curve" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/' +
					'Bezier_curve.svg/512px-Bezier_curve.svg.png" style="box-shadow: none">' +
				'</a>') +
			'<p class="note">* per Citroën il primo, per Renault il secondo</p>',
		],

		[
			'Chaikin\'s curve',  '', '(1974)',
			'<div class="fragment">' +
				'<div style="width:35%; float:left">' +
					choose('<img style="box-shadow: none" src="local_img/chaikin0.gif"><br>' +
						'<img style="box-shadow: none" src="local_img/chaikin1.gif">',
						'<img style="box-shadow: none" ' +
							'src="http://www.idav.ucdavis.edu/education/CAGDNotes/Chaikins-Algorithm/img16.gif"><br>' +
						'<img style="box-shadow: none" ' +
							'src="http://www.idav.ucdavis.edu/education/CAGDNotes/Chaikins-Algorithm/img19.gif">') +
				'</div>' +
				'<div style="width:35%; float:right">' +
					choose('<img style="box-shadow: none" src="local_img/chaikin2.gif"><br>' +
						'<img style="box-shadow: none" src="local_img/chaikin3.gif">',
						'<img style="box-shadow: none" ' +
							'src="http://www.idav.ucdavis.edu/education/CAGDNotes/Chaikins-Algorithm/img20.gif"><br>' +
						'<img style="box-shadow: none" ' +
							'src="http://www.idav.ucdavis.edu/education/CAGDNotes/Chaikins-Algorithm/img21.gif">') +
				'</div>' +
			'<p class="note">Immagini tratte da <a href="http://www.idav.ucdavis.edu/education/CAGDNotes/Chaikins-Algorithm/' +
				'Chaikins-Algorithm.html">http://www.idav.ucdavis.edu/education/CAGDNotes/Chaikins-Algorithm/' +
				'Chaikins-Algorithm.html</a>. Nella stessa pagina è illustrato l\'algoritmo</p>' +
			'</div>',
		],

//  La natura quadratica della curva di Chaikin  non soddisfava le esigenze di maggiore continuità richieste
//  	e nel 1978 Catmull e Clark pubblicarono un paper in cui veniva illustrato un diverso algoritmo per generare
//  	delle superfici curve... -> descrizione
		[
			'Subdivision surfaces',  '', 'in cosa consiste l\'algoritmo Catmull-Clark?',
			'<img src="img/cc_base.png" style="box-shadow:none; ">' +
			'<img class="fragment" data-fragment-index="0" src="img/cc00.png" ' +
				'style="box-shadow:none; position: fixed; left: 0">' +
			'<img class="fragment" data-fragment-index="1" src="img/cc01.png" ' +
				'style="box-shadow:none; position: fixed; left: 0">' +
			'<img class="fragment" data-fragment-index="2" src="img/cc02.png" ' +
				'style="box-shadow:none; position: fixed; left: 0">' +
			'<img class="fragment" data-fragment-index="3" src="img/cc03.png" ' +
				'style="box-shadow:none; position: fixed; left: 0">' +
			'<img class="fragment" data-fragment-index="4" src="img/cc04.png" ' +
				'style="box-shadow:none; position: fixed; left: 0">' +
			'<img class="fragment" data-fragment-index="5" src="img/cc05.png" ' +
				'style="box-shadow:none; position: fixed; left: 0">' +
			'<img class="fragment" data-fragment-index="6" src="img/cc06.png" ' +
				'style="box-shadow:none; position: fixed; left: 0">' +
			'<img class="fragment" data-fragment-index="7" src="img/cc07.png" ' +
				'style="box-shadow:none; position: fixed; left: 0">' +
			'<img class="fragment" data-fragment-index="8" src="img/cc08.png" ' +
				'style="box-shadow:none; position: fixed; left: 0">' +
			'<p class="note fragment" style="display: block; background: white; width: 100%" data-fragment-index="0">' +
				'Partire da una serie di punti di controllo...</p>' +
			'<p class="note fragment" style="display: block; background: white; width: 100%" data-fragment-index="1">' +
				'...individuare i punti mediani dei segmenti esistenti...</p>' +
			'<p class="note fragment" style="display: block; background: white; width: 100%" data-fragment-index="2">' +
				'...collegare con nuovi tratti i punti mediani tra i nuovi vertici e quelli preesistenti...</p>' +
			'<p class="note fragment" style="display: block; background: white; width: 100%" data-fragment-index="3">' +
				'...individuare i punti mediani di questi nuovi tratti...</p>' +
			'<p class="note fragment" style="display: block; background: white; width: 100%" data-fragment-index="4">' +
				'...collegare tutti i punti individuati (fine della prima iterazione)...</p>' +
			'<p class="note fragment" style="display: block; background: white; width: 100%" data-fragment-index="5">' +
				'...ripartire nuovamente individuando i punti mediani del nuovo tracciato...</p>' +
			'<p class="note fragment" style="display: block; background: white; width: 100%" data-fragment-index="6">' +
				'...collegare con nuovi tratti i punti mediani tra i nuovi vertici e quelli preesistenti...</p>' +
			'<p class="note fragment" style="display: block; background: white; width: 100%" data-fragment-index="7">' +
				'...individuare i punti mediani di questi nuovi tratti...</p>' +
			'<p class="note fragment" style="display: block; background: white; width: 100%" data-fragment-index="8">' +
				'...collegare tutti i punti individuati (fine della seconda iterazione)...RIPETERE N VOLTE</p>',
		],

//  Nella seconda metà degli anni 90 i tempi erano maturi per applicare l'algoritmo di Catmull-Clark che venne perfezionato
//  	e ribattezzato OpenSubdiv
		[
			'OpenSubdiv',  '', '',
			'<div style="display: flex">' +
				'<div style="flex: 1 0 50%">L\'algoritmo di suddivisione Catmull-Clark è stato ' +
				'<a href="https://github.com/PixarAnimationStudios/OpenSubdiv">' +
				'implememtato in forma di codice software</a> dalla Pixar che lo ha rilasciato ' +
				'con licenza open source con il nome di <strong>OpenSubdiv</strong>' +
				'<p class="note">Maggiori dettagli all\'indirizzo <a href="https://graphics.pixar.com/opensubdiv/">' +
					'https://graphics.pixar.com/opensubdiv/</a></p></div>' +
				'<div style="flex: 1 0 50%"><img src="img/open_subdiv.png" style="max-width: 100%"></div>' +
			'<div>',
		],

//  Il primo banco di prova per verificare il nuovo sistema fu un corto: Geri's game.
//  	Dopo di allora tutti i più importanti film d'animazione digitale hanno adottato l'algoritmo di suddivisione Catmull-Clark
		[
			'Geri\'s game video', 'style="visibility: hidden"', '',
			choose('','<div class="video-background">' +
					'<div class="video-foreground">' +
						'<iframe src="https://www.youtube.com/embed/gLQG3sORAJQ?rel=0&showinfo=0&controls=1" ' +
						'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' +
					'</div>' +
				'</div>'),
			'',
			choose({'data-background-video': "local_img/geri_s_game.webm", 'data-background-transition': 'zoom'},'')
		],
	],

	[
		'Bibliografia essenziale', '', '',
		'Sulle curve in informatica:' +
		'<ul class="bibliography">' +
			'<li>A. Townsend; <a href="http://www.alatown.com/spline-history-architecture/">' +
				'<em>On the Spline: A Brief History of the Computational Curve</em></a>; International Journal ' +
				'of Interior Architecture + Spatial Design, Applied Geometries, Jonathon Anderson & Meg Jackson, 2014</li>' +
			'<li>P. Shirley, S. Marschner; <a href="https://cyber.rms.moe/books/01%20-%20Computer%20Science/' +
				'Fundamentals%20Of%20Computer%20Graphics%20-%20Peter%20Shirley%2C%20Steve%20Marschner.pdf">' +
				'<em>Fundamentals of Computer Graphics</em></a>; Taylor & Francis, 2009, pp 339-383</li>' +
		'</ul>' +
		'Sull\'algoritmo di suddivisione:' +
		'<ul class="bibliography">' +
			'<li>E. Catmull, J. Clark; <a href="http://users.cms.caltech.edu/~cs175/cs175-02/resources/CC.pdf">' +
				'<em>Recursively generated B-spline surfaces on arbitrary topological meshes</em></a>; ' +
				'Computer-Aided Design, 10(6), 1978, pp 350-355</li>' +
			'<li>T. DeRose, M. Kass, T. Truong; <a href="http://graphics.pixar.com/library/Geri/paper.pdf">' +
				'<em>Subdivision Surfaces in Character Animation</em></a>; Proceedings of SIGGRAPH 1998</li>' +
		'</ul>',
	]

]

