//if the user is on mobile, change the data-mobile setting to true to use the device's default selection for the select lists
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
	$('select#country1').attr("data-mobile", true);
	$('select#country2').attr("data-mobile", true);
}