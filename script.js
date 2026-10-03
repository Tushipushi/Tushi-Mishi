const pages = ["welcome","question","memories","letter","final"];

function goTo(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  const target=document.getElementById(id);
  target.classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
  burstHearts();
}

let noClicks=0;
const messages=[
  "Hmm... I don't think that's the right answer. 🥺",
  "Koala Baby, you might want to reconsider. 😭❤️",
  "Nice try. The NO button disagrees with you. 😂",
  "Mishi is giving you one last chance... 😌",
  "Okay okay, we both know the answer. Click YES. ❤️"
];

function noLove(){
  noClicks++;
  const msg=document.getElementById("noMessage");
  msg.textContent=messages[Math.min(noClicks-1,messages.length-1)];
  const btn=document.getElementById("noBtn");
  if(noClicks<5){
    const x=(Math.random()*120)-60;
    const y=(Math.random()*50)-25;
    btn.style.transform=`translate(${x}px,${y}px)`;
  }else{
    btn.textContent="YES ❤️";
    btn.onclick=yesLove;
    btn.style.transform="none";
  }
}

function yesLove(){
  document.getElementById("noMessage").textContent="I knew it. Come here, Koala Baby. 🥺❤️";
  setTimeout(()=>goTo("memories"),700);
  burstHearts();
}

function burstHearts(){
  for(let i=0;i<12;i++){
    const h=document.createElement("span");
    h.textContent=["♡","♥","✦","❀"][Math.floor(Math.random()*4)];
    h.style.position="fixed";
    h.style.left=(50+Math.random()*20-10)+"%";
    h.style.top=(55+Math.random()*10-5)+"%";
    h.style.zIndex=30;
    h.style.pointerEvents="none";
    h.style.color=["#e7adc7","#c8b7eb","#f5d8e5"][Math.floor(Math.random()*3)];
    h.style.fontSize=(12+Math.random()*18)+"px";
    document.body.appendChild(h);
    const dx=(Math.random()*260)-130, dy=-(100+Math.random()*250);
    h.animate([
      {transform:"translate(0,0) scale(.6)",opacity:0},
      {transform:`translate(${dx/2}px,${dy/2}px) scale(1)`,opacity:1},
      {transform:`translate(${dx}px,${dy}px) scale(.5)`,opacity:0}
    ],{duration:1000+Math.random()*600,easing:"ease-out"}).onfinish=()=>h.remove();
  }
}
