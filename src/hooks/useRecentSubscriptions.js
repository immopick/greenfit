import { useEffect, useState } from 'react'

const FOUR_HOURS_MS = 4 * 60 * 60 * 1000

function getBlockIndex() {
  return Math.floor(Date.now() / FOUR_HOURS_MS)
}

function countForBlock(block) {
  const n = ((block * 2654435761) >>> 0) % 9
  return 4 + n // 4 à 12 personnes
}

export function useRecentSubscriptions() {
  const [count, setCount] = useState(() => countForBlock(getBlockIndex()))

  useEffect(() => {
    let block = getBlockIndex()

    const sync = () => {
      const next = getBlockIndex()
      if (next !== block) {
        block = next
        setCount(countForBlock(block))
      }
    }

    sync()
    const id = setInterval(sync, 60_000)
    return () => clearInterval(id)
  }, [])

  return count
}
