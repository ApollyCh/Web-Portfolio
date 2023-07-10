<script>

  export let title: null;
  export let info: null;
</script>

<div class="cont">
  <h3 class="title">{title}</h3>
  <p class="info">{info}</p>
</div>

<style>
    .cont {
        background-color: white;
        color: #403930;
        width: 1142px;
        height: 400px;
        opacity: 100%;
        position: relative;
        display: flex;
        border-radius: 24px;
        margin-bottom: 30px;
    }

    .title {
        position: absolute;
        top: 14%;
        left: 7%;
    }

    p {
        font-family: 'Eczar', serif;
        font-size: 24px;
        color: #403930;
    }

    h3 {
        font-family: 'Work Sans', sans-serif;
        font-size: 32px;
        color: #403930;
    }

    .info {
        position: absolute;
        top: 28%;
        left: 7%;
        width: 990px;
        height: 108px;
    }
</style>