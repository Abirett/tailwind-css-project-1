/*----------------------------------------------
-- Creator: A.H. Abir (Ashfaque Hossain Abir)
----------------------------------------------*/

// Trigger Mobile Nav Menu
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
})