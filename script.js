const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const menu=$('.menu'),nav=$('.header nav'),menuBackdrop=document.createElement('div'),progress=$('.scroll-progress');
menuBackdrop.className='menu-backdrop';document.body.append(menuBackdrop);
function closeMenu(){nav.classList.remove('open');menuBackdrop.classList.remove('open');menu.textContent='☰';}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBackdrop.classList.toggle('open',open);menu.textContent=open?'×':'☰';});
menuBackdrop.addEventListener('click',closeMenu);
$$('.header nav a').forEach(a=>a.addEventListener('click',closeMenu));
const pd=$('#product-dialog');$$('.product').forEach(p=>$('.photo',p).addEventListener('click',()=>{const scrollY=window.scrollY;$('#d-name').textContent=p.dataset.name;$('#d-sub').textContent=p.dataset.sub;$('#d-desc').textContent=p.dataset.desc;$('#d-price').textContent=p.dataset.price;$('.dialog-photo').className='dialog-photo '+[...$('.photo',p).classList].filter(c=>c!=='photo').join(' ');pd.showModal();window.scrollTo(0,scrollY);requestAnimationFrame(()=>window.scrollTo(0,scrollY));}));
const power=$('#power'),warm=$('#warm'),bright=$('#bright'),exp=$('.experience-bg');let on=true;
function kelvinToRgb(kelvin){
  const temperature=kelvin/100;
  let red,green,blue;
  if(temperature<=66){
    red=255;
    green=99.4708*Math.log(temperature)-161.1196;
    blue=temperature<=19?0:138.5177*Math.log(temperature-10)-305.0448;
  }else{
    red=329.6987*Math.pow(temperature-60,-.1332);
    green=288.1222*Math.pow(temperature-60,-.0755);
    blue=255;
  }
  return [red,green,blue].map(value=>Math.max(0,Math.min(255,Math.round(value))));
}
function lighting(){
  const temperature=2700+(Number(warm.value)/100)*3800;
  const brightness=Number(bright.value);
  const position=Number(warm.value)/100;
  const rgb=[
    Math.round(255-(position*105)),
    Math.round(126+(position*92)),
    Math.round(38+(position*217))
  ];
  const warmth=1-position;
  const tone=temperature<3500?'전구색':temperature<5200?'주백색':'주광색';
  $('#warm-label').textContent=`${tone} · ${Math.round(temperature/100)*100}K`;
  $('#bright-label').textContent=`${brightness}%`;
  exp.style.setProperty('--light-brightness',on ? .38+brightness/105 : .3);
  exp.style.setProperty('--light-saturation',on?1.42:.25);
  exp.style.setProperty('--light-rgb',rgb.join(', '));
  exp.style.setProperty('--light-opacity',on ? .42 : .03);
  exp.style.setProperty('--light-glow',on ? .28 : .02);
  exp.style.setProperty('--light-contrast',on?1.08:.8);
}
warm.addEventListener('input',lighting);bright.addEventListener('input',lighting);power.addEventListener('click',()=>{on=!on;power.classList.toggle('off',!on);power.textContent=on?'● 조명 켜짐':'○ 조명 꺼짐';lighting();});lighting();
const vd=$('#video-dialog'),video=$('#ad-video');
function openAd(file){vd.showModal();if(file){video.src=file;video.load();video.play().catch(()=>{});}}
$$('.show-ad').forEach(button=>button.addEventListener('click',()=>openAd(button.dataset.file)));
$$('.video-tabs button').forEach(button=>button.addEventListener('click',()=>openAd(button.dataset.file)));
vd.addEventListener('close',()=>{video.pause();video.removeAttribute('src');video.load();});
$('#subscribe').addEventListener('submit',e=>{e.preventDefault();$('#subscribe-msg').textContent='구독 신청이 완료되었습니다. (시연용)';e.target.reset();});
$$('.close').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));[pd,vd].forEach(d=>d.addEventListener('click',e=>{if(e.target===d)d.close();}));
function updateProgress(){const scrollable=document.documentElement.scrollHeight-window.innerHeight;progress.style.transform=`scaleX(${scrollable>0?window.scrollY/scrollable:0})`;}
window.addEventListener('scroll',updateProgress,{passive:true});window.addEventListener('resize',updateProgress);updateProgress();
