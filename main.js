const scrollTo=(x,y)=>{
 window.scroll({
  left: x,
  top: y,
  behavior: 'smooth' 
 });
},
Id=(e)=>document.getElementById(e),
Class=(e)=>document.getElementsByClassName(e);

//Scrolls
Id('Logo').onclick=()=>scrollTo(0,0);

//Generate button to scroll top when it is not at the top
const ToTop=document.createElement('i');
ToTop.setAttribute('id','ScrollTop');
ToTop.setAttribute('class','fa-sharp fa-solid fa-angle-up')
ToTop.onclick=()=>scrollTo(0,0);


window.onscroll=()=>{
 fromTop=document.documentElement.scrollTop || document.body.scrollTop;
 fromTop!==0&&Id('Main').appendChild(ToTop)||ToTop.remove();
}

for(i=0;i<Class('NavbarItem').length;i++){
 let name=Class('NavbarItem')[i].innerText;
 Class('NavbarItem')[i].onclick=()=>scrollTo(0,Id(`${name}Wrapper`).getBoundingClientRect().y+window.pageYOffset-100);
};

//Open Popup & set background be full screen
Array.from(Class('WeddingMethod')).forEach(v=>v.onclick=(e=>{
 e.target.closest('.WeddingMethod').classList.add('open');
 Id('WeddingMethodPopupWrapper').classList.add('open');
 Id('WeddingMethodclosebtn').classList.add('open');
}));
//Close Popup & set background be full screen
Id('WeddingMethodPopupWrapper').onclick=()=>{
 Id('WeddingMethodPopupWrapper').classList.remove('open');
 Class('WeddingMethod open')[0].classList.remove('open'); 
 Id('WeddingMethodclosebtn').classList.remove('open');
}
Id('WeddingMethodclosebtn').onclick=()=>Id('WeddingMethodPopupWrapper').click();


Id('MobileNavBtn').onclick=e=>{
 Id('Navbar').classList.add('open');
 Id('NavWrapper').style="height:100vh;width:100vw";
}
Id('NavWrapper').onclick=e=>{
 e.target.closest('Navbar')===null&&Id('Navbar').classList.remove('open');
 Id('NavWrapper').style="";
}