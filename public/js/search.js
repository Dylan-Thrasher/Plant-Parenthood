const searchInput = document.getElementById('searchInput');
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