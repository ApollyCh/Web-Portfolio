<script>
  import SomeTemplate from "./SomeTemplate.svelte";
</script>

<div class="all-component">
  <div class="recent_work">
    <div class="txt">
      <h2>Technological Corner</h2>
    </div>
    <div class="container1">


      <SomeTemplate title="Skills" info="I'm actively engaged in studying and developing Python, Java, C/C++, and also Frontend
          Technologies">

      </SomeTemplate>

      <SomeTemplate title="Projects" info='At the Moment, I have already developed a Telegram Bot for a Coffee Shop, a "Snake" Game on
      PyGame, and a PyQt5 Desktop Application for calculating expenses and incomes'>

      </SomeTemplate>


    </div>
  </div>
</div>
<style>

    .all-component {
        margin-top: 20px;
    }
    .recent_work {
        background-color: rgb(255, 221, 191);
        opacity: 100%;
        width: 100%;
        height: max-content;
        position: relative;
        display: flex;
        flex-direction: column;
    }

    .txt {
        text-align: center;
    }



    .container1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }

    h2 {
        font-family: 'Eczar', serif;
        font-size: 40px;
        color: #403930;
        position: relative;
        top: 20px;
    }


</style>