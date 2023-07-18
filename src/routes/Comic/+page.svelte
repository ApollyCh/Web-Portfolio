<script lang="ts">
	import { onMount } from 'svelte';

	import moment from 'moment';

	let comic: any;

	onMount(async () => {
		try {
			const email = 'a.chernikova@innopolis.university';
			const response = await fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`);
			const id = await response.json();
			const comicResponse = await fetch(`https://fwd.innopolis.university/api/comic?id=${id}`);
			comic = await comicResponse.json();
		} catch (error) {
			console.error(error);
		}
	});
</script>

<title>Comic page</title>
<meta name="description" content="Funny picture haha" />

<h1>XKCD Comics</h1>

{#if comic}
	<div>
		<h2>{comic.title}</h2>
		<p>{new Date(comic.year, comic.month - 1, comic.day).toLocaleDateString()}</p>
		<p>{moment([comic.year, comic.month - 1, comic.day]).fromNow()}</p>
		<img src={comic.img} alt={comic.alt} />
	</div>
{:else}
	<p>Failed to load XKCD comic</p>
{/if}
