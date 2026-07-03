
// Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const menuModal = document.getElementById('menuModal');
const closeBtn = document.getElementById('closeBtn');
menuBtn.onclick = () => menuModal.classList.add('show');
closeBtn.onclick = () => menuModal.classList.remove('show');
window.onclick = (e) => { if(e.target == menuModal) menuModal.classList.remove('show'); }

// 10 Cards, 5 Seconds Each, Loop
const cards = document.querySelectorAll('.card');
let current = 0;
function showCard() {
  cards.forEach(c => c.classList.remove('active'));
  cards[current].classList.add('active');
  current = (current + 1) % cards.length;
}
showCard();
setInterval(showCard, 5000); // 5 seconds

