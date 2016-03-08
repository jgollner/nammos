
// //correct way of doing this 
// function add(num1, num2) {
// 	return num1 + num2;
// };
// add(20, 1);

$(document).ready(function() {
    $(".jumper").on("click", function( e ) {

        e.preventDefault();

        $("body, html").animate({ 
            scrollTop: $( $(this).attr('href') ).offset().top 
        }, '700');

    });
});
