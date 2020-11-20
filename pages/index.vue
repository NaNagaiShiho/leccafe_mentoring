<template>
  <div class="p-index">
    <CHero class="p-index__item" />
    <CConcept class="p-index__item" />
    <CPoint class="p-index__item" />
    <CPrice class="p-index__item" />
    <CFlow class="p-index__item" />
    <CLectures class="p-index__item" />
    <CCompany class="p-index__item" />
    <CContact class="p-index__item" />
  </div>
</template>

<script>
import CHero from '@/pages/-CHero'
import CConcept from '@/pages/-CConcept'
import CPoint from '@/pages/-CPoint'
import CPrice from '@/pages/-CPrice'
import CFlow from '@/pages/-CFlow'
import CLectures from '@/pages/-CLectures'
import CCompany from '@/pages/-CCompany'
import CContact from '@/pages/-CContact'

export default {
  components: {
    CHero,
    CConcept,
    CPoint,
    CPrice,
    CFlow,
    CLectures,
    CCompany,
    CContact,
  },
}
</script>

<style lang="scss" scoped>
.p-index {
  &__item {
    &:nth-child(odd) {
      background-color: #faf7f7;
    }
  }
}
</style>
