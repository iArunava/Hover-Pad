var padHeightWidth = 64;
var padHolderHeight;
var borderShape = 1; // 1 -> square || 0 -> circle
var borderVisible = 0; // 1 -> border is visible || 0 -> border is invisible

$(document).ready(function() {
	changePadHeightWidth();
	
	$("#id--the-grid-changer").on('click', function() {
		
		padHeightWidth = parseInt ($("#id--the-grid-height-keeper").val());
		changePadHeightWidth();
	});

	$("#id--glyph-ok-border").on('click', function() {
		
		if ($('#id--glyph-ok-border .glyphicon-ok').hasClass('html--display-none')) {
			$('#id--glyph-ok-border .glyphicon-ok').removeClass('html--display-none').addClass('html--display-inline-block');
			$('.html--div-block').css('border', '1.0px solid black');
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
};
