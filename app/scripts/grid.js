$('.grid-item').on('click', function(e) {
	$('.grid-item').each(function() {
		$(this).removeClass('selected');
	});
	$(e.target.parentElement).addClass('selected');

	var activeTrapURL = $(e.target).attr('src');
	var activeTrap = getTrap(activeTrapURL);

	$('#trap-detail').fadeOut(400, function() {
		$('#loading').fadeIn(100);
		var self = $(this);
		$('#trap-vid-src').attr('src', activeTrap.vidURL);
		$('#trap-vid')[0].load();
		$('#trap-name').text(activeTrap.name);
		$('#trap-desc').text(activeTrap.desc);
		$('#trap-img').attr('src', activeTrap.imgURL);
		$('#trap-vid').on('canplaythrough', function() {
			$('#loading').fadeOut(200, function() {
				self.fadeIn(300);
			});
		});
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
		desc : 'An interstellar poop with an appetite for human flesh, this \
			radioactive turd kills players on contact.',
		vidURL : 'images/bg.mp4'
	},
	{
		name : 'PLACEHOLDER',
		imgURL : 'images/player.png',
		desc : 'REPLACE THIS STUFF',
		vidURL : 'images/bg.mp4'
	},
	{
		name : 'STAR CANNON',
		imgURL : 'images/traps/star_cannon.png',
		desc : 'This is a Star Cannon.',
		vidURL : 'images/bg.mp4'
	},
	{
		name : 'TELEPORTER',
		imgURL : 'images/traps/teleporter.png',
		desc : 'This is a Teleporter.',
		vidURL : 'images/trap_videos/teleporter.mp4'
	},
	{
		name : 'ICE PATCH',
		imgURL : 'images/traps/ice.png',
		desc : 'This is an Ice Patch.',
		vidURL : 'images/trap_videos/ice.mp4'
	},
	{
		name : 'THE GHOSTIES',
		imgURL : 'images/traps/ghosties.png',
		desc : 'This is a Ghostie.',
		vidURL : 'images/bg.mp4'
	}
];