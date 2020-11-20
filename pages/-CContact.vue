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
    @include mobile {
    padding:40px 4% 60px;
    }
  }
&__title {
    font-size: 24px;
    text-align: center;
    color:#505050;
    font-weight: bold;
    letter-spacing: 2.4px;

    @include mobile {
    }
  }

  &__text {
    font-size: 16px;
    color: #C2504F;
    font-family:Alternate Gothic ATF;
    font-weight: normal;
    letter-spacing: 0.64px;

    @include mobile {
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
      @include mobile {
        padding-top: 40px;
        font-size: 12px;
        letter-spacing: 0.96px;
        line-height: 24px;
      }
    }

  &__button {
    display:block;
    width: 295px;
    height: 60px;
    border-radius: 4%;
    color: #fff;
    background: #C2504F;
    text-align:center;
    line-height: 60px;
    margin: 0 auto;
  }

  &__box1 {
    padding-top: 30px;
  }
  }

</style>