const nav=document.querySelector('.nav');
const hamb=document.querySelector('.hamb');
hamb?.addEventListener('click',()=>{const open=nav.classList.toggle('open');hamb.setAttribute('aria-expanded',open);});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const header=document.querySelector('.header');
const onScroll=()=>header?.classList.toggle('scrolled',window.scrollY>30);
onScroll();window.addEventListener('scroll',onScroll,{passive:true});

const special=document.getElementById('special');
const specialField=special?.querySelector('textarea');
document.querySelectorAll('input[name="Asistencia"]').forEach(i=>i.addEventListener('change',()=>{
  const attending=i.value==='Sí, allí estaré' && i.checked;
  if(attending){special.hidden=false;}else if(i.checked){special.hidden=true;if(specialField)specialField.value='';}
}));

const target=new Date('2027-10-16T13:00:00+02:00').getTime();
function tick(){let d=Math.max(0,target-Date.now());const days=Math.floor(d/86400000);d%=86400000;const hours=Math.floor(d/3600000);d%=3600000;const mins=Math.floor(d/60000);const secs=Math.floor((d%60000)/1000);document.getElementById('days').textContent=days;document.getElementById('hours').textContent=String(hours).padStart(2,'0');document.getElementById('minutes').textContent=String(mins).padStart(2,'0');document.getElementById('seconds').textContent=String(secs).padStart(2,'0');}
tick();setInterval(tick,1000);

document.querySelectorAll('.copy-iban').forEach(button=>button.addEventListener('click',async()=>{
  const iban=button.dataset.iban;
  const note=button.closest('.gift-card')?.querySelector('.copy-note');
  try{await navigator.clipboard.writeText(iban);if(note)note.textContent='IBAN COPIADO ✓';button.textContent='COPIADO';setTimeout(()=>{button.textContent='COPIAR';if(note)note.textContent='';},1800);}catch(e){if(note)note.textContent='Puedes seleccionar y copiar el IBAN manualmente.';}
}));
