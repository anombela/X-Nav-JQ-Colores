// Fade out text when clicking over some other...
// ...and fade it back when clicking over some other.
//
/*jQuery(document).ready(function() {
    $("#faq dt").click(function() {
	$(this).fadeOut("slow");
    });
    $("h3").click(function() {
	$("dt").fadeIn("slow");
    });
});*/

// Changing colors in a document
// To be used as file custom.js with StarterKit

jQuery(document).ready(function() {
    $("#orderedlist").addClass("red");
    $("#orderedlist > li").addClass("blue");
    $("#orderedlist > li:last").hover(function() {
	$(this).addClass("green");
    },function(){
	$(this).removeClass("green");
    });
});


// Add some text to li elements in #orderedlist element
// And some text when hovering over other elements...
// And change text when overing over other elements...
//
jQuery(document).ready(function() {
    // do something here
  $("#orderedlist").find("li").each(function(i) {
     $(this).append( " This is li number " + i );
  });

  $("#orderedlist2 > li:last > ul > li ").hover(function() {
	    $(this,"> span").append(" hola!");
  },function(){
	   $(this,"> span").append(" adios!");
  });
    /*$("#faq dd").hover(function() {
	str = $(this).html();
	$(this).html("Changed!");
    },function(){
	$(this).html(str);
});*/
});


// Fade out text when clicking over some other...
// ...write the faded text somewhere else
// ...and fade it back when clicking over some other.
//
jQuery(document).ready(function() {
    $("#faq dt").click(function() {
	$(this).fadeOut("slow");
    });
    $("h3").click(function() {
	$("dt").fadeIn("slow");
    });
});
