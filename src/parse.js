/*
 * @Author: Jindai Kirin 
 * @Date: 2019-02-18 14:49:30 
 * @Last Modified by: Jindai Kirin
 * @Last Modified time: 2019-03-25 18:22:02
 */

const Cheerio = require('cheerio');
const Qs = require('qs');

/**
 * Parse details page
 *
 * @param {string} html
 * @returns Object
 */
function details(html) {
	let json = /(?<=gallery\()\{.+\}(?=\);)/.exec(html)[0];
	let obj = JSON.parse(json);
	// For consistency such as https://nhentai.net/g/66/
	if (typeof obj.id == 'string') obj.id = parseInt(obj.id);
	return obj;
}

/**
 * Parse list page
 *
 * @param {string} html
 * @returns Object
 */
function list(html) {
	const $ = Cheerio.load(html, {
		decodeEntities: false
	});

	let results = [];
	$('.gallery').each((i, e) => {
		let $this = $(e);
		let $thumb = $this.find('.cover>img');

		let language = '';
		let dataTags = $this.attr('data-tags').split(' ');
		if (dataTags.includes('6346')) language = 'japanese';
		else if (dataTags.includes('12227')) language = 'english';
		else if (dataTags.includes('29963')) language = 'chinese';

		results.push({
			id: /(?<=\/g\/).+(?=\/)/.exec($this.find('.cover').attr('href'))[0],
			title: $this.find('.caption').html(),
			language,
			thumbnail: {
				s: $thumb.attr('data-src') || $thumb.attr('src').replace(/^\/\//, 'https://'),
				w: $thumb.attr('width'),
				h: $thumb.attr('height')
			}
		});
	});

	let addon = {};
	if ($('#content>h2').length > 0) addon.num_results = parseInt($('#content>h2').html().replace(',', '')) || 0;
	if ($('.pagination').length > 0) addon.num_pages = parseInt(Qs.parse($(`.pagination>${$('.pagination>.last').length>0?'.last':'.current'}`).attr('href').substring(1)).page);

	return {
		...addon,
		results
	};
}

module.exports = {
	details,
	list
};
