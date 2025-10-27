// app.js - pequeno comportamento
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('actionBtn');
  const msg = document.getElementById('message');
  let count = 0;
  btn.addEventListener('click', () => {
    count += 1;
    msg.textContent = `Você clicou ${count} ${count === 1 ? 'vez' : 'vezes'}.`;
    btn.textContent = `Clicado: ${count}`;
    btn.classList.add('clicked');
    setTimeout(()=> btn.classList.remove('clicked'), 200);
  })
});