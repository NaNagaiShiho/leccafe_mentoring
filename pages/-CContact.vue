<template>
  <section class="c-contact">
      <div class="c-contact__container">
       <div class="c-contact__title">
        お問い合わせ
          <p class="c-contact__text">Contact</p>
      </div> 
        <div class="c-contact__box">
        <div class="c-contact__text1">
          お気軽にお問い合わせください。お気軽にお問い合わせください。お気軽にお問い合わせください。お気軽にお問い合わせください。お気軽にお問い合わせください。お気軽にお問い合わせください。
        </div>
        <div class="c-contact__box1">
          <a class="c-contact__button" href="~">
            お問い合わせ
            <i class="material-icons">arrow_forward_ios</i>
          </a>
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
.c-contact {
  background: #fff;

  &__container {
    padding: 120px 0 200px;
    @include mobile {
    padding:40px 20px 60px;
    }
  }
&__title {
    font-size: 30px;
    text-align: center;
    color:#505050;
    font-weight: bold;
    letter-spacing: 0.1em;

    @include mobile {
      font-size: 24px;
      letter-spacing: 2.4px;
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

  &__icon {
    margin: 0 auto;
    width: 50%;
  }

  &__company {
    color: #D39A99;

    @include mobile {
      font-size: 16px;
      padding-bottom: 20px;
    }
  }

  &__text1 {
    max-width: 500px;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.08em;
    margin: 0 auto;
    padding-top: 65px;
    padding-bottom: 60px;


      @include mobile {
        width: 100%;
        font-size: 12px;
        letter-spacing: 0.96px;
        padding: 40px 10% 30px;
      }
    }

    &__icon {
      width: 24px;
      margin: auto 0;
      padding-left: 44px;
      position: relative;
      z-index: 1;
      color: #fff;
    }

  &__button {
    display: inline;
	align-items: center;
    width: 100%;
    max-width: 295px;
    height: 60px;
    border-radius: 4%;
    color: #fff;
    text-align:center;
    background: #C2504F;
    line-height: 60px;
    margin: 0 auto;
  }


  &__box1 {
    display: flex;
	align-items: center;
    padding-top: 30px;
  position: relative;
  z-index: 2;
  }
  }

  .material-icons {
    position: absolute;
    padding-left: 44px;
    text-align:center;
    margin: auto 0;
    top: calc(60% - 0.1em);
  }

</style>