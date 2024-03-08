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
    const year = rawDate.getFullYear();
    const month = getSwedishMonthName(rawDate.getMonth() + 1);
    let day = rawDate.getDate().toString().padStart(2, '0');
	if (day.substring(0, 1) === '0') day = day.substring(1);
    const formattedDate = `${day} ${month} ${year}`;
    return formattedDate;
};

const getSwedishMonthName = (monthNumber: number) => {
    const monthNames = [
        "Januari",
        "Februari",
        "Mars",
        "April",
        "Maj",
        "Juni",
        "Juli",
        "Augusti",
        "September",
        "Oktober",
        "November",
        "December"
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
	html = html.replace(/---------/g, '');
	html = html.replace(/_________/g, '');
	html = html.replace(/<a href="\/u\//g, '<a href="https://reddit.com/u/');
	html = html.replace('<p>&#x200B;</p>', '');
	html = html.replace('<br>', '');
	html = html.replace('<p></p>', '');
	html = html.replace('<br></br>', '');
	html = html.replace('Vill man läsa tidigare veckors inlägg kan man göra det genom taggen under rubriken på inlägget. Som vanligt är jag inte särskilt bra på att svara på kommentarer, men jag läser och uppskattar dem verkligen. Ifall man själv stött på någon positiv nyhet under veckan får man gärna lägga den som en kommentar eller skicka iväg ett PM ifall man har ork och lust, så kan jag ta med nyheten i nästa veckas inlägg.', '');
	return html;
};

export const decodeHtmlEntities = (html: string): string => {
	if (typeof document === 'undefined') {
		// is SSR
		return ssrDecodeHtml(html);
	}
	return csrDecodeHtml(html);
};

export const decodeAndCleanHtml = (html: string) => {
	const decodedHtml = decodeHtmlEntities(html);
	return cleanDecodedHtml(decodedHtml);
};
