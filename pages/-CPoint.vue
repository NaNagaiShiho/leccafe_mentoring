<template>
  <section class="c-point">
      <div class="c-point__container">
      <div class="c-point__title">
          <p>LecCafeメンタリングの<br>
          ３つのポイント</p>
      </div>
      <div class="c-point__box">
        <div class="c-point__box1">
      <div class="c-point__menu">
        <div class="c-point__number">
          01
        </div>
        <div class="c-point__point">
          高品質
        </div>
      </div>
      <div class="c-point__border">
      </div>
      <div class="c-point__text">
        各種Web制作会社の制作コンサルを展開するchatbox のサポートで、最新の制作技術や、制作フローを体験。技術やフローのアップデートで、あなたの制作をよりよい形に導きます。
      </div>
      </div>

      <div class="c-point__box1">
      <div class="c-point__menu">
        <div class="c-point__number">
          02
        </div>
        <div class="c-point__point">
          低価格
        </div>
      </div>
      <div class="c-point__border">
      </div>
      <div class="c-point__text">
        各種Web制作会社の制作コンサルを展開するchatbox のサポートで、最新の制作技術や、制作フローを体験。技術やフローのアップデートで、あなたの制作をよりよい形に導きます。
      </div>
      </div>

      <div class="c-point__box1">
      <div class="c-point__menu">
        <div class="c-point__number">
          03
        </div>
        <div class="c-point__point">
          実践的
        </div>
      </div>
      <div class="c-point__border">
      </div>
      <div class="c-point__text">
        各種Web制作会社の制作コンサルを展開するchatbox のサポートで、最新の制作技術や、制作フローを体験。技術やフローのアップデートで、あなたの制作をよりよい形に導きます。
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
 .c-point {
   background: #F7F7F7;
   font-family: YuGothic, "Yu Gothic", sans-serif;
     width: 100%;
     padding-bottom: 100px;
     @include mobile {
     padding: 30px 60px 40px;
     }

     &__title {
       @include mobile {
         font-size: 20px;
         letter-spacing: 0.1em;
         line-height: 36px;
         text-align: center;
         font-weight: bold;
       }
     }

     &__menu {
       @include mobile {
          display: flex;
          align-items: flex-end;
          width: 100%;
       }
     }

     &__number {
       @include mobile {
         font-size: 48px;
         letter-spacing: 0.04em;
         font-weight: bolder; 
         font-family: Alternate Gothic ATF;
         color: #C2504F;
       }
     }

    &__border {
      @include mobile {
        width: 100%;
        height: 2px;
        background: #7E7E7E;
        margin: 0 0 30px;
      }
    }

    &__point {
      @include mobile {
        margin:0 0 0 auto;
        padding-bottom: 10px;
        font-size: 20px;
        font-weight: bolder; 
        letter-spacing: 0.1em;
        color: #C2504F;
      }
    }

    &__text {
      @include mobile {
        font-size: 12px;
        letter-spacing: 0.08px;
        line-height: 24px;
      }
    }

    &__box {
      @include mobile {
        padding-top: 30px;
      }
    }
    
    &__box1 {
      @include mobile {
        padding: 20px 0;
    }
   }
 }
 </style>