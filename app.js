const ORDER_URL="https://order.online/store/kiyla-s-korner-cove-rd-31271415";

const items=[
{id:"gold",name:"Gold Fever Chicken Cheese Fries",price:16,cat:"Kiyla's Loaded Fries",desc:"Current Most Ordered favorite.",popular:1},
{id:"buffalo",name:"Buffalo Chicken Cheese Fries",price:16,cat:"Kiyla's Loaded Fries",desc:"Loaded chicken cheese fries with buffalo flavor.",popular:2},
{id:"sweet",name:"Sweet Chili Chicken Cheese Fries",price:16,cat:"Kiyla's Loaded Fries",desc:"Sweet chili chicken cheese fries.",popular:3},
{id:"chopped",name:"Chopped Cheese",price:15,cat:"Sandwiches & wraps",desc:"Beef, cheese, mozzarella sticks, peppers, onions, lettuce, tomato, ketchup & mayo. Served with French fries.",popular:4},
{id:"baconburger",name:"Bacon Cheeseburger",price:15,cat:"Kiyla's Specialty Burgers",desc:"Served with French fries.",popular:5},
{id:"garlic",name:"NEW Garlic Parm",price:16,cat:"Kiyla's Loaded Fries",desc:"Garlic parmesan loaded fries.",popular:6},
{id:"tenders",name:"Tender & Fries",price:11,cat:"Sides",desc:"Chicken tenders served with fries.",popular:7},
{id:"bbqfries",name:"BBQ Chicken Cheese Fries",price:16,cat:"Kiyla's Loaded Fries",desc:"BBQ chicken cheese fries.",popular:8},
{id:"ranchfries",name:"Chicken Bacon Ranch Fries",price:16,cat:"Kiyla's Loaded Fries",desc:"Chicken, bacon, ranch and fries.",popular:9},
{id:"buildburger",name:"Build Your Own Burger",price:14,cat:"Kiyla's Specialty Burgers",desc:"Served with French fries. Customize it your way.",popular:10,custom:true},
{id:"macburger",name:"Mac N Cheeseburger",price:15,cat:"Kiyla's Specialty Burgers",desc:"Cheeseburger topped with mac n cheese. Served with French fries.",popular:11},
{id:"choppedling",name:"Chopped Linguica",price:15,cat:"Sandwiches & wraps",desc:"Linguica, cheese, peppers, onions, egg, ketchup & hot sauce. Served with French fries.",popular:12},
{id:"breakfast",name:"Breakfast Burger",price:16,cat:"Kiyla's Specialty Burgers",desc:"Burger topped with bacon, cheese and a fried egg. Served with French fries.",popular:13},
{id:"mozz",name:"Mozzarella Sticks",price:6,cat:"Sides",desc:"Crispy mozzarella sticks.",popular:14},
{id:"cheesefries",name:"Cheese Fries",price:6,cat:"Sides",desc:"French fries with cheese.",popular:15},
{id:"steak",name:"Steak and cheese sub",price:7,cat:"Sandwiches & wraps",desc:"Steak and cheese sub.",popular:16},
{id:"buildwrap",name:"Build Your Own Wrap",price:15,cat:"Sandwiches & wraps",desc:"Chicken, lettuce, tomato, shredded cheese, onions & choice of sauce. Served with French fries.",popular:17,custom:true},
{id:"baconcheesefries",name:"Bacon Cheese Fries",price:10,cat:"Sides",desc:"French fries with bacon and cheese.",popular:18},
{id:"fruity",name:"Fruity pebble",price:7,cat:"Milk Shakes",desc:"Fruity Pebble milk shake.",popular:19},
{id:"mac",name:"Mac N Cheese",price:5,cat:"Sides",desc:"Creamy mac n cheese.",popular:20},
{id:"texasburger",name:"Texas Burger",price:16,cat:"Kiyla's Specialty Burgers",desc:"Cheeseburger topped with BBQ sauce, bacon and crunchy onions. Served with French fries.",popular:21},
{id:"chilifries",name:"Chili Cheese Fries",price:8,cat:"Sides",desc:"Fries topped with chili and cheese.",popular:22},
{id:"cookies",name:"Cookies N Cream",price:6.5,cat:"Milk Shakes",desc:"Cookies N Cream milk shake.",popular:23},
{id:"fries",name:"French Fries",price:6,cat:"Sides",desc:"Classic seasoned fries.",popular:24},
{id:"vanilla",name:"Vanilla",price:6.5,cat:"Milk Shakes",desc:"Classic vanilla milk shake.",popular:25},
{id:"azoreanburger",name:"Azorean Burger",price:15,cat:"Kiyla's Specialty Burgers",desc:"Cheese, ketchup, mustard, relish, onions, mayo, hot sauce and potato stix. Served with French fries."},
{id:"baconblue",name:"Bacon Blue Burger",price:16,cat:"Kiyla's Specialty Burgers",desc:"Bacon and blue cheese crumble."},
{id:"loadedtaco",name:"Loaded Taco Fries",price:16,cat:"Kiyla's Loaded Fries",desc:"Loaded taco fries."},
{id:"vegandog",name:"Vegan Dog",price:4,cat:"Build Your Own Dogs",desc:"Vegan dog with customizable toppings.",custom:true},
{id:"linguicadog",name:"Linguica Dog",price:3.25,cat:"Build Your Own Dogs",desc:"Linguica served on a hot dog bun.",custom:true},
{id:"allbeef",name:"All Beef",price:2.5,cat:"Build Your Own Dogs",desc:"Beef hot dog with your choice of toppings.",custom:true},
{id:"grilled",name:"Grilled Dog",price:2.5,cat:"Build Your Own Dogs",desc:"Customizable grilled hot dog.",custom:true},
{id:"steamed",name:"Steamed Dog",price:2,cat:"Build Your Own Dogs",desc:"Steamed hot dog.",custom:true},
{id:"chiliDog",name:"Chili & Cheese Dog",price:3,cat:"Kiyla's Specialty Dogs",desc:"Chili and cheese."},
{id:"lingcheese",name:"Linguica & Cheese Dog",price:3,cat:"Kiyla's Specialty Dogs",desc:"Shredded linguica and cheese."},
{id:"blt",name:"BLT Dog",price:4,cat:"Kiyla's Specialty Dogs",desc:"Bacon, lettuce and tomato."},
{id:"azoreanDog",name:"Azorean Dog",price:3,cat:"Kiyla's Specialty Dogs",desc:"Relish, onions, ketchup, mustard, mayo, hot sauce and potato stix."},
{id:"newengland",name:"New England Dog",price:3.5,cat:"Kiyla's Specialty Dogs",desc:"Baked beans and bacon."},
{id:"buffalodog",name:"Buffalo Dog",price:3,cat:"Kiyla's Specialty Dogs",desc:"Hot sauce and blue cheese crumble."},
{id:"baconDog",name:"Bacon & Cheese Dog",price:3.5,cat:"Kiyla's Specialty Dogs",desc:"Bacon and cheese."},
{id:"texasDog",name:"Texas Dog",price:4,cat:"Kiyla's Specialty Dogs",desc:"BBQ sauce, bacon and crunchy onions."},
{id:"coney",name:"Coney Island Dog",price:3.5,cat:"Kiyla's Specialty Dogs",desc:"Coney Island sauce, mustard and onions."},
{id:"pizza",name:"Pizza Dog",price:3,cat:"Kiyla's Specialty Dogs",desc:"Pizza sauce and pizza cheese."},
{id:"macdog",name:"Mac N Cheese Dog",price:3,cat:"Kiyla's Specialty Dogs",desc:"Topped with mac n cheese."},
{id:"dorito",name:"Doritos Dog",price:3,cat:"Kiyla's Specialty Dogs",desc:"Cheese and Doritos."},
{id:"coffee",name:"Coffee",price:6.5,cat:"Milk Shakes",desc:"Coffee milk shake."},
{id:"strawberry",name:"Strawberry",price:6.5,cat:"Milk Shakes",desc:"Strawberry milk shake."},
{id:"chocolate",name:"Chocolate",price:6.5,cat:"Milk Shakes",desc:"Chocolate milk shake."},
{id:"friedoreos",name:"Fried Oreos",price:6,cat:"Desert",desc:"Fried Oreos."},
{id:"ricepudding",name:"Rice Pudding",price:3,cat:"Desert",desc:"Rice pudding."},
{id:"fountain",name:"Fountain Drink",price:3,cat:"Drinks",desc:"Cold fountain drink."},
{id:"water",name:"Bottled Water",price:2,cat:"Drinks",desc:"Cold bottled water."}
];

const categories=["Most Ordered","Sandwiches & wraps","Kiyla's Specialty Burgers","Kiyla's Loaded Fries","Kiyla's Specialty Dogs","Build Your Own Dogs","Sides","Milk Shakes","Desert","Drinks"];
const headings={"Most Ordered":"Start with the favorites.","Sandwiches & wraps":"Handheld and loaded.","Kiyla's Specialty Burgers":"Burgers, Korner style.","Kiyla's Loaded Fries":"Loaded means loaded.","Kiyla's Specialty Dogs":"The specialty lineup.","Build Your Own Dogs":"Make it yours.","Sides":"Add something extra.","Milk Shakes":"Cold and creamy.","Desert":"Something sweet.","Drinks":"Keep it cold."};

let active="Most Ordered",cart=[],current=null,selections=[];
const $=s=>document.querySelector(s), money=n=>`$${n.toFixed(2)}`;

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
      <div class="menu-item-topline"><h4>${i.name}</h4>${i.popular&&i.popular<=5?`<span class="popular-badge">${i.popular===1?"#1 MOST ORDERED":"POPULAR"}</span>`:""}</div>
      <p>${i.desc}</p>
    </div>
    <div class="menu-item-side">
      <span class="price">${money(i.price)}</span>
      <button class="add-button" data-open="${i.id}">${i.custom?"CUSTOMIZE":"ADD"} +</button>
    </div>
  </article>`).join(""):`<div class="empty">Nothing matched that search.</div>`;
 document.querySelectorAll("[data-open]").forEach(b=>b.onclick=()=>openItem(b.dataset.open));
}
function render(){renderCategories();renderMenu()}
function openItem(id){
 current=items.find(i=>i.id===id);selections=[];
 $("#dialogCategory").textContent=current.cat;$("#dialogName").textContent=current.name;$("#dialogDesc").textContent=current.desc;$("#dialogPrice").textContent=money(current.price);
 const customizable=current.custom||["Kiyla's Specialty Burgers","Kiyla's Specialty Dogs","Sandwiches & wraps"].includes(current.cat);
 $("#dialogOptions").innerHTML=customizable?`<div class="option-title">Make it yours</div><div class="option-chips">${["Cheese","Onions","Relish","Potato Stix","Crunchy Onions","Sauerkraut","Hot Sauce","Mayo","Bacon","Linguica"].map(x=>`<button class="option-chip" data-option="${x}">${x}</button>`).join("")}</div>`:"";
 document.querySelectorAll("[data-option]").forEach(b=>b.onclick=()=>{b.classList.toggle("selected");let v=b.dataset.option;if(b.classList.contains("selected"))selections.push(v);else selections=selections.filter(x=>x!==v)});
 $("#itemDialog").showModal();
}
function addCurrent(){
 if(!current)return;const sig=current.id+"|"+selections.join(",");
 let existing=cart.find(x=>x.sig===sig);if(existing)existing.qty++;else cart.push({sig,name:current.name,price:current.price,qty:1,mods:[...selections]});
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
