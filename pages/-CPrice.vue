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
        <div class="c-price__price">
          <span class="c-price__yen">￥</span><span class="c-price__1">5,000</span>/講座
        </div>
      </div>
       <div class="c-price__box1">
        <div class="c-price__icon2">
          <img class="c-price__ball"
          src="@/assets/image/ball@2x.png"
          alt="赤丸">
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
    padding: 120px 0 170px;
    @include mobile {
    padding:40px 10% 60px;
    }
  }
&__title {
    font-size: 30px;
    padding-bottom: 15px;
    text-align: center;
    color:#505050;
    font-weight: bolder; 
    letter-spacing: 2.4px;

    @include mobile {
      font-size: 24px;
      padding-bottom: 12px;
    }
  }

  &__text {
    font-size: 25px;
    color: #C2504F;
    font-weight: normal;
    letter-spacing: 0.64px;
    font-family: 'Barlow Condensed', sans-serif;
    @include mobile {
      font-size: 16px;
    }
  }

  &__box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;

    @include mobile {
      width: 100%;
      max-width: 268px;
      padding: 40px 0 5px 0;
      margin: 0 auto;
    }
  }

  &__icon {
      width: 59px;
  }

  &__icon::before {
    position: absolute;
    content: "学生の方";
    text-align: center;
    font-size: 20px;
    color: #505050;
    font-weight: bolder;
    padding-left: 2em;
    padding-top: 0.7em;

    @include mobile {
      position: absolute;
      font-size: 16px;
      padding-left: 1.5em;
      padding-top: 1em;
    }
  }

  &__icon2 {
      width: 59px;
  }

  &__icon2::before {
    position: absolute;
    content: "一般の方";
    text-align: center;
    font-size: 20px;
    color: #505050;
    font-weight: bolder;
    padding-left: 2em;
    padding-top: 0.7em;

     @include mobile {
      position: absolute;
      font-size: 16px;
      padding-left: 1.5em;
      padding-top: 1em;
    }

  }


  &__target {
    padding: relative;
    text-align: center;

    @include mobile {
      position: absolute;
      font-size: 16px;
      left: 90px;
    }
  }


   &__price {
     padding-top: 12px;
     font-size: 25px;
     justify-content: flex-end;
     color: #C2504F;

     @include mobile {
       font-size: 16px;
       padding-top: 12px;
     }
   }

   &__box1 {
     display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    
    @include mobile {
      width: 100%;
    padding: 5px 0 30px 0;
      max-width: 279px;
      margin: 0 auto;
     }
   }

   &__text1 {
     font-size: 16px;
     width: 600px;
     margin: 0 auto;
     letter-spacing: 0.08px;
       line-height: 24px;

     @include mobile {
       font-size: 12px;
       padding: 0 10px;
       letter-spacing: 0.96px;
       width: 100%;
       max-width: 600px;
     }
   }

   &__1 {
     font-size: 60px;
    font-family: 'Barlow Condensed', sans-serif;
     @include mobile {
       font-size: 46px;
   }
}

&__yen {
  font-size: 40px;
  font-family: 'Barlow Condensed', sans-serif;
  @include mobile {
       font-size: 30px;
}
}

&__box0 {
  display: flex;
	justify-content: space-between;
  width: 807px;
  margin: 0 auto;
  padding: 60px 0 85px;

  @include mobile {
    display: block;
    width: 100%;
    padding: 0;
  }
}

}

</style>
