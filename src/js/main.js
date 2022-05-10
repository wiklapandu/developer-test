// Task: Implement isNameInList function

var names = [
  'jax',
  'tryndamere',
  'anivia',
  'ahri',
];

function isNameInList(name) {
  // find name in array names
  if (names.find(value => value === name)) {
    // if have return yes
    return 'Yes';
  }
  // if don't have return yes
  return 'No';
}

console.log('Is Pikachu a league of legends champion? ', isNameInList('pikachu'));
