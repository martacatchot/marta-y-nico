const nav=document.querySelector('.nav');
const hamb=document.querySelector('.hamb');
hamb?.addEventListener('click',()=>{const open=nav.classList.toggle('open');hamb.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

// RSVP: mostrar la pregunta de menú especial solo si la persona confirma asistencia.
const special=document.getElementById('special');
const specialField=special?.querySelector('textarea');
document.querySelectorAll('input[name="Asistencia"]').forEach(i=>i.addEventListener('change',()=>{
  const attending=i.value==='Sí, allí estaré' && i.checked;
  if (attending) {
    special.hidden=false;
  } else if (i.checked) {
    special.hidden=true;
    if (specialField) specialField.value='';
  }
}));

// Cuenta atrás hasta el inicio de la ceremonia.
const target=new Date('2027-10-16T13:00:00+02:00').getTime();
function tick(){
  let d=Math.max(0,target-Date.now());
  const days=Math.floor(d/86400000);
  d%=86400000;
  const hours=Math.floor(d/3600000);
  d%=3600000;
  const mins=Math.floor(d/60000);
  const secs=Math.floor((d%60000)/1000);
  document.getElementById('days').textContent=days;
  document.getElementById('hours').textContent=String(hours).padStart(2,'0');
  document.getElementById('minutes').textContent=String(mins).padStart(2,'0');
  document.getElementById('seconds').textContent=String(secs).padStart(2,'0');
}
tick();
setInterval(tick,1000);
