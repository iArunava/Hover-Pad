var padHeightWidth = 25;
var padHolderHeight;
var borderShape = 1; // 1 -> square || 0 -> circle
var borderVisible = 0; // 1 -> border is visible || 0 -> border is invisible
var colorArray = ['red', 'blue', 'yellow', 'violet', 'gray', 'green'];
var colorDic = {'red' : '#fc6041', 'yellow' : '#f1ff59', 'blue' : '#639fff', 'gray' : '#b9bbbf', 'green' : '#a3ff66', 'violet' : '#7759ff'};
var randColor = colorArray[Math.ceil(Math.random() * 5)];

$(document).ready(function() {
	changePadHeightWidth();
	
	$("#id--the-grid-changer").on('click', function() {
		
		padHeightWidth = parseInt ($("#id--the-grid-height-keeper").val());
		changePadHeightWidth();
	});

	$("#id--glyph-ok-border").on('click', function() {
		
		if ($('#id--glyph-ok-border .glyphicon-ok').hasClass('html--display-none')) {
			$('#id--glyph-ok-border .glyphicon-ok').removeClass('html--display-none').addClass('html--display-inline-block');
			$('.html--div-block').css('border', '1.0px solid #a7adb7');
			borderVisible = 1;
		} else {
			$('#id--glyph-ok-border .glyphicon-ok').removeClass('html--display-inline-block').addClass('html--display-none');
			$('.html--div-block').css('border', '1px solid transparent');
			borderVisible = 0;
		}
	});

	$('#id--fa-shape').on('click', function() {
		
		if ($('#id--fa-shape .fa').hasClass('fa-square')) {
			$('#id--fa-shape .fa').removeClass('fa-square').addClass('fa-circle');
			$('.html--div-block').css('border-radius', '50%');
			borderShape = 0;
		} else {
			$('#id--fa-shape .fa').removeClass('fa-circle').addClass('fa-square');
			$('.html--div-block').css('border-radius', '0%');
			borderShape = 1;
		}
	});
	
	/* Setting a random color for each time the site is loaded */
	// Setting the color on the navbar
	removeClassesStartingWith($('#id--chosen-color-display'));
	$('#id--chosen-color-display').addClass('html--color-' + randColor);

	// Setting the chosen color tick on the chosen color
	$('.html--display-inline-block-color-chosen').removeClass('html--display-inline-block-color-chosen').addClass('html--display-none-color-chosen');
	$('#id--color-chosen-representator li .html--color-' + randColor + ' + .glyphicon-ok').addClass('html--display-inline-block-color-chosen');


});

var changePadHeightWidth = function() {
	
	var padHolderHeight = parseInt($('#id--the-pad-holder').css('height').substr(0, 3));
	
	// Clearing the previous blocks
	$("#id--the-pad").html('');
	$('#id--the-pad').html('');
	
	// Checking if the border shape is circle
	if (borderShape == 0) {
		$('#id--fa-shape').trigger('click');
		borderShape = 0; // Maintaining the borderShape value, as it was changed when the click was triggred
	}

	// Checking if border is visible
	if (borderVisible == 1) {
		$('#id--glyph-ok-border').trigger('click');
		borderVisible = 1; // Maintaining the borderVisible value, as it was changed when the click was triggered
	}

	for (var i = 0; i < padHeightWidth; i++) {
		$("#id--the-pad").append('<div class="html--div-pad-row html--div-pad-row-num-' + i + '"></div>');
		for (var j = 0; j < padHeightWidth; j++) {
			$('#id--the-pad .html--div-pad-row-num-' + i).append('<div class="html--div-block html--float-left"></div>');
		}
	}

	$('.html--div-block').css({
		'height': ((padHolderHeight-10)/padHeightWidth) + 'px',
		'width': ((padHolderHeight-10)/padHeightWidth) + 'px'
		});

	$('#id--grid-number').html(padHeightWidth);

	// Checking if the border shape is circle
	if (borderShape == 0) $('#id--fa-shape').trigger('click');

	// Checking if border is visible
	if (borderVisible == 1) $('#id--glyph-ok-border').trigger('click');

	// Enabling hover effect over html--div-block
	$('.html--div-block').hover(function() {
		$(this).css('background', colorDic[randColor]);
	});
};

var removeClassesStartingWith = function (element) {
	if (element == undefined) return;

	element.attr('class', function (index, oneClass) {
		oneClass.replace(/(^|\s)html--color-\S+/g, '');
	});
};
