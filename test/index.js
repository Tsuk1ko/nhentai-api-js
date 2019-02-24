const nHentaiAPI = require('..');

let api = new nHentaiAPI();

async function log(promise) {
	console.log(JSON.stringify(await promise, null, 4));
}

//log(api.g(263492));
//log(api.search('艦隊これくしょん'));
//log(api.search('艦隊これくしょん',2,'popular'));
//log(api.homepage());
//log(api.random());
//log(api.tag('anal'));
//log(api.tag('anal',2,'popular'));

api.g(263492).then(gallery => {
	console.log(gallery.getPages());
	console.log(gallery.getPagesThumbnail());
	console.log(gallery.getCover());
	console.log(gallery.getCoverThumbnail());
});
