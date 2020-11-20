<template>
  <footer class="l-footer">
    <div class="l-footer__contact">
      <div class="l-footer__title">
        アクセス
      </div>
      <div class="l-footer__border">
      </div>
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
        <div class="l-footer__last">
            <p>chatbox.inc All Rights Reserved.</p>
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

&__title {
  @include mobile {
    padding: 30px 0 10px;
    font-size: 16px;
    color: #fff;
  }
}

&__border {
  width: 100%;
  height: 2px;
  background: #fff;
}

&__address {
  @include mobile {
    font-size: 14px;
    color: #fff;
    padding: 30px 10px;
  }
}

&__train {
  @include mobile {
    font-size: 14px;
    color: #fff;
    padding: 0 10px 120px;
  }
}

  &__last {
    font-size: 14px;
    font-family: Alternate Gothic ATF;
    color: #fff;
    letter-spacing: 0.08em;
    text-align: center;
    padding-bottom: 15px;
  }
}

</style>