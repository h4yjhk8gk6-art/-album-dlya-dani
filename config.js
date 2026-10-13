// Здесь можно менять подписи к фотографиям.
// Фотографии: photos/photo01.jpg ... photos/photo30.jpg
// Аудио: audio/audio01.mp3 ... audio/audio30.mp3
window.ALBUM = Array.from({length:30}, (_, i) => {
  const n = String(i+1).padStart(2,'0');
  return {id:n, title:`Воспоминание №${i+1}`, caption:'Нажми, чтобы услышать этот момент ❤️', photo:`photos/photo${n}.jpg`, audio:`audio/audio${n}.mp3`};
});
