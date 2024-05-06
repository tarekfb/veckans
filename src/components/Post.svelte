<script lang="ts">
	import { processHtml, formatDateReadable, PostType } from '../utils';
	import MdiKeyboardBackspace from 'virtual:icons/mdi/KeyboardBackspace';
	import MdiReddit from 'virtual:icons/mdi/reddit';
	import MdiCommentOffOutline from 'virtual:icons/mdi/CommentOffOutline';
	import MdiCommentOutline from 'virtual:icons/mdi/CommentOutline';
	import PostTitle from './PostTitle.svelte';
	import Comments from './Comments.svelte';

	export let comments: PostComment[] = [];
	export let post: RawPost;
	export let postType: PostType = PostType.Default;
	// -1 is from dynamic route
	// 0 is first post on landing page
	// > 0 is all other posts on landig page
	// default is post from [slug]

	const truncate = (text: string, limit: number) => {
		if (text.split(' ').length > limit) {
			const truncatedText = text.split(' ').slice(0, limit).join(' ');
			return `${truncatedText}...`;
		}
		return text;
	};

	$: ({ selftext_html, url, created } = post.data);
	$: html = processHtml(selftext_html);
	$: if (postType === PostType.OutOfFocus) html = truncate(html, 50);

	$: isShowingComments = true;
</script>

<section
	class={`flex flex-col gap-y-1 justify-center items-stretch  py-1 ${postType === PostType.Default && '-mx-4 px-4 bg-gradient-to-b base-gradient-colors'}`}
>
	{#if postType === -1}
		<div class="flex justify-between items-center gap-4 pt-1">
			<PostTitle {post} />
			<a href={`/`} class="bg-primary rounded-full p-2 text-base-100">
				<MdiKeyboardBackspace class="text-lg " />
			</a>
		</div>
	{:else}
		<PostTitle {post} {postType} />
	{/if}

	<div class="flex items-center gap-4 text-sm mt-1">
		<a
			href={url}
			class="text-2xl text-red-600 rounded-full bg-white"
			aria-label="reddit post link"
			placeholder="Läs på reddit.com"><MdiReddit /></a
		>
		<h2 class="font-mono whitespace-nowrap text-base-content/75">
			{formatDateReadable(created)}
		</h2>
	</div>
</section>
<div class="hidden lg:flex divider mb-2"></div>
<main
	class={`post-container ${postType === PostType.OutOfFocus && 'text-gradient'} lg:flex lg:px-2 lg:float-left lg:max-w-screen-xl`}
>
	<div>
		{@html html}
		<div class="hidden lg:flex divider">
			<label class="swap swap-rotate">
				<input
					type="checkbox"
					bind:checked={isShowingComments}
					aria-label="toggle comments"
				/>
				<MdiCommentOffOutline class="swap-on text-primary w-10 h-10 " />
				<MdiCommentOutline class="swap-off text-primary w-10 h-10" />
			</label>
		</div>
	</div>
	<div class="hidden lg:flex divider divider-horizontal mb-10"></div>
</main>

{#if postType === PostType.Default || postType === PostType.InFocus}
	<div class="lg:hidden divider my-2">
		<label class="swap swap-rotate">
			<input
				type="checkbox"
				bind:checked={isShowingComments}
				aria-label="toggle comments"
			/>
			<MdiCommentOffOutline class="swap-on text-primary w-10 h-10 " />
			<MdiCommentOutline class="swap-off text-primary w-10 h-10" />
		</label>
	</div>

	{#if isShowingComments}
		<section class="lg:-mt-4">
			<Comments {comments} {postType} />
		</section>
	{/if}
{/if}

<style>
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
</style>
