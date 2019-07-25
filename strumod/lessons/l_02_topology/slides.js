FOOTER = "Strumenti di modellazione dello spazio, sez. I4-I5 - prof. Marco Ferrara - A.A. 2018-2019<br>" +
	"Politecnico di Milano, Scuola del Design, Corso di Laurea in Design degli Interni";

LOCAL = location.protocol == 'file:' ? true : false;
//LOCAL = false;

document.getElementById("footer").innerHTML = FOOTER;
var choose = function(a,b){return LOCAL?a:b};

var mesh_img = 5;
var face_img = 4;

var disp_none = 'style="display:none"';
var sketchfab_code = function(model, param = '') {
	return '<iframe width="640" height="480" ' +
				'src="https://sketchfab.com/models/' + model.id + '/embed?' + param + '" ' +
				'frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" ' +
				'webkitallowfullscreen="true"></iframe>' +
			choose('','<p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A; ' +
				'position: absolute; background: white; width: 100%;">' +
				'<a href="https://sketchfab.com/models/' + model.id + '?' +
					'utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" ' +
					'style="font-weight: bold; color: #1CAAD9;">' + model.title + '</a> by ' +
					'<a href="https://sketchfab.com/' + model.author + '?utm_medium=embed&utm_source=website&' +
					'utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">' +
					model.author + '</a> on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&' +
					'utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">' +
					'Sketchfab</a></p>');
}

class sketchfab {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}

var sf_model = [
	new sketchfab('29fe7d949d8f4584930ea4f51f9f626c', 'Talaak Village - Voxel art', 'Sir_carma'),

	new sketchfab('3b7ee7d1a62b4276bfac992972a5b025', 'Kitchen test', 'happs'),
	new sketchfab('3aa64527d1614998b4812bfefbbc896a', 'Interior scene - baked textures', 'andzbrazil'),
	new sketchfab('4715bd222f2d42cc9961dd74909eb389', 'Medieval house interior', 'maxguardior'),
	new sketchfab('9d815881f59744758f44f4d25616af46', 'Scandinavian Apartment - Baked Scene', 'aurelien_martel'),

	new sketchfab('79615d823a9149069dcd06c20bc9707f', 'The Billiards Room', 'TheHallwylMuseum'),
	new sketchfab('33ff8b7365ee4bf7bad4c664c0756dc5', 'WMStudio Interior Showcase 2017', 'Lubus'),
	new sketchfab('cae2d96ede1d4112b1fd391099a43f77', 'Studio apartment', 'zamorev4d'),
	new sketchfab('b9f6dc4ace8f4edc8e136cb5ec33cc97', 'Nordic living room with Vray lighting', 'tarekadhami'),

]

var lesson_slides = [

	[
		[
			'Topologia', '', 'le regole per una modellazione corretta',
			'',
		],

		[
			'Argomenti trattati', '', '',
			'<ul>' +
				'<li>Representation schemes e differenze tra modelli</li>' +
				'<li>Modellazione poligonale: terminologia e classificazioni</li>' +
				'<li>Vertici, bordi, facce, <em>tris</em>, <em>quads</em>, <em>n-Gon</em>s</li>' +
				'<li>Topologia delle superfici mesh</li>' +
				'<li>Superfici <em>manifold</em></li>' +
				'<li><em>Semi-regular quad meshes</em></li>' +
			'</ul>',
		],

		[
			'In sostanza', '', '...quello che dobbiamo portarci a casa',
			'<ul>' +
				'<li>Una superficie è corretta se è completamente chiusa (<em>manifold</em>)</li>' +
				'<li>Un buon modello è costituito unicamente (o quasi) da superfici quadrangolari (<em>quads</em>)</li>' +
				'<li>La modellazione poligonale è diversa dalla modellazione solida</li>' +
			'</ul>' +
			'<p class="fragment">...ergo...</p>',
			'',
			{'data-transition':"slide-in fade-out"}
		],
		[
			'In sostanza', 'style="display:none"', '',
			'<p>...<strong>tutti i modelli</strong> prodotti durante il corso dovranno essere ' +
				'<em><strong>manifold</strong></em><br>e costituiti unicamente da <em><strong>quads</strong></em>...</p>' +
			'<p>...e <strong>non usare booleane!</strong></p>',
			'',
			{'data-transition':"fade-in"}
		],
	],

	[
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
			'1996-2010</p>',
		],

		[
			'Representation schemes', '', 'classificazioni convenzionalmente riconosciute',
			'<ul>' +
				'<li><em><strong>CSG</strong></em>  constructive solid geometry &xrArr; modellazione solida</li>' +
				'<li><em><strong>Sweep representation</strong></em> &xrArr; modellazione solida</li>' +
				'<li><em><strong>Spatial decomposition</strong></em>  &xrArr; Modellazione voxel, octree...</li>' +
				'<li><em><strong>B-Rep</strong></em> boudary representation &xrArr; modellazione per superfici ' +
					'(NURBS, mesh)</li>' +
			'</ul>',
		],

		[
			'CSG e Sweeping', '', '',
			'I metodi di rappresentazione <strong>costruttivi</strong> descrivono il modello attraverso operazioni ' +
			'- <strong>booleane</strong> ed <strong>estrusive</strong> - applicate su geometrie primitive',
		],

		[
			'CSG tree', 'style=""', '',
			choose('<img style="box-shadow:none; height:500px" src="local_img/Csg_tree.png">',
				'<a title="By User:Zottie [GFDL (http://www.gnu.org/copyleft/fdl.html) or CC-BY-SA-3.0' +
					'(http://creativecommons.org/licenses/by-sa/3.0/)], from Wikimedia Commons" ' +
					'href="https://commons.wikimedia.org/wiki/File:Csg_tree.png"><img ' +
					'alt="Csg tree" src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Csg_tree.png" ' +
					'style="box-shadow:none; height:500px"></a>'),
			'line-height:0',
		],

		[
			'Sweeping', 'style=""', '',
			choose('<img style="box-shadow:none; height:500px" src="local_img/sweep.jpg">',
				'<img src="http://designer.mech.yzu.edu.tw/articlesystem/article/compressedfile/' +
				'(2010-12-10)%20Constructive%20solid%20geometry%20and%20sweep%20representation.files/image087.jpg" ' +
				'style="box-shadow:none; height:500px">') +
			'<p class="img_caption" style="line-height:1; margin: 0">Immagine tratta da ' +
				'<a href="http://designer.mech.yzu.edu.tw/articlesystem/article/compressedfile/' +
				'(2010-12-10)%20Constructive%20solid%20geometry%20and%20sweep%20representation.aspx?ArchID=1616">' +
				'http://designer.mech.yzu.edu.tw/articlesystem/article/compressedfile/' +
				'(2010-12-10)%20Constructive%20solid%20geometry%20and%20sweep%20representation.aspx?ArchID=1616</a></p>',
			'line-height:0',
		],
		[
			'Spatial decomposition', 'style=""', '',
			'<div style="display:flex; align-items: center">' +
				'<div style="text-align: left">Lo spazio è diviso in celle (voxel).<br>' +
					'Il modello è rappresentato dalle celle piene</div>' +
				'<div style="flex: 1 0 auto; line-height: 0">' +
					sketchfab_code(sf_model[0], 'autospin=0.2&amp;') +
				'</div>' +
			'</div>',
		],

		[
			'B-Rep', 'style=""', 'Boundary representation',
			'<div style="display:flex; flex-flow: row wrap; justify-content: space-evenly">' +
				'<div style="flex: 0 1 50%">Il modello è descritto attraverso le superfici che lo delimitano e, ' +
					'pertanto, risulta cavo</div>' +
				'<img style="max-height:250px; box-shadow: none" src="img/brep_0.png">' +
				'<div style="flex: 1 1 auto; display: flex; flex-flow:row nowrap; max-height: 250px; ' +
					'justify-content: space-evenly">' +
					'<img style="box-shadow:none" src="img/brep_1.png"><img style="box-shadow: none" src="img/brep_2.png">' +
				'</div>',
		],

		[
			'NOTA BENE', 'style=""', '',
			'Il tipo di rappresentazione<br>determina il modo di operare:' +
			'<div style="display: flex; line-height: 0">' +
				'<div class="fragment" style="flex: .4409" data-fragment-index="0">' +
					choose('<img src="local_img/milling_machine.jpg">',
						'<a title="By https://www.youtube.com/user/KolbTechnology ' +
							'(https://www.youtube.com/watch?v=ZijC8jU_1Aw) [GFDL (http://www.gnu.org/copyleft/fdl.html) ' +
							'or CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons" ' +
							'href="https://commons.wikimedia.org/wiki/File:3D-CNC-Fr%C3%A4sen_-_Erstellung_eines_' +
							'Landschaftsmodells.jpg"><img width="512" alt="3D-CNC-Fräsen - Erstellung eines ' +
							'Landschaftsmodells" src="https://upload.wikimedia.org/wikipedia/commons/a/af/' +
							'3D-CNC-Fr%C3%A4sen_-_Erstellung_eines_Landschaftsmodells.jpg"></a>') +
					'<p class="img_caption" style="font-size:medium">modellazione solida</p></div>' +
				'<div class="fragment" style="flex: .5591" data-fragment-index="1">' +
					choose('<img src="local_img/tailor_shop.jpg">',
						'<img src="https://www.publicdomainpictures.net/pictures/80000/velka/tailor-shop' +
							'-vintage-painting.jpg" alt="Released in CC0 Public Domain at ' +
							'https://www.publicdomainpictures.net/en/view-image.php?image=76581&picture=tailor-shop-' +
							'vintage-painting">') +
						'<p class="img_caption" style="font-size:medium">modellazione poligonale</p></div>' +
			'</div>' +
			'<p class="note fragment" style="position: relative" data-fragment-index="1">Immagini rilasciate in CC su ' +
				'<a href="https://commons.wikimedia.org/wiki/File:3D-CNC-Fr%C3%A4sen_-_Erstellung_eines_' +
					'Landschaftsmodells.jpg">' +
					'https://commons.wikimedia.org/wiki/File:3D-CNC-Fr%C3%A4sen_-_Erstellung_eines_Landschaftsmodells.jpg ' +
				'</a>' +
				'e <a href="https://www.publicdomainpictures.net/en/view-image.php?image=76581&picture=tailor-' +
					'shop-vintage-painting">https://www.publicdomainpictures.net/en/view-image.php?' +
					'image=76581&picture=tailor-shop-vintage-painting</a>' +
			'</p>',
		],
	],

	[
		[
			'Modellazione poligonale', '', 'Termini e definizioni',
		],

		[
			'Mesh components', 'style="display:none;"', '',
			'<div style="display: flex; position: absolute; top: 0; flex-flow: row wrap">' +
				'<div style="width: 100%">Gli elementi che costituiscono una mesh sono:</div>' +
				'<div style="flex: 0 1 40%; font-size: 75%">' +
					'<p class="fragment" data-fragment-index="0"><strong>vertici</strong><br>(vertex)</p>' +
						'<p class="fragment" data-fragment-index="1" style="font-size:50%; font-style="italic">' +
						'definiti da tre coordinate x<sub style="font-size:.75em">1</sub>, ' +
						'y<sub style="font-size:.75em">1</sub>, z<sub style="font-size:.75em">1</sub></p>' +
					'<p class="fragment" data-fragment-index="2"><strong>bordi</strong><br>(edges)</p>' +
						'<p class="fragment" data-fragment-index="3" style="font-size:50%; font-style="italic">' +
						'delimitati da 2 vertici</p>' +
					'<p class="fragment" data-fragment-index="4"><strong>facce</strong><br>(faces)</p>' +
						'<p class="fragment" data-fragment-index="4" style="font-size:50%; font-style="italic">' +
						'delimitate da un perimetro chiuso di 3 o più bordi</p>' +
				'</div>' +
				'<div style="flex: 0 1 60%">' +
					'<img class="fragment" data-fragment-index="0" src="img/mesh00.png" ' +
						'style="background: none; box-shadow:none; width: 100%">' +
					'<img class="fragment" data-fragment-index="1" src="img/mesh01.png" ' +
						'style="background: none; box-shadow:none; width: 100%; ' +
						'position: relative; top:' + (-1*100/mesh_img) + '%">' +
					'<img class="fragment" data-fragment-index="2" src="img/mesh02.png" ' +
						'style="background: none; box-shadow:none; width: 100%; ' +
						'position: relative; top:' + (-2*100/mesh_img) + '%">' +
					'<img class="fragment" data-fragment-index="3" src="img/mesh03.png" ' +
						'style="background: none; box-shadow:none; width: 100%; ' +
						'position: relative; top:' + (-3*100/mesh_img) + '%">' +
					'<img class="fragment" data-fragment-index="4" src="img/mesh04.png" ' +
						'style="background: none; box-shadow:none; width: 100%; ' +
						'position: relative; top:' + (-4*100/mesh_img) + '%">' +
				'</div>' +
			'</div>'
		],

		[
			'Vertex valence', 'style="display:none;"', '',
			'<div style="display: flex; position: absolute; top: 0; flex-flow: row wrap">' +
				'<div style="width: 100%">La <strong>valenza</strong> di un vertice corrisponde al numero di bordi in esso confluenti:</div>' +
				'<div style="flex: 0 1 50%; font-size: 75%">' +
					'<p class="fragment" data-fragment-index="0">è <strong>regolare</strong></p>' +
						'<p class="fragment" data-fragment-index="0" style="font-size:50%; font-style="italic">' +
						'un vertice con valenza = 4</p>' +
						'<img class="fragment" data-fragment-index="0" src="img/regular_vertex.png" ' +
							'style="background: none; box-shadow:none; max-width: 100%">' +
				'</div>' +
				'<div style="flex: 0 1 50%; font-size: 75%">' +
					'<p class="fragment" data-fragment-index="1">è <strong>irregolare</strong><br>(o straordinario, detto anche "polo")</p>' +
						'<p class="fragment" data-fragment-index="1" style="font-size:50%; font-style="italic">' +
						'un vertice con valenza diversa da 4</p>' +
						'<img class="fragment" data-fragment-index="1" src="img/poles.png" ' +
							'style="background: none; box-shadow:none; max-width: 100%">' +
				'</div>' +
			'</div>'
		],

		[
			'Face types', 'style="display:none;"', '',
			'<div style="display: flex; position: absolute; top: 0; flex-flow: row wrap">' +
				'<div style="width: 100%">In base al numero di bordi che le delimitano le facce si distinguono in:</div>' +
				'<div style="flex: 0 1 40%; font-size: 75%">' +
					'<p class="fragment" data-fragment-index="1"><strong>Tris</strong><br>(tre bordi)</p>' +
						'<p class="fragment" data-fragment-index="1" style="font-size:50%; font-style="italic">' +
						'una mesh composta da soli tris è definita <em>tris mesh</em></p>' +
					'<p class="fragment" data-fragment-index="2"><strong>Quads</strong><br>(quattro bordi)</p>' +
						'<p class="fragment" data-fragment-index="2" style="font-size:50%; font-style="italic">' +
						'una mesh composta da soli quads è definita <em>quad mesh</em></p>' +
					'<p class="fragment" data-fragment-index="3"><strong>N-gons</strong><br>(più di 4 bordi)</p>' +
				'</div>' +
				'<div style="flex: 0 1 60%">' +
					'<img class="fragment" data-fragment-index="0" src="img/mesh.png" ' +
						'style="background: none; box-shadow:none; width: 100%">' +
					'<img class="fragment" data-fragment-index="1" src="img/tris.png" ' +
						'style="background: none; box-shadow:none; width: 100%; ' +
						'position: relative; top:' + (-1*100/face_img) + '%">' +
					'<img class="fragment" data-fragment-index="2" src="img/tris_quads.png" ' +
						'style="background: none; box-shadow:none; width: 100%; ' +
						'position: relative; top:' + (-2*100/face_img) + '%">' +
					'<img class="fragment" data-fragment-index="3" src="img/ngons.png" ' +
						'style="background: none; box-shadow:none; width: 100%; ' +
						'position: relative; top:' + (-3*100/face_img) + '%">' +
				'</div>' +
			'</div>'
		],

		[
			'Quad mesh', 'style="display:none"', '',
			'Le quad mesh possono essere:' +
			'<div style="display:flex; font-size: 75%">' +
				'<div style="flex: 1">' +
					'<div><strong>Regular</strong><p style="line-height: 1em; font-size: .5em; margin: 0">' +
						'Tutti i vertici sono regolari</p></div>' +
					'<div style="margin: 0 auto; height: 200px; width: 160px; background-image: url(\'' +
						choose('local_img/quad_mesh.png',
						'http://alice.loria.fr/publications/papers/2012/QuadStar_EG//photo/photo.png') +
						'\'); background-size: cover; background-position: 0px 0;"></div>' +
				'</div>' +
				'<div style="flex: 1">' +
					'<div><strong>Semi-regular</strong><p style="line-height: 1em; font-size: .5em; margin: 0">' +
						'I vertici sono prevalentemente regolari</p></div>' +
					'<div style="margin: 0 auto; height: 200px; width: 160px; background-image: url(\'' +
						choose('local_img/quad_mesh.png',
						'http://alice.loria.fr/publications/papers/2012/QuadStar_EG//photo/photo.png') +
						'\'); background-size: cover; background-position: -338px 0;"></div>' +
				'</div>' +
				'<div style="flex: 1">' +
					'<div><strong>Unstructured</strong><p style="line-height: 1em; font-size: .5em; margin: 0">' +
						'I vertici sono prevalentemente irregolari</p></div>' +
					'<div style="margin: 0 auto; height: 200px; width: 160px; background-image: url(\'' +
						choose('local_img/quad_mesh.png',
						'http://alice.loria.fr/publications/papers/2012/QuadStar_EG//photo/photo.png') +
						'\'); background-size: cover; background-position: -676px 0;"></div>' +
				'</div>' +
			'</div>' +
			'<p class="note" style="position:relative">Immagini tratte da ' +
				'<a href="http://alice.loria.fr/index.php/publications.html?redirect=0&Paper=QuadStar_EG@2012">' +
				'http://alice.loria.fr/index.php/publications.html?redirect=0&Paper=QuadStar_EG@2012</a></p>',
			
		],

		[
			'Normali', 'style="display:none"', '',
			'In una mesh ogni faccia è orientata (fronte/retro) secondo la sua <strong>normale</strong>' +
			'<img style="box-shadow:none" src="img/normals.png">'
		],
	],

	[
		[
			'Topologia', '', 'Indicazioni per una corretta modellazione',
			'La topologia definisce il modo in cui le facce si connettono tra loro',
		],

		[
			'Manifold', disp_none, '',
 			'La caratteristica più semplice e restrittiva di una mesh è che la superficie sia <strong>manifold</strong>*' +
			'<p class="note">* dal tedesco <em>Mannigfaltigkeit</em>: "diversità"</p>',
		],

		[
			'Manifold', '', 'Definizione',
			'Si definisce <em>manifold</em> una superficie per il quale l\'intorno infinitesimo di ogni vertice ' +
			'può essere appiattito in una porzione di superficie piatta' +
			'<div style="display:flex">' +
				'<img style="box-shadow:none" src="img/manifold_1.png">' +
				'<img style="box-shadow:none" src="img/manifold_2.png">' +
				'<img style="box-shadow:none" src="img/manifold_3.png">' +
				'<img style="box-shadow:none" src="img/manifold_4.png">' +
			'</div>' +
			'<p class="note">P. Shirley, S. Marschner; <a href="https://cyber.rms.moe/books/01%20-%20Computer%20Science/' +
				'Fundamentals%20Of%20Computer%20Graphics%20-%20Peter%20Shirley%2C%20Steve%20Marschner.pdf">' +
				'<em>Fundamentals of Computer Graphics</em></a>; Taylor & Francis, 2009, pp 262-263</p>',
		],

		[
			'Manifold semplice', disp_none, '',
			'Più chiaramente:' +
			'<ul>' +
				'<li>una superficie manifold è una superficie <strong>"a tenuta d\'acqua"</strong>' +
				'<li>ogni bordo è sempre connesso a <strong>2 sole facce</strong>' +
				'<li>ogni vertice è interamente circondato da una corona di facce' +
				'<li>l\'<strong>orientamento</strong> delle facce è <strong>coerente</strong> lungo l\'intera superficie' +
			'</ul>',
		],

		[
			'Semi-regular quad mesh', disp_none, '',
			'Al fine di una gestione efficiente del modello <strong>tutte le superfici</strong> devono essere<br>' +
			'<strong style="background: black; color: red; padding: 0 1em">semi-regular quad meshes</strong><br>' +
			'(o, perlomeno, semi-regular quad-dominant meshes)',
		],

		[
			'Esempi corretti', '', '',
			'<div class="fragment">' + sketchfab_code(sf_model[1]) + '</div>' +
			'<div class="fragment" style="position:relative; top: -499px">' + sketchfab_code(sf_model[2]) + '</div>' +
			'<div class="fragment" style="position:relative; top: -998px">' + sketchfab_code(sf_model[3]) + '</div>' +
			'<div class="fragment" style="position:relative; top: -1497px">' + sketchfab_code(sf_model[4]) + '</div>',
		],

		[
			'Esempi non corretti', '', '',
			'<div class="fragment">' + sketchfab_code(sf_model[5]) + '</div>' +
			'<div class="fragment" style="position:relative; top: -499px">' + sketchfab_code(sf_model[6]) + '</div>' +
			'<div class="fragment" style="position:relative; top: -998px">' + sketchfab_code(sf_model[7]) + '</div>' +
			'<div class="fragment" style="position:relative; top: -1497px">' + sketchfab_code(sf_model[8]) + '</div>',
		],

		[
			'Perché quad-mesh?', '', '',
			'<ul style="line-height: 1.5em; margin-bottom: 1.5em">' +
				'<li class="fragment" data-fragment-index="0">la presenza di 2 direzioni locali dominanti* ' +
					'consente di caratterizzare semanticamente il modello</li>' +
				'<li class="fragment" data-fragment-index="1">la gestione delle entità geometriche è più efficiente ' +
					'grazie all\'uso dei loops</li>' +
				'<li class="fragment" data-fragment-index="2">l\'algoritmo di suddivisione Catmull-Clark mantiene una ' +
					'curvatura C<sup>2</sup> se la maglia è costituita da quads**</li>' +
				'<li class="fragment">la topologia a griglia rettangolare facilita il lavoro di unwrapping e texturing ' +
					'del modello</li>' +
				'<li class="fragment">una topologia corretta consente maggior controllo sulle deformazioni di ' +
					'superfici animate</li>' +
			'</ul>' +
			'<p class="note">' +
				'<span class="fragment" data-fragment-index="0">* ad esempio allineate alla direzione della curvatura ' +
					'principale o agli spigoli vivi della geometria</span><br>' +
				'<span class="fragment" data-fragment-index="2">** In caso di tris o n-gon l\'algoritmo funziona ' +
					'ugualmente ma la curvatura sarà di grado C1.<br>' +
					'&nbsp;&nbsp;&nbsp;Inoltre l\'utilizzo dell\'algoritmo su superfici composte da n-gons con un ' +
					'alto numero di lati o di vertici con alta valenza produce significativi difetti sulla geometria</span>'
		],
	],

	[
		'Bibliografia essenziale', '', '',
		'Nozioni generali di modellazione:' +
		'<ul class="bibliography">' +
			'<li>A. Requicha; <a href="https://www-bcf.usc.edu/~requicha/book.html">' +
				'<em>GEOMETRIC MODELING: A First Course</em></a>; 1996-2010</li>' +
			'<li>P. Shirley, S. Marschner; <a href="https://cyber.rms.moe/books/01%20-%20Computer%20Science/' +
				'Fundamentals%20Of%20Computer%20Graphics%20-%20Peter%20Shirley%2C%20Steve%20Marschner.pdf">' +
				'<em>Fundamentals of Computer Graphics</em></a>; Taylor & Francis, 2009</li>' +
		'</ul>' +
		'Sulla topologia:' +
		'<ul class="bibliography">' +
			'<li>D. Bommes, B. Lévy, N. Pietroni, E. Puppo, C. Silva, M. Tarini, D. Zorin;<br>' +
				'<a href="https://pdfs.semanticscholar.org/c121/8de6c8c90ceba45dba5b4ff787f673b4b819.pdf">' +
				'<em>Quad-Mesh Generation and Processing: a survey</em></a>; EUROGRAPHICS 2012</li>' +
			'<li>Pixar; <a href="http://graphics.pixar.com/opensubdiv/docs/mod_notes.html">' +
				'<em>OpenSubdiv - Modeling Tips</em></a>; 2018</li>' +
			'<li>J. Martin; <a href="http://topologyguides.com/">' +
				'<em>Topology Guides - Guides for 3d artist</em></a>; 2015-2018</li>' +
		'</ul>',
	]
]

