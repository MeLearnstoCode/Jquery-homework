// 1) Hiding

$(document).ready(function(){
    $("body").click(function(){
    // $("h1").click(function(){ 
        $("h1").hide(500);
 // 2) Showing
		$("h1").show(500);
        });
 
    });

// 3) Slide Up/Down

$(document).ready(function(){
	$('body').hover(function(){
	// $('.img-swap').click(function(){
		$('.img-swap').slideUp('slow');
		$('.img-swap').slideDown('slow');
		// alert('all done');

		});
});

//4)Replace
$(document).ready(function(){
	$('body').click(function(){
	// $('#main').click(function(){
		$('#main').replaceWith('<h1>Hello World!</h1>');
	});
});

//5)Animate
$(document).ready(function(){
     $("body").mouseenter(function(){
    // $(".box").mouseenter(function(){
        $(".box").animate({
        	height: '500px',
        	width:'500px'
        });
    });
});

// Toggle
$(document).ready(function(){
    $("body").click(function(){
    // $("#change").click(function(){
        $("#hide").toggle(function(){
        	alert('alert once toggle is complete');

        });
    });
});
