<template>
  <section class="grid">
    <IndicatorCard
      v-for="item in indicators"
      :key="item.code"
      :indicator="item"
    />
  </section>
</template>

<script setup lang="ts">
import IndicatorCard from './IndicatorCard.vue'

defineProps<{
  indicators: {
    code: string
    name: string
  }[]
}>()
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
}
</style>
