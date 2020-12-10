<template>
  <div>
    <c-header />
    <main class="l-content">
      <nuxt />
    </main>
    <l-footer />
  </div>
</template>

<script>
import LHeader from "@/layouts/LHeader"
import LFooter from "@/layouts/LFooter"
export default {
  components: {
    LHeader,
    LFooter,
  },
}
</script>
