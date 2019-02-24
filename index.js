/*
 * @Author: Jindai Kirin 
 * @Date: 2019-02-18 16:33:33 
 * @Last Modified by: Jindai Kirin
 * @Last Modified time: 2019-02-24 15:31:59
 */

const getHTML = require('./src/get');
const Parse = require('./src/parse');
const nHentaiGallery = require('./src/gallery');
const Qs = require('qs');

async function parseDetailsHTML(url) {
	return Parse.details(await getHTML(url).catch(e => {
		if (e.response.status == 404) throw new Error('Doujin Not Found');
		else throw e;
	}));
}

async function parseListHTML(url) {
	return Parse.list(await getHTML(url).catch(e => {
		if (e.response.status == 404) throw new Error('Parameter Error');
		else throw e;
	}));
}

/**
 * nHentai API
 *
 * @class nHentaiAPI
 */
class nHentaiAPI {
	/**
	 * Creates an instance of nHentaiAPI.
	 * @param {string} [baseURL='https://nhentai.net'] nHentai base URL
	 * @memberof nHentaiAPI
	 */
	constructor(baseURL = 'https://nhentai.net') {
		this.baseURL = baseURL;
	}

	/**
	 * Get doujin details
	 *
	 * @param {string|number} id Gallery ID
	 * @returns nHentaiGallery object
	 * @memberof nHentaiAPI
	 */
	async g(id) {
		return new nHentaiGallery(await parseDetailsHTML(`${this.baseURL}/g/${id}/`));
	}

	/**
	 * Search doujin
	 *
	 * @param {string} keyword Keyword
	 * @param {number} [page=1] Page num
	 * @param {string} [sort='date'] "date" (default) or "popular"
	 * @returns Doujin list object
	 * @memberof nHentaiAPI
	 */
	search(keyword, page = 1, sort = 'date') {
		let query = Qs.stringify({
			q: keyword,
			page,
			sort
		});
		return parseListHTML(`${this.baseURL}/search/?${query}`);
	}


	/**
	 * Get doujin list from homepage
	 *
	 * @param {number} [page=1] Page num
	 * @returns Doujin list object
	 * @memberof nHentaiAPI
	 */
	homepage(page = 1) {
		let query = Qs.stringify({
			page
		});
		return parseListHTML(`${this.baseURL}/?${query}`);
	}

	/**
	 * Get a random doujin
	 *
	 * @returns Doujin details object
	 * @memberof nHentaiAPI
	 */
	random() {
		return parseDetailsHTML(`${this.baseURL}/random/`);
	}

	/**
	 * Get doujin list by tag
	 *
	 * @param {string} name Tag name
	 * @param {number} [page=1] Page num
	 * @param {string} [sort='date'] "date" (default) or "popular"
	 * @returns Doujin list object
	 * @memberof nHentaiAPI
	 */
	tag(name, page = 1, sort = 'date') {
		let query = Qs.stringify({
			page
		});
		return parseListHTML(`${this.baseURL}/tag/${name.replace(' ','-')}/${sort=='date'?'':sort}?${query}`);
	}

	/**
	 * Get doujin list by artist
	 *
	 * @param {string} name Artist name
	 * @param {number} [page=1] Page num
	 * @param {string} [sort='date'] "date" (default) or "popular"
	 * @returns Doujin list object
	 * @memberof nHentaiAPI
	 */
	artist(name, page = 1, sort = 'date') {
		let query = Qs.stringify({
			page
		});
		return parseListHTML(`${this.baseURL}/tag/${name.replace(' ','-')}/${sort=='date'?'':sort}?${query}`);
	}

	/**
	 * Get doujin list by character
	 *
	 * @param {string} name Character name
	 * @param {number} [page=1] Page num
	 * @param {string} [sort='date'] "date" (default) or "popular"
	 * @returns Doujin list object
	 * @memberof nHentaiAPI
	 */
	character(name, page = 1, sort = 'date') {
		let query = Qs.stringify({
			page
		});
		return parseListHTML(`${this.baseURL}/tag/${name.replace(' ','-')}/${sort=='date'?'':sort}?${query}`);
	}

	/**
	 * Get doujin list by parody
	 *
	 * @param {string} name Parody name
	 * @param {number} [page=1] Page num
	 * @param {string} [sort='date'] "date" (default) or "popular"
	 * @returns Doujin list object
	 * @memberof nHentaiAPI
	 */
	parody(name, page = 1, sort = 'date') {
		let query = Qs.stringify({
			page
		});
		return parseListHTML(`${this.baseURL}/tag/${name.replace(' ','-')}/${sort=='date'?'':sort}?${query}`);
	}

	/**
	 * Get doujin list by group
	 *
	 * @param {string} name Group name
	 * @param {number} [page=1] Page num
	 * @param {string} [sort='date'] "date" (default) or "popular"
	 * @returns Doujin list object
	 * @memberof nHentaiAPI
	 */
	group(name, page = 1, sort = 'date') {
		let query = Qs.stringify({
			page
		});
		return parseListHTML(`${this.baseURL}/tag/${name.replace(' ','-')}/${sort=='date'?'':sort}?${query}`);
	}
}

module.exports = nHentaiAPI;
