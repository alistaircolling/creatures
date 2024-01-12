import { Collector, Creature, tryToCatch } from ".";


test("A collector can catch a creature that is nearby", () => {
  console.log('A collector can catch a creature that is nearby')

  const mrJones: Collector = {
    name: 'Mr Jones',
    family: 'collector',
    species: 'human',
    position: { x: 0, y: 0 },
    collection: [],
  }

  const tony: Creature = {
    name: 'Tony',
    family: 'flyer',
    species: 'bird',
    position: { x: 0, y: 4 }
  }

  const simon: Creature = {
    name: 'Simon',
    family: 'swimmer',
    species: 'shark',
    position: { x: 38, y: 51 }
  }
  const range: number = 5

  tryToCatch(mrJones, tony, range);
  tryToCatch(mrJones, simon, range);
  tryToCatch(mrJones, mrJones, range);

  expect(mrJones.collection).toContain(tony)
  expect(mrJones.collection).not.toContain(simon)
  expect(mrJones.collection).not.toContain(mrJones)

})
