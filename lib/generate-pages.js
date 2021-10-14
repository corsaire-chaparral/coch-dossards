let compteur = 1;
const max = DOSSARDS_MAX || 1;

const firstpage = document.querySelector('.page');

while (compteur <= max) {
  let add = firstpage.cloneNode(true);

  add.querySelector('.page__number').innerHTML = `${compteur}`;

  document.querySelector('body').appendChild(add);

  compteur++;
}
