function resetDpiScale() {
	document.documentElement.style.zoom = 1 / window.devicePixelRatio;
}

// Content-Type triggers (window.contentType)
const mediaTypes = [
	'image/jpeg',
	'image/png',
	'image/gif',
	'image/bmp',
	'image/webp'
];

// Special URLs (e.g. Imgur gifv)
const urlChecks = [
	'^.*\\.gifv($|\\?)'
];

(() => {
	if (mediaTypes.includes(document.contentType)) {
		resetDpiScale();
		return;
	}

	const url = window.location.toString();
	const urlMatches = urlChecks.some(r => (new RegExp(r)).test(url));

	if (urlMatches) {
		resetDpiScale();
		return;
	}
})();
