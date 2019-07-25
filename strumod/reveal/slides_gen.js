var slide_div = document.getElementById('slides');

class Slide {
	constructor(title = '', title_options = '', subtitle = '', content = '', content_style = '', properties = '', ) {
		this.title = title;
		this.title_options = title_options;
		this.subtitle = subtitle;
		this.content = content;
		this.content_style = content_style;
		this.properties = properties;
	}
}


// Import slides from slides_list.js
slides = lesson_slides

sld = []

// Populate sld with slides
for (i = 0; i < slides.length; i++){
	if (typeof slides[i][0] !== 'object') {
		sld.push(new Slide(...slides[i]));
	}
	else {
		sld[sld.length] = []
		for (j = 0; j < slides[i].length; j++) {
			sld[sld.length-1].push(new Slide(...slides[i][j]));
		}
	}
}

var get_slide = function (x) {
	return '<h1 ' + x.title_options + '>' + x.title + '</h1>' +
		'<p class = "subtitle">' + x.subtitle + '</p>' +
		'<div style="' + x.content_style + '">' + x.content + '</div>';
}

var get_slide_properties = function (x) {
	return (typeof x !== 'object') ? '' : Object.keys(x).map(function (y) {
		return y + '=' + x[y];
	}).join(' ');
};

var slide_container = function (x) {
	return (Array.isArray(x)) ? sections(x) : '<div class="inner_div">' + get_slide(x) + '</div>';
}

var sections = function (sl) {return sl.map(function (x) {
		return '<section id="' + x.title + '" ' + get_slide_properties(x.properties) +
			'>' + slide_container(x) + '</section>';
	}).join('');
}

slide_div.innerHTML = sections(sld);
