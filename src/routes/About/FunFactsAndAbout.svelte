<div class="aboutMePart">
  <div id="heading3"><h1 id="abME">Some Facts about me</h1></div>

  <div class="container2">
    <div class="elem">
      <h3>The Best Cite Ever</h3>
      <p>"There is no salvation for those who do not want to be saved themselves"</p>
      <p id="cited">-- Lee Yeon, "Tale of Nine Tailed"</p>
    </div>
    <div class="elem">
      <h3>The Best Song Ever</h3>
      <iframe title="frame" id="music" src="https://music.yandex.ru/iframe/#track/76130854/13437774">
        Слушайте <a href="https://music.yandex.ru/album/13437774/track/76130854">Dramaturgy</a> — <a
        href="https://music.yandex.ru/artist/10460911">Eve</a> на Яндекс Музыке
      </iframe>

    </div>
    <div class="elem">
      <h3 id="he3">The Best Meme Ever</h3>
      <img src="./src/lib/images/meme.jpg" alt="meme" id="meme">
    </div>
  </div>
</div>


<style>

    h3 {
        font-family: 'Work Sans', sans-serif;
        font-size: 32px;
        color: #403930;
    }

    .aboutMePart {
        margin-top: 70px;

        opacity: 100%;
        width: 100%;
        height: 400px;
        position: inherit;
        background-color: #ffeed9;
        flex-direction: row;
    }

    #heading3 {
        display: flex;
        justify-content: center;
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
        margin: 20px;
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
</style>