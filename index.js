console.log('bobbyhadz.com');

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const link = document.getElementById('link');
  link.href = 'https://bobbyhadz.com';

  return false;
});
