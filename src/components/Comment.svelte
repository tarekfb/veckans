<script lang="ts">
	export let margin: number;
	export let author: string;
	export let body: string;
</script>

<li style={`margin-left:${margin}px`} class="mt-2">
	<h2 class="card-title">{author}</h2>
	<p>{body}</p>
</li>
