function UpdateUI(level,xp) {
    levels = document.querySelector('#LevelUI');
    levels.innerHTML = `You are Level: ${level} with ${xp}xp`;
}