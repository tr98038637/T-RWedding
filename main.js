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

//Generate Navbar
['Message','Schedule','Menu','Photos'].forEach(v=>{
 let navbtn=document.createElement('p');
 navbtn.setAttribute('class','NavbarItem');
 navbtn.innerText=v;
 navbtn.onclick=()=>scrollTo(0,Id(`${v}Wrapper`).getBoundingClientRect().y+window.pageYOffset-100);
 Id('Navbar').appendChild(navbtn);
});

//Generate WeddingMethods
const wdgmthd={
 'Christ':{
  'Popup':"BlideGroom",
  'Title':"キリスト教式",
  'Dsc':"神父または牧師の前で愛を誓います",
  'Popupdsc':`通常結婚式と聞いてイメージするのは　<br class="mobile">大抵が「教会式」と呼ばれるものです<br>
  ここまで日本で定着したのは　<br class="mobile">1960年代の芸能人や<br class="mobile">人気アイドルの影響です`
 },
 'Civil':{
  'Popup':"gentleman",
  'Title':"人前式",
  'Dsc':"皆様の前で愛を誓います",
  'Popupdsc':`会場移動がなく内容制限も少ないため　<br class="mobile"> 皆様と家族になるための式には<br>
  この方法が私たちにピッタリだと思い<br class="mobile">この方法を選びました`
 },
 'Shinto':{
  'Popup':"ShintoWedding",
  'Title':"神道式",
  'Dsc':"八百万の神の前で愛を誓います",
  'Popupdsc':`和装での婚姻はこちらの方法が主です<br>
  現在の形での神道式は　<br class="mobile">大正天皇のご成婚が<br class="mobile">最初といわれています`
 }
};
Object.keys(wdgmthd).forEach(v=>{
 Id('WeddingMethods').innerHTML+=`<div class="WeddingMethod">
 <button class="WeddingMethodclosebtn">✖</button>
 <div class="WeddingMethodImgs">
   ${v==="Civil"?`<img class="WeddingMethodImg Popup" src="./img/lady.png">`:""}
   <img class="WeddingMethodImg" src="./img/${v}.png">
   <img class="WeddingMethodImg Popup" src="./img/${wdgmthd[v].Popup}.png">
 </div>
<h2>${wdgmthd[v].Title}</h2>
<p>${wdgmthd[v].Dsc}</p>
<p class="WeddingMethodDsc">${wdgmthd[v].Popupdsc}</p>
</div>`
});

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

//Generate FoodMenus & DrinkMenus
const FoodMenus=[
 {
  Order:"アントレ[前菜1] ~ Entrées ~",
  Img:"GuimauveAuCrevette",
  Jp:"ボタン海老のマシュマロ",
  Alp:"Guimauve au crevette",
  Dsc:`白ワインとゆずでできたマシュマロにボタン海老を包み<br>ピスタチオとエディブルフラワー（食用花）を添えた一品<br>
  刺さっているピックを使って手でもいただけます`
 },
{
 Order:"アペリティフ[前菜2] ~ Apéritifs ~",
 Img:"MarbreAuFoieGrasEtPoissonSauceAuxOlivesEtRoquette",
 Jp:"フォアグラと魚介のマルブレ<br>オリーブとルッコラのソース",
 Alp:"Marbre au foie gras et Poisson, <br>Sauce aux olives et roquette",
 Dsc:`フォアグラと魚介を大理石に見立てたものです<br>フォアグラのパート　魚介のパートで2度楽しめます<br>
 ソースありなしでも味の変化を楽しめます`
},
{
 Order:"スープ ~ Soupe ~",
 Img:"SoupeDePoissonALaCappuccino",
 Jp:"海の幸のスープ カプチーノ風",
 Alp:"Soupe de poisson à la cappuccino",
 Dsc:`魚介の旨味がぎゅっと凝縮された一品<br>一気に飲んでしまうのがもったいないくらいです<br>
 スプーンで大事に飲むのもよし　<br class="mobile">カプチーノのように飲んでもよし<br>お好みに合わせてお楽しみください`
},
{
 Order:"海鮮 ~ Fruits de mer ~",
 Img:"FricasseeDeHommard",
 Jp:"オマール海老のフリカッセ",
 Alp:"Fricassée de hommard",
 Dsc:`オマール海老ブイヨンをたっぷり使用した煮込み料理です<br>春巻きの皮を揚げた器がサクサクなので<br>
 味も食感もとってもお楽しみいただけます`
},
{
 Order:"お肉料理 ~ Viande ~",
 Img:"FiletDeBoeufRotiAuBeurreDeTruffe",
 Jp:"牛フィレ肉のトリュフバター焼き<br>野菜のブーケを添えて",
 Alp:"Filet de bœuf rôti au beurre de truffe",
 Dsc:`柔らかなお肉にトリュフの香りが効いた<br class="mobile">とっても美味しい一品です`
},
{
 Order:"デザート ~ Dessert ~",
 Img:"MousseFromageALaChantillyFruitsSorbetAuxFramboises",
 Jp:`フロマージュのムース <br class="mobile">シャンティイ フリュイ<br>フランボワーズのソルベ`,
 Alp:"Mousse fromage à la chantilly fruits, <br>sorbet aux framboises",
 Dsc:`コースの最後はチーズのムースと<br class="mobile">フランボワーズのシャーベットです<br>
 ムースにはフランス シャンティ城が<br class="mobile">起源のクリームが乗っています<br>
 おいしくてすぐ食べ終わってしまうかも・・・？`
},
{
 Order:`パン・食後のお飲み物 <br class="mobile">~ Pain et café ~`,
 Img:"PainDeLaMaisonKayserBeurreDEchireEtCafe",
 Jp:`メゾンカイザーのパン & エシレバター <br> コーヒー`,
 Alp:"Pain de la Maison Kayser,<br> Beurre d'Echire et café",
 Dsc:`天然酵母を使用した焼き立てパンです。<br>
 料理と合わせて食べると幸せな気持ちになれます<br>
 三つ星レストランでも愛用されている<br>
 フランス中西部エシレ村で作られる<br>エシレバターをつけてお召し上がりください`
}
]
FoodMenus.forEach(v=>{
 Id('FoodMenus').innerHTML+=`<div class="Menu">
   <h2 class="MenuOrder">${v.Order}</h2>
   <img src="./img/${v.Img}.jpg">
   <div class="MenuNames">
     <h3 class="MenuNameJp">${v.Jp}</h3>
     <h4 class="MenuNameAlp">${v.Alp}</h4>
   </div>
   <p class="MenuDsc">${v.Dsc}</p>
 </div>`
});

DrinkMenus=[
 {
  Order:"ビール ~ Beer ~",
  Names:[{jp:"アサヒスーパードライ",alp:"Asahi Super Dry"},{jp:"アサヒドライゼロ (0.0%)",alp:"Asahi Dry Zero"}]
 }, 
 {
  Order:"ワイン ~ Wine ~",
  Names:[{jp:"シャトー ピレ ブラン（白）",alp:"Château pilet blanc"},{jp:"ラ クロワザード レゼルヴ カベルネ・シラー (赤)",alp:"La Croisade Réserve Cabernet-Syrah"}]
 },
 {
  Order:"ウィスキー ~ Wisky ~",
  Names:[{jp:"ネヴィス・デュー",alp:"Nevis Dew"}],
  Dsc:"[ロック・ストレート・水割り・ソーダ割り]"
 },
 {
  Order:"カクテル ~ Cocktails ~",
  Names:[{jp:"ジントニック",alp:"Gin and Tonic"},{jp:"カシスオレンジ",alp:"Cassis Orange"},{jp:"スクリュードライバー",alp:"Screw Driver"},{jp:"カンパリ・ソーダ",alp:"Campari and Soda"}]
 },
 {
  Order:"日本酒 ~ Japanese Sake ~",
  Names:[{jp:"松竹梅",alp:"ShoChikuBai"},{jp:"玉乃光（吟醸）",alp:"Tama No Hikari[Ginjo]"}]
 },
 {
  Order:"焼酎 ~ Shochu ~",
  Names:[{jp:"白水（麦）",alp:"Hakusui[Barley]"},{jp:"桜島（芋）",alp:"Sakurajima[Potato]"}]
 },
 {
  Order:"ソフトドリンク ~ Soft Drinks ~",
  Names:[{jp:"お茶 : ウーロン茶",alp:"Oolong Tea"},{jp:`ジュース：オレンジジュース、アップルジュース<br>
  グレープフルーツジュース、トマトジュース`,alp:`Orange juice,Apple Juice,<br>
  Grapefruit Juice, Tomato Juice`},{jp:`ソーダ : コカ・コーラ、ジンジャエール`,alp:`Coca Cola, Ginger Ale`}]
 }
];
DrinkMenus.forEach(v=>{
 Id('DrinkMenus').innerHTML+=`<div class="Menu">
   <h2 class="MenuOrder">${v.Order}</h2>
   <div class="MenuNames">
    ${v.Names.map(n=>`<h3 class="MenuNameJp">${n.jp}</h3><h4 class="MenuNameAlp">${n.alp}</h4>`)}
   </div>
   ${v.Dsc?`<p class="MenuDsc">${v.Dsc}</p>`:''}
 </div>`
});

Id('MobileNavBtn').onclick=e=>Id('NavWrapper').classList.add('open');
Id('NavWrapper').onclick=e=>e.target.closest('Navbar')===null&&Id('NavWrapper').classList.remove('open');
['Food','Drink'].forEach((v,i)=>Id(`${v}Btn`).onclick=()=>{
 Id(`${v}Menu`).classList.add('active');
 Id(`${i%2===0?"Drink":"Food"}Menu`).classList.remove('active');
})