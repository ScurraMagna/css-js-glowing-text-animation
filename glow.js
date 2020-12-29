let letters = document.getElementsByTagName('h1')[0];
let n = letters.children.length; // number of letter
let d = 4; // animation duration

for (let i=0; i<letters.children.length; i++) {
  letters.children[i].style.animationDelay = (i / 2 * d / n) + "s";
}
