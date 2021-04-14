import { createContext, useContext, useState } from 'react'
import { sample, set, times } from 'lodash'
import { WORLD_SIZE } from '../env/config'
import { getNextWorld } from '../helpers/world'

const getInitialWorld = (opt = { randomize: false }) => {
  const world = {}

  for (let y = 0; y < WORLD_SIZE; y += 1) {
    for (let x = 0; x < WORLD_SIZE; x += 1) {
      set(
        world,
        `${x}-${y}`,
        opt.randomize ? sample([true, ...times(4, false)]) : false,
      )
    }
  }

  return world
}

export const useWorldInit = () => {
  const [world, setWorld] = useState(getInitialWorld())

  const init = () => setWorld(getInitialWorld())

  const setCell = (x, y, value) => {
    setWorld({ ...world, [`${x}-${y}`]: value })
  }

  const getCell = (x, y) => world[`${x}-${y}`]

  const randomize = () => setWorld(getInitialWorld({ randomize: true }))

  const nextWorld = () => setWorld((prevWord) => getNextWorld(prevWord))

  return { world, setWorld, setCell, getCell, randomize, init, nextWorld }
}

export const WorldContext = createContext()

export function useWorldContext() {
  return useContext(WorldContext)
}
