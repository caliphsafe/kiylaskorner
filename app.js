const menu = [
{id:'gold',name:'Gold Fever Chicken Cheese Fries',cat:'fries',price:16,tag:'#1 MOST LIKED',desc:'Crispy fries loaded with chicken, melted cheese and the good stuff.',emoji:'🍟',featured:true},
{id:'buffalo-fries',name:'Buffalo Chicken Cheese Fries',cat:'fries',price:16,tag:'FAN FAVORITE',desc:'Chicken, shredded cheese, ranch, bacon and green onions with buffalo heat.',emoji:'🍟',featured:true},
{id:'sweet-fries',name:'Sweet Chili Chicken Cheese Fries',cat:'fries',price:16,desc:'Chicken, cheese and sweet chili flavor over crispy fries.',emoji:'🍟',featured:true},
{id:'bbq-fries',name:'BBQ Chicken Cheese Fries',cat:'fries',price:16,desc:'Chicken, shredded cheese, ranch, bacon and green onions with BBQ.',emoji:'🍟'},
{id:'ranch-fries',name:'Chicken Bacon Ranch Fries',cat:'fries',price:16,desc:'Chicken, bacon, ranch and cheese piled onto fries.',emoji:'🍟'},
{id:'cacoila-fries',name:'Loaded Cacoila Fries',cat:'fries',price:16,desc:'Shredded cheese, ketchup, mayo and potato sticks with cacoila.',emoji:'🍟'},
{id:'garlic-fries',name:'Garlic Parmesan Chicken Cheese Fries',cat:'fries',price:15,tag:'NEW',desc:'Chicken, shredded cheese, garlic Parmesan sauce, bacon and green onions.',emoji:'🍟'},
{id:'taco-fries',name:'Loaded Taco Fries',cat:'fries',price:15,desc:'Ground beef, shredded cheese, lettuce, tomato and sour cream.',emoji:'🌮'},
{id:'coney',name:'Coney Island Dog',cat:'dogs',price:3.5,tag:'BEST SELLER',desc:'Coney island sauce, mustard and onions.',emoji:'🌭',featured:true},
{id:'azorean-dog',name:'Azorean Dog',cat:'dogs',price:3,desc:'Relish, onions, ketchup, mustard, mayo, hot sauce and potato sticks.',emoji:'🌭',featured:true},
{id:'chili-dog',name:'Chili & Cheese Dog',cat:'dogs',price:3,desc:'Classic dog with chili and cheese.',emoji:'🌭'},
{id:'linguica-cheese',name:'Linguica & Cheese Dog',cat:'dogs',price:3,desc:'Shredded linguica and cheese.',emoji:'🌭'},
{id:'blt-dog',name:'BLT Dog',cat:'dogs',price:4,desc:'Bacon, lettuce and tomato.',emoji:'🌭'},
{id:'new-england',name:'New England Dog',cat:'dogs',price:3.5,desc:'Baked beans and bacon.',emoji:'🌭'},
{id:'buffalo-dog',name:'Buffalo Dog',cat:'dogs',price:3,desc:'Hot sauce and blue cheese crumble.',emoji:'🌭'},
{id:'bacon-dog',name:'Bacon & Cheese Dog',cat:'dogs',price:3.5,desc:'Bacon and cheese on a Kiyla’s dog.',emoji:'🌭'},
{id:'texas-dog',name:'Texas Dog',cat:'dogs',price:4,desc:'BBQ sauce, bacon and crunchy onions.',emoji:'🌭'},
{id:'pizza-dog',name:'Pizza Dog',cat:'dogs',price:3,desc:'Pizza sauce and pizza cheese. Add-ons available.',emoji:'🍕'},
{id:'mac-dog',name:'Mac N Cheese Dog',cat:'dogs',price:3,desc:'Topped with mac and cheese.',emoji:'🌭'},
{id:'doritos-dog',name:'Doritos Dog',cat:'dogs',price:3,desc:'Cheese and Doritos.',emoji:'🌭'},
{id:'steamed',name:'Steamed Dog',cat:'dogs',price:1.5,tag:'BEST SELLER',desc:'Steamed hot dog with your choice of toppings.',emoji:'🌭'},
{id:'grilled',name:'All Beef Grilled Dog',cat:'dogs',price:2,desc:'Grilled beef dog with your choice of toppings.',emoji:'🌭'},
{id:'all-beef',name:'All Beef Hot Dog',cat:'dogs',price:2.5,desc:'Beef hot dog with your choice of toppings.',emoji:'🌭'},
{id:'vegan',name:'Vegan Dog',cat:'dogs',price:4,desc:'Vegan dog with your choice of toppings.',emoji:'🌭'},
{id:'linguica-link',name:'Linguica Link Dog',cat:'dogs',price:3.25,desc:'Savory linguica link served in a hot dog bun.',emoji:'🌭'},
{id:'bacon-cheese',name:'Bacon Cheeseburger',cat:'burgers',price:15,tag:'POPULAR',desc:'Classic bacon cheeseburger served with French fries.',emoji:'🍔',featured:true},
{id:'azorean-burger',name:'Azorean Burger',cat:'burgers',price:15,tag:'KORNER PICK',desc:'Cheese, ketchup, mustard, mayo, onions, relish, hot sauce and potato sticks. Served with fries.',emoji:'🍔',featured:true},
{id:'texas-burger',name:'Texas Burger',cat:'burgers',price:16,desc:'Cheeseburger topped with BBQ sauce, bacon and crunchy onions. Served with fries.',emoji:'🍔',featured:true},
{id:'mac-burger',name:'Mac N Cheeseburger',cat:'burgers',price:15,desc:'Cheeseburger topped with mac n cheese. Served with fries.',emoji:'🍔',featured:true},
{id:'breakfast-burger',name:'Breakfast Burger',cat:'burgers',price:16,desc:'Burger topped with bacon, egg and cheese. Served with fries.',emoji:'🍔'},
{id:'bacon-blue',name:'Bacon Blue Burger',cat:'burgers',price:16,desc:'Bacon and blue cheese crumble. Served with fries.',emoji:'🍔'},
{id:'byob',name:'Build Your Own Burger',cat:'burgers',price:14,desc:'Build it your way. Toppings available at no charge; bacon is extra.',emoji:'🍔'},
{id:'chopped',name:'Chopped Cheese',cat:'wraps',price:15,tag:'POPULAR',desc:'Beef, cheese, mozzarella sticks, peppers, onions, lettuce, tomato, ketchup and mayo. Served with fries.',emoji:'🥪',featured:true},
{id:'chopped-linguica',name:'Chopped Linguica',cat:'wraps',price:15,desc:'Linguica, cheese, peppers, onions, egg, ketchup and hot sauce. Served with fries.',emoji:'🥪'},
{id:'wrap',name:'Build Your Own Chicken Wrap',cat:'wraps',price:14,desc:'Chicken, cheese, lettuce, tomato, mayo, pickles, onions and your choice of sauce. Served with fries.',emoji:'🌯'},
{id:'tenders',name:'Chicken Tender Dinner with Fries',cat:'wraps',price:10,tag:'POPULAR',desc:'Chicken tenders with fries and your choice of sauce.',emoji:'🍗',featured:true},
{id:'cacoila',name:'Cacoila Sandwich',cat:'wraps',price:3.25,desc:'Cacoila sandwich.',emoji:'🥪'},
{id:'steak-cheese',name:'Steak and Cheese Sub',cat:'wraps',price:7,desc:'Steak and cheese sub.',emoji:'🥪'},
{id:'fries',name:'French Fries',cat:'sides',price:6,desc:'Crispy French fries.',emoji:'🍟',featured:true},
{id:'cheese-fries',name:'Cheese Fries',cat:'sides',price:7,tag:'BEST SELLER',desc:'French fries covered in cheese.',emoji:'🍟'},
{id:'bacon-fries',name:'Bacon Cheese Fries',cat:'sides',price:8,desc:'Fries, cheese and bacon.',emoji:'🍟'},
{id:'chili-cheese-fries',name:'Chili Cheese Fries',cat:'sides',price:8,tag:'FAN FAVORITE',desc:'Fries with chili and cheese.',emoji:'🍟',featured:true},
{id:'rings',name:'Onion Rings',cat:'sides',price:6,desc:'Crispy onion rings.',emoji:'🧅'},
{id:'mozz',name:'Mozzarella Sticks',cat:'sides',price:6,desc:'Crispy mozzarella sticks.',emoji:'🧀',featured:true},
{id:'mac',name:'Mac N Cheese',cat:'sides',price:5,desc:'Creamy mac n cheese.',emoji:'🧀'},
{id:'beans',name:'Baked Beans',cat:'sides',price:4,desc:'Baked beans.',emoji:'🥣'},
{id:'walking',name:'Walking Taco',cat:'sides',price:5,desc:'Fritos topped with taco meat, lettuce, cheese and tomatoes.',emoji:'🌮'},
{id:'coffee-shake',name:'Coffee Shake',cat:'shakes',price:6.5,desc:'Rich and creamy classic coffee shake.',emoji:'🥤'},
{id:'strawberry-shake',name:'Strawberry Shake',cat:'shakes',price:6.5,tag:'POPULAR',desc:'Rich and creamy strawberry shake.',emoji:'🥤',featured:true},
{id:'vanilla-shake',name:'Vanilla Shake',cat:'shakes',price:6.5,desc:'Creamy and smooth classic vanilla.',emoji:'🥤',featured:true},
{id:'choc-shake',name:'Chocolate Shake',cat:'shakes',price:6.5,desc:'Rich and creamy chocolate treat.',emoji:'🥤'},
{id:'cookies-shake',name:'Cookies N Cream Shake',cat:'shakes',price:6.5,tag:'FAN FAVORITE',desc:'Creamy cookies-and-cream shake.',emoji:'🥤',featured:true},
{id:'fruity-shake',name:'Fruity Pebble Shake',cat:'shakes',price:7,tag:'FUN ONE',desc:'Sweet cereal-inspired shake.',emoji:'🥤',featured:true},
{id:'fried-oreos',name:'Fried Oreos',cat:'desserts',price:6,desc:'Warm fried Oreos.',emoji:'🍪'},
{id:'rice-pudding',name:'Rice Pudding',cat:'desserts',price:3,desc:'Sweet rice pudding.',emoji:'🍮'}
];
const toppingOptions=['Hot Buffalo Sauce','Cheese','Sauerkraut','Potato Stix','Crunchy Onions','Special Brown Mustard','Baked Beans','Hot Pepper Relish','Blue Cheese Crumble'];
const meatOptions=['Chili','Bacon','Linguica'];
let activeFilter='featured', cart=[];
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function money(n){return `$${n.toFixed(2)}`}
function artClass(cat){return ['fries','dogs','burgers','wraps','sides','shakes','desserts'].includes(cat)?cat:'side'}
function renderMenu(filter=activeFilter){activeFilter=filter; const items=filter==='featured'?menu.filter(x=>x.featured):menu.filter(x=>x.cat===filter); $('#menuGrid').innerHTML=items.map(item=>`<article class="menu-card"><div class="food-art ${artClass(item.cat)}"><span class="food-tag">${item.tag||item.cat.toUpperCase()}</span><div class="food-emoji" aria-hidden="true">${item.emoji}</div></div><div class="menu-info"><h3>${item.name}</h3><p>${item.desc}</p><div class="menu-bottom"><span class="price">${money(item.price)}</span><button class="add-btn" aria-label="Add ${item.name}" data-item="${item.id}">+</button></div></div></article>`).join(''); $$('.add-btn').forEach(b=>b.addEventListener('click',()=>openItem(b.dataset.item)))}
function openItem(id){const item=menu.find(x=>x.id===id); if(!item)return; const dog=item.cat==='dogs'||id==='byob'; $('#itemModalContent').innerHTML=`<div class="food-art ${artClass(item.cat)}"><div class="food-emoji">${item.emoji}</div></div><div class="modal-inner"><span class="eyebrow">${item.cat.toUpperCase()}</span><h2>${item.name}</h2><p>${item.desc}</p>${dog?`<div class="modifier"><h4>Choose your toppings</h4><div class="modifier-grid">${toppingOptions.map((x,i)=>`<label><input type="checkbox" data-mod="${x}" ${i<2?'checked':''}> ${x}</label>`).join('')}</div></div><div class="modifier"><h4>Meat add-ons</h4><div class="modifier-grid">${meatOptions.map(x=>`<label><input type="checkbox" data-mod="${x}"> ${x}</label>`).join('')}</div></div>`:''}<div class="modifier"><h4>Quantity</h4><div class="modifier-grid"><label><input type="radio" name="qty" value="1" checked> 1</label><label><input type="radio" name="qty" value="2"> 2</label><label><input type="radio" name="qty" value="3"> 3</label></div></div><button class="btn btn-primary full modal-add" id="modalAdd">ADD TO ORDER • ${money(item.price)}</button></div>`; $('#itemOverlay').classList.add('open');$('#itemOverlay').setAttribute('aria-hidden','false');$('#modalAdd').onclick=()=>{const mods=$$('#itemModalContent input[data-mod]:checked').map(x=>x.dataset.mod);const qty=Number($('#itemModalContent input[name="qty"]:checked').value);addCart(item,mods,qty);closeItem()}}
function addCart(item,mods=[],qty=1){const key=item.id+'|'+mods.join(',');const found=cart.find(x=>x.key===key);if(found)found.qty+=qty;else cart.push({key,item,mods,qty});renderCart();showToast(`${item.name} added`);}
function renderCart(){const list=$('#cartList');$('#emptyCart').style.display=cart.length?'none':'block';list.innerHTML=cart.map((x,i)=>`<div class="cart-row"><div><h4>${x.qty}× ${x.item.name}</h4>${x.mods.length?`<small>${x.mods.join(' • ')}</small>`:''}<div class="cart-controls"><button data-cart="dec" data-i="${i}">−</button><span>${x.qty}</span><button data-cart="inc" data-i="${i}">+</button><button data-cart="remove" data-i="${i}" title="Remove">×</button></div></div><span class="price">${money(x.item.price*x.qty)}</span></div>`).join('');$('#cartTotal').textContent=money(cart.reduce((s,x)=>s+x.item.price*x.qty,0));$$('[data-cart]').forEach(b=>b.onclick=()=>{const i=Number(b.dataset.i),a=b.dataset.cart;if(a==='remove')cart.splice(i,1);if(a==='inc')cart[i].qty++;if(a==='dec'){cart[i].qty--;if(cart[i].qty<=0)cart.splice(i,1)}renderCart()})}
function openOrder(){renderCart();$('#orderOverlay').classList.add('open');$('#orderOverlay').setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeOrder(){$('#orderOverlay').classList.remove('open');$('#orderOverlay').setAttribute('aria-hidden','true');document.body.style.overflow=''}
function closeItem(){$('#itemOverlay').classList.remove('open');$('#itemOverlay').setAttribute('aria-hidden','true')}
function showToast(t){$('#toast').textContent=t;$('#toast').classList.add('show');setTimeout(()=>$('#toast').classList.remove('show'),1800)}
renderMenu();renderCart();
$$('[data-filter]').forEach(b=>b.onclick=()=>{$$('[data-filter]').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderMenu(b.dataset.filter)});
$$('[data-open-order]').forEach(b=>b.onclick=openOrder);$('.close-order').onclick=closeOrder;$('.close-item').onclick=closeItem;$('#orderOverlay').onclick=e=>{if(e.target===e.currentTarget)closeOrder()};$('#itemOverlay').onclick=e=>{if(e.target===e.currentTarget)closeItem()};
$$('[data-order-type]').forEach(b=>b.onclick=()=>{$$('[data-order-type]').forEach(x=>x.classList.remove('active'));b.classList.add('active')});
$$('[data-filter-jump]').forEach(b=>b.onclick=()=>{document.querySelector(`[data-filter="${b.dataset.filterJump}"]`)?.click();document.querySelector('#menu')?.scrollIntoView({behavior:'smooth'})});
$('.menu-toggle').onclick=()=>{const n=$('.mobile-nav');const open=n.hidden;n.hidden=!open;$('.menu-toggle').setAttribute('aria-expanded',String(open));};
$$('.mobile-nav a').forEach(a=>a.onclick=()=>{$('.mobile-nav').hidden=true});
$('#checkoutBtn').onclick=()=>{if(!cart.length){showToast('Add something delicious first.');return}window.open('https://order.online/store/kiyla-s-korner-cove-rd-31271415','_blank','noopener');};
let builderDog='All Beef';let builderToppings=[];
const dogChoices=[['All Beef','$2.50'],['Grilled Dog','$2.00'],['Steamed Dog','$1.50'],['Linguica','$3.25'],['Vegan','$4.00'],['Build Your Own','custom']];
$('#dogChoices').innerHTML=dogChoices.map((x,i)=>`<button class="choice ${i===0?'active':''}" data-dog="${x[0]}"><b>${x[0]}</b><small>${x[1]}</small></button>`).join('');$$('.choice').forEach(b=>b.onclick=()=>{$$('.choice').forEach(x=>x.classList.remove('active'));b.classList.add('active');builderDog=b.dataset.dog});
$('#builderNext').onclick=()=>{openItem(builderDog==='All Beef'?'all-beef':builderDog==='Grilled Dog'?'grilled':builderDog==='Steamed Dog'?'steamed':builderDog==='Linguica'?'linguica-link':builderDog==='Vegan'?'vegan':'byob')};
