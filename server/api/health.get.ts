// server/api/health.get.ts
import { defineEventHandler } from 'h3'
import { fetchIndicators } from '../../utils/whoClient'

export default defineEventHandler(
  async () => {
    try {
      const indicators = await fetchIndicators()

      return {
        source: 'WHO Global Health Observatory',
        total: indicators.length,
        data: indicators.slice(0, 10) // limitar para demo
      }
    } catch (error) {
      console.error('WHO API error:', error)

      throw createError({
        statusCode: 502,
        statusMessage: 'Failed to fetch data from WHO API'
      })
    }
  }
)
