
var waypoint = new Waypoint({
  element: document.getElementById('pink'),
  handler: function(direction) {
    if (direction == 'down') {
    	console.log('pink');
    	$('.header').animate({
    		backgroundColor: "#e82548"
    	}, 300);
    	$('.nav-item').css('color', 'white');
    	$('.active').css('border-bottom', '5px solid white');
    } else {
    	console.log('white');
    	$('.header').animate({
    		backgroundColor: "#ffffff"
    	}, 300);
    	$('.nav-item').css('color', '#e82548');
    	$('.active').css('border-bottom', '5px solid #e82548');
    }
  }
});

var teamWaypoint = new Waypoint({
  element: document.getElementById('team'),
  handler: function(direction) {
  	console.log(direction);
    if (direction == 'down') {
    	$('.active').css('border-bottom', 'none');
    	$('#home-nav').removeClass('active');
    	$('#team-nav').addClass('active');
    	$('.active').css('border-bottom', '5px solid white');
    } else {
    	$('.active').css('border-bottom', 'none');
    	$('#team-nav').removeClass('active');
    	$('#home-nav').addClass('active');
    	$('.active').css('border-bottom', '5px solid white');
    }
  },
  offset: 30
});

$('#team-nav').on('click', function() {
	$('html, body').animate({
        scrollTop: $("#team").offset().top - 30
    }, 700);
});

$('#home-nav').on('click', function() {
	$('html, body').animate({
        scrollTop: 0
    }, 700);
})