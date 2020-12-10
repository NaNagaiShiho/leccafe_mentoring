<template>
  <section class="p-404">
    <div class="p-404__container">
      <h2 class="p-404__heading">
        404 not found
      </h2>
    <div class="p-404__border"></div>
      <p class="p-404__text">
        お探しのページは見つかりませんでした<br>
        URLが間違っているか、ページが存在しません
      </p>
       <div class="p-404__box1">
          <a class="p-404__button" href="https://cranky-mccarthy-888d5f.netlify.app/">
            TOPページへ戻る
            <i class="material-icons">arrow_forward_ios</i>
          </a>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: "detail"
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins.scss";
.p-404 {
    text-align: center;

  &__container {
    padding: 185px 0 347px;
    @include mobile {
    padding:110px 10% 135px;
    }
  }

  &__heading {
      font-size: 40px;
      color: #C2504F;
      letter-spacing: 0.1em;
      font-weight: bold;

       @include mobile {
         font-size: 30px;
        }

  }

  &__border {
      width: 100%;
      max-width: 600px;
      height: 3px;
      margin: 25px auto 40px;
      background: #C2504F;

      @include mobile {
          max-width: 280px;
      }
  }

  &__text {
      font-size: 16px;
      font-weight: bold;
      letter-spacing: 0.08em;
      line-height: 24px;
      padding-bottom: 60px;

      @include mobile {
          letter-spacing: 0.02em;
          font-size: 14px;
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

  .material-icons {
    position: absolute;
    padding-left: 44px;
    text-align:center;
    margin: auto 0;
    top: calc(60% - 0.1em);
  }

}


</style>
