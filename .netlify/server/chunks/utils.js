const formatDate = (dateFromPost) => {
  const rawDate = new Date(dateFromPost * 1e3);
  const year = rawDate.getFullYear().toString().slice(2);
  const month = (rawDate.getMonth() + 1).toString().padStart(2, "0");
  const day = rawDate.getDate().toString().padStart(2, "0");
  const mmddyy = `${day}-${month}-${year}`;
  return mmddyy;
};
const ssrDecodeHtml = (encodedString) => {
  if (!encodedString) {
    return "";
  }
  const translateRe = /&(nbsp|amp|quot|lt|gt);/g;
  const translate = {
    nbsp: " ",
    amp: "&",
    quot: '"',
    lt: "<",
    gt: ">"
  };
  return encodedString.replace(translateRe, (match, entity) => translate[entity]).replace(/&#(\d+);/gi, (match, numStr) => {
    const num = parseInt(numStr, 10);
    return String.fromCharCode(num);
  });
};
const csrDecodeHtml = (encodedHtml) => {
  const element = document.createElement("div");
  element.innerHTML = encodedHtml;
  return element.textContent || element.innerText;
};
const cleanDecodedHtml = (html) => {
  html = html.replace(/---------/g, "<br>");
  html = html.replace(/_________/g, "<br>");
  html = html.replace(/<a href="\/u\//g, '<a href="https://reddit.com/u/');
  html = html.replace("<p>&#x200B;</p>", "");
  return html;
};
const decodeHtmlEntities = (html) => {
  if (typeof document === "undefined") {
    return ssrDecodeHtml(html);
  }
  return csrDecodeHtml(html);
};
const decodeAndCleanHtml = (html) => {
  let decodedHtml = decodeHtmlEntities(html);
  return cleanDecodedHtml(decodedHtml);
};
export {
  decodeAndCleanHtml as d,
  formatDate as f
};
