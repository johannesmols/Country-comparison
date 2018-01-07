var sel1 = "";
var sel2 = "";
var last_sel1 = "";
var last_sel2 = "";
var commited = false;
var state = 1;

//Observe selection list 1 for changes
$('select#country1').on('change', function() {
	sel1 = $('select#country1').val(); //returns isocode of selection
	commited = false; //selection altered
	process();
});

//Observe selection list 2 for changes
$('select#country2').on('change', function() {
	sel2 = $('select#country2').val(); //returns isocode of selection
	commited = false; //selection altered
	process();
});

//Observe button activity for clicks
$('button#btnSubmit').on('click', function() {
	commited = true;
	process();
});

var process = function() {
	/*
	*	State 1 => Nothing selected yet (white)
	*	State 2 => Selection is loaded and shown (green)
	*	State 3 => Selection changed, but not yet commited (orange)
	*	State 4 => Selections are identical or the placeholder = "" (red)
	*/
	
	if(sel1 == "" || sel2 == "" || (sel1 == sel2)) {
		//State 4
		//make list red
		document.getElementById("btnSubmit").className += " btn-danger"; //add btn-danger class to button
		//remove other classes
		document.getElementById("btnSubmit").className = document.getElementById("btnSubmit").className.replace( /(?:^|\s)btn-default(?!\S)/g , '' ); 
		document.getElementById("btnSubmit").className = document.getElementById("btnSubmit").className.replace( /(?:^|\s)btn-primary(?!\S)/g , '' );
		document.getElementById("btnSubmit").className = document.getElementById("btnSubmit").className.replace( /(?:^|\s)btn-success(?!\S)/g , '' );
		document.getElementById("btnSubmit").className = document.getElementById("btnSubmit").className.replace( /(?:^|\s)btn-info(?!\S)/g , '' );
		document.getElementById("btnSubmit").className = document.getElementById("btnSubmit").className.replace( /(?:^|\s)btn-warning(?!\S)/g , '' );
		//btn-danger is used, don't remove; document.getElementById("btnSubmit").className = document.getElementById("btnSubmit").className.replace( /(?:^|\s)btn-danger(?!\S)/g , '' );
		document.getElementById("btnSubmit").className = document.getElementById("btnSubmit").className.replace( /(?:^|\s)btn-link(?!\S)/g , '' );
		
		$("#alert").collapse("show");
		$("#alert-span").text("Please select at least two different countries");
		document.getElementById("alert").className += " alert-danger";
		document.getElementById("alert").className = document.getElementById("alert").className.replace( /(?:^|\s)alert-warning(?!\S)/g , '' ); 
		
		//console.log("Selections are identical or the placeholder = ''");
		return;
	}
	else {
		if(commited) {
			//State 2
			//make list green
			document.getElementById("btnSubmit").className += " btn-success"; //add btn-success class to button
			//remove other classes
			document.getElementById("btnSubmit").className = document.getElementById("btnSubmit").className.replace( /(?:^|\s)btn-default(?!\S)/g , '' );
			document.getElementById("btnSubmit").className = document.getElementById("btnSubmit").className.replace( /(?:^|\s)btn-primary(?!\S)/g , '' );
			//btn-success is used, don't remove; document.getElementById("btnSubmit").className = document.getElementById("btnSubmit").className.replace( /(?:^|\s)btn-success(?!\S)/g , '' );
			document.getElementById("btnSubmit").className = document.getElementById("btnSubmit").className.replace( /(?:^|\s)btn-info(?!\S)/g , '' );
			document.getElementById("btnSubmit").className = document.getElementById("btnSubmit").className.replace( /(?:^|\s)btn-warning(?!\S)/g , '' );
			document.getElementById("btnSubmit").className = document.getElementById("btnSubmit").className.replace( /(?:^|\s)btn-danger(?!\S)/g , '' );
			document.getElementById("btnSubmit").className = document.getElementById("btnSubmit").className.replace( /(?:^|\s)btn-link(?!\S)/g , '' );
			
			$("#alert").collapse("hide");
			
			//console.log("Selection is loaded and shown");
			return;
		}
		else {
			if(sel1 != last_sel1 && sel2 != last_sel2) {
				//State 3
				//make list orange
				document.getElementById("btnSubmit").className += " btn-warning"; //add btn-warning class to button
				//remove other classes
				document.getElementById("btnSubmit").className = document.getElementById("btnSubmit").className.replace( /(?:^|\s)btn-default(?!\S)/g , '' );
				document.getElementById("btnSubmit").className = document.getElementById("btnSubmit").className.replace( /(?:^|\s)btn-primary(?!\S)/g , '' );
				document.getElementById("btnSubmit").className = document.getElementById("btnSubmit").className.replace( /(?:^|\s)btn-success(?!\S)/g , '' );
				document.getElementById("btnSubmit").className = document.getElementById("btnSubmit").className.replace( /(?:^|\s)btn-info(?!\S)/g , '' );
				//btn-warning is used, don't remove; document.getElementById("btnSubmit").className = document.getElementById("btnSubmit").className.replace( /(?:^|\s)btn-warning(?!\S)/g , '' );
				document.getElementById("btnSubmit").className = document.getElementById("btnSubmit").className.replace( /(?:^|\s)btn-danger(?!\S)/g , '' );
				document.getElementById("btnSubmit").className = document.getElementById("btnSubmit").className.replace( /(?:^|\s)btn-link(?!\S)/g , '' );
				
				$("#alert").collapse("show");
				$("#alert-span").text("Please commit the changes to the selection");
				document.getElementById("alert").className += " alert-warning";
				document.getElementById("alert").className = document.getElementById("alert").className.replace( /(?:^|\s)alert-danger(?!\S)/g , '' ); 
				
				//console.log("Selection changed, but not yet commited");
				return;
			}
		}
	}
}