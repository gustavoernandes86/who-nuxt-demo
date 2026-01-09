import { useFetch } from "nuxt/app"

// composables/useHealthIndicators.ts
export interface HealthIndicator {
  code: string
  name: string
}

export interface HealthApiResponse {
  source: string
  total: number
  data: HealthIndicator[]
}

export function useHealthIndicators() {
  return useFetch<HealthApiResponse>('/api/health', {
    server: true
  })
}
