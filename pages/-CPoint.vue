<template>
  <section class="c-point">
      <div class="c-point__container">
      <div class="c-point__title">
          <p>LecCafeメンタリングの<br>
          <span class="c-point__3">３</span>つのポイント</p>
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

      <div class="c-point__box2">
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
     padding: 120px 0 170px;
     @include mobile {
     padding: 30px 60px 40px;
     }

     &__container {
       max-width: 994px;
       padding: 0 60px;
       margin: 0 auto;

       @include mobile {
         max-width: 100%;
         padding: 0;
       }
     }

     &__title {
         font-size: 30px;
         letter-spacing: 0.1em;
         line-height: 60px;
         text-align: center;
         font-weight: bold;
         padding-bottom: 100px;

         @include mobile {
           font-size: 20px;
           line-height: 36px;
           padding-bottom: 0;
         }
     }

     &__menu {
          display: flex;
          align-items: flex-end;

          @include mobile {
          width: 100%;
          }
     }

     &__number {
       font-size: 48px;
         letter-spacing: 0.04em;
         font-weight: bolder; 
         font-family: Alternate Gothic ATF;
         color: #C2504F;
       }

    &__border {
        width: 100%;
        height: 2px;
        background: #7E7E7E;
        margin: 0 0 30px;

        @include mobile {
          width: 100%;
        }
    }

    &__point {
        margin:0 0 0 auto;
        padding-bottom: 10px;
        font-size: 20px;
        font-weight: bolder; 
        letter-spacing: 0.1em;
        color: #C2504F;
      
    }

    &__text {
      font-size: 14px;
        letter-spacing: 0.08px;
        line-height: 24px;

      @include mobile {
        font-size: 12px;
      }
    }

    &__box {
      display: flex;
	    justify-content: space-between;

      @include mobile {
        padding-top: 30px;
        display: block;
        max-width: 600px;
        margin: 0 auto;
      }
    }
    
    &__box1 {
      width: 30%;

      @include mobile {
        width: 100%;
        padding: 20px 0;
    }
   }

    &__box2 {
      width: 30%;

      @include mobile {
        width: 100%;
        padding: 20px 0;
        margin: 0;
    }
   }

   &__3 {
     font-size: 60px;
     color: #C2504F;
     
     @include mobile {
       font-size: 30px;
     }
   }
 }
 </style>