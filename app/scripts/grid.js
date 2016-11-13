$('.grid-item').on('click', function(e) {
	$('.grid-item').each(function() {
		$(this).removeClass('selected');
	});
	$(e.target.parentElement).addClass('selected');

	var activeTrapURL = $(e.target).attr('src');
	var activeTrap = getTrap(activeTrapURL);

	$('#trap-detail').fadeOut(function() {
		$('#trap-name').text(activeTrap.name);
		$('#trap-desc').text(activeTrap.desc);
		$('#trap-img').attr('src', activeTrap.imgURL);
		$(this).fadeIn();
	})

	
})

function getTrap(imgURL) {
	return traps.filter( function(trap) {
		return trap.imgURL == imgURL;
	})[0];
}

var traps = [
	{
		name : 'POOP',
		imgURL : 'images/traps/poop.png',
		desc : 'This is a Poop.'
	},
	{
		name : 'PLACEHOLDER',
		imgURL : 'images/player.png',
		desc : 'REPLACE THIS STUFF'
	},
	{
		name : 'STAR CANNON',
		imgURL : 'images/traps/star_cannon.png',
		desc : 'This is a Star Cannon.'
	},
	{
		name : 'TELEPORTER',
		imgURL : 'images/traps/teleporter.png',
		desc : 'This is a Teleporter.'
	},
	{
		name : 'ICE PATCH',
		imgURL : 'images/traps/ice.png',
		desc : 'This is an Ice Patch.'
	},
	{
		name : 'THE GHOSTIES',
		imgURL : 'images/traps/ghosties.png',
		desc : 'This is a Ghostie.'
	}
];