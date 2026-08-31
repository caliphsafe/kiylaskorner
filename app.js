const ORDER_URL = "https://order.online/store/kiyla-s-korner-cove-rd-31271415";

const PHOTO = {
  korner1: "https://kiylas-korner.food-menu.net/media/1-kiylas-korner.jpg",
  korner2: "https://kiylas-korner.food-menu.net/media/2-kiylas-korner.jpg",
  korner3: "https://kiylas-korner.food-menu.net/media/3-kiylas-korner.jpg",
  korner4: "https://kiylas-korner.food-menu.net/media/4-kiylas-korner.jpg",
  korner5: "https://kiylas-korner.food-menu.net/media/5-kiylas-korner.jpg"
};

const items = [
  {id:"gold-fever",name:"Gold Fever Chicken Cheese Fries",price:16,cat:"Kiyla's Loaded Fries",desc:"One of the current most-ordered Kiyla's items.",popular:1,img:PHOTO.korner4,pos:"88% center"},
  {id:"buffalo-fries",name:"Buffalo Chicken Cheese Fries",price:16,cat:"Kiyla's Loaded Fries",desc:"Loaded chicken cheese fries with buffalo flavor.",popular:2,img:PHOTO.korner2,pos:"76% center"},
  {id:"sweet-chili",name:"Sweet Chili Chicken Cheese Fries",price:16,cat:"Kiyla's Loaded Fries",desc:"Sweet chili chicken cheese fries.",popular:3,img:PHOTO.korner2,pos:"72% center"},
  {id:"chopped-cheese",name:"Chopped Cheese",price:15,cat:"Sandwiches & wraps",desc:"Beef, cheese, mozzarella sticks, peppers, onions, lettuce, tomato, ketchup & mayo. Served with French fries.",popular:4,img:PHOTO.korner2,pos:"10% center"},
  {id:"bacon-cheeseburger",name:"Bacon Cheeseburger",price:15,cat:"Kiyla's Specialty Burgers",desc:"Served with French fries.",popular:5,img:PHOTO.korner2,pos:"48% center"},
  {id:"garlic-parm",name:"NEW Garlic Parm",price:16,cat:"Kiyla's Loaded Fries",desc:"Current menu favorite listed as NEW Garlic Parm.",popular:6,img:PHOTO.korner5,pos:"3% center"},
  {id:"tender-fries",name:"Tender & Fries",price:11,cat:"Sides",desc:"Chicken tenders served with fries.",popular:7,img:PHOTO.korner4,pos:"88% center"},
  {id:"bbq-fries",name:"BBQ Chicken Cheese Fries",price:16,cat:"Kiyla's Loaded Fries",desc:"BBQ chicken cheese fries.",popular:8,img:PHOTO.korner5,pos:"3% center"},
  {id:"ranch-fries",name:"Chicken Bacon Ranch Fries",price:16,cat:"Kiyla's Loaded Fries",desc:"Chicken, bacon, ranch and fries.",popular:9,img:PHOTO.korner5,pos:"3% center"},
  {id:"build-burger",name:"Build Your Own Burger",price:14,cat:"Kiyla's Specialty Burgers",desc:"Served with French fries. Customize it your way.",popular:10,img:PHOTO.korner2,pos:"48% center",custom:true},
  {id:"mac-burger",name:"Mac N Cheeseburger",price:15,cat:"Kiyla's Specialty Burgers",desc:"Cheeseburger topped with mac n cheese. Served with French fries.",popular:11,img:PHOTO.korner2,pos:"86% center"},
  {id:"chopped-linguica",name:"Chopped Linguica",price:15,cat:"Sandwiches & wraps",desc:"Linguica, cheese, peppers, onions, egg, ketchup & hot sauce. Served with French fries.",popular:12,img:PHOTO.korner2,pos:"56% center"},
  {id:"breakfast-burger",name:"Breakfast Burger",price:16,cat:"Kiyla's Specialty Burgers",desc:"Burger topped with bacon, cheese and a fried egg. Served with French fries.",popular:13,img:PHOTO.korner2,pos:"50% center"},
  {id:"build-wrap",name:"Build Your Own Wrap",price:15,cat:"Sandwiches & wraps",desc:"Chicken, lettuce, tomato, shredded cheese, onions & your choice of sauce. Served with French fries.",popular:14,img:PHOTO.korner2,pos:"8% center",custom:true},
  {id:"steak-cheese",name:"Steak and cheese sub",price:7,cat:"Sandwiches & wraps",desc:"Steak and cheese sub.",img:PHOTO.korner2,pos:"12% center"},
  {id:"texas-burger",name:"Texas Burger",price:16,cat:"Kiyla's Specialty Burgers",desc:"Cheeseburger topped with BBQ sauce, bacon and crunchy onions. Served with French fries.",img:PHOTO.korner2,pos:"50% center"},
  {id:"azorean-burger",name:"Azorean Burger",price:15,cat:"Kiyla's Specialty Burgers",desc:"Cheese, ketchup, mustard, relish, onions, mayo, hot sauce and potato stix. Served with French fries.",img:PHOTO.korner2,pos:"55% center"},
  {id:"bacon-blue",name:"Bacon Blue Burger",price:16,cat:"Kiyla's Specialty Burgers",desc:"Bacon and blue cheese crumble.",img:PHOTO.korner2,pos:"50% center"},
  {id:"loaded-taco",name:"Loaded Taco Fries",price:16,cat:"Kiyla's Loaded Fries",desc:"Current loaded fries menu option.",img:PHOTO.korner5,pos:"4% center"},
  {id:"vegan-dog",name:"Vegan Dog",price:4,cat:"Build Your Own Dogs",desc:"Vegan dog with customizable toppings.",img:PHOTO.korner4,pos:"50% center",custom:true},
  {id:"linguica-dog",name:"Linguica Dog",price:3.25,cat:"Build Your Own Dogs",desc:"Savory linguica served on a hot dog bun.",img:PHOTO.korner2,pos:"72% center",custom:true},
  {id:"all-beef",name:"All Beef",price:2.5,cat:"Build Your Own Dogs",desc:"Beef hot dog with your choice of toppings.",img:PHOTO.korner2,pos:"86% center",custom:true},
  {id:"grilled-dog",name:"Grilled Dog",price:2.5,cat:"Build Your Own Dogs",desc:"Customizable grilled hot dog with your choice of toppings.",img:PHOTO.korner4,pos:"50% center",custom:true},
  {id:"steamed-dog",name:"Steamed Dog",price:2,cat:"Build Your Own Dogs",desc:"Steamed hot dog.",img:PHOTO.korner4,pos:"50% center",custom:true},
  {id:"chili-cheese-dog",name:"Chili & Cheese Dog",price:3,cat:"Kiyla's Specialty Dogs",desc:"Chili and cheese.",img:PHOTO.korner2,pos:"72% center"},
  {id:"linguica-cheese-dog",name:"Linguica & Cheese Dog",price:3,cat:"Kiyla's Specialty Dogs",desc:"Shredded linguica and cheese.",img:PHOTO.korner2,pos:"72% center"},
  {id:"blt-dog",name:"BLT Dog",price:4,cat:"Kiyla's Specialty Dogs",desc:"Bacon, lettuce and tomato.",img:PHOTO.korner2,pos:"12% center"},
  {id:"azorean-dog",name:"Azorean Dog",price:3,cat:"Kiyla's Specialty Dogs",desc:"Relish, onions, ketchup, mustard, mayo, hot sauce and potato stix.",img:PHOTO.korner2,pos:"72% center"},
  {id:"new-england-dog",name:"New England Dog",price:3.5,cat:"Kiyla's Specialty Dogs",desc:"Baked beans and bacon.",img:PHOTO.korner2,pos:"72% center"},
  {id:"buffalo-dog",name:"Buffalo Dog",price:3,cat:"Kiyla's Specialty Dogs",desc:"Hot sauce and blue cheese crumble.",img:PHOTO.korner2,pos:"72% center"},
  {id:"bacon-cheese-dog",name:"Bacon & Cheese Dog",price:3.5,cat:"Kiyla's Specialty Dogs",desc:"Bacon and cheese.",img:PHOTO.korner2,pos:"72% center"},
  {id:"texas-dog",name:"Texas Dog",price:4,cat:"Kiyla's Specialty Dogs",desc:"BBQ sauce, bacon and crunchy onions.",img:PHOTO.korner2,pos:"72% center"},
  {id:"coney-island",name:"Coney Island Dog",price:3.5,cat:"Kiyla's Specialty Dogs",desc:"Coney Island sauce, mustard and onions.",img:PHOTO.korner2,pos:"72% center"},
  {id:"pizza-dog",name:"Pizza Dog",price:3,cat:"Kiyla's Specialty Dogs",desc:"Pizza sauce and pizza cheese.",img:PHOTO.korner2,pos:"72% center"},
  {id:"mac-dog",name:"Mac N Cheese Dog",price:3,cat:"Kiyla's Specialty Dogs",desc:"Topped with mac n cheese.",img:PHOTO.korner4,pos:"50% center"},
  {id:"doritos-dog",name:"Doritos Dog",price:3,cat:"Kiyla's Specialty Dogs",desc:"Cheese and Doritos.",img:PHOTO.korner2,pos:"72% center"},
  {id:"mozz-sticks",name:"Mozzarella Sticks",price:6,cat:"Sides",desc:"Crispy mozzarella sticks.",img:PHOTO.korner4,pos:"88% center"},
  {id:"cheese-fries",name:"Cheese Fries",price:6,cat:"Sides",desc:"French fries with cheese.",img:PHOTO.korner5,pos:"4% center"},
  {id:"bacon-cheese-fries",name:"Bacon Cheese Fries",price:10,cat:"Sides",desc:"French fries with bacon and cheese.",img:PHOTO.korner5,pos:"4% center"},
  {id:"mac-cheese",name:"Mac N Cheese",price:5,cat:"Sides",desc:"Creamy mac n cheese.",img:PHOTO.korner4,pos:"50% center"},
  {id:"french-fries",name:"French Fries",price:6,cat:"Sides",desc:"Classic seasoned fries.",img:PHOTO.korner4,pos:"89% center"},
  {id:"chili-cheese-fries",name:"Chili Cheese Fries",price:8,cat:"Sides",desc:"Fries topped with chili and cheese.",img:PHOTO.korner5,pos:"4% center"},
  {id:"coffee-shake",name:"Coffee",price:6.5,cat:"Milk Shakes",desc:"Rich and creamy coffee milk shake.",img:PHOTO.korner2,pos:"53% center"},
  {id:"strawberry-shake",name:"Strawberry",price:6.5,cat:"Milk Shakes",desc:"Rich and creamy strawberry milk shake.",img:PHOTO.korner2,pos:"53% center"},
  {id:"vanilla-shake",name:"Vanilla",price:6.5,cat:"Milk Shakes",desc:"Creamy classic vanilla milk shake.",img:PHOTO.korner2,pos:"53% center"},
  {id:"chocolate-shake",name:"Chocolate",price:6.5,cat:"Milk Shakes",desc:"Rich and creamy chocolate milk shake.",img:PHOTO.korner2,pos:"53% center"},
  {id:"cookies-shake",name:"Cookies N Cream",price:6.5,cat:"Milk Shakes",desc:"Cookies N Cream milk shake.",img:PHOTO.korner2,pos:"53% center"},
  {id:"fruity-pebble",name:"Fruity pebble",price:7,cat:"Milk Shakes",desc:"Fruity Pebble milk shake.",img:PHOTO.korner2,pos:"53% center"},
  {id:"fried-oreos",name:"Fried Oreos",price:6,cat:"Desert",desc:"Fried Oreos.",img:PHOTO.korner2,pos:"35% center"},
  {id:"rice-pudding",name:"Rice Pudding",price:3,cat:"Desert",desc:"Rice pudding.",img:PHOTO.korner2,pos:"35% center"},
  {id:"fountain",name:"Fountain Drink",price:3,cat:"Drinks",desc:"Cold fountain drink.",img:PHOTO.korner2,pos:"55% center"},
  {id:"water",name:"Bottled Water",price:2,cat:"Drinks",desc:"Cold bottled water.",img:PHOTO.korner3,pos:"50% center"}
];

const categories = [
  "Most Ordered",
  "Sandwiches & wraps",
  "Kiyla's Specialty Burgers",
  "Kiyla's Loaded Fries",
  "Kiyla's Specialty Dogs",
  "Build Your Own Dogs",
  "Sides",
  "Milk Shakes",
  "Desert",
  "Drinks"
];

const categoryHeadlines = {
  "Most Ordered":"The crowd favorites.",
  "Sandwiches & wraps":"Big handheld energy.",
  "Kiyla's Specialty Burgers":"Stacked, saucy, serious.",
  "Kiyla's Loaded Fries":"Loaded means loaded.",
  "Kiyla's Specialty Dogs":"Classic dogs, Korner style.",
  "Build Your Own Dogs":"Pick your dog. Make it yours.",
  "Sides":"Add something extra.",
  "Milk Shakes":"Cold, creamy, gone fast.",
  "Desert":"Something sweet.",
  "Drinks":"Keep it cold."
};

let activeCategory = "Most Ordered";
let cart = [];
let activeItem = null;
let activeSelections = [];

const $ = (s)=>document.querySelector(s);
const money = n => `$${Number(n).toFixed(2)}`;

function visibleItems(){
  const q = $("#menuSearch").value.trim().toLowerCase();
  let list = activeCategory === "Most Ordered"
    ? items.filter(i=>i.popular).sort((a,b)=>a.popular-b.popular)
    : items.filter(i=>i.cat===activeCategory);
  if(q) list = items.filter(i=>(i.name+" "+i.cat+" "+i.desc).toLowerCase().includes(q));
  return list;
}

function renderCategories(){
  $("#categoryButtons").innerHTML = categories.map(c =>
    `<button class="${c===activeCategory?"active":""}" data-category="${c.replaceAll('"','&quot;')}">${c}</button>`
  ).join("");
  document.querySelectorAll("[data-category]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      activeCategory = btn.dataset.category;
      $("#menuSearch").value = "";
      render();
    });
  });
}

function foodImage(item){
  return `<img src="${item.img}" alt="${item.name}" style="object-position:${item.pos||"center"}" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">
          <div class="image-fallback" style="display:none">${item.name}</div>`;
}

function renderPopular(){
  const popular = items.filter(i=>i.popular && i.popular <= 3).sort((a,b)=>a.popular-b.popular);
  $("#popularStrip").style.display = activeCategory==="Most Ordered" && !$("#menuSearch").value ? "grid" : "none";
  $("#popularStrip").innerHTML = popular.map(i=>`
    <button class="popular-card" data-open="${i.id}" aria-label="View ${i.name}">
      <img src="${i.img}" alt="" style="object-position:${i.pos}">
      <span class="popular-card-copy"><span>#${i.popular} MOST ORDERED</span><strong>${i.name}</strong></span>
    </button>
  `).join("");
}

function renderGrid(){
  const list = visibleItems();
  $("#foodGrid").innerHTML = list.length ? list.map(i=>`
    <article class="food-card">
      <div class="food-photo">
        ${foodImage(i)}
        ${i.popular && i.popular<=5 ? `<span class="food-badge">${i.popular===1?"#1 MOST ORDERED":"POPULAR"}</span>`:""}
      </div>
      <div class="food-copy">
        <div class="food-name">${i.name}</div>
        <div class="food-desc">${i.desc}</div>
        <div class="food-bottom">
          <strong>${money(i.price)}</strong>
          <button class="food-add" data-open="${i.id}">${i.custom?"CUSTOMIZE":"ADD"} +</button>
        </div>
      </div>
    </article>
  `).join("") : `<div class="empty-cart">Nothing matched that search.</div>`;
  document.querySelectorAll("[data-open]").forEach(el=>el.addEventListener("click",()=>openDialog(el.dataset.open)));
}

function render(){
  renderCategories();
  $("#categoryLabel").textContent = activeCategory.toUpperCase();
  $("#categoryTitle").textContent = $("#menuSearch").value ? "Search results." : categoryHeadlines[activeCategory];
  renderPopular();
  renderGrid();
}

function openDialog(id){
  activeItem = items.find(i=>i.id===id);
  activeSelections = [];
  $("#dialogCategory").textContent = activeItem.cat;
  $("#dialogName").textContent = activeItem.name;
  $("#dialogDescription").textContent = activeItem.desc;
  $("#dialogPrice").textContent = money(activeItem.price);
  $("#dialogMedia").innerHTML = foodImage(activeItem);
  const customizable = activeItem.custom || ["Kiyla's Specialty Burgers","Kiyla's Specialty Dogs","Sandwiches & wraps"].includes(activeItem.cat);
  $("#dialogOptions").innerHTML = customizable ? `
    <h4>Make it yours</h4>
    <div class="option-chips">
      ${["Cheese","Onions","Relish","Potato Stix","Crunchy Onions","Sauerkraut","Hot Sauce","Mayo","Bacon","Linguica"].map(x=>`<button class="option-chip" data-option="${x}">${x}</button>`).join("")}
    </div>
  ` : `<h4>Order notes</h4><div class="option-chips"><button class="option-chip" data-option="As listed">As listed</button><button class="option-chip" data-option="No onions">No onions</button><button class="option-chip" data-option="No mayo">No mayo</button></div>`;
  document.querySelectorAll("[data-option]").forEach(btn=>btn.addEventListener("click",()=>{
    btn.classList.toggle("selected");
    const v=btn.dataset.option;
    if(btn.classList.contains("selected")) activeSelections.push(v);
    else activeSelections=activeSelections.filter(x=>x!==v);
  }));
  $("#itemDialog").showModal();
}

function renderCart(){
  $("#cartCountBubble").textContent = cart.reduce((a,b)=>a+b.qty,0);
  const count = cart.reduce((a,b)=>a+b.qty,0);
  $("#mobileCartCount").textContent = `${count} ${count===1?"item":"items"}`;
  const total = cart.reduce((a,b)=>a+b.price*b.qty,0);
  $("#cartSubtotal").textContent = money(total);
  $("#mobileCartTotal").textContent = money(total);
  $("#cartItems").innerHTML = cart.length ? cart.map((row,index)=>`
    <div class="cart-line">
      <div>
        <strong>${row.name}</strong>
        ${row.mods.length?`<small>${row.mods.join(", ")}</small>`:""}
      </div>
      <div class="cart-qty">
        <button data-minus="${index}">−</button>
        <span>${row.qty}</span>
        <button data-plus="${index}">+</button>
      </div>
    </div>
  `).join("") : `<div class="empty-cart">Nothing here yet.<br>Tap something that looks good.</div>`;
  document.querySelectorAll("[data-minus]").forEach(b=>b.addEventListener("click",()=>changeQty(+b.dataset.minus,-1)));
  document.querySelectorAll("[data-plus]").forEach(b=>b.addEventListener("click",()=>changeQty(+b.dataset.plus,1)));
}

function addActive(){
  if(!activeItem) return;
  const signature = activeItem.id+"|"+activeSelections.join(",");
  const existing = cart.find(x=>x.signature===signature);
  if(existing) existing.qty++;
  else cart.push({signature,name:activeItem.name,price:activeItem.price,qty:1,mods:[...activeSelections]});
  $("#itemDialog").close();
  renderCart();
}

function changeQty(index, delta){
  cart[index].qty += delta;
  if(cart[index].qty<=0) cart.splice(index,1);
  renderCart();
}

$("#menuSearch").addEventListener("input",render);
$("#dialogClose").addEventListener("click",()=>$("#itemDialog").close());
$("#dialogAdd").addEventListener("click",addActive);
$("#checkoutButton").addEventListener("click",()=>window.open(ORDER_URL,"_blank"));
$("#mobileCartButton").addEventListener("click",()=>{
  document.querySelector("#menu").scrollIntoView({behavior:"smooth"});
  if(cart.length) window.setTimeout(()=>window.open(ORDER_URL,"_blank"),450);
});
document.querySelectorAll("[data-scroll-order]").forEach(b=>b.addEventListener("click",()=>$("#menu").scrollIntoView({behavior:"smooth"})));
document.querySelectorAll(".service-toggle button").forEach(b=>b.addEventListener("click",()=>{
  document.querySelectorAll(".service-toggle button").forEach(x=>x.classList.remove("active"));
  b.classList.add("active");
  $("#cartMode").textContent = `${b.dataset.mode==="pickup"?"Pickup":"Delivery"} · New Bedford`;
}));
render();
renderCart();
