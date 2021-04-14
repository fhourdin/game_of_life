import { forEach } from 'lodash'

const countNeighbours = (key, world) => {
  const [x, y] = key.split('-').map((v) => parseInt(v, 10))
  let count = 0

  if (world[[x, y + 1].join('-')]) {
    count += 1
  }
  if (world[[x, y - 1].join('-')]) {
    count += 1
  }
  if (world[[x + 1, y - 1].join('-')]) {
    count += 1
  }
  if (world[[x + 1, y].join('-')]) {
    count += 1
  }
  if (world[[x + 1, y + 1].join('-')]) {
    count += 1
  }
  if (world[[x - 1, y - 1].join('-')]) {
    count += 1
  }
  if (world[[x - 1, y].join('-')]) {
    count += 1
  }
  if (world[[x - 1, y + 1].join('-')]) {
    count += 1
  }

  return count
}

export const getNextWorld = (prevWorld) => {
  const nextWorld = {}

  forEach(prevWorld, (alive, key) => {
    const neighboursCount = countNeighbours(key, prevWorld)

    if (alive) {
      if (neighboursCount === 2 || neighboursCount === 3) {
        nextWorld[key] = true
      } else {
        nextWorld[key] = false
      }
    } else if (neighboursCount === 3) {
      nextWorld[key] = true
    } else {
      nextWorld[key] = false
    }
  })

  return nextWorld
}
