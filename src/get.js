/*
 * @Author: Jindai Kirin 
 * @Date: 2019-02-18 13:28:24 
 * @Last Modified by: Jindai Kirin
 * @Last Modified time: 2019-02-18 18:14:11
 */

const Axios = require('axios');

/**
 * Get nHentai HTML
 *
 * @param {string} url URL
 * @returns Axios promise
 */
module.exports = (url) => Axios.get(url).then(ret => ret.data);
