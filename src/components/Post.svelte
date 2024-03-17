<script lang="ts">
	import { processHtml, formatDateReadable, PostType } from '../utils';
	import MdiKeyboardBackspace from 'virtual:icons/mdi/KeyboardBackspace';
	import MdiReddit from 'virtual:icons/mdi/reddit';
	import PostTitle from './PostTitle.svelte';
	import Comments from './Comments.svelte';

	export let comments: PostComment[] = [];
	export let post: RawPost;
	const { selftext_html, url, created } = post.data;

	export let postType: PostType = PostType.Default; // -1 is from dynamic route. 0 is first post on landing page. > 0 is all other posts on landig page.
	const truncate = (text: string, limit: number) => {
		if (text.split(' ').length > limit) {
			const truncatedText = text.split(' ').slice(0, limit).join(' ');
			return `${truncatedText}...`;
		}
		return text;
	};

	let html = processHtml(selftext_html);
	if (postType === PostType.OutOfFocus) html = truncate(html, 50);
</script>

<div
	class={`${postType === PostType.Default && 'sticky z-10'} flex flex-col gap-y-1 justify-center items-stretch w-full top-0 left-0 pb-2 pt-1 bg-base-100`}
>
	{#if postType === -1}
		<div class="flex justify-between items-center gap-2 pt-2">
			<PostTitle {post} />
			<a href={`/`} class="bg-primary rounded-full p-2 text-base-100">
				<MdiKeyboardBackspace class="text-lg " />
			</a>
		</div>
	{:else}
		<PostTitle {post} postType={postType} />
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

<div class={`post-container ${postType === PostType.OutOfFocus && 'text-gradient'}`}>
	{@html html}
</div>

{#if postType === PostType.Default}
	<div class="divider my-2" />
	<section class="overflow-hidden">
		<Comments {comments} />
	</section>
{/if}

<style>
	/* global because if not will not properly target html inside of html object */
	/* :global(.post-container p, .post-container li) {
		margin-bottom: 1em;
	} */

	:global(.post-container) {
		overflow: hidden;
	}

	:global(.post-container .paragraph) {
		margin-bottom: 1em;
	}

	/* this is copy pasted from: .link and .link-primary */
	:global(.post-container .source) {
		cursor: pointer;
		text-decoration-line: underline;
		--tw-text-opacity: 1;
		color: var(--fallback-p, oklch(var(--p) / var(--tw-text-opacity)));
	}
	:global(.post-container .source:focus) {
		outline: 2px solid transparent;
		outline-offset: 2px;
	}
	:global(.post-container .source:focus-visible) {
		outline: 2px solid currentColor;
		outline-offset: 2px;
	}
	@supports (color: color-mix(in oklab, black, black)) {
		@media (hover: hover) {
			:global(.post-container .source:hover) {
				color: color-mix(
					in oklab,
					var(--fallback-p, oklch(var(--p) / 1)) 80%,
					black
				);
			}
		}
	}
	/* end of copy paste */

	.text-gradient {
		background-clip: text;
		color: transparent;
		background-image: linear-gradient(
			to bottom,
			theme('colors.base-content'),
			theme('colors.base-100')
		);
	}
</style>
