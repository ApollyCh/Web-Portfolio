<script lang="ts">
	import Meme from '$lib/images/meme.jpg';
	import Icon from '$lib/images/icon2.png';
</script>

<title>About Me</title>
<meta name="description" content="Some information about me" />

<div class="all-component">
	<div class="aboutMePart">
		<h1>Some Facts about me</h1>

		<div class="container2">
			<div class="elem">
				<h3>The Best Cite Ever</h3>
				<p>"There is no salvation for those who do not want to be saved themselves"</p>
				<p id="cited">-- Lee Yeon, "Tale of Nine Tailed"</p>
			</div>
			<div class="elem">
				<h3>The Best Song Ever</h3>
				<iframe
					title="frame"
					id="music"
					src="https://music.yandex.ru/iframe/#track/76130854/13437774"
					>Слушайте <a href="https://music.yandex.ru/album/13437774/track/76130854">Dramaturgy</a> —
					<a href="https://music.yandex.ru/artist/10460911">Eve</a> на Яндекс Музыке
				</iframe>
			</div>
			<div class="elem">
				<h3 id="he3">The Best Meme Ever</h3>
				<img src={Meme} alt="meme" id="meme" />
			</div>
		</div>
	</div>

	<div class="about-container">
		<div class="contact1">
			<h2>A Little Bit About Me</h2>
			<p class="text1">
				I am Apollinaria Chernikova from Rostov-on-Don. For now, I am studyng in Innopolis
				University, Republic Tatarstan
			</p>
			<p class="text1">
				I want to develop not only in sofware sphere, but also in machine learning and artificial
				intelligence. Hope that in the future I will have more experence and try more activities in
				programming
			</p>
			<button id="but3">Contact Me</button>
		</div>

		<img src={Icon} alt="icon 2" />
	</div>
</div>

<style>
	.all-component {
		display: flex;
		flex-direction: column;
		margin-top: 20px;
	}

	h3 {
		font-family: 'Work Sans', sans-serif;
		font-size: 32px;
		color: #403930;
	}

	h2 {
		font-family: 'Eczar', serif;
		font-size: 40px;
		color: #403930;
	}

	h1 {
		font-family: 'Eczar', serif;
		font-size: 40px;
		position: relative;
		margin-left: auto;
		margin-right: auto;
		top: 10%;
	}

	p {
		font-family: 'Eczar', serif;
		font-size: 24px;
		color: #403930;
	}

	.aboutMePart {
		opacity: 100%;
		width: 100%;
		height: 400px;
		position: relative;
		background-color: #ffeed9;
		display: flex;
		flex-direction: column;
	}

	.elem {
		width: 450px;
		height: 300px;
		background-color: #fce4d0;
		display: flex;
		justify-content: center;
		text-align: center;
		align-items: center;
		flex-direction: column;
		position: relative;
		top: 20%;
		border-radius: 16px;
		margin: 10px 20px 20px;
	}

	#music {
		border: none;
		width: 400px;
		height: 180px;
		border-radius: 16px;
		margin-bottom: 20px;
	}

	.container2 {
		display: flex;
		flex-direction: row;
	}

	#cited {
		font-size: 14px;
	}

	#meme {
		width: 250px;
		height: 200px;
		margin-top: -20px;
	}

	#he3 {
		margin-top: -1px;
	}

	.contact1 {
		opacity: 100%;
		padding-top: 40px;
		padding-left: 20%;
	}

	.text1 {
		font-size: 18px;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		width: 460px;
	}

	#but3 {
		width: 270px;
		height: 84px;
		border-radius: 16px;
		background-color: white;
		outline: none;
		font-family: 'Work Sans', sans-serif;
		font-size: 24px;
		color: #4e5e80;
		margin-top: 2%;
	}

	img {
		width: 420px;
		height: 524px;
		margin-right: 100px;
	}

	.about-container {
		display: flex;
		flex-direction: row;
		background-color: #ffddbf;
		width: 100%;
		position: relative;
		margin-top: 110px;
	}

	#meme {
		margin-left: auto;
		margin-right: auto;
	}
</style>
