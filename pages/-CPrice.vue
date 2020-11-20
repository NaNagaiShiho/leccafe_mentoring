<template>
  <section class="c-price">
      <div class="c-price__container">
      <div class="c-price__title">
        料金形態
          <p class="c-price__text">Price</p>
      </div>
      <div class="c-price__box0">
      <div class="c-price__box">
        <div class="c-price__icon">
          <img class="c-price__ball"
          src="@/assets/image/ball@2x.png"
          alt="赤丸">
        </div>
        <div class="c-price__target">
          学生の方
        </div>
        <div class="c-price__price">
          <span class="c-price__yen">￥</span><span class="c-price__1">5,000</span>/講座
        </div>
      </div>
       <div class="c-price__box1">
        <div class="c-price__icon">
          <img class="c-price__ball"
          src="@/assets/image/ball@2x.png"
          alt="赤丸">
        </div>
        <div class="c-price__target">
          一般の方
        </div>
        <div class="c-price__price">
          <span class="c-price__yen">￥</span><span class="c-price__1">10,000</span>/講座
        </div>
      </div>
      </div>
      <div class="c-price__text1">
        この文章はダミーです。この文章はダミーです。この文章はダミーです。この文章はダミーです。この文章はダミーです。この文章はダミーです。この文章はダミーです。この文章はダミーです。
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

.c-price {
  font-family: YuGothic, "Yu Gothic", sans-serif;

  &__container {
    @include mobile {
    padding:40px 4% 60px;
    }
  }
&__title {
    font-size: 24px;
    text-align: center;
    color:#505050;
    font-weight: bolder; 
    letter-spacing: 2.4px;

    @include mobile {
    }
  }

  &__text {
    font-size: 16px;
    color: #C2504F;
    font-weight: normal;
    letter-spacing: 0.64px;
    font-family:Alternate Gothic ATF;

    @include mobile {
    }
  }

  &__box {
    display: flex;
    justify-content: space-around;
    align-items: center;

    @include mobile {
      padding: 40px 33px 5px 34px;
    }
  }

  &__icon {
    @include mobile {
      width: 25%;
    }
  }

  &__target {
    position: absolute;
    left: 90px;
    font-size: 16px;
    color: #505050;
    font-weight: bolder;
  }

   &__price {
     padding-top: 12px;
     justify-content: flex-end;
     margin:0 0 0 auto;
     color: #C2504F;
   }

   &__box1 {
     display: flex;
    justify-content: space-around;
    align-items: center;
    
    @include mobile {
    padding: 5px 33px 30px 34px;
     }
   }

   &__text1 {
     @include mobile {
       font-size: 12px;
       padding: 0 10px;
       letter-spacing: 0.96px;
       line-height: 24px;
     }
   }

   &__1 {
     @include mobile {
       font-size: 46px;
       font-family: Alternate Gothic ATF;
   }
}

&__yen {
  @include mobile {
       font-size: 30px;
       font-family: Alternate Gothic ATF;
}
}

}

</style>
