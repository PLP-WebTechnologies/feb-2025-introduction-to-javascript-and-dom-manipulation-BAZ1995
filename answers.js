// Change the text content
document.getElementById('change-text-btn').addEventListener('click', function () {
  const title = document.getElementById('main-title');
  title.textContent = 'You changed the title!';
});

// Modify CSS styles
document.getElementById('change-style-btn').addEventListener('click', function () {
  const desc = document.getElementById('description');
  desc.style.color = 'white';
  desc.style.backgroundColor = 'teal';
  desc.style.padding = '10px';
  desc.style.borderRadius = '5px';
});

// Add/remove an element (toggle box)
document.getElementById('toggle-element-btn').addEventListener('click', function () {
  const box = document.getElementById('box');
  if (box.style.display === 'none') {
    box.style.display = 'block';
  } else {
    box.style.display = 'none';
  }
});
