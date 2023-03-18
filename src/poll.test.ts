import { describe, expect, it, vi } from 'vitest'
import { delay } from './delay'
import { poll } from './poll'

describe('poll', () => {
  it('should stop polling', async () => {
    const fn = vi.fn()
    const stop = poll(fn, 100)
    await delay(0)
    expect(fn).toBeCalledTimes(1)
    await delay(400)
    stop()
    await delay(100)
    expect(fn).toBeCalledTimes(4)
  })

  it('should not start polling immediately', async () => {
    const fn = vi.fn()
    poll(fn, 100, false)
    expect(fn).toBeCalledTimes(0)
    await delay(400)
    expect(fn).toBeCalledTimes(3)
  })
})
