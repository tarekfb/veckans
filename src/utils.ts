export const formatDate = (dateFromPost: number) => {
	const rawDate = new Date(dateFromPost * 1000);
	const year = rawDate.getFullYear().toString().slice(2);
	const month = (rawDate.getMonth() + 1).toString().padStart(2, '0');
	const day = rawDate.getDate().toString().padStart(2, '0');
	const mmddyy = `${day}-${month}-${year}`;
	return mmddyy;
};
export const formatDateReadable = (dateFromPost: number) => {
	const rawDate = new Date(dateFromPost * 1000);
	const year = rawDate.getFullYear().toString().substring(2);
	const month = getSwedishMonthName(rawDate.getMonth() + 1).substring(0, 3);
	let day = rawDate.getDate().toString().padStart(2, '0');
	if (day.substring(0, 1) === '0') day = day.substring(1);
	const formattedDate = `${day} ${month} ${year}`;
	return formattedDate;
};

export const addClasses = (html: string) => {
	console.log(html);
	const kallorIndex = html.indexOf('Källor');
	if (kallorIndex > -1) return html;

	let contentBeforeKallor = html.substring(0, kallorIndex);
	console.log('length is', html.length);

	const tempIndex = contentBeforeKallor.indexOf('<p>');
	console.log('tempisindex', tempIndex);

	contentBeforeKallor = contentBeforeKallor
		.replaceAll('<ul>', '')
		.replaceAll('</ul>', '')
		.replaceAll('<p>', '<p class="paragraph">')
		.replaceAll('<li>', '<li class="paragraph">');

	html = contentBeforeKallor + html.substring(kallorIndex);
	console.log('length is after', html.length);
	return html;
};

const getSwedishMonthName = (monthNumber: number) => {
	const monthNames = [
		'Januari',
		'Februari',
		'Mars',
		'April',
		'Maj',
		'Juni',
		'Juli',
		'Augusti',
		'September',
		'Oktober',
		'November',
		'December',
	];
	return monthNames[monthNumber - 1];
};

const ssrDecodeHtml = (encodedString: string): string => {
	if (!encodedString) {
		return '';
	}
	const translateRe = /&(nbsp|amp|quot|lt|gt);/g;
	const translate: { [key: string]: string } = {
		nbsp: ' ',
		amp: '&',
		quot: '"',
		lt: '<',
		gt: '>',
	};
	return encodedString
		.replace(translateRe, (match, entity) => translate[entity])
		.replace(/&#(\d+);/gi, (match, numStr) => {
			const num = parseInt(numStr, 10);
			return String.fromCharCode(num);
		});
};

const csrDecodeHtml = (encodedHtml: string): string => {
	const element = document.createElement('div'); // TODO: sanitate output element param
	element.innerHTML = encodedHtml;
	return element.textContent || element.innerText;
};

export const cleanDecodedHtml = (html: string) => {
	return html
		.replace(/---------/g, '')
		.replace(/_________/g, '')
		.replace(/<a href="\/u\//g, '<a href="https://reddit.com/u/')
		.replace('<p>&#x200B</p>', '')
		.replace('<br>', '')
		.replace('<p></p>', '')
		.replace('<p> </p>', '')
		.replace('<br></br>', '')
		.replace(
			'Vill man läsa tidigare veckors inlägg kan man göra det genom taggen under rubriken på inlägget. Som vanligt är jag inte särskilt bra på att svara på kommentarer, men jag läser och uppskattar dem verkligen. Ifall man själv stött på någon positiv nyhet under veckan får man gärna lägga den som en kommentar eller skicka iväg ett PM ifall man har ork och lust, så kan jag ta med nyheten i nästa veckas inlägg.',
			'',
		);
};

export const decodeHtmlEntities = (html: string): string => {
	if (typeof document === 'undefined') {
		// is SSR
		return ssrDecodeHtml(html);
	}
	return csrDecodeHtml(html);
};

export const processHtml = (rawHtml: string) => {
	let html = decodeHtmlEntities(rawHtml);
	html = cleanDecodedHtml(html);
	html = addClasses(html);
	return html;
};
