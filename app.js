const menu=[
{id:'gold',cat:'featured',name:'Gold Fever Chicken Cheese Fries',price:16,tag:'#1 MOST LIKED',desc:'Shredded cheese, ranch, bacon & green onions.',accent:'#f5c43e'},
{id:'buffalo',cat:'featured',name:'Buffalo Chicken Cheese Fries',price:16,tag:'FAN FAVORITE',desc:'Shredded cheese, ranch, bacon & green onions.',accent:'#f13b43'},
{id:'chopped',cat:'featured',name:'Chopped Cheese',price:15,tag:'MOST ORDERED',desc:'A New York-style chopped beef & cheese sandwich.',accent:'#16c9f4'},
{id:'baconburger',cat:'featured',name:'Bacon Cheeseburger',price:15,tag:'CLASSIC',desc:'Burger, bacon and cheese with fries.',accent:'#ff6b22'},
{id:'macburger',cat:'featured',name:'Mac N Cheeseburger',price:15,tag:'GO BIG',desc:'A cheeseburger topped with mac & cheese.',accent:'#8274dc'},
{id:'fruity',cat:'featured',name:'Fruity Pebble Shake',price:7,tag:'SWEET KORNER',desc:'A colorful cereal shake made for the fun of it.',accent:'#35d86a'},
{id:'steamed',cat:'dogs',name:'Steamed Dog',price:1.5,tag:'START HERE',desc:'The classic dog. Add toppings and make it yours.',accent:'#16c9f4'},
{id:'beefdog',cat:'dogs',name:'All Beef Grilled Dog',price:2,tag:'GRILLED',desc:'All beef dog with grilled flavor.',accent:'#ff6b22'},
{id:'linguica',cat:'dogs',name:'Linguica Link Dog',price:3.25,tag:'LOCAL FAVORITE',desc:'Portuguese-style linguica link.',accent:'#f13b43'},
{id:'coney',cat:'dogs',name:'Coney Island Dog',price:3.5,tag:'BEST SELLER',desc:'Coney island sauce, mustard & onions.',accent:'#f5c43e'},
{id:'azorean',cat:'dogs',name:'Azorean Dog',price:3,tag:'SIGNATURE',desc:'Relish, onions, ketchup, mustard, mayo, hot sauce & potato sticks.',accent:'#35d86a'},
{id:'macdog',cat:'dogs',name:'Mac N Cheese Dog',price:3,tag:'LOADED',desc:'Topped with mac and cheese.',accent:'#8274dc'},
{id:'pizza',cat:'dogs',name:'Pizza Dog',price:3,tag:'FUN ONE',desc:'Pizza sauce and pizza cheese.',accent:'#f13b43'},
{id:'newengland',cat:'dogs',name:'New England Dog',price:3.5,tag:'NEW ENGLAND',desc:'Baked beans & bacon.',accent:'#2b8fe9'},
{id:'buffdog',cat:'dogs',name:'Buffalo Dog',price:3,tag:'SPICY',desc:'Hot sauce & blue cheese crumble.',accent:'#f13b43'},
{id:'gold',cat:'fries',name:'Gold Fever Chicken Cheese Fries',price:16,tag:'SIGNATURE',desc:'Shredded cheese, ranch, bacon & green onions.',accent:'#f5c43e'},
{id:'buffalo',cat:'fries',name:'Buffalo Chicken Cheese Fries',price:16,tag:'FAN FAVORITE',desc:'Shredded cheese, ranch, bacon & green onions.',accent:'#f13b43'},
{id:'bbq',cat:'fries',name:'BBQ Chicken Cheese Fries',price:16,tag:'SMOKY',desc:'Shredded cheese, ranch, bacon & green onions.',accent:'#ff6b22'},
{id:'sweetchili',cat:'fries',name:'Sweet Chili Chicken Cheese Fries',price:16,tag:'SWEET + HEAT',desc:'Shredded cheese, ranch, bacon & green onions.',accent:'#f5c43e'},
{id:'cacoila',cat:'fries',name:'Loaded Cacoila Fries',price:16,tag:'LOCAL FLAVOR',desc:'Shredded cheese, ketchup, mayo and potato sticks.',accent:'#35d86a'},
{id:'garlic',cat:'fries',name:'Garlic Parmesan Chicken Cheese Fries',price:15,tag:'NEW',desc:'Shredded cheese, garlic Parmesan sauce, bacon & green onions.',accent:'#8274dc'},
{id:'taco',cat:'fries',name:'Loaded Taco Fries',price:15,tag:'MESSY GOOD',desc:'Ground beef, shredded cheese, lettuce, tomato & sour cream.',accent:'#2b8fe9'},
{id:'buildburger',cat:'burgers',name:'Build Your Own Burger',price:14,tag:'MAKE IT YOURS',desc:'Add toppings at no charge. Add bacon for an additional charge.',accent:'#16c9f4'},
{id:'baconburger',cat:'burgers',name:'Bacon Cheeseburger',price:15,tag:'CLASSIC',desc:'Bacon, cheese and burger with fries.',accent:'#ff6b22'},
{id:'texas',cat:'burgers',name:'Texas Burger',price:16,tag:'BIG FLAVOR',desc:'BBQ sauce, bacon and crunchy onions.',accent:'#f5c43e'},
{id:'azoreanburger',cat:'burgers',name:'Azorean Burger',price:15,tag:'SIGNATURE',desc:'Ketchup, mustard, mayo, onions, relish, hot sauce & potato sticks.',accent:'#35d86a'},
{id:'macburger',cat:'burgers',name:'Mac N Cheese Burger',price:15,tag:'GO BIG',desc:'Burger topped with mac & cheese.',accent:'#8274dc'},
{id:'breakfast',cat:'burgers',name:'Breakfast Burger',price:16,tag:'ALL DAY ENERGY',desc:'Bacon, egg & cheese.',accent:'#f5c43e'},
{id:'baconblue',cat:'burgers',name:'Bacon Blue Burger',price:16,tag:'BOLD',desc:'Bacon & blue cheese crumble.',accent:'#2b8fe9'},
{id:'chickenwrap',cat:'wraps',name:'Build Your Own Chicken Wrap',price:12,tag:'CUSTOM',desc:'Lettuce, tomato, shredder cheese, onions & choice of sauce. Comes with fries.',accent:'#35d86a'},
{id:'tender',cat:'wraps',name:'Chicken Tender Dinner',price:10,tag:'COMFORT',desc:'Chicken tenders with fries and your choice of sauce.',accent:'#ff6b22'},
{id:'choppedling',cat:'wraps',name:'Chopped Linguica',price:15,tag:'NEW BEDFORD',desc:'Chopped linguica in a loaded sandwich.',accent:'#f13b43'},
{id:'steak',cat:'wraps',name:'Steak and Cheese Sub',price:7,tag:'SANDWICH',desc:'Steak and cheese sub.',accent:'#2b8fe9'},
{id:'fries',cat:'sides',name:'French Fries',price:6,tag:'SIDE',desc:'Crispy classic fries.',accent:'#f5c43e'},
{id:'cheesefries',cat:'sides',name:'Cheese Fries',price:7,tag:'SIDE',desc:'Fries with cheese.',accent:'#f5c43e'},
{id:'baconfries',cat:'sides',name:'Bacon Cheese Fries',price:8,tag:'SIDE',desc:'Fries with cheese and bacon.',accent:'#ff6b22'},
{id:'chilifries',cat:'sides',name:'Chili Cheese Fries',price:8,tag:'SIDE',desc:'Fries with chili and cheese.',accent:'#f13b43'},
{id:'mozz',cat:'sides',name:'Mozzarella Sticks',price:6,tag:'SIDE',desc:'Crispy mozzarella sticks.',accent:'#16c9f4'},
{id:'mac',cat:'sides',name:'Mac N Cheese',price:5,tag:'SIDE',desc:'Creamy comfort-food classic.',accent:'#8274dc'},
{id:'shakevan',cat:'shakes',name:'Vanilla Shake',price:6.5,tag:'SHAKE',desc:'Classic vanilla.',accent:'#f5c43e'},
{id:'shakecc',cat:'shakes',name:'Cookies N Cream',price:6.5,tag:'SHAKE',desc:'Cookies, cream and a whole lot of chill.',accent:'#8274dc'},
{id:'shakefruity',cat:'shakes',name:'Fruity Pebble',price:7,tag:'SIGNATURE',desc:'Bright cereal shake.',accent:'#35d86a'},
{id:'shakestraw',cat:'shakes',name:'Strawberry Shake',price:6.5,tag:'SHAKE',desc:'Classic strawberry.',accent:'#f13b43'},
{id:'shakechoc',cat:'shakes',name:'Chocolate Shake',price:6.5,tag:'SHAKE',desc:'Classic chocolate.',accent:'#ff6b22'},
{id:'shakecoffee',cat:'shakes',name:'Coffee Shake',price:6.5,tag:'SHAKE',desc:'Coffee-forward and creamy.',accent:'#2b8fe9'},
{id:'oreos',cat:'desserts',name:'Fried Oreos',price:6,tag:'SWEET',desc:'Warm, crispy, dangerously easy to finish.',accent:'#8274dc'},
{id:'rice',cat:'desserts',name:'Rice Pudding',price:3,tag:'SWEET',desc:'Comforting classic.',accent:'#f5c43e'},
];
const cats={featured:'MOST LOVED',dogs:'DOGS',fries:'LOADED FRIES',burgers:'BURGERS',wraps:'WRAPS & CHICKEN',sides:'SIDES',shakes:'SHAKES',desserts:'SWEETS'};
let active='featured';
const grid=document.getElementById('menuGrid'); const search=document.getElementById('menuSearch');
const money=n=>`$${n.toFixed(2).replace('.00','')}`;
function render(){const q=(search.value||'').toLowerCase().trim();const items=menu.filter(i=>i.cat===active&&(i.name.toLowerCase().includes(q)||i.desc.toLowerCase().includes(q)));grid.innerHTML=items.map(i=>`<article class="menu-item" style="--accent:${i.accent}"><div><div class="item-top"><span class="item-tag">${i.tag}</span><span class="price">${money(i.price)}</span></div><h3>${i.name}</h3><p>${i.desc}</p></div><div class="item-bottom"><span style="font-size:8px;color:#5f6561;letter-spacing:.12em;text-transform:uppercase">${cats[i.cat]}</span><button class="add-btn" data-add="${i.id}" data-name="${i.name}">ADD +</button></div></article>`).join('')||`<div class="menu-item" style="grid-column:1/-1"><h3>Nothing found.</h3><p>Try another search or choose a category.</p></div>`}
document.querySelectorAll('.cat').forEach(b=>b.addEventListener('click',()=>{active=b.dataset.cat;document.querySelectorAll('.cat').forEach(x=>x.classList.remove('active'));b.classList.add('active');render();document.getElementById('menu').scrollIntoView({behavior:'smooth',block:'start'})}));search.addEventListener('input',render);render();
const overlay=document.getElementById('orderOverlay');const quick=document.getElementById('quickOrder');
function openOrder(){overlay.classList.add('open');overlay.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';renderQuick()};function closeOrder(){overlay.classList.remove('open');overlay.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.querySelectorAll('[data-open-order]').forEach(b=>b.addEventListener('click',openOrder));document.querySelector('[data-close-order]').addEventListener('click',closeOrder);overlay.addEventListener('click',e=>{if(e.target===overlay)closeOrder()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeOrder()});
function renderQuick(){const ids=['gold','chopped','baconburger','coney','azorean','fruity'];quick.innerHTML=ids.map(id=>{const i=menu.find(x=>x.id===id&&x.cat==='featured')||menu.find(x=>x.id===id);return `<div class="quick-item"><div><strong>${i.name}</strong><small>${money(i.price)} · ${i.tag}</small></div><button data-quick="${i.name}">ADD</button></div>`}).join('')}
quick.addEventListener('click',e=>{if(e.target.dataset.quick)showToast(`${e.target.dataset.quick} added to your order`)});
grid.addEventListener('click',e=>{if(e.target.dataset.add)showToast(`${e.target.dataset.name} added to your order`)});
function showToast(t){const el=document.getElementById('toast');el.textContent=t;el.classList.add('show');clearTimeout(window._toast);window._toast=setTimeout(()=>el.classList.remove('show'),1800)}
document.querySelectorAll('[data-feature-cat]').forEach(b=>b.addEventListener('click',()=>{active=b.dataset.featureCat;document.querySelectorAll('.cat').forEach(x=>x.classList.toggle('active',x.dataset.cat===active));render();document.getElementById('menu').scrollIntoView({behavior:'smooth'})}));
const builderOptions=[['Steamed Dog',0],['Grilled Dog',.5],['Cheese',.5],['Bacon',1.5],['Chili',1],['Linguica',1.75]];let builderTotal=1.5;const opts=document.getElementById('builderOptions');opts.innerHTML=builderOptions.map((x,i)=>`<button class="builder-choice ${i===0?'active':''}" data-builder-name="${x[0]}" data-builder-add="${x[1]}">${x[0]}${x[1]?' +'+money(x[1]):''}</button>`).join('');opts.addEventListener('click',e=>{if(!e.target.dataset.builderName)return;e.target.classList.toggle('active');builderTotal=1.5+[...opts.querySelectorAll('.builder-choice.active')].reduce((s,b)=>s+Number(b.dataset.builderAdd),0);document.getElementById('builderPrice').textContent=money(builderTotal);document.getElementById('builderSummary').textContent=[...opts.querySelectorAll('.builder-choice.active')].map(b=>b.dataset.builderName).join(' + ')});document.querySelector('[data-add-builder]').addEventListener('click',()=>showToast(`Custom dog added · ${money(builderTotal)}`));document.querySelector('[data-builder]').addEventListener('click',()=>document.getElementById('build').scrollIntoView({behavior:'smooth'}));
document.querySelectorAll('.mode').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.mode').forEach(x=>x.classList.remove('active'));b.classList.add('active')}));
