<script lang="ts">
	import { base } from '$app/paths';

</script>


<div class="first_part">
	<nav>

		<a href="{base}/" class="navigation">Home</a>
		<a href="{base}/Work" class="navigation">Tech</a>
		<a href="{base}/About" class="navigation">About</a>
		<a href="{base}/Contact" class="navigation">Contact</a>

	</nav>
</div>
<slot/>
<style>

	.first_part {
		box-shadow: 0 4px 4px #ffdfdf;
		position: fixed;
		margin-top: -20px;
		padding-top: 20px;
		padding-bottom: 20px;
		z-index: 999;
		width: 100%;
		background-color:#ffeed9;
	}

	nav {
		display: flex;
		flex-direction: row;
		/*padding-top: 20px;*/
		margin-left: 100px;
	}


	.navigation {
		color: #403930;
		font-family: 'Work Sans', sans-serif;
		border: 0;
		background-color:#ffeed9;
		text-decoration: none;
		margin-right: 50px;
	}

	.navigation:hover {
		text-shadow: 0 6px 6px #fcc5c5;
		cursor: pointer;
		z-index: 100;
	}

</style>