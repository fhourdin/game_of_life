import { createContext, useContext, useEffect, useState } from 'react'
import { useWorldContext } from './world'

export const usePlayerInit = () => {
  const { nextWorld } = useWorldContext()
  const [playing, setPlaying] = useState(false)
  const [fastForward, setFastForward] = useState(false)

  useEffect(() => {
    const interval =
      playing &&
      setInterval(
        () => {
          nextWorld()
        },
        fastForward ? 100 : 500,
      )
    return () => {
      clearInterval(interval)
    }
  }, [playing, fastForward])

  return { playing, setPlaying, fastForward, setFastForward }
}

export const PlayerContext = createContext()

export function usePlayerContext() {
  return useContext(PlayerContext)
}
