//check off specific To Dos by Clicking 
$("ul").on("click", "li", function(){ //need to call on an element that was always on the page when loaded, since not all li's will be on the page when loaded need to go with the ul
	//if li is gray, turn it black
	$(this).toggleClass("completed");
	});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var toDo = $(this).val();
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> "+ toDo +"</li>"); //takes a string of HTML and appends it to whatever we selected
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
