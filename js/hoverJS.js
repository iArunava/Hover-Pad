var padHeightWidth = 64;
var padHolderHeight;

$(document).ready(function() {
	changePadHeightWidth();
	
	$("#id--the-grid-changer").on('click', function() {
		
		padHeightWidth = parseInt ($("#id--the-grid-height-keeper").val());
		console.log(padHeightWidth + " from grid click");
		changePadHeightWidth();
	});
});

var changePadHeightWidth = function() {
	
	var padHolderHeight = parseInt($('#id--the-pad-holder').css('height').substr(0, 3));
	
	// Clearing the previous blocks
	$("#id--the-pad").html('');
	$('#id--the-pad').html('');

	console.log(padHeightWidth + " from function");
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
};
