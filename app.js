const ORDER_URL="https://order.online/store/kiyla-s-korner-cove-rd-31271415";

/*
  Kiyla's Korner menu data notes:
  - Current category names, Most Ordered lineup, and current prices are based on the live Order Online/DoorDash storefront.
  - Expanded descriptions are cross-referenced from Uber Eats/Postmates, DoorDash, SinglePlatform and Kiyla's public food-menu listing.
  - The public pages do not expose the private DoorDash modifier JSON. Modifier groups below are therefore the most accurate public-source reconstruction:
    current item names/prices + published included ingredients + published hot dog topping/add-on system.
*/

const dogBasic = [
  {name:"Ketchup",price:0},{name:"Mustard",price:0},{name:"Relish",price:0},{name:"Onions",price:0},{name:"Mayo",price:0}
];

const dogSpecialtyToppings = [
  {name:"Hot Buffalo Sauce",price:.50},{name:"Cheese",price:.50},{name:"Sauerkraut",price:.50},
  {name:"Potato Stix",price:.50},{name:"Crunchy Onions",price:.50},{name:"Spicy Brown Mustard",price:.50},
  {name:"Baked Beans",price:.50},{name:"Hot Pepper Relish",price:.50},{name:"Blue Cheese Crumble",price:.50}
];

const dogMeatToppings = [
  {name:"Chili",price:.75},{name:"Bacon",price:.75},{name:"Linguica",price:.75}
];

const commonRemovals = (arr)=>arr.map(name=>({name:`No ${name}`,price:0}));
const commonSauces = [
  {name:"Ketchup",price:0},{name:"Mayo",price:0},{name:"Mustard",price:0},{name:"Hot Sauce",price:0},
  {name:"BBQ Sauce",price:0},{name:"Gold Fever Sauce",price:0},{name:"Buffalo Sauce",price:0},
  {name:"Sweet Chili Sauce",price:0},{name:"Garlic Parm Sauce",price:0},{name:"Ranch",price:0}
];

const burgerAddOns = [
  {name:"Extra Cheese",price:.50},{name:"Bacon",price:.75},{name:"Fried Egg",price:.75},
  {name:"Crunchy Onions",price:.50},{name:"Potato Stix",price:.50},{name:"Blue Cheese Crumble",price:.50}
];

const friesAddOns = [
  {name:"Extra Cheese",price:.50},{name:"Extra Chicken",price:2.00},{name:"Bacon",price:.75},
  {name:"Chili",price:.75},{name:"Linguica",price:.75},{name:"Ranch",price:0},{name:"Hot Sauce",price:0}
];

const milkshakeFlavors = [
  {name:"Coffee",price:0},{name:"Strawberry",price:0},{name:"Vanilla",price:0},
  {name:"Chocolate",price:0},{name:"Cookies N Cream",price:0},{name:"Fruity Pebble",price:.50}
];

function dogBuildGroups(){
  return [
    {name:"Basic condiments",help:"Choose any. No charge.",type:"checkbox",options:dogBasic},
    {name:"Specialty toppings",help:"+$0.50 each",type:"checkbox",options:dogSpecialtyToppings},
    {name:"Meat toppings",help:"+$0.75 each",type:"checkbox",options:dogMeatToppings}
  ];
}

function specialtyDogGroups(included, extraOptions=[]){
  return [
    {name:"Included on this dog",help:"Remove anything you do not want.",type:"checkbox",options:commonRemovals(included)},
    {name:"Add specialty toppings",help:"+$0.50 each",type:"checkbox",options:dogSpecialtyToppings},
    {name:"Add meat toppings",help:"+$0.75 each",type:"checkbox",options:[...dogMeatToppings,...extraOptions]}
  ];
}

function burgerGroups(included=[]){
  const groups = [];
  if(included.length) groups.push({name:"Included on this item",help:"Remove anything you do not want.",type:"checkbox",options:commonRemovals(included)});
  groups.push({name:"Sauces / condiments",help:"Choose any.",type:"checkbox",options:commonSauces});
  groups.push({name:"Add-ons",help:"Public menu add-on pricing reconstructed from published topping prices.",type:"checkbox",options:burgerAddOns});
  return groups;
}

function friesGroups(included=[]){
  const groups = [];
  if(included.length) groups.push({name:"Included on these fries",help:"Remove anything you do not want.",type:"checkbox",options:commonRemovals(included)});
  groups.push({name:"Add-ons / sauces",help:"Choose extras.",type:"checkbox",options:friesAddOns});
  return groups;
}

const items=[
{id:"gold",name:"Gold Fever Chicken Cheese Fries",price:16,cat:"Kiyla's Loaded Fries",desc:"Crispy fries loaded with chicken and melted cheese.",popular:1,modifiers:friesGroups(["Chicken","Cheese"])},
{id:"buffalo",name:"Buffalo Chicken Cheese Fries",price:16,cat:"Kiyla's Loaded Fries",desc:"Crispy fries loaded with spicy buffalo chicken and melted cheese.",popular:2,modifiers:friesGroups(["Chicken","Cheese","Buffalo Sauce"])},
{id:"sweet",name:"Sweet Chili Chicken Cheese Fries",price:16,cat:"Kiyla's Loaded Fries",desc:"Sweet chili chicken cheese fries.",popular:3,modifiers:friesGroups(["Chicken","Cheese","Sweet Chili Sauce"])},
{id:"chopped",name:"Chopped Cheese",price:15,cat:"Sandwiches & wraps",desc:"Beef, cheese, mozzarella sticks, peppers, onions, lettuce, tomato, ketchup & mayo. Served with French fries.",popular:4,modifiers:burgerGroups(["Beef","Cheese","Mozzarella Sticks","Peppers","Onions","Lettuce","Tomato","Ketchup","Mayo"])},
{id:"baconburger",name:"Bacon Cheeseburger",price:15,cat:"Kiyla's Specialty Burgers",desc:"Served with French fries.",popular:5,modifiers:burgerGroups(["Bacon","Cheese"])},
{id:"garlic",name:"NEW Garlic Parm",price:16,cat:"Kiyla's Loaded Fries",desc:"Garlic parmesan chicken cheese fries.",popular:6,modifiers:friesGroups(["Chicken","Cheese","Garlic Parm Sauce"])},
{id:"tenders",name:"Tender & Fries",price:11,cat:"Sides",desc:"Chicken tenders served with fries.",popular:7,modifiers:[{name:"Sauce choice",help:"Choose dipping sauces.",type:"checkbox",options:commonSauces}]},
{id:"bbqfries",name:"BBQ Chicken Cheese Fries",price:16,cat:"Kiyla's Loaded Fries",desc:"BBQ chicken cheese fries.",popular:8,modifiers:friesGroups(["Chicken","Cheese","BBQ Sauce"])},
{id:"ranchfries",name:"Chicken Bacon Ranch Fries",price:16,cat:"Kiyla's Loaded Fries",desc:"Chicken, bacon, ranch and fries.",popular:9,modifiers:friesGroups(["Chicken","Bacon","Ranch","Cheese"])},
{id:"buildburger",name:"Build Your Own Burger",price:14,cat:"Kiyla's Specialty Burgers",desc:"Served with French fries. Customize it your way.",popular:10,custom:true,modifiers:burgerGroups([])},
{id:"macburger",name:"Mac N Cheeseburger",price:15,cat:"Kiyla's Specialty Burgers",desc:"Cheeseburger topped with mac n cheese. Served with French fries.",popular:11,modifiers:burgerGroups(["Cheese","Mac N Cheese"])},
{id:"choppedling",name:"Chopped Linguica",price:15,cat:"Sandwiches & wraps",desc:"Linguica, cheese, peppers, onions, egg, ketchup & hot sauce. Served with French fries.",popular:12,modifiers:burgerGroups(["Linguica","Cheese","Peppers","Onions","Egg","Ketchup","Hot Sauce"])},
{id:"breakfast",name:"Breakfast Burger",price:16,cat:"Kiyla's Specialty Burgers",desc:"Burger topped with bacon, cheese, and a fried egg. Served with French fries.",popular:13,modifiers:burgerGroups(["Bacon","Cheese","Fried Egg"])},
{id:"mozz",name:"Mozzarella Sticks",price:6,cat:"Sides",desc:"Crispy mozzarella sticks.",popular:14,modifiers:[{name:"Sauce choice",help:"Choose dipping sauces.",type:"checkbox",options:[{name:"Marinara",price:0},{name:"Ranch",price:0},{name:"Hot Sauce",price:0}]}]},
{id:"cheesefries",name:"Cheese Fries",price:6,cat:"Sides",desc:"French fries with cheese.",popular:15,modifiers:friesGroups(["Cheese"])},
{id:"steak",name:"Steak and cheese sub",price:7,cat:"Sandwiches & wraps",desc:"Steak and cheese sub.",popular:16,modifiers:burgerGroups(["Steak","Cheese"])},
{id:"buildwrap",name:"Build Your Own Wrap",price:15,cat:"Sandwiches & wraps",desc:"Chicken, lettuce, tomato, shredded cheese, onions & your choice of sauce. Served with French fries.",popular:17,custom:true,modifiers:[
  {name:"Included on this wrap",help:"Remove anything you do not want.",type:"checkbox",options:commonRemovals(["Chicken","Lettuce","Tomato","Shredded Cheese","Onions"])},
  {name:"Sauce choice",help:"Choose your sauce.",type:"radio",required:false,options:commonSauces},
  {name:"Add-ons",help:"Choose extras.",type:"checkbox",options:burgerAddOns}
]},
{id:"baconcheesefries",name:"Bacon Cheese Fries",price:10,cat:"Sides",desc:"French fries with bacon and cheese.",popular:18,modifiers:friesGroups(["Bacon","Cheese"])},
{id:"fruity",name:"Fruity pebble",price:7,cat:"Milk Shakes",desc:"Fruity Pebble milk shake.",popular:19,modifiers:[{name:"Shake flavor",help:"Current item is Fruity Pebble.",type:"radio",options:milkshakeFlavors}]},
{id:"mac",name:"Mac N Cheese",price:5,cat:"Sides",desc:"Creamy mac n cheese.",popular:20,modifiers:[{name:"Add-ons",help:"Choose extras.",type:"checkbox",options:[{name:"Bacon",price:.75},{name:"Hot Sauce",price:0},{name:"Extra Cheese",price:.50}]}]},
{id:"texasburger",name:"Texas Burger",price:16,cat:"Kiyla's Specialty Burgers",desc:"Cheeseburger topped with BBQ sauce, bacon, and crunchy onions. Served with French fries.",popular:21,modifiers:burgerGroups(["Cheese","BBQ Sauce","Bacon","Crunchy Onions"])},
{id:"chilifries",name:"Chili Cheese Fries",price:8,cat:"Sides",desc:"Fries topped with chili and cheese.",popular:22,modifiers:friesGroups(["Chili","Cheese"])},
{id:"cookies",name:"Cookies N Cream",price:6.5,cat:"Milk Shakes",desc:"Cookies N Cream milk shake.",popular:23,modifiers:[{name:"Shake flavor",help:"Current item is Cookies N Cream.",type:"radio",options:milkshakeFlavors}]},
{id:"fries",name:"French Fries",price:6,cat:"Sides",desc:"Classic seasoned fries.",popular:24,modifiers:[{name:"Add-ons / sauces",help:"Choose extras.",type:"checkbox",options:friesAddOns}]},
{id:"vanilla",name:"Vanilla",price:6.5,cat:"Milk Shakes",desc:"Classic vanilla milk shake.",popular:25,modifiers:[{name:"Shake flavor",help:"Current item is Vanilla.",type:"radio",options:milkshakeFlavors}]},

{id:"azoreanburger",name:"Azorean Burger",price:15,cat:"Kiyla's Specialty Burgers",desc:"Cheese, ketchup, mustard, relish, onions, mayo, hot sauce, and potato stix. Served with French fries.",modifiers:burgerGroups(["Cheese","Ketchup","Mustard","Relish","Onions","Mayo","Hot Sauce","Potato Stix"])},
{id:"baconblue",name:"Bacon Blue Burger",price:16,cat:"Kiyla's Specialty Burgers",desc:"Bacon and blue cheese crumble.",modifiers:burgerGroups(["Bacon","Blue Cheese Crumble"])},
{id:"loadedtaco",name:"Loaded Taco Fries",price:16,cat:"Kiyla's Loaded Fries",desc:"Loaded taco fries.",modifiers:friesGroups(["Taco Toppings","Cheese"])},
{id:"coffee",name:"Coffee",price:6.5,cat:"Milk Shakes",desc:"Coffee milk shake.",modifiers:[{name:"Shake flavor",help:"Current item is Coffee.",type:"radio",options:milkshakeFlavors}]},
{id:"strawberry",name:"Strawberry",price:6.5,cat:"Milk Shakes",desc:"Strawberry milk shake.",modifiers:[{name:"Shake flavor",help:"Current item is Strawberry.",type:"radio",options:milkshakeFlavors}]},
{id:"chocolate",name:"Chocolate",price:6.5,cat:"Milk Shakes",desc:"Chocolate milk shake.",modifiers:[{name:"Shake flavor",help:"Current item is Chocolate.",type:"radio",options:milkshakeFlavors}]},
{id:"friedoreos",name:"Fried Oreos",price:6,cat:"Desert",desc:"Fried Oreos.",modifiers:[]},
{id:"ricepudding",name:"Rice Pudding",price:3,cat:"Desert",desc:"Rice pudding.",modifiers:[]},
{id:"fountain",name:"Fountain Drink",price:3,cat:"Drinks",desc:"Cold fountain drink.",modifiers:[{name:"Drink notes",help:"Add a note if needed.",type:"checkbox",options:[{name:"No ice",price:0},{name:"Light ice",price:0}]}]},
{id:"water",name:"Bottled Water",price:2,cat:"Drinks",desc:"Cold bottled water.",modifiers:[]},

{id:"vegandog",name:"Vegan Dog",price:4,cat:"Build Your Own Dogs",desc:"Vegan dog with customizable toppings.",custom:true,modifiers:dogBuildGroups()},
{id:"linguicadog",name:"Linguica Dog",price:3.25,cat:"Build Your Own Dogs",desc:"Savoury sausage served on a hot dog bun.",custom:true,modifiers:dogBuildGroups()},
{id:"allbeef",name:"All Beef",price:2.5,cat:"Build Your Own Dogs",desc:"Beef hot dog with your choice of toppings.",custom:true,modifiers:dogBuildGroups()},
{id:"grilled",name:"Grilled Dog",price:2.5,cat:"Build Your Own Dogs",desc:"Customizable hot dog with your choice of toppings.",custom:true,modifiers:dogBuildGroups()},
{id:"steamed",name:"Steamed Dog",price:2,cat:"Build Your Own Dogs",desc:"Steamed hot dog.",custom:true,modifiers:dogBuildGroups()},

{id:"chiliDog",name:"Chili N Cheese Dog",price:3,cat:"Kiyla's Specialty Dogs",desc:"Chili and cheese.",modifiers:specialtyDogGroups(["Chili","Cheese"])},
{id:"coney",name:"Coney Island Hot Dog",price:3.5,cat:"Kiyla's Specialty Dogs",desc:"Coney Island sauce, mustard and onions.",modifiers:specialtyDogGroups(["Coney Island Sauce","Mustard","Onions"])},
{id:"texasDog",name:"Texas Dog",price:4,cat:"Kiyla's Specialty Dogs",desc:"BBQ sauce, bacon and crunchy onions.",modifiers:specialtyDogGroups(["BBQ Sauce","Bacon","Crunchy Onions"])},
{id:"azoreanDog",name:"Azorean Style Hot Dog",price:3,cat:"Kiyla's Specialty Dogs",desc:"Relish, onions, ketchup, mustard, mayo, hot sauce and potato stix.",modifiers:specialtyDogGroups(["Relish","Onions","Ketchup","Mustard","Mayo","Hot Sauce","Potato Stix"])},
{id:"blt",name:"BLT Dog",price:4,cat:"Kiyla's Specialty Dogs",desc:"Bacon, lettuce and tomato.",modifiers:specialtyDogGroups(["Bacon","Lettuce","Tomato"])},
{id:"newengland",name:"New England Dog",price:3.5,cat:"Kiyla's Specialty Dogs",desc:"Baked beans and bacon.",modifiers:specialtyDogGroups(["Baked Beans","Bacon"])},
{id:"buffalodog",name:"Buffalo Dog",price:3,cat:"Kiyla's Specialty Dogs",desc:"Hot sauce and blue cheese crumble.",modifiers:specialtyDogGroups(["Hot Sauce","Blue Cheese Crumble"])},
{id:"baconDog",name:"Bacon & Cheese Dog",price:3.5,cat:"Kiyla's Specialty Dogs",desc:"Bacon and cheese.",modifiers:specialtyDogGroups(["Bacon","Cheese"])},
{id:"pizza",name:"Pizza Dog",price:3,cat:"Kiyla's Specialty Dogs",desc:"Pizza sauce and pizza cheese.",modifiers:specialtyDogGroups(["Pizza Sauce","Pizza Cheese"],[{name:"Pepperoni",price:.75}])},
{id:"macdog",name:"Mac N Cheese Dog",price:3,cat:"Kiyla's Specialty Dogs",desc:"Topped with mac n cheese.",modifiers:specialtyDogGroups(["Mac N Cheese"])},
{id:"dorito",name:"Doritos Dog",price:3,cat:"Kiyla's Specialty Dogs",desc:"Cheese and Doritos.",modifiers:specialtyDogGroups(["Cheese","Doritos"])}
];

const categories=["Most Ordered","Sandwiches & wraps","Kiyla's Specialty Burgers","Kiyla's Loaded Fries","Kiyla's Specialty Dogs","Build Your Own Dogs","Sides","Milk Shakes","Desert","Drinks"];
const headings={"Most Ordered":"Start with the favorites.","Sandwiches & wraps":"Handheld and loaded.","Kiyla's Specialty Burgers":"Burgers, Korner style.","Kiyla's Loaded Fries":"Loaded means loaded.","Kiyla's Specialty Dogs":"The specialty lineup.","Build Your Own Dogs":"Make it yours.","Sides":"Add something extra.","Milk Shakes":"Cold and creamy.","Desert":"Something sweet.","Drinks":"Keep it cold."};

let active="Most Ordered",cart=[],current=null,selections=[];
const $=s=>document.querySelector(s), money=n=>`$${Number(n).toFixed(2)}`;

function listItems(){
 const q=$("#menuSearch").value.trim().toLowerCase();
 let list=active==="Most Ordered"?items.filter(i=>i.popular).sort((a,b)=>a.popular-b.popular):items.filter(i=>i.cat===active);
 if(q) list=items.filter(i=>(i.name+" "+i.cat+" "+i.desc).toLowerCase().includes(q));
 return list;
}
function renderCategories(){
 $("#categoryButtons").innerHTML=categories.map(c=>`<button class="${c===active?"active":""}" data-cat="${c}">${c}</button>`).join("");
 document.querySelectorAll("[data-cat]").forEach(b=>b.onclick=()=>{active=b.dataset.cat;$("#menuSearch").value="";render()});
}
function renderMenu(){
 const list=listItems();
 $("#categoryEyebrow").textContent=active.toUpperCase();
 $("#categoryHeading").textContent=$("#menuSearch").value?"Search results.":headings[active];
 $("#menuList").innerHTML=list.length?list.map(i=>`
  <article class="menu-item">
    <div class="menu-item-main">
      <div class="menu-item-topline"><h4>${i.name}</h4>${i.popular&&i.popular<=5?`<span class="popular-badge">${i.popular===1?"#1 MOST ORDERED":"POPULAR"}</span>`:""}${i.modifiers&&i.modifiers.length?`<span class="custom-badge">OPTIONS</span>`:""}</div>
      <p>${i.desc}</p>
    </div>
    <div class="menu-item-side">
      <span class="price">${money(i.price)}</span>
      <button class="add-button" data-open="${i.id}">${i.modifiers&&i.modifiers.length?"CUSTOMIZE":"ADD"} +</button>
    </div>
  </article>`).join(""):`<div class="empty">Nothing matched that search.</div>`;
 document.querySelectorAll("[data-open]").forEach(b=>b.onclick=()=>openItem(b.dataset.open));
}
function render(){renderCategories();renderMenu()}

function optionLabel(opt){
  const p = Number(opt.price||0);
  return `${opt.name}${p>0?` +${money(p)}`:""}`;
}

function openItem(id){
 current=items.find(i=>i.id===id);selections=[];
 $("#dialogCategory").textContent=current.cat;$("#dialogName").textContent=current.name;$("#dialogDesc").textContent=current.desc;
 $("#dialogPrice").textContent=money(current.price);
 const groups = current.modifiers || [];
 $("#dialogOptions").innerHTML=groups.length?groups.map((g,gi)=>`
  <div class="option-title">${g.name}${g.required?` <span class="required">Required</span>`:""}</div>
  ${g.help?`<p class="option-help">${g.help}</p>`:""}
  <div class="option-chips" data-group="${gi}" data-type="${g.type||"checkbox"}">
    ${(g.options||[]).map((opt,oi)=>`<button class="option-chip" data-group="${gi}" data-option="${oi}" data-type="${g.type||"checkbox"}">${optionLabel(opt)}</button>`).join("")}
  </div>
 `).join(""):`<p class="option-help">No listed modifications for this item.</p>`;
 document.querySelectorAll("[data-option]").forEach(b=>b.onclick=()=>toggleOption(b));
 updateDialogPrice();
 $("#itemDialog").showModal();
}

function toggleOption(btn){
  const gi=Number(btn.dataset.group), oi=Number(btn.dataset.option), type=btn.dataset.type;
  const group=current.modifiers[gi], opt=group.options[oi];
  if(type==="radio"){
    document.querySelectorAll(`.option-chip[data-group="${gi}"]`).forEach(x=>x.classList.remove("selected"));
    selections=selections.filter(s=>s.group!==gi);
    btn.classList.add("selected");
    selections.push({group:gi,option:oi,label:opt.name,price:Number(opt.price||0)});
  } else {
    const selected=btn.classList.toggle("selected");
    if(selected) selections.push({group:gi,option:oi,label:opt.name,price:Number(opt.price||0)});
    else selections=selections.filter(s=>!(s.group===gi&&s.option===oi));
  }
  updateDialogPrice();
}
function activeTotal(){
  return current ? current.price + selections.reduce((sum,s)=>sum+Number(s.price||0),0) : 0;
}
function updateDialogPrice(){
  $("#dialogPrice").textContent=money(activeTotal());
}
function addCurrent(){
 if(!current)return;
 const mods=selections.map(s=>s.price>0?`${s.label} +${money(s.price)}`:s.label);
 const price=activeTotal();
 const sig=current.id+"|"+mods.join(",");
 let existing=cart.find(x=>x.sig===sig);
 if(existing)existing.qty++;else cart.push({sig,name:current.name,price,qty:1,mods});
 $("#itemDialog").close();renderCart();
}
function renderCart(){
 const count=cart.reduce((a,b)=>a+b.qty,0),total=cart.reduce((a,b)=>a+b.qty*b.price,0);
 $("#cartCount").textContent=count;$("#mobileCount").textContent=`${count} ${count===1?"item":"items"}`;$("#subtotal").textContent=money(total);$("#mobileTotal").textContent=money(total);
 $("#cartItems").innerHTML=cart.length?cart.map((x,i)=>`<div class="cart-line"><div><strong>${x.name}</strong>${x.mods.length?`<small>${x.mods.join(", ")}</small>`:""}</div><div class="qty"><button data-minus="${i}">−</button><span>${x.qty}</span><button data-plus="${i}">+</button></div></div>`).join(""):`<div class="empty">Nothing here yet.<br>Pick something from the menu.</div>`;
 document.querySelectorAll("[data-minus]").forEach(b=>b.onclick=()=>change(+b.dataset.minus,-1));document.querySelectorAll("[data-plus]").forEach(b=>b.onclick=()=>change(+b.dataset.plus,1));
}
function change(i,d){cart[i].qty+=d;if(cart[i].qty<=0)cart.splice(i,1);renderCart()}
$("#menuSearch").oninput=renderMenu;$("#closeDialog").onclick=()=>$("#itemDialog").close();$("#dialogAdd").onclick=addCurrent;
document.querySelectorAll("[data-scroll-menu]").forEach(b=>b.onclick=()=>$("#menu").scrollIntoView({behavior:"smooth"}));
document.querySelectorAll(".mode-toggle button").forEach(b=>b.onclick=()=>{document.querySelectorAll(".mode-toggle button").forEach(x=>x.classList.remove("active"));b.classList.add("active");$("#cartMode").textContent=`${b.dataset.mode==="pickup"?"Pickup":"Delivery"} · New Bedford`});
$("#checkout").onclick=()=>window.open(ORDER_URL,"_blank");$("#mobileCheckout").onclick=()=>window.open(ORDER_URL,"_blank");
render();renderCart();
