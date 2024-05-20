const searchInput = document.getElementById('searchBtn');
const plantCards = document.querySelectorAll('#plantCard');

searchInput.addEventListener('input', () => {
  const searchValue = searchInput.value.toLowerCase().trim();
  plantCards.forEach(card => {
    const plantName = card.querySelector('.text-s').textContent.toLowerCase();
    if (plantName.includes(searchValue)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  })
})


// changes the hidden state based on current state
const toggleFilterHide = (ev) => {
 
  let  hidden = $('#filter')    
  
  if(hidden.is(':hidden')) hidden.show();
  else hidden.hide();
}

/*
  port this shit to jquery - Charles
*/ 