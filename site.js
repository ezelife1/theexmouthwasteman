const hero=document.querySelector('.hero'),floating=document.querySelector('#floating');
function refresh(){const past=hero.getBoundingClientRect().bottom<=0;floating.hidden=!past;floating.inert=!past;floating.classList.toggle('show',past)}
window.addEventListener('scroll',refresh,{passive:true});window.addEventListener('resize',refresh);window.addEventListener('pageshow',refresh);refresh();
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#site-nav');
function setMenu(open){toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)}
toggle.addEventListener('click',()=>setMenu(toggle.getAttribute('aria-expanded')!=='true'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){setMenu(false);toggle.focus()}});
const form=document.querySelector('#wa-form'),service=document.querySelector('#q-service');
if([...service.options].some(o=>o.value===document.body.dataset.service))service.value=document.body.dataset.service;
form.addEventListener('submit',e=>{
 e.preventDefault();if(!form.reportValidity())return;
 const values=[['Name','q-name'],['Service','q-service'],['Area/Postcode','q-area'],['Collection details','q-details']];
 const msg=["Hi The Exmouth Waste Man, I'd like a quote.",'',...values.map(([label,id])=>label+': '+document.getElementById(id).value.trim())].join('\n');
 window.location.assign('https://wa.me/447384168302?text='+encodeURIComponent(msg));
});
