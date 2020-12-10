<template>
  <section class="c-company">
      <div class="c-company__container">
       <div class="c-company__title">
        運営
          <p class="c-company__text">Company</p>
      </div> 
      <div class="c-company__icon">
        <img class="c-company__logo"
          src="@/assets/image/chatbox-logo@2x.png"
          alt="chatboxロゴ">
        </div>
        <div class="c-company__box">
        <div class="c-company__company">
          株式会社Chatbox
        </div>
        <div class="c-company__text1">
          Lec Café は Web 制作の各種技術をテーマに、セミナーイベントを展開するIT 系の学習支援コミュニティです。新しいWebの制作技術習得を目指す人たちのニーズに答える様々なイベントを開催しています。
        </div>
      </div>
      </div>
 </section>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins.scss";
.c-company {
   background: rgb(249,249,249,0.9);
  &__container {
    padding: 120px 0 150px;
    @include mobile {
    padding:40px 20px 60px;
    }
  }
&__title {
     padding-bottom: 10px;
    font-size: 30px;
    text-align: center;
    color:#505050;
    font-weight: bold;
    letter-spacing: 0.1em;

    @include mobile {
      padding-bottom: 0;
      font-size: 24px;
      letter-spacing: 2.4px;
    }
  }

  &__text {
    font-size: 25px;
    color: #C2504F;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: normal;
    letter-spacing: 0.04em;

    @include mobile {
      font-size: 16px;
      letter-spacing: 0.64px;
    }
  }

  &__icon {
    text-align: center;
    margin: 0 auto;
    @include mobile {
    }
  }

  &__logo {
    width: 334px;

    @include mobile {
    width: 200px;
  }
  }

  &__company {
    color: #D39A99;
    font-size: 20px;
    padding-bottom: 20px;
    text-align: center;

    @include mobile {
      font-size: 16px;
      text-align: leftx;
    }
  }

  &__text1 {
    font-size: 14px;
    max-width: 500px;
    letter-spacing: 0.96px;
    line-height: 24px;
    margin: 0 auto;

      @include mobile {
        font-size: 12px;
        padding: 0 10%;
      }
    }
  }

</style>
