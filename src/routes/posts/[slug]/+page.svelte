<script lang="ts">
    export let data: DynamicPost;
</script>

<h1 class="text-3xl font-bold underline">Hello world!</h1>
<h1>{data.title}</h1>
<p>{data.content}</p>
