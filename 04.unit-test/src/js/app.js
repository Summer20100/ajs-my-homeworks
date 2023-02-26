// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

export function healthLine(hero) {
  let damage;
  if (hero.health <= 15) {
    damage = 'critical';
  } else if (hero.health < 50) {
    damage = 'wounded';
  } else {
    damage = 'healthy';
  }
  return damage;
}

export function sortHeroes(heroes) {
  return heroes.sort((a, b) => ((+a.health) > (+b.health) ? -1 : 1));
}
