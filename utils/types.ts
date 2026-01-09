// utils/types.ts
export interface WhoIndicator {
  IndicatorCode: string
  IndicatorName: string
}

export interface WhoApiResponse<T> {
  value: T[]
}

export interface NormalizedIndicator {
  code: string
  name: string
}
export interface IndicatorDataPoint {
  year: number
  value: number | null
}