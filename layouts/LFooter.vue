<template>
  <footer class="l-footer">
    <div class="l-footer__contact">
      <div class="l-footer__title">
        アクセス
      </div>
      <div class="l-footer__border">
      </div>
      <div class="l-footer__box">
      <div class="l-footer__address">
        〒530-0043 <br>
        大阪府大阪市北区天満二丁目8-17 <br>
        天満橋パークビル ２F
      </div>
      <div class="l-footer__train">
        JR東西線「大阪天満宮」より徒歩11分 <br>
        大阪メトロ堺筋線・谷町線「南森町」より徒歩11分 <br>
        京阪本線「天満橋駅」より徒歩6分
      </div>
      </div>
      <div class="l-footer__box1">
        <img class="l-footer__icon"
        src="@/assets/image/logo@2x.png"
        alt="chatboxロゴ">
        <div class="l-footer__last">
            chatbox.inc All Rights Reserved.
        </div>
      </div>
        </div>
        </footer>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins.scss";
.l-footer{
  background: #C2504F;
  padding: 0 20px;
  font-family: YuGothic, "Yu Gothic", sans-serif;

&__contact {
  max-width: 994px;
  margin: 0 auto;
  text-align: left;
  padding: 0 60px;

  @include mobile {
    width: 100%;
    padding: 0 10%;
  }
}


&__title {
  padding: 30px 0 10px;
  color: #fff;
  font-size: 20px;

  @include mobile {
    font-size: 16px;
  }
}

&__border {
  width: 100%;
  height: 2px;
  background: #fff;
}

&__address {
  font-size: 14px;
    color: #fff;
    font-size: 14px;
    padding-right: 60px;

  @include mobile {
    padding: 30px 10px;

  }
}

&__train {
  font-size: 14px;
    color: #fff;
  @include mobile {
    padding: 0 10px 120px;
  }
}

  &__last {
    font-size: 14px;
    padding-left: 20px;
    font-family: Alternate Gothic ATF;
    color: #fff;
    letter-spacing: 0.08em;
    text-align: left;

    @include mobile {
      left: 0;
      text-align: center;
    }
  }

  &__box {
    display: flex;
    padding-top: 25px;
    padding-bottom: 50px;

    @include mobile {
      padding-top: 0;
      display: block;
    }
  }

  &__box1 {
  padding-bottom: 15px;
  display: flex;
	align-items: center;

  @include mobile {
    display: flex;
	justify-content: center;
  }
  }

  &__icon {
    width: 16px;
    height: 100%;
  }

  &__logo {
    @include mobile {
      margin: 0 auto;
    }

  }
}

</style>