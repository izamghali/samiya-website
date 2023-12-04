export function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

export function filterTextColorChange(event) {
  const filterBtns = document.querySelectorAll('.filter-btn')
  filterBtns.forEach(btn => {
    if (btn.innerHTML === event.target.innerHTML) {
        btn.classList.remove('text-accentLess')
        btn.classList.add('text-accent')
    } else {
        btn.classList.add('text-accentLess')
        btn.classList.remove('text-accent')
    }
  })
}