import { describe, expect, it } from 'vitest'
import { delay } from './delay'

describe('delay', () => {
  it('should return a promise', () => {
    expect(delay(1000)).toBeInstanceOf(Promise)
  })

  it('should resolve after 1000ms', async () => {
    const start = Date.now()
    await delay(1000)
    const end = Date.now()
    expect(end - start).toBeGreaterThanOrEqual(1000)
  })
})
