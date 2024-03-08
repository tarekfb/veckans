<script lang="ts">
	import type { PageData } from './$types';
	import { decodeAndCleanHtml, formatDate } from '../utils';
	import MdiHome from 'virtual:icons/mdi/home';

	export let data: PageData;

	const truncateText = (text: string, limit: number) => {
		if (text.split(' ').length > limit) {
			const truncatedText = text.split(' ').slice(0, limit).join(' ');
			return `${truncatedText}...`;
		}
		return text;
	};
</script>

<main>
	<nav class="flex justify-between mb-5">
		<h1 class="text-4xl font-semibold">Alla samlade positiva nyheter</h1>
		<a href="/" class="flex justify-center items-center"
			><MdiHome font-size="3em" class="hover:text-blue-800" /></a
		>
	</nav>
	<ol>
		{#each data.posts as post (post.data.created)}
			<li class="mb-2">
				<h1 class="text-3xl font-semibold my-3">
					<a href={post.data.url}>🔗</a>
					<a href={`/posts/${formatDate(post.data.created)}`}
						>{post.data.title}</a
					>
				</h1>
				<h2 class="text-xl mb-3">
					📅 {formatDate(post.data.created)}
				</h2>
				<p>
					{@html truncateText(decodeAndCleanHtml(post.data.selftext_html), 50)}
				</p>
				<p>
					<a href={`/posts/${formatDate(post.data.created)}`}>Läs mer här</a>
				</p>
			</li>
		{/each}
	</ol>
</main>

<style lang="postcs">
	/* Using global here because if not will not properly target html inside of formattedContent object */
	:global(ol li, ol p) {
		margin-bottom: 1em;
	}
</style>
