<template>
  <article class="card">
    <strong>{{ indicator.code }}</strong>
    <p>{{ indicator.name }}</p>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  indicator: {
    code: string
    name: string
  }
}>()
</script>

<style scoped>
.card {
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
}

strong {
  display: block;
  font-size: 0.85rem;
  color: #2563eb;
}

p {
  margin-top: 0.25rem;
  color: #111827;
}
</style>
