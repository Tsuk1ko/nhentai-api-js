/*
 * @Author: Jindai Kirin 
 * @Date: 2019-02-24 13:42:14 
 * @Last Modified by: Jindai Kirin
 * @Last Modified time: 2019-02-24 15:00:37
 */

const TYPE = {
	j: 'jpg',
	p: 'png',
	g: 'gif'
};

class nHentaiGallery {
	/**
	 * Creates an instance of nHentaiGallery.
	 * @param {*} obj Doujin details object
	 * @memberof nHentaiGallery
	 */
	constructor(obj) {
		for (let key in obj) {
			this[key] = obj[key];
		}
	}

	/**
	 * Get a URL list of pages
	 *
	 * @param {string} [baseURL='https://i.nhentai.net'] Base URL
	 * @returns URL list
	 * @memberof nHentaiGallery
	 */
	getPages(baseURL = 'https://i.nhentai.net') {
		let pages = [];
		this.images.pages.forEach((page, i) => {
			pages.push(`${baseURL}/galleries/${this.media_id}/${i+1}.${TYPE[page.t]}`);
		});
		return pages;
	}

	/**
	 * Get a URL list of pages thumbnail
	 *
	 * @param {string} [baseURL='https://t.nhentai.net'] Base URL
	 * @returns URL list
	 * @memberof nHentaiGallery
	 */
	getPagesThumbnail(baseURL = 'https://t.nhentai.net') {
		let pages = [];
		this.images.pages.forEach((page, i) => {
			pages.push(`${baseURL}/galleries/${this.media_id}/${i+1}t.${TYPE[page.t]}`);
		});
		return pages;
	}

	/**
	 * Get a URL of cover
	 *
	 * @param {string} [baseURL='https://t.nhentai.net'] Base URL
	 * @returns URL
	 * @memberof nHentaiGallery
	 */
	getCover(baseURL = 'https://t.nhentai.net') {
		return `${baseURL}/galleries/${this.media_id}/cover.${TYPE[this.images.cover.t]}`;
	}

	/**
	 * Get a URL of cover thumbnail
	 *
	 * @param {string} [baseURL='https://t.nhentai.net'] Base URL
	 * @returns URL
	 * @memberof nHentaiGallery
	 */
	getCoverThumbnail(baseURL = 'https://t.nhentai.net') {
		return `${baseURL}/galleries/${this.media_id}/thumb.${TYPE[this.images.cover.t]}`;
	}
}



module.exports = nHentaiGallery;
