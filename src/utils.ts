
export const formatDate = (dateFromPost: number) => {
    const rawDate = new Date(dateFromPost * 1000);
    const year = rawDate.getFullYear().toString().slice(2);
    const month = (rawDate.getMonth() + 1).toString().padStart(2, '0');
    const day = rawDate.getDate().toString().padStart(2, '0');
    const mmddyy = `${day}-${month}-${year}`;
    return mmddyy;
}

const ssrDecodeHtml = (encodedString: string): string => {
    if (!encodedString) {
        return '';
    }
    const translateRe = /&(nbsp|amp|quot|lt|gt);/g;
    const translate: { [key: string]: string } = {
        "nbsp": " ",
        "amp": "&",
        "quot": "\"",
        "lt": "<",
        "gt": ">"
    };
    return encodedString
        .replace(translateRe, (match, entity) => translate[entity])
        .replace(/&#(\d+);/gi, (match, numStr) => {
            const num = parseInt(numStr, 10);
            return String.fromCharCode(num);
        });
}

const csrDecodeHtml = (encodedHtml: string): string => {
    const element = document.createElement('div'); // TODO: sanitate output element param
    element.innerHTML = encodedHtml;
    return element.textContent || element.innerText;
}

export const cleanDecodedHtml = (html: string) => {
    html = html.replace(/---------/g, '<br>');
    html = html.replace(/_________/g, '<br>');
    html = html.replace(/<a href="\/u\//g, '<a href="https://reddit.com/u/');
    html = html.replace('<p>&#x200B;</p>', '');
    return html;
}

export const decodeHtmlEntities = (html: string): string => {
    if (typeof document === 'undefined') { // is SSR
        return ssrDecodeHtml(html)
    }
    return csrDecodeHtml(html);
}

export const decodeAndCleanHtml = (html: string) => {
    let decodedHtml = decodeHtmlEntities(html);
    return cleanDecodedHtml(decodedHtml);
};

export const fetchPosts = async (): Promise<RawPost[]> => {
    const response = await fetch('https://www.reddit.com/user/smurfjojjo123/submitted.json');

    if (!response.ok) throw new Error(`Failed to fetch data. Status: ${response.status}`);

    const data = await response.json() as PostCollection;
    if (!data || data.data.children.length < 1) throw new Error('No posts found')

    const posts: RawPost[] = [];
    data.data.children.forEach(child => {
        if (child.data.link_flair_richtext.length > 0)
            if (child.data.link_flair_richtext[0].t)
                if (child.data.link_flair_richtext[0].t === 'Positiva Nyheter')
                    posts.push(child);
    })

    return posts;
}