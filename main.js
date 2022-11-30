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

//Set up Navigation Bar Scroll function
Array.from(Class('NavbarItem')).forEach(v=>v.onclick=()=>scrollTo(0,Id(`${v.innerText}Wrapper`).getBoundingClientRect().y+window.pageYOffset-100));

//Open Popup & set background be full screen & close if clicked element is close button
Array.from(Class('WeddingMethod')).forEach(v=>v.onclick=(e=>{ 
 e.target.closest('.WeddingMethod').classList.add('open');
 Id('WeddingMethodPopupWrapper').classList.add('open'); 
 if(e.target.closest('.WeddingMethodclosebtn'))Id('WeddingMethodPopupWrapper').click();
}));
//Close Popup & set background be full screen
Id('WeddingMethodPopupWrapper').onclick=()=>{
 Class('WeddingMethod open')[0].classList.remove('open'); 
 Id('WeddingMethodPopupWrapper').classList.remove('open');
};

Id('MobileNavBtn').onclick=e=>Id('NavWrapper').classList.add('open');
Id('NavWrapper').onclick=e=>e.target.closest('Navbar')===null&&Id('NavWrapper').classList.remove('open');
