// utils/whoClient.ts
import type { WhoApiResponse, WhoIndicator, NormalizedIndicator } from './types'

const WHO_API_BASE = 'https://ghoapi.azureedge.net/api'

export async function fetchIndicators(): Promise<NormalizedIndicator[]> {
  const response = await $fetch<WhoApiResponse<WhoIndicator>>(
    `${WHO_API_BASE}/Indicator`,
    {
      retry: 1,
      timeout: 10_000
    }
  )

  return response.value.map((item) => ({
    code: item.IndicatorCode,
    name: item.IndicatorName
  }))
}
