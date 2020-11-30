<template>
  <section class="c-concept">
    <div class="c-concept__container">
      <div class="c-concept__title">
        LecCafeの<br>
        メンタリングプログラムでは！
      </div>
      <div class="c-concept__box">
        <div class="c-concept__box1">
      <div class="c-concept__menu">
        <div class="c-concept__sub">
          学べる、相談できる。
        </div>
        <div class="c-concept__icon">
          <img class="c-concept__blackicon"
          src="@/assets/image/icon_black@2x.png"
          alt="会話アイコン">
        </div>
      </div>
      <div class="c-concept__text">
        プログラミング学習に関する様々な困りごとを、経験豊富なスタッフに気軽に相談していただけます。プログラミング学習に関する様々な困りごとを、経験豊富なスタッフに気軽に相談していただけます。
      </div>
      </div>
      <div class="c-concept__box1">
      <div class="c-concept__menu">
        <div class="c-concept__sub">
          最新の製作技術を。
        </div>
        <div class="c-concept__icon">
          <img class="c-concept__blackicon"
          src="@/assets/image/icon_black@2x.png"
          alt="会話アイコン">
        </div>
      </div>
      <div class="c-concept__text">
        プログラミング学習に関する様々な困りごとを、経験豊富なスタッフに気軽に相談していただけます。プログラミング学習に関する様々な困りごとを、経験豊富なスタッフに気軽に相談していただけます。
      </div>
      </div>
      <div class="c-concept__box1">
      <div class="c-concept__menu">
        <div class="c-concept__sub">
          各種セミナーへのご招待。
        </div>
        <div class="c-concept__icon">
          <img class="c-concept__blackicon"
          src="@/assets/image/icon_black@2x.png"
          alt="会話アイコン">
        </div>
      </div>
      <div class="c-concept__text">
        プログラミング学習に関する様々な困りごとを、経験豊富なスタッフに気軽に相談していただけます。プログラミング学習に関する様々な困りごとを、経験豊富なスタッフに気軽に相談していただけます。
      </div>
      </div>
      </div>
      <div class="c-concept__red">
        <div class="c-concept__box2">
          <div class="c-concept__title2">
            技術豊富なWeb制作会社が運営
          </div>
          <div class="c-concept__border">
          </div>
          <div class="c-concept__text2">
            各種Web制作会社の制作コンサルを展開するchatboxのサポートで、最新の制作技術や、制作フローを体験。技術やフローのアップデートで、あなたの制作をよりよい形に導きます。
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

.c-concept {
  width: 100%;
  height: 100%;
  text-align: center;
  font-family: YuGothic, "Yu Gothic", sans-serif;
  padding: 110px 0 130px;
  background: #FBFBFB;
  @include mobile {
    padding: 40px 20px;
  }

   &__container {
       max-width: 994px;
       margin: 0 auto ;

       @include mobile {
         max-width: 100%;
       }
     }

  &__title {
    font-size: 22px;
    text-shadow:1px 1px rgba(194,80,79,0.7);
    color: #C2504F;
    text-align: left;
    line-height: 30px;
    letter-spacing: 0.09em;
    font-weight: bolder; 
  }

  &__box {
    padding: 60px;
    display: flex;
	  justify-content: space-between;
    width: 100%;

    @include mobile {
      padding: 20px 28px;
      display: block;
    }
  }

   &__box1 {
     width: 30%;

     @include mobile {
     padding: 20px 0;
     width: 100%;
     }
   }

  &__menu {
    display: flex;
    align-items: center;
    padding-bottom: 18px;
    width: 100%;
  }

  &__sub {
    font-size: 16px;
    color: #C2504F;
    text-align: left;
    max-width: 100%;
    bottom: 0;
    letter-spacing: 0.1em;
    font-weight: bolder; 
  }

  &__icon {
    width: 22%;
    margin:0 0 0 auto;
  }


  &__text {
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.08em;
    text-align: left;
  }

  &__red {

    width: 600px;
    height: 100%;
    background:#C2504F;
    margin: 0 auto;

    @include mobile {
    width: 100%;
    }
  }

  &__box2 {
    padding: 30px;
  }

  &__title2 {
    color: #fff;
    font-size: 18px;
    font-weight: bolder; 
    letter-spacing: 0.1em;

    @include mobile {
      font-size: 16px;
    }
  }

  &__border {
      width: 100%;
      max-width: 298px;
      height: 2px;
      background: #fff;
      margin: 10px auto 30px;

      @include mobile {
        width: 100%;
        margin: 10px auto 30px;
      }
  }

  &__text2 {
    font-size: 14px;
    color: #fff;
    line-height: 24px;
    letter-spacing: 0.08em;
    text-align: left;

    @include mobile {
      font-size: 12px;
    }
  }
    }
</style>