import { RequestBaseConfig } from './base'

interface Json {
  id: string | number
  sourceid: string | number
  time?: string | number
}

export interface ScrobbleRequestConfig extends RequestBaseConfig {
  id?: string | number
  sourceid?: string | number
  time?: string | number
  json?: Array<Json>
}