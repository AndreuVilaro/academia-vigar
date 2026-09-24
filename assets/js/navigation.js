export function initNavigation(){
  const button=document.querySelector('[data-menu-toggle]');
  const menu=document.querySelector('[data-nav-links]');
  if(!button||!menu)return;
  const close=()=>{menu.classList.remove('is-open');button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','Obrir menú');};
  button.addEventListener('click',(e)=>{e.stopPropagation();const open=menu.classList.toggle('is-open');button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Tancar menú':'Obrir menú');});
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
  document.addEventListener('click',e=>{if(!menu.contains(e.target)&&!button.contains(e.target))close();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
  window.addEventListener('resize',()=>{if(window.innerWidth>980)close();});
}
