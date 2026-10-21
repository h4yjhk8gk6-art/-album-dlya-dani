// Меняйте количество с 30 на 25, если нужно. Номера уже напечатанных QR не меняйте.
const COUNT = 30;
window.ALBUM = Array.from({length:COUNT}, (_, i) => {
  const n = String(i+1).padStart(2,'0');
  return {
    id:n,
    title:`История № ${i+1}`,
    caption:'У каждого — свой Даня, своя история и свои воспоминания.',
    photo:`photos/photo${n}.jpg`,
    audio:`audio/audio${n}.mp3`,
    visible:true // поставьте false, чтобы скрыть карточку на главной
  };
});
