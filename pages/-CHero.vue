<template>
  <section class="c-hero">
     <div class="c-hero__box0">
      <div class="c-hero__container">
          <h1 class="c-hero__title">
            LecCafeのメンタリングプログラムは<br>
            短期的に、実戦形式の制作フローを<br>
            学べるWeb制作講座です。
          </h1>
      </div>
      <div class="c-hero__box1">
      <div class="c-hero__sec1">
        <div class="c-hero__box">
          <img class="c-hero__hukidashi"
          src="@/assets/image/hukidasi_sp.png"
          alt="吹き出し">
          <img class="c-hero__hukidashi_pc"
          src="@/assets/image/hukidasi_pc.png"
          alt="吹き出し">
      </div>
      <div class="c-hero__box2">
        <div class="c-hero__q">
          <p>こんなお悩みありませんか…?</p>
        </div>
        <div class="c-hero__listbox">
        <ul class="c-hero__list">
    <li class="c-hero__li">何から勉強したらいいのかわからない</li>
    <li class="c-hero__li">エラーがどうしても解決できずに挫折してしまいそう</li>
    <li class="c-hero__li">プログラミングがどのように実際のサービスに<br>活用されるのかが分からない…</li>
    <li class="c-hero__li">プログラミングがどのように実際のサービスに<br>活用されるのかが分からない…</li>
</ul>
        </div>
      </div>
      </div>
      <div class="c-hero__box3">
    <img class="c-hero__icon"
          src="@/assets/image/icon_man@2x.png"
          alt="人">
      </div>
          <img class="c-hero__icon_pc"
          src="@/assets/image/man@2x.png"
          alt="人">
     </div>
     </div>
  </section>
</template>

<script>
import Logo from '../components/Logo.vue'
  export default {
  components: { Logo },
  }
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins.scss";

 .c-hero {
   margin-left: auto;
    margin-right: auto;
    width: 100%;
    text-align: center;
    font-family: YuGothic, "Yu Gothic", sans-serif;
    background: rgb(249,249,249,0.9);

    &__box0 {
      height: 100%;
      max-width: 994px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      padding: 130px 60px;

      @include mobile {
        max-width: 100%;
        margin-left: 0;
        display: block;
        padding: 0;
      }
    }

    &__box1 {
      margin: 0 auto;
      display: flex;
      align-items: center;

      @include mobile {
        display: block;
        max-width: 500px;
      }
    }

   &__title {
     display: none;

     @include mobile {
      display: block;
     font-size: 14px;
     line-height: 24px;
     padding: 40px 53px 60px 54px;
     font: bold;
     }
   }

  &__title::first-letter {
    color:#C2504F;
    font-size:20px;
  }

  &__sec1 {
    display: inline-flex;

  }

  &__box {
    margin-right: 36px;
    text-align: left;
  }

  &__hukidashi {
    display: none;

    @include mobile {
      display: block;
    width: 100%;
    min-height: 339px;
    min-width: auto;
    max-width: 339px;
    max-height: auto;
    opacity: 0.9;
    position: relative;
    }
  }

  &__hukidashi_pc {
    display: block;
    position: relative;
    width: 100%;
    height: 292px;

    @include mobile {
      display: none;
    }
  }

  &__box2 {
    position: absolute;
    padding: 35px 0 0 45px;

    @include mobile {
    padding-left: 20px;
    padding-right: 44px;
    }
  }

  &__q {
    font-size: 25px;
    left: 0;
    color: #fff;
    padding-bottom: 10px;
    font-weight: bold;
    text-align: left;

    @include mobile {
      font-size: 16px;
      padding-bottom: 23px;
    }
  }

  &__list {
    font-size: 16px;
    color: #fff;
    text-align: left;
    line-height: 1.4;

    @include mobile {
      font-size: 12px;
      line-height: 150%;
    }
  }

  &__li {
	list-style-type: disc;/* リストの左側に黒丸 */
	margin-left: 24px;/* リストの左側に余白 */
	text-align: left;
}


  &__box3 {
    max-width: 100%;
     position: relative;
     text-align: right;
     display: none;
    

     @include mobile {
        display: flex;
      justify-content: flex-end;
       padding-right: 10px;
     }
  }

&__box4 {
     text-align: right;
    
     @include mobile {
       display: none;
     }
  }

  &__icon {
    @include mobile {
      width: 25%;
      min-width: 80px;
      height: auto;
    }
 }

 &__icon_pc {
    width: 25%;
    height: auto;
    max-height: 218px;
    max-height: auto;
    text-align: right;
    
    @include mobile {
      display: none;
    }
 }

 &__li {
   padding: 7px 0;

   @include mobile {
     padding: 4px 0;
   }
 }

 }

</style>
