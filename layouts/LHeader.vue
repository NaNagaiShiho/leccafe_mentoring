<template>
  <header class="l-header">
    <div class="l-header__foto">
        <img class="l-header__lpfoto"
        src="@/assets/image/hero_sp@2x.png"
        alt="背景">
        
        <div class="l-header__container">
            <div class="l-header__box">
                <div class="l-header__lp">
                <div class="l-header__title">
                    <div class="l-header__line">
                    </div>
                    <div class="l-header__text">
                        メンタリング<br>
                        プログラム</div>
                    <div class="l-header__line">
                    </div>
                    <div class="l-header__subtitle">
                        LecCafe Presents
                    </div>
                </div>
                <div class="l-header__box2">
                <div class="l-header__Mentoring">
                    <img class="l-header__icon"
                     src="@/assets/image/talk_icon @2x.png"
                        alt="会話"/>
                         <div class="l-header__text2">
                            Mentoring
                         </div>
                </div>
                <div class="l-header__box3">
                <dev class="l-header__menu">
                    <div class="l-header__1">
                        Web制作
                    </div>
                    <div class="l-header__2">
                        Web制作
                    </div>
                </dev>
                <dev class="l-header__menu">
                    <div class="l-header__3">
                        Web制作
                    </div>
                    <div class="l-header__4">
                        Web制作
                    </div>
                </dev>
                </div>
            </div>
                </div>
            </div>
        </div>
    </div>
</header>
</template>


<script>
export default {}
</script>

<style lang="scss" scoped>
.l-header {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    text-align: center;
    font-family: YuGothic, "Yu Gothic", sans-serif;

     &__lpfoto {
      display: inline-flex;
      position: relative;
      width: 100%;
      height: 100%;
    }

    &__container {
        padding: 60px 20px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        
    }

    &__box {
        display: inline-flex;
        background: rgba(194,80,79,0.7);
        width: 100%;
    }
    
    &__line {
        width: 100%;
        height: 2px;
         background: #fff;
    }

    &__lp {
        width: 100%;
    }

    &__title {
        padding: 40px 57px 0 58px;
    }

    &__text {
        text-shadow:2px 1px  rgba(49,49,49,0.3);
        font-size: 30px;
        font-weight: bold;
        letter-spacing: 3px;
        color: #fff;
        padding: 14px 0;
        line-height: 50px;
    }

    &__subtitle {
        font-size: 16px;
        color: #fff;
        font-family: Alternate Gothic ATF;
        font-weight: lighter;
        letter-spacing: 1.6px;
        padding-top: 16px;
    }

    &__box2 {
        padding: 0 48px 40px;
        display: flex;
    }
    &__Mentoring {
        padding-top: 43px;
    }

    &__icon {
        width: 50%;
    }

    &__text2 {
        font-size: 12px;
        font-weight: medium;
        color: #fff;
        opacity: 0.8;
        font-family: Futura;
        padding-top: 10px;
    }

    &__menu {
        display: flex;
        max-width: 100%;
    }

    &__box3 {
        padding-top: 56px;
    }

    &__1 {
        font-size: 14px;
        color: #fff;
        font-weight: bold;
        left: 0;
        margin-bottom: 16px;
    }

    &__2 {
        font-size: 14px;
        color: #fff;
        font-weight: bold;
        margin-left: 30px;
        margin-bottom: 16px;
    }

    &__3 {
        font-size: 14px;
        font-weight: bold;
        color: #fff;
        left: 0;
    }

    &__4 {
        font-size: 14px;
        font-weight: bold;
        color: #fff;
        margin-left: 30px;
    }

}
</style>