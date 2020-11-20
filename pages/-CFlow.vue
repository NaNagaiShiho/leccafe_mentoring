<template>
  <section class="c-flow">
      <div class="c-flow__container">
      <div class="c-flow__title">
        受講の流れ
          <p class="c-flow__text">Flow</p>
      </div>
      <div class="c-flow__border"></div>
      <div class="c-flow__box">
        <div class="c-flow__flow" >
          <div class="c-flow__top">
            <div class="c-flow__box1">
              <div class="c-flow__icon">
                <img class="c-flow__meeting"
                src="@/assets/image/meeting@2x.png"
                alt="相談アイコン">
                </div>
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
      </div>
      <div class="c-flow__box">
        <div class="c-flow__flow" >
          <div class="c-flow__top">
            <div class="c-flow__box1">
              <div class="c-flow__icon">
                <img class="c-flow__meeting"
                src="@/assets/image/meeting@2x.png"
                alt="相談アイコン">
                </div>
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
      <div class="c-flow__box">
        <div class="c-flow__flow" >
          <div class="c-flow__top">
            <div class="c-flow__box1">
              <div class="c-flow__icon">
                <img class="c-flow__meeting"
                src="@/assets/image/meeting@2x.png"
                alt="相談アイコン">
                </div>
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
    @include mobile {
    padding:40px 20px 60px;
    }
  }

  &__border {
    @include mobile {
      margin-left: 47px;
      margin-top: 55px;
      position: absolute;
      width: 6px;
      height: 100%;
      background: rgba(194,80,79,0.16);
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

  &__flow {
    @include mobile {
      padding: 40px 20px;
    }
  }

  &__top {
    display: flex;
    padding-bottom: 20px;
  }

  &__box1 {
    display: inline-block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: rgba(194,80,79);
    text-align:center;
    line-height: 60px;
  }

  &__icon {
    width: 13%;
    position: absolute;
    padding-left: 10px;
    padding-top: 8px;
  }

  &__box2 {
    @include mobile {
      padding-left: 20px;
    }
  }

  &__step {
    font-family: Alternate Gothic ATF;
    @include mobile {
      font-size: 14px;
      color: rgba(194,80,79,0.6);
      letter-spacing: 1.12px;
    }
  }

  &__point {
    font-weight: bold;
    @include mobile {
      ont-size: 16px;
      color: rgba(194,80,79);
      letter-spacing: 1.28px;
    }
  }

  &__text1 {
    @include mobile {
      font-size: 12px;
      letter-spacing: 0.96px;
      line-height: 24px;
    }
  }
}

</style>