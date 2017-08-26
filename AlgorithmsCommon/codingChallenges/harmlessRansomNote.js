/*
  Harmless Ransom Note O(n + m) or O(n)

  note - 'this is a note for you from a secret admirer'
  magazine - 'puerto rico is a great place  you must hike far from town
  to find a secret waterfall that i am an admirer of but note that it is
  not as hard as it seems this my advice for you'
  harmlessRansomNote(note, magazine) -> TRUE - enough words to create such a note
*/
function harmlessRansomNote(noteText, magazineText) {
  const noteArr = noteText.split(' ');
  const magazineArr = magazineText.split(' ');
  const magazine = {};

  magazineArr.forEach(word => {
    if (!magazine[word]) {
      magazine[word] = 0;
    }
    magazine[word]++;
  });

  let noteIsPossible = true;
  noteArr.forEach(word => {
    if (magazine[word]) {
      magazine[word]--;
      if (magazine[word] < 0) {
        noteIsPossible = false;
      }
    } else {
      noteIsPossible = false;
    }
  });

  return noteIsPossible;
}

const note = 'this is a secret note for you from a secret admirer';
const magazine =
  'puerto rico is a great place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited';

console.log(harmlessRansomNote(note, magazine));
