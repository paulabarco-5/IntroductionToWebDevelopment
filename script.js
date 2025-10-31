document.getElementById('showFormBtn').addEventListener('click', () => {
  document.getElementById('nameForm').classList.remove('hidden');
});

document.getElementById('nameForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('nameInput').value;
  document.getElementById('greetingMessage').textContent = `Nice to meet you, ${name}!`;
  document.getElementById('nameForm').classList.add('hidden');
});