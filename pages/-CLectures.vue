<template>
  <section class="c-lectures">
      <div class="c-lectures__container">
      <div class="c-lectures__title">
        講座例
          <p class="c-lectures__text">Lectures</p>
      </div>
      <div class="c-lectures__box">
        <div class="c-lectures__box1">
      <div class="c-lectures__menu">
        <div class="c-lectures__sub">
          Nuxt.jsで作る<br>
          Webサイト制作
        </div>
        <div class="c-lectures__icon">
          <img class="c-lectures__blackicon"
          src="@/assets/image/nuxt@2x.png"
          alt="nuxt.js">
        </div>
      </div>
      <div class="c-lectures__text1">
        プログラミング学習に関する様々な困りごとを、経験豊富なスタッフに気軽に相談していただけます。プログラミング学習に関する様々な困りごとを、経験豊富なスタッフに気軽に相談していただけます。
      </div>
      </div>
      <div class="c-lectures__box1">
      <div class="c-lectures__menu">
        <div class="c-lectures__sub">
          Nuxt.jsで作る<br>
          GitHubアプリケーション
        </div>
        <div class="c-lectures__icon">
          <img class="c-lectures__blackicon"
          src="@/assets/image/GitHub@2x.png"
          alt="nuxt.js">
        </div>
      </div>
      <div class="c-lectures__text1">
        プログラミング学習に関する様々な困りごとを、経験豊富なスタッフに気軽に相談していただけます。プログラミング学習に関する様々な困りごとを、経験豊富なスタッフに気軽に相談していただけます。
      </div>
      </div>
      <div class="c-lectures__box1">
      <div class="c-lectures__menu">
        <div class="c-lectures__sub">
          Firebaseで作る<br>
          チャットアプリ
        </div>
        <div class="c-lectures__icon">
          <img class="c-lectures__blackicon"
          src="@/assets/image/Firebase@2x.png"
          alt="nuxt.js">
        </div>
      </div>
      <div class="c-lectures__text1">
        プログラミング学習に関する様々な困りごとを、経験豊富なスタッフに気軽に相談していただけます。プログラミング学習に関する様々な困りごとを、経験豊富なスタッフに気軽に相談していただけます。
      </div>
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

.c-lectures {
  &__container {
    max-width: 994px;
       margin: 0 auto;
       padding-bottom: 200px;

    @include mobile {
    padding:40px 4% 60px;
    }
  }
&__title {
    font-size: 30px;
    text-align: center;
    color:#505050;
    font-weight: bold;
    letter-spacing: 0.1em;
    padding: 120px 0 60px;

    @include mobile {
      font-size: 24px;
      letter-spacing: 2.4px;
      padding: 30px 0 40px;
    }
  }

  &__text {
    font-size: 25px;
    color: #C2504F;
    font-family:Alternate Gothic ATF;
    font-weight: normal;
    letter-spacing: 0.04em;

    @include mobile {
      font-size: 16px;
      letter-spacing: 0.64px;
    }
  }

  &__box {
    display: flex;
	  justify-content: space-between;

      @include mobile {
        display: block;
        padding: 20px 28px;
      }
  }

   &__box1 {
     width: 280px;
     
     @include mobile {
       width: 100%;
     padding: 20px 0;
     }
   }

  &__menu {
    display: block;
    align-items: center;
    padding-bottom: 30px;
    width: 100%;

    @include mobile {
      display: flex;
    }
  }

  &__sub {
    font-size: 20px;
    color: #505050;
    text-align: center;
    max-width: 100%;
    bottom: 0;
    letter-spacing: 0.01em;
    line-height: 32px;

    @include mobile {
      text-align: left;
    }
  }

  &__sub::first-letter {
    color:#C2504F;
    font-size:30px;
  }

  &__icon {
    width: 21%;
    margin:0 auto;

    @include mobile {
      margin:0 0 0 auto;
    }
  }


  &__text1 {
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.08em;
    text-align: left;
  }

}

</style>