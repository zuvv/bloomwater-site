// Restart the dissolve animation each cycle so the bomb reappears
const bomb = document.querySelector('.bomb');
if (bomb) {
  bomb.addEventListener('animationiteration', () => {
    bomb.style.animation = 'none';
    bomb.offsetHeight; // reflow
    bomb.style.animation = '';
  });
}
