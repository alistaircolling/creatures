export type Position = {
  x: number
  y: number
}

export interface Creature {
  family: 'flyer' | 'swimmer' | 'runner' | 'collector'
  species: 'bird' | 'shark' | 'lion' | 'human'
  name: string
  position: Position
}

export interface Collector extends Creature {
  collection: Creature[]
}

export type World = {
  creatures: Creature[]
}

export const isNearby = (a: Position, b: Position, range: number) => {
  const distance = Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
  return distance <= range;
};


export const canCatch = (collector: Collector, creature: Creature, range: number): boolean => {
  return isNearby(collector.position, creature.position, range)
}

export const tryToCatch = (collector: Collector, creature: Creature, range: number) => {
  if (canCatch(collector, creature, range)) {
    collector.collection.push(creature);
  }
}
