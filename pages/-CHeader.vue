<template>
  <header class="c-header">

      <title>メンターのいるweb制作講座｜株式会社chatbox</title>

      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <meta name="description" content="LecCafeのメンタリングプログラムは短期的に、実戦形式の制作フローを学べるWeb制作講座です。">

      <div class="c-header__backsp">
        <img class="c-header__spfoto"
        src="@/assets/image/sp-hero.png"
        alt="sp背景">
        <img class="c-header__pcfoto"
        src="@/assets/image/header_pc.png"
        alt="pc背景">
      </div>
        <div class="c-header__container">
            <div class="c-header__box">
                <div class="c-header__box1">
                <div class="c-header__border"></div>
                <h1 class="c-header__title">
                    メンタリング<br>
                    プログラム
                </h1>
                <div class="c-header__border"></div>
                <div class="c-header__subtitle">
                    LecCafe Presents
                </div>
            </div>
            <div class="c-header__box2">
                <div class="c-header__mentoring">
                    <img class="c-header__icon"
                     src="@/assets/image/talk_icon @2x.png"
                        alt="会話"/>
                        <div class="c-header__text">
                            Mentoring
                         </div>
                </div>
                <div class="c-header__box4">
                <div class="c-header__menu">
                    <p class="c-header__point">
                        web制作
                    </p>
                    <p class="c-header__point">
                        web制作
                    </p>
                </div>
                <div class="c-header__menu2">
                    <p class="c-header__point">
                        web制作
                    </p>
                    <p class="c-header__point">
                        web制作
                    </p>
                </div>
                </div>
                </div>
            </div>
        <div class="c-header__box3">
            <div class="c-header__text2">
            LecCafeのメンタリングプログラムは<br>
            短期的に、実戦形式の制作フローを<br>
            学べるWeb制作講座です。
            </div>
        </div>
    </div>
  </header>
</template>


<script>
export default {}
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins.scss";
.c-header {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-height: 100%;
    text-align: center;
    font-family: YuGothic, "Yu Gothic", sans-serif;


    &__spfoto {
        display: none;

        @include mobile {
            display: block;
            position: absolute;
            z-index: 1;
            top: 0%;
            width: 100%;
            height: 492px;
            object-fit: cover;
        }
    }

    &__pcfoto {
        display: block;
        position: absolute;
        z-index: 1;
        top: 0%;
        height: 100%;
        max-height: 600px;
        width: 100%;
        margin: 0 auto;
        object-fit: cover;

        @include mobile {
            display: none;
        }
    }


     &__container {
         display: flex;
         position: relative;
         z-index: 2;
         align-items: flex-end;
         justify-content: space-between;
         width: 100%;
         max-width: 994px;
         margin: 0 auto;
     }

    &__border {
        width: 100%;
        height: 2px;
        background: #fff;
    }

    &__title {
         text-shadow:2px 1px  rgba(49,49,49,0.3);
        font-size: 60px;
        font-weight: bold;
        letter-spacing: 0.1em;
        color: #fff;
        padding: 14px 0;
        line-height: 80px;

        @include mobile {
            font-size: 30px;
            letter-spacing: 3px;
            line-height: 50px;

        }
    }

    &__subtitle {
        font-size: 24px;
        color: #fff;
        font-family: 'Barlow Condensed', sans-serif;
        letter-spacing: 0.1em;
        padding-top: 30px;

        @include mobile {
            font-size: 16px;
            letter-spacing: 1.6px;
        padding-top: 16px;
        }
    }

    &__box2 {
        padding: 0 81px 57px 60px;
        display: flex;
        justify-content: space-around;
        align-items: center;

        @include mobile {
        padding: 0 14% 40px;
        }
    }

    &__mentoring {
        @include mobile {
            margin-right: 0.9%;
        }
    }

    &__icon {
      width: auto;
      height: 60px;

        @include mobile {
            width: 46px;
            height: auto;
        }  
    }

    &__text {
        font-size: 20px;
        font-weight: medium;
        color: #fff;
        opacity: 0.8;
        font-family: Futura;
        padding-top: 10px;

        @include mobile {
            font-size: 12px;
        }
    }

    &__box4 {
        width: 100%;
    }

    &__menu {
        display: flex;
	   justify-content: space-around;
        max-width: 100%;
        padding-bottom: 30px;

        @include mobile {
            padding-bottom: 16px;
        }
    }

    &__menu2 {
        display: flex;
	   justify-content: space-around;
        max-width: 100%;
    }

    &__point {
        font-size: 20px;
        color: #fff;
        font-weight: bold;

        @include mobile {
            font-size: 14px;
            left: 0;
        }
    }

    &__box {
        background: rgba(194,80,79,0.8);
        width: 100%;
        max-width: 500px;
        height: 600px;

        @include mobile {
            width: 100%;
            height: 100%;
           margin: 60px auto 0; 
           max-width: 335px;
        }
    }

    &__box1 {
        padding: 78px 52px 110px 52px;

        @include mobile {
            padding: 40px 17% 43px ;
        }
    }

    &__box3 {
        z-index: 2;
        position: relative;
        padding-bottom: 2em;
        text-align: left;
        margin: 0 auto;
        display: inline;
        font-size: 20px;
        line-height: 32px;
        letter-spacing: 0.08em;
        color: #505050;
        font: bold;

         @include mobile {
            display: none;
        }
    }

    &__text2 {

        @include mobile {
            display: none;
        }
    }

    &__text2::first-letter {
    color:#C2504F;
    font-size:40px;
    }

}
</style>