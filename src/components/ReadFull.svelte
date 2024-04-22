<script lang="ts">
	import { formatDate } from '../utils';

	export let created: number;
</script>

<div>
	<a href={`/${formatDate(created)}`} class="btn btn-primary mt-4">
		Läs hela
	</a>
</div>
