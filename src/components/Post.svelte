<script lang="ts">
	import { processHtml, formatDateReadable } from '../utils';
	import MdiKeyboardBackspace from 'virtual:icons/mdi/KeyboardBackspace';
	import MdiReddit from 'virtual:icons/mdi/reddit';
	import PostTitle from './PostTitle.svelte';

	export let post: { post: RawPost };
	const { selftext_html, url, created } = post.post.data;

	export let index = -1; // -1 is from dynamic route. 0 is first post on landing page. > 0 is all other posts on landig page.
	const truncate = (text: string, limit: number) => {
		if (text.split(' ').length > limit) {
			const truncatedText = text.split(' ').slice(0, limit).join(' ');
			return `${truncatedText}...`;
		}
		return text;
	};

	let html = processHtml(selftext_html);
	if (index > 0) html = truncate(html, 50);
</script>

<div
	class={`${index === -1 && 'sticky'} flex flex-col gap-y-1 justify-center items-stretch w-full top-0 left-0 pb-2 pt-1 bg-base-100`}
>
	{#if index === -1}
		<div class="flex justify-between items-center gap-2">
			<PostTitle {post} />
			<button
				class="btn btn-primary rounded-full text-white"
				on:click={() => (window.location.href = '/')}
			>
				<MdiKeyboardBackspace class="text-lg " />
			</button>
		</div>
	{:else}
		<PostTitle {post} {index} />
	{/if}

	<div class="flex items-center gap-2 text-sm">
		<a
			href={url}
			class="text-2xl text-red-600 rounded-full bg-white"
			placeholder="Läs på reddit.com"><MdiReddit /></a
		>
		|
		<h2 class="font-mono whitespace-nowrap">
			{formatDateReadable(created)}
		</h2>
		|
		<span>
			Text:
			<a
				href="https://www.reddit.com/user/smurfjojjo123"
				class="link link-primary">@smurfjojjo123</a
			>
		</span>
	</div>

	<div class="divider my-2" />
</div>

<div class={`post-container ${index > 0 && 'text-gradient'}`}>
	{@html html}
</div>

<style lang="postcs">
	/* global because if not will not properly target html inside of html object */
	:global(.post-container p, .post-container li) {
		margin-bottom: 1em;
	}

	:global(.post-container) {
		overflow: hidden;
	}

	.text-gradient {
		background-clip: text;
		color: transparent;
		background-image: linear-gradient(
			to bottom,
			#000000,
			#a1a1a1
		); /* Adjust gradient colors as needed */
	}
</style>
