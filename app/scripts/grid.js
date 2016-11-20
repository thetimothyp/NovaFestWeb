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
		name : 'PLACEHOLDER',
		imgURL : 'images/player.png',
		desc : 'REPLACE THIS STUFF',
		vidURL : 'images/bg.mp4'
	},
	////////////////
	// STATIC TRAPS
	////////////////
	{
		name : 'PLOO',
		imgURL : 'images/traps/poop.png',
		desc : 'An interstellar poop with an appetite for flesh, this \
			radioactive turd kills players on contact.',
		vidURL : 'images/bg.mp4'
	},
	{
		name : 'MINITHULU',
		imgURL : 'images/traps/jelly.png',
		desc : 'These miniature acolytes of the Great Mechathulu are deadlier \
			than they look; those who touch these will meet a shocking end.',
		vidURL : 'images/bg.mp4'
	},
	// PUT TESLA COIL HERE

	////////////////////////
	// REPEATING TRAPS
	////////////////////////
	{
		name : 'STAR CANNON',
		imgURL : 'images/traps/star_cannon.png',
		desc : 'Originally protection against stray space debris, \
			these cannons have been refitted for use in the Novafest arena. Try \
			not to get shot.',
		vidURL : 'images/bg.mp4'
	},
	{
		name : 'KITTY KANNON',
		imgURL : 'images/traps/kitty.png',
		desc : 'These cosmic cats have a hankering for destruction. Armed with \
			face lasers, they\'ll obliterate anything in the arena with glee.',
		vidURL : 'images/bg.mp4'
	},
	// PUT FLAMETHROWER HERE

	////////////////////////
	// ENVIRONMENTAL TRAPS
	////////////////////////
	{
		name : 'TELEPORTER',
		imgURL : 'images/traps/teleporter.png',
		desc : 'A godsend for lazy tourists the universe over, nobody \
			really knows how this teleporter works. But it\'s mostly safe to use.',
		vidURL : 'images/trap_videos/teleporter.mp4'
	},
	{
		name : 'ICE PATCH',
		imgURL : 'images/traps/ice.png',
		desc : 'This glossy substance has a curiously low coefficient of \
			friction. One might just slide right over it...',
		vidURL : 'images/trap_videos/ice.mp4'
	},
	{
		name : 'HELL\'S WINDOW',
		imgURL : 'images/traps/hellsgate.png',
		desc : 'Take a peek into Hell\'s Window and you\'re off in a \
			blaze of glory. You\'ll lose basic motor function, but at least \
			you\'ll be fast.',
		vidURL : 'images/trap_videos/hell.mp4'
	},

	/////////////////
	// GLOBAL TRAPS
	/////////////////
	{
		name : 'THE GHOSTEES',
		imgURL : 'images/traps/ghosties.png',
		desc : 'Leftover souls from past Novafest losers. With those wiggly arms, \
			they\'re spooky enough to kill anything they touch.',
		vidURL : 'images/bg.mp4'
	},
	{
		name : 'COSMIC FLATULENCE',
		imgURL : 'images/traps/creep.png',
		desc : 'This cosmic gas has welcomed more than a few interstellar \
			travelers into its toxic embrace. Don\'t touch it.',
		vidURL : 'images/bg.mp4'
	}

	// PUT CENTRAL FLAMETHROWER HERE
];