const items=window.ALBUM||[];
function photo(item){const box=document.createElement('div');box.className='imagebox';const img=document.createElement('img');img.src=item.photo;img.alt=item.title;box.append(img);return box}
const grid=document.getElementById('grid');

if(grid){
  const visibleItems=items
    .filter(x=>x.visible!==false)
    .sort((a,b)=>Number(a.id)-Number(b.id));

  visibleItems.forEach((item,i)=>{
    const a=document.createElement('a');
    a.className='card';
    a.href=`memory.html?id=${encodeURIComponent(item.id)}`;
    a.style.setProperty('--tilt',`${((i%5)-2)*.85}deg`);

    const img=document.createElement('img');
    img.src=item.photo;
    img.alt=item.title;

    const box=document.createElement('div');
    box.className='imagebox';
    box.append(img);
    a.append(box);

    const label=document.createElement('p');
    label.className='number';
    label.textContent=`ВОСПОМИНАНИЕ ${item.id}`;

    const h=document.createElement('h3');
    h.textContent=item.title;

    a.append(label,h);
    grid.append(a);
  });

  document.getElementById('empty').hidden=visibleItems.length>0;
}

const detail=document.getElementById('detail');
if(detail){const id=new URLSearchParams(location.search).get('id')||'01';const item=items.find(x=>x.id===id);if(!item){detail.innerHTML='<h1>История не найдена</h1><p>Проверь номер воспоминания.</p>'}else{document.title=`${item.title} — Даня. Первые 50.`;document.getElementById('memory-title').textContent=item.title;document.getElementById('caption').textContent=item.caption;const photoBox=photo(item);photoBox.querySelector('img').onerror=()=>{photoBox.innerHTML='<p class="missing-note">Фотография ещё не загружена</p>'};document.getElementById('photo').append(photoBox);const player=document.getElementById('player'),button=document.getElementById('play'),hint=document.getElementById('audio-hint');player.src=item.audio;button.addEventListener('click',()=>{player.hidden=false;player.play().catch(()=>{hint.textContent='Не удалось открыть запись. Проверь файл аудио.'})});player.addEventListener('error',()=>{hint.textContent='Аудиозапись ещё не загружена или формат не поддерживается.'})}}
