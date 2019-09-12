/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/


/* Give everything with the class 'hello' a white background when you click on one of them*/
$(".hello").click(function(e) {
    $(e.target).css("background", "blue");
});
/* When you mouse over the "Selectors Exercise" element, change the height&width to 20px. When you mouse off of it change it back */
$('h1').mouseenter(function (e)
{     $(e.target).css( "fontSize", "20px" );

});
$('h1').mouseleave(function (e)
{    $(e.target).css( "fontSize", "" );

});
// CHALLENGE
/* Each time the sentence "I am a paragraph with a class" is clicked, add a "." to the end of the sentence. */
