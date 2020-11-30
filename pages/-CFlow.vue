<template>
  <section class="c-flow">
      <div class="c-flow__container">
      <div class="c-flow__title">
        受講の流れ
          <p class="c-flow__text">Flow</p>
      </div>
      <div class="c-flow__border"></div>
      <div class="c-flow__box00">
        <div class="c-flow__flow">
          <div class="c-flow__top">
              <div class="c-flow__icon">
                <img class="c-flow__meeting"
                src="@/assets/image/step1@2x.png"
                alt="相談アイコン">
                </div>
            <div class="c-flow__box2">
            <div class="c-flow__step">
              STEP1
            </div>
            <div class="c-flow__point">
              面談
            </div>
            </div>
          </div>
          <div class="c-flow__text1">
            この文章はダミーです。この文章はダミーです。この文章はダミーです。この文章はダミーです。この文章はダミーです。この文章はダミーです。この文章はダミーです。この文章はダミーです。
          </div>
      </div>
      <div class="c-flow__border1"></div>
      <div class="c-flow__box">
        <div class="c-flow__flow" >
          <div class="c-flow__top">
              <div class="c-flow__icon">
                <img class="c-flow__meeting"
                src="@/assets/image/step2@2x.png"
                alt="相談アイコン">
                </div>
            <div class="c-flow__box2">
            <div class="c-flow__step">
              STEP2
            </div>
            <div class="c-flow__point">
              製作
            </div>
            </div>
          </div>
          <div class="c-flow__text1">
            この文章はダミーです。この文章はダミーです。この文章はダミーです。この文章はダミーです。この文章はダミーです。この文章はダミーです。この文章はダミーです。この文章はダミーです。
          </div>
        </div>
      </div>
      <div class="c-flow__border1"></div>
      <div class="c-flow__box">
        <div class="c-flow__flow" >
          <div class="c-flow__top">
              <div class="c-flow__icon">
                <img class="c-flow__meeting"
                src="@/assets/image/step3@2x.png"
                alt="相談アイコン">
                </div>
            <div class="c-flow__box2">
            <div class="c-flow__step">
              STEP3
            </div>
            <div class="c-flow__point">
              振り返り
            </div>
            </div>
          </div>
          <div class="c-flow__text1">
            この文章はダミーです。この文章はダミーです。この文章はダミーです。この文章はダミーです。この文章はダミーです。この文章はダミーです。この文章はダミーです。この文章はダミーです。
          </div>
        </div>
      </div>
      <div class="c-flow__border1"></div>
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

.c-flow {
  &__container {
    padding: 120px 0 150px;
    max-width: 994px;
    margin: 0 auto;
    @include mobile {
    padding:40px 20px 60px;
    max-width: 100%;
    }
  }

&__title {
    font-size: 30px;
    text-align: center;
    color:#505050;
    font-weight: bold;
    letter-spacing: 2.4px;
    padding-bottom: 40px;

    @include mobile {
      font-size: 24px;
    }
  }

  &__text {
    font-size: 25px;
    color: #C2504F;
    font-family:Alternate Gothic ATF;
    font-weight: normal;
    letter-spacing: 0.64px;

    @include mobile {
      font-size: 16px;
    }
  }

  &__flow {
    position: relative;

    @include mobile {
      padding: 0 20px;
    }
  }

  &__top {
    display: flex;
    width: 100%;
    align-items: center;
    padding-bottom: 20px;
  }

  &__icon {
    position: relative;
     z-index: 9999;
    width: 130px;
    

    @include mobile {
    width: 60px;
    }
  }

  &__box2 {
    padding-left: 57px;
    position: relative;

    @include mobile {
      float: left;
      padding-left: 20px;
      text-align: left;
    }
  }

  &__step {
    font-family: Alternate Gothic ATF;
    color: rgba(194,80,79,0.6);
    font-size: 20px;
    letter-spacing: 0.08em;
    padding-bottom: 15px;

    @include mobile {
      font-size: 14px;
      letter-spacing: 1.12px;
      padding-bottom: 6px;
    }
  }

  &__point {
    font-weight: bold;
    color: rgba(194,80,79);
    font-size: 30px;
    letter-spacing: 0.08em;

    @include mobile {
      font-size: 16px;
      letter-spacing: 1.28px;
    }
  }

  &__text1 {
    font-size: 16px;
    max-width: 794px;
    margin: 0 0 0 auto;
    letter-spacing: 0.03em;
      line-height: 30px;
    @include mobile {
      font-size: 12px;
      letter-spacing: 0.96px;
      width: 100%;
      line-height: 24px;
    }
  }

  &__border {
    position: relative;
  }


  &__box00 {
    position: relative;
  }

  &__box00::before {
    z-index: 1;
    position: absolute;
    content: "";
      width: 8px;
      height: 100%;
      background: #CC706F;
      margin-left: 3.8em;

      @include mobile {
      margin-left: 3em;
      position: absolute;
      width: 6px;
      height: 100%;
      background: rgba(194,80,79,0.16);
    }
  }


  &__pcbox {
    display: block;

    @include mobile {
      display: none;
    }
  }

  &__border1 {
    z-index: 20;
    width: 797px;
    height: 2px;
    background: rgb(80,80,80,0.5);
    margin: 45px 0 50px auto;


    @include mobile {
      display: none;
    }
  }
}

</style>