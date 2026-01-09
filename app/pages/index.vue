<template>
  <main>
    <header>
      <h1>WHO Global Health Dashboard</h1>
      <p>
        Server-side rendered data from the WHO Global Health Observatory API.
      </p>
    </header>

    <section v-if="pending">
      <p>Loading health indicators...</p>
    </section>

    <section v-else-if="error">
      <p class="error">
        Failed to load data. Please try again later.
      </p>
    </section>

    <IndicatorList
      v-else
      :indicators="data?.data ?? []"
    />
  </main>
</template>

<script setup lang="ts">
import { useHealthIndicators } from '../../composables/useHealthIndicators'
import IndicatorList from '../../components/IndicatorList.vue'

const { data, pending, error } = useHealthIndicators()
</script>

<style scoped>
main {
  padding: 2rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
}

header {
  margin-bottom: 2rem;
}

h1 {
  font-size: 1.75rem;
  font-weight: 600;
}

.error {
  color: #b91c1c;
}
</style>
