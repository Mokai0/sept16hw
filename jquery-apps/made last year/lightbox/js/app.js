//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"</div>');
var $image = $("<img>");
var $caption = $('<p></p>');

//2.1 An image to overlay
$overlay.append($image);

//A caption to overlay
$overlay.append($caption);

//2. Add overlay
$("body").append($overlay)
	//2.2 A caption

//1. Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
	event.preventDefault();
	var imageLocation = $(this).attr("href");
	$overlay.show();
	//1.2 Update the overlay with the image in the link
	$image.attr('src', imageLocation);
	//1.1 Show the overlay.
	$overlay.show();
	//1.3 Get chlid's alt attribute and set caption
	var captionText = $(this).children("img").attr('alt');
	$caption.text(captionText);
});

//3. When overlay is clicked
$overlay.click(function(){
	//3.1 Hide the overlay
	$overlay.hide();
});