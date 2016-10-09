import request from 'request';
import cheerio from 'cheerio';
import fs from 'fs';

const url = 'https://en.wikipedia.org/wiki/List_of_Intel_codenames';

request(url, (error, response, body) => {
	if (error) {
		console.log('Error!');
	}

	const $ = cheerio.load(body);
	const names = $('.wikitable tr td:first-child').map((i, el) => {
		return $(el).text();
	}).get();

	console.log(names[Math.floor(Math.random() * names.length)]);
});