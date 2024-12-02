# Veckans
## https://veckans.site
Powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

Averages around 2000 page visitors monthly.

This is the code for https://veckans.site. It automatically fetches the [weekly posts from smurfjojjo123](https://www.reddit.com/r/sweden/?f=flair_name%3A%22Positiva%20Nyheter%22) containing positive news. 

Stack is:
* Svelte & Sveltekit
* Typescript
* TailwindCSS
* DaisyUI

Hosted at Vercel, to leverage ICR (Incremental Static Regeneration). ICR enables the site to use the benefits of prerendered content (SEO, speeds, caching, etc) but without requiring me to redeloy when fetching up-to-date content from reddit API.

Contribute to maintainance cost [here](https://ko-fi.com/tarekb).
