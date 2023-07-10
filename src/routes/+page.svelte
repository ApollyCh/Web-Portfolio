<script>
	import { base } from '$app/paths';
</script>

<scipt lang='ts'>
	import { base } from '$app/paths';
</scipt>

<div class="meeting">
	<div id="h">
		<p id="hello">👋 Hello all</p></div>
	<div class="aboutMe">
		<h1 id="n1">I'm Apollinaria,</h1>
		<h1 id="n2">A Software Programmer </h1>
		<h1 id="n3">and Problem Solver</h1>
	</div>
	<button id="but1" on:click={() => window.location.href=`${base}/Work`}>View My Tech Skills</button>
	<button id="but2" on:click={() => window.location.href=`${base}/Contact`}>Contact Me</button>
	<img id="first" src="./src/lib/images/icon.png" alt="icon">
</div>

<style>
	#h{
		width: 179px;
		height: 60px;
		background-color: #FFDDBF;
		border-radius: 10px;
		text-align: center;
		position: relative;
		top: 130px;

	}
	h1 {
		position:absolute;
	}

	#hello {

		font-family: 'Work Sans', sans-serif;
		position: relative;
		top: 14px;
		margin-right: auto;
		margin-left: auto;
		font-size: 20px;

	}
	h1 {
		font-family: 'Eczar', serif;
		color: #403930;
		position: absolute;
		font-size: 64px;
	}

	h1#n1 {
		top: 150px;
	}

	h1#n2 {
		top: 220px;
	}

	h1#n3 {
		top: 290px;
	}

	#but1 {
		width: 270px;
		height: 84px;
		border-radius: 16px;
		background-color: #4E5E80;
		border: 0;
		font-family: 'Work Sans', sans-serif;
		font-size: 24px;
		color: white;
		position: absolute;
		top: 450px;
	}

	#but2 {
		width: 270px;
		height: 84px;
		border-radius: 16px;
		background-color: white;

		outline: none;
		font-family: 'Work Sans', sans-serif;
		font-size: 24px;
		color:#4E5E80;
		position: absolute;
		top: 450px;
		left: 300px;
	}

	img#first {
		position: absolute;
		top: 100px;
		left: 750px;
		width: 424px;
		height: 524px;
	}

	.meeting {
		position: relative;
		left: 100px;
		width: 800px;
	}

	button:hover {
		cursor: pointer;
	}
</style>