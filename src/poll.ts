import { delay } from './delay'

export function poll (fn: (stopFn: () => void) => Promise<void> | void,
  interval: number,
  immediate = true) {
  let stopped = false
  const timeoutId = setTimeout(async () => {
    while (!stopped) {
      await fn(stop)
      await delay(interval)
    }
  }, immediate ? 0 : interval)

  function stop () {
    clearTimeout(timeoutId)
    stopped = true
  }
  return stop
}
