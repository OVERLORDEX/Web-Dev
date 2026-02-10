const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = input.value.trim();
  if (text === '') {
    return;
  }

  const item = document.createElement('li');
  item.className = 'todo-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.className = 'todo-text';
  span.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = '🗑';

  checkbox.addEventListener('change', () => {
    item.classList.toggle('done');
  });

  deleteBtn.addEventListener('click', () => {
    list.removeChild(item);
  });

  item.appendChild(checkbox);
  item.appendChild(span);
  item.appendChild(deleteBtn);

  list.appendChild(item);

  input.value = '';
});
