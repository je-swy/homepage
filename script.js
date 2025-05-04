document.addEventListener('DOMContentLoaded', () => {
    const egg = document.querySelector('.interests__easter-egg');
    const secret = document.querySelector('.interests__secret');

    egg.addEventListener('click', () => {
        secret.style.display = 'block';
        egg.textContent = '🎯 Curiosity unlocked!';
    });
});