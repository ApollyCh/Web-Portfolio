<script lang="ts">
	import Inst from '$lib/images/instagram.png';
	import Pint from '$lib/images/pinterest.png';
	import Git from '$lib/images/github.png';
	import Tel from '$lib/images/telegram.png';
</script>

<div class="end">
	<div class="container">
		<h1 id="n4">Let's work together and make everything super cute and super useful.</h1>
	</div>
	<div class="container3">
		<button
			class="icons"
			on:click={() =>
				(window.location.href =
					'https://instagram.com/apollinaria_chernikova?igshid=MjEwN2IyYWYwYw==')}
		>
			<img src={Inst} alt="insta" id="inst" />
		</button>
		<button
			class="icons"
			on:click={() =>
				(window.location.href = 'https://www.pinterest.com/apollinariachernikova/_created/')}
		>
			<img src={Pint} alt="pint" id="pint" />
		</button>
		<button class="icons" on:click={() => (window.location.href = 'https://github.com/ApollyCh')}>
			<img src={Git} alt="git" id="git" />
		</button>
		<button class="icons" on:click={() => (window.location.href = 'https://t.me/Apollinaria2004')}>
			<img src={Tel} alt="tel" id="tel" />
		</button>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
	}

	h1 {
		font-family: 'Eczar', serif;
		color: #403930;
		position: relative;
		font-size: 64px;
		padding-top: 30px;
	}

	.end {
		background-color: #ffeed9;
		opacity: 100%;
		height: max-content;
		position: relative;
		margin-top: 20px;

		margin-left: 100px;
	}

	#n4 {
		width: 892px;
	}

	.icons {
		width: 65px;
		height: 50px;
		background-color: #ffeed9;
		border: 0;
		opacity: 80%;
	}

	.container3 {
		display: flex;
		flex-direction: row;
		margin-top: 70px;
		margin-left: 75%;
		position: relative;
		padding-top: 180px;
	}

	#inst {
		width: 50px;
		height: 50px;
	}

	#inst:hover {
		opacity: 70%;
	}

	#pint {
		width: 50px;
		height: 50px;
	}

	#pint:hover {
		opacity: 70%;
	}

	#git {
		width: 50px;
		height: 50px;
	}

	#git:hover {
		opacity: 70%;
	}

	#tel {
		width: 50px;
		height: 50px;
	}

	#tel:hover {
		opacity: 70%;
	}

	button:hover {
		opacity: 70%;
	}
</style>
