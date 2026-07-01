// ============================================================
//  PhoolPatte — PAGES.JS
// ============================================================

// ── FOOTER HTML ───────────────────────────────────────────────
function renderFooterHTML() {
  return `
    <div class="ig-strip">
      <div class="ig-strip-inner">
        <p>📸 See our latest work on Instagram!</p>
        <button class="btn-ig" onclick="openIG()">
          ${IG_SVG} Follow ${INSTAGRAM_HANDLE}
        </button>
      </div>
    </div>
    <footer>
      <div class="container footer-grid">
        <div>
          <div class="logo" style="cursor:default">
            <img class="logo-icon" src="${LOGO_URL}" alt="PhoolPatte Logo">
            <span class="logo-name" style="color:#fff">Phool<span>Patte</span></span>
          </div>
          <p class="footer-tagline">Delhi NCR's trusted flower shop — Jaimala to Phoolon ki Chadar, we make every ritual beautiful.</p>
          <div class="footer-social">
            <button class="footer-social-btn wa" onclick="openWA('Hello PhoolPatte!')" title="WhatsApp">${WA_SVG}</button>
            <button class="footer-social-btn ig" onclick="openIG()" title="Instagram">${IG_SVG}</button>
          </div>
        </div>
        <div class="footer-col">
          <h4>Collections</h4>
          <ul>${CATEGORIES.filter(c=>c.id!=='room').map(c=>`<li><a onclick="Router.go('category',{catId:'${c.id}'})">${c.name}</a></li>`).join('')}</ul>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a onclick="Router.go('catalog')">Full Catalog</a></li>
            <li><a onclick="Router.go('wishlist')">Wishlist & Liked</a></li>
            <li><a onclick="Router.go('cart')">My Cart</a></li>
            <li><a onclick="Router.go('delivery')">Delivery Info</a></li>
            <li><a onclick="Router.go('occasions')">Occasions</a></li>
            <li><a onclick="PhoneGate.changeNumber()">Change My Number</a></li>
            <li><a onclick="openIG()">${IG_SVG} Instagram</a></li>
          </ul>
        </div>
      </div>
      <div class="container footer-bottom">© 2025 PhoolPatte. Made with 🌸 for every function in Delhi NCR.</div>
    </footer>`;
}

function floatBtn() {
  return `<button class="wa-float" onclick="openWA('Namaste PhoolPatte! Main order karna chahta/chahti hoon.')" title="WhatsApp">${WA_SVG}</button>`;
}

// ── HOME ──────────────────────────────────────────────────────
function renderHome() {
  renderNavbar('home');
  document.getElementById('app').innerHTML = `
    <!-- HERO -->
    <section class="hero">
      <div class="petal-wrap" id="petalWrap"></div>
      <div class="hero-blob b1"></div><div class="hero-blob b2"></div><div class="hero-blob b3"></div>
      <div class="hero-txt">
        <div class="hero-badge">🌺 Delhi NCR's Premium Flower Shop</div>
        <h1 class="hero-h1">
          <span class="hindi">फूलों की खुशबू, हर रस्म में</span>
          Every Ritual Deserves <em>Real Flowers</em>
        </h1>
        <p class="hero-sub">From <strong>Jaimala & Varmala</strong> matched to your outfit, to <strong>Phoolon ki Chadar</strong>, Loose flowers, flower jewellery & full décor — fresh across Delhi NCR.</p>
        <div class="hero-btns">
          <button class="btn-primary" onclick="Router.go('catalog')">🌸 Browse Catalog</button>
          <button class="btn-outline" onclick="openWA('Namaste PhoolPatte! I need flowers for my function.')">
            <span style="display:inline-flex;align-items:center;gap:5px">${WA_SVG} WhatsApp Us</span>
          </button>
        </div>
        <div class="hero-trust">
          <div class="trust-i">⭐ 4.9 Rated</div>
          <div class="trust-i" style="color:var(--border)">|</div>
          <div class="trust-i">🚚 Same Day Delivery</div>
          <div class="trust-i" style="color:var(--border)">|</div>
          <div class="trust-i">💐 500+ Happy Families</div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="flower-blob">🌺
          <div class="fb-badge b1">🌿 Farm Fresh</div>
          <div class="fb-badge b2">💒 Wedding Special</div>
          <div class="fb-badge b3">✨ Delhi NCR</div>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <div class="stats-strip">
      <div class="stat-item"><div class="stat-num">500+</div><div class="stat-lbl">Happy Families</div></div>
      <div class="stat-item"><div class="stat-num">4.9★</div><div class="stat-lbl">Average Rating</div></div>
      <div class="stat-item"><div class="stat-num">5 AM</div><div class="stat-lbl">Daily Fresh Pickup</div></div>
      <div class="stat-item"><div class="stat-num">12+</div><div class="stat-lbl">Areas Covered</div></div>
      <div class="stat-item"><div class="stat-num">100%</div><div class="stat-lbl">Fresh Guarantee</div></div>
    </div>

    <!-- MARQUEE -->
    <div class="marquee"><div class="marquee-track">
      ${[...Array(2)].map(()=>`<span>🌸 Jaimala</span><span class="dot">✦</span><span>🌺 Varmala</span><span class="dot">✦</span><span>🛕 Genda Phool</span><span class="dot">✦</span><span>💎 Flower Jewellery</span><span class="dot">✦</span><span>🌼 Phoolon ki Chadar</span><span class="dot">✦</span><span>🎊 Haldi Décor</span><span class="dot">✦</span><span>💝 Custom Bouquets</span><span class="dot">✦</span><span>🚚 Delhi NCR Delivery</span><span class="dot">✦</span>`).join('')}
    </div></div>

    <!-- CATEGORIES -->
    <section style="background:#fff">
      <div class="container">
        <div class="sec-hdr fu">
          <div class="sec-label">🌸 Browse by Category</div>
          <h2 class="sec-title">Our <em>Collections</em></h2>
          <p class="sec-sub">Tap any category to explore our full range of fresh flowers!</p>
        </div>
        <div class="cat-grid fu" id="catGrid"></div>
      </div>
    </section>

    <!-- OCCASIONS -->
    <section class="occasions">
      <div class="container occ-inner">
        <div class="sec-label">🎊 Every Function Covered</div>
        <h2 class="sec-title">What's Your Occasion?</h2>
        <p class="sec-sub">Select your function — we\'ll guide you on WhatsApp</p>
        <div class="occ-grid">${OCCASIONS.map(o=>`<div class="occ-pill" onclick="openWA('${o.msg}')">${o.icon} ${o.label}</div>`).join('')}</div>
      </div>
    </section>

    <!-- WHY US -->
    <section style="background:#fff">
      <div class="container">
        <div class="sec-hdr fu">
          <div class="sec-label">💎 Why PhoolPatte</div>
          <h2 class="sec-title">Flowers You Can <em>Trust</em></h2>
        </div>
        <div class="why-grid fu">
          <div class="why-card"><div class="why-icon">🌿</div><div class="why-title">Farm Fresh Daily</div><div class="why-desc">Sourced every morning from Khari Baoli Phool Mandi — never stored overnight</div></div>
          <div class="why-card"><div class="why-icon">🚚</div><div class="why-title">All Delhi NCR</div><div class="why-desc">Noida, Gurgaon, Faridabad, Ghaziabad, Greater Noida & entire Delhi</div></div>
          <div class="why-card"><div class="why-icon">⚡</div><div class="why-title">Same Day Delivery</div><div class="why-desc">Order by 6 PM — receive fresh flowers same evening</div></div>
          <div class="why-card"><div class="why-icon">✨</div><div class="why-title">Custom Design</div><div class="why-desc">Match your jaimala, chadar or jewellery to your exact outfit shade</div></div>
          <div class="why-card"><div class="why-icon">💰</div><div class="why-title">Best Prices</div><div class="why-desc">Direct from mandi — no middlemen, honest pricing for every budget</div></div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section style="background:var(--cream)">
      <div class="container">
        <div class="sec-hdr fu">
          <div class="sec-label">💌 Customer Love</div>
          <h2 class="sec-title">What Families <em>Say</em></h2>
        </div>
        <div class="testi-grid fu" id="testiGrid"></div>
      </div>
    </section>

    <!-- DELIVERY -->
    <section style="background:#fff;text-align:center">
      <div class="container" style="max-width:700px">
        <div class="sec-label" style="justify-content:center">🚚 Delivery Zones</div>
        <h2 class="sec-title fu">We Deliver Across <em>Delhi NCR</em></h2>
        <p class="sec-sub fu" style="margin:.5rem auto 0">Same-day delivery for most areas. Order before 6 PM for same-evening delivery.</p>
        <div class="area-pills fu">${DELIVERY_AREAS.map(a=>`<span class="area-pill">${a}</span>`).join('')}</div>
        <button class="btn-primary" style="margin:0 auto" onclick="openWA('Namaste! Do you deliver to my area? My location: ')">
          <span style="display:inline-flex;align-items:center;gap:5px">${WA_SVG} Check My Area</span>
        </button>
      </div>
    </section>

    ${renderFooterHTML()}
    ${floatBtn()}`;

  // fill
  document.getElementById('catGrid').innerHTML = CATEGORIES.filter(c=>c.id!=='room').map(c=>`
    <div class="cat-card" onclick="Router.go('category',{catId:'${c.id}'})">
      <div class="cat-img">
        <img src="${c.img}" alt="${c.name}" loading="lazy" onerror="this.src='${fallbackImg()}'"/>
        ${c.id==='custom'?`<div class="cat-custom-pill">✨ Custom</div>`:''}
      </div>
      <div class="cat-body">
        <div class="cat-name">${c.name}</div>
        <div class="cat-tagline ${c.id==='custom'?'cat-tagline-custom':''}">${c.tagline}</div>
        <div class="cat-link">Browse all →</div>
      </div>
    </div>`).join('');

  document.getElementById('testiGrid').innerHTML = TESTIMONIALS.map(t=>`
    <div class="testi-card">
      <div class="testi-stars">★★★★★</div>
      <div class="testi-text">${t.text}</div>
      <div class="testi-author">
        <div class="testi-av" style="background:${t.bg}">${t.avatar}</div>
        <div><div class="testi-name">${t.name}</div><div class="testi-loc">📍 ${t.loc}</div></div>
      </div>
    </div>`).join('');

  // Petals
  const pw = document.getElementById('petalWrap');
  if(pw) ['🌸','🌺','🌼','🏵️','🌸','🌺','💮','🌺','🌸'].forEach((p,i)=>{
    const el=document.createElement('div'); el.className='petal';
    el.textContent=p; el.style.cssText=`left:${10+i*15}%;animation-duration:${7+i*1.5}s;animation-delay:${i*1.2}s`;
    pw.appendChild(el);
  });

  initScrollReveal();
  Chatbot.init && setTimeout(()=>Chatbot.init(),800);
}

// ── CATALOG ───────────────────────────────────────────────────
function renderCatalog(opts={}) {
  renderNavbar('catalog');
  document.getElementById('app').innerHTML = `
    <div style="padding-top:62px;min-height:100vh;background:var(--cream)">
      <section>
        <div class="container">
          <div class="breadcrumb"><a onclick="Router.go('home')">Home</a><span>›</span><span>Catalog</span></div>
          <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:1rem;margin-bottom:1.8rem">
            <div>
              <div class="sec-label">🌺 Full Catalog</div>
              <h2 class="sec-title">All <em>Products</em></h2>
            </div>
            <span style="font-size:.82rem;color:var(--light)" id="prodCount"></span>
          </div>
          <div class="filter-tabs" id="filterTabs"></div>
          <div class="prod-grid" id="prodGrid"></div>
        </div>
      </section>
      ${renderFooterHTML()}${floatBtn()}
    </div>`;

  const tabs=[{id:'all',label:'All'},...CATEGORIES.map(c=>({id:c.id,label:c.name}))];
  let active=opts.catId||'all';

  window.catalogFilter=function(id){
    active=id;
    document.querySelectorAll('.ftab').forEach((t,i)=>t.classList.toggle('active',tabs[i].id===id));
    render();
  };

  function render(){
    const list=active==='all'?PRODUCTS:PRODUCTS.filter(p=>p.cat===active);
    document.getElementById('prodCount').textContent=`${list.length} product${list.length!==1?'s':''}`;
    document.getElementById('prodGrid').innerHTML=list.length
      ?list.map(productCardHTML).join('')
      :`<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--light)">No products yet.</div>`;
  }

  document.getElementById('filterTabs').innerHTML=tabs.map(t=>`
    <button class="ftab${t.id===active?' active':''}" onclick="catalogFilter('${t.id}')">${t.label}</button>`).join('');
  render();
  Chatbot.init&&setTimeout(()=>Chatbot.init(),400);
}

// ── CATEGORY DETAIL ───────────────────────────────────────────
function renderCategory(opts={}) {
  const cat=CATEGORIES.find(c=>c.id===opts.catId);
  if(!cat){Router.go('catalog');return;}
  const prods=PRODUCTS.filter(p=>p.cat===cat.id);
  renderNavbar('catalog');

  document.getElementById('app').innerHTML = `
    <div style="padding-top:62px;min-height:100vh">
      <div class="cat-page-hero">
        <img src="${cat.img}" alt="${cat.name}" onerror="this.src='${fallbackImg()}'"/>
        <div class="cat-page-hero-txt">
          <div class="hindi">${cat.hindi}</div>
          <h1>${cat.icon} ${cat.name}</h1>
          <p>${cat.desc}</p>
        </div>
      </div>
      <section style="background:var(--cream)">
        <div class="container">
          <div class="breadcrumb">
            <a onclick="Router.go('home')">Home</a><span>›</span>
            <a onclick="Router.go('catalog')">Catalog</a><span>›</span>
            <span>${cat.name}</span>
          </div>
          ${cat.customizable?`
          <div class="cat-custom-banner">
            <div class="ccb-txt">
              <h4>✨ ${cat.tagline}</h4>
              <p>Tell us your outfit color, preferred flowers and we\'ll design it to match perfectly!</p>
            </div>
            <button class="btn-purple" onclick="openWA('Namaste! I want a custom ${cat.name} to match my outfit. Can you help me design one?')">
              ✨ Custom Order
            </button>
          </div>`:''}
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;margin-bottom:1.8rem">
            <div>
              <div class="sec-label">${cat.icon} ${prods.length} Products</div>
              <h2 class="sec-title">All <em>${cat.name}</em></h2>
            </div>
            <button class="btn-outline" onclick="openWA('I need a custom ${cat.name} — can you help?')">📲 Custom Order</button>
          </div>
          <div class="prod-grid">${prods.length
            ?prods.map(productCardHTML).join('')
            :`<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--light)">
                No products yet — <a style="color:var(--saffron)" onclick="openWA('I need ${cat.name}')">WhatsApp for custom orders!</a>
              </div>`}</div>
        </div>
      </section>
      <section style="background:#fff">
        <div class="container">
          <div class="sec-hdr">
            <div class="sec-label">🌸 More Collections</div>
            <h2 class="sec-title">You Might Also <em>Like</em></h2>
          </div>
          <div class="cat-grid">
            ${CATEGORIES.filter(c=>c.id!==cat.id).slice(0,5).map(c=>`
              <div class="cat-card" onclick="Router.go('category',{catId:'${c.id}'})">
                <div class="cat-img"><img src="${c.img}" alt="${c.name}" loading="lazy" onerror="this.src='${fallbackImg()}'"/>
                ${c.customizable?`<div class="cat-customizable-badge">✨</div>`:''}
                </div>
                <div class="cat-body"><div class="cat-name">${c.name}</div><div class="cat-tagline">${c.tagline}</div><div class="cat-link">Browse →</div></div>
              </div>`).join('')}
          </div>
        </div>
      </section>
      ${renderFooterHTML()}${floatBtn()}
    </div>`;
  initScrollReveal();
  Chatbot.init&&setTimeout(()=>Chatbot.init(),400);
}

// ── CART ──────────────────────────────────────────────────────
function renderCart() {
  renderNavbar();
  document.getElementById('app').innerHTML=`
    <div style="padding-top:62px;min-height:100vh;background:var(--cream)">
      <section>
        <div class="container" style="max-width:720px">
          <div class="breadcrumb"><a onclick="Router.go('home')">Home</a><span>›</span><span>Cart</span></div>
          <div class="sec-label">🛒 Your Cart</div>
          <h2 class="sec-title" style="margin-bottom:1.8rem">Review Your <em>Order</em></h2>
          <div id="cartList"></div>
          <div id="cartSummary"></div>
        </div>
      </section>
    </div>`;
  drawCart();
}
function drawCart() {
  const cart=State.getCart(); const listEl=document.getElementById('cartList'); const sumEl=document.getElementById('cartSummary');
  if(!listEl) return;
  if(!cart.length){
    listEl.innerHTML=`<div class="cart-empty"><div class="ce-icon">🛒</div><p>Your cart is empty!</p>
      <button class="btn-primary" style="margin:1.5rem auto 0" onclick="Router.go('catalog')">🌸 Browse Products</button></div>`;
    sumEl.innerHTML=''; return;
  }
  listEl.innerHTML=`<div class="cart-list">${cart.map(item=>{
    const p=PRODUCTS.find(x=>x.id===item.id); if(!p) return '';
    return `<div class="cart-item">
      <img src="${p.img}" alt="${p.name}" onerror="this.src='${fallbackImg()}'"/>
      <div class="ci-info">
        <div class="ci-name">${p.name}</div>
        <div class="ci-price">${fmt(p.price)}${p.unit?` / ${p.unit}`:''}</div>
        <div style="font-size:.75rem;color:var(--light)">Subtotal: ${fmt(p.price*item.qty)}</div>
      </div>
      <div class="ci-actions">
        <div class="qty-ctrl">
          <button onclick="cartUpd(${p.id},${item.qty-1})">−</button>
          <span>${item.qty}</span>
          <button onclick="cartUpd(${p.id},${item.qty+1})">+</button>
        </div>
        <button class="ci-remove" onclick="cartUpd(${p.id},0)">🗑️</button>
      </div>
    </div>`;}).join('')}</div>`;
  const total=State.cartTotal(); const del=total>5000?0:200;
  sumEl.innerHTML=`
    <div class="cart-summary-card">
      <div class="cs-row"><span class="cs-label">Subtotal</span><span class="cs-val">${fmt(total)}</span></div>
      <div class="cs-row"><span class="cs-label">Delivery</span><span class="cs-val">${del===0?'🎉 Free':fmt(del)}</span></div>
      ${del>0?`<div style="font-size:.74rem;color:var(--green);padding:.3rem 0">Add ${fmt(5000-total)} more for free delivery!</div>`:''}
      <div class="cs-row"><span class="cs-total-label">Total</span><span class="cs-total-val">${fmt(total+del)}</span></div>
    </div>
    <button class="btn-primary btn-full" style="margin-bottom:.7rem" onclick="Router.go('purchase',{fromCart:true})">🛒 Proceed to Order</button>
    <button class="btn-outline btn-full" onclick="Router.go('catalog')">← Continue Shopping</button>
    <p class="wa-note" style="margin-top:1rem">${WA_SVG} You\'ll confirm via WhatsApp after filling your details</p>`;
}
window.cartUpd=function(id,qty){ if(qty<1)State.cartRemove(id); else State.cartQty(id,qty); State.updateNavBadges(); drawCart(); };

// ── WISHLIST ──────────────────────────────────────────────────
function renderWishlist(opts={}) {
  renderNavbar();
  const tab=opts.tab||'wishlist';
  document.getElementById('app').innerHTML=`
    <div style="padding-top:62px;min-height:100vh;background:var(--cream)">
      <section>
        <div class="container" style="max-width:960px">
          <div class="breadcrumb"><a onclick="Router.go('home')">Home</a><span>›</span><span>Saved</span></div>
          <h2 class="sec-title" style="margin-bottom:1.2rem">Your <em>Saved Items</em></h2>
          <div class="wl-tabs">
            <button class="wl-tab ${tab==='wishlist'?'active':''}" onclick="Router.go('wishlist',{tab:'wishlist'})">🔖 Wishlist<span class="wl-count-badge">${State.getWishlist().length}</span></button>
            <button class="wl-tab ${tab==='liked'?'active':''}"    onclick="Router.go('wishlist',{tab:'liked'})">❤️ Liked<span class="wl-count-badge">${State.getLiked().length}</span></button>
          </div>
          <div id="wlContent"></div>
        </div>
      </section>
    </div>`;
  const ids=tab==='wishlist'?State.getWishlist():State.getLiked();
  const list=ids.map(id=>PRODUCTS.find(p=>p.id===id)).filter(Boolean);
  document.getElementById('wlContent').innerHTML=list.length
    ?`<div class="prod-grid">${list.map(productCardHTML).join('')}</div>`
    :`<div class="empty-state"><div class="icon">${tab==='wishlist'?'🔖':'❤️'}</div>
       <h3>Nothing saved yet</h3><p>${tab==='wishlist'?'Save products to wishlist':'Like products'} to find them here.</p>
       <button class="btn-primary" style="margin:1.5rem auto 0" onclick="Router.go('catalog')">🌸 Browse Products</button></div>`;
}

// ── PURCHASE ──────────────────────────────────────────────────
function renderPurchase(opts={}) {
  renderNavbar();
  const fromCart=opts.fromCart||false;
  let items=[];
  if(fromCart) items=State.getCart().map(i=>{const p=PRODUCTS.find(x=>x.id===i.id);return p?{product:p,qty:i.qty}:null}).filter(Boolean);
  else if(opts.product) items=[{product:opts.product,qty:opts.qty||1}];
  if(!items.length){Router.go('catalog');return;}
  const subtotal=items.reduce((s,i)=>s+i.product.price*i.qty,0);
  const delivery=subtotal>5000?0:200;
  const total=subtotal+delivery;
  const today=new Date().toISOString().split('T')[0];

  document.getElementById('app').innerHTML=`
    <div style="padding-top:62px;min-height:100vh;background:var(--cream)">
      <section>
        <div class="page-inner" style="padding-top:2rem">
          <button class="page-back" onclick="history.back()">← Back</button>
          <div class="page-title">Complete Your Order</div>
          <p class="page-sub">Fill your details — we\'ll open WhatsApp with everything pre-filled 📲</p>

          <!-- ITEMS -->
          ${items.map(i=>`
            <div class="order-summary-box">
              <img src="${i.product.img}" alt="${i.product.name}" onerror="this.src='${fallbackImg()}'"/>
              <div>
                <div class="osb-name">${i.product.name}</div>
                <div class="osb-price">${fmt(i.product.price)}${i.product.unit?` / ${i.product.unit}`:''}</div>
                <div class="osb-qty">Qty: ${i.qty} &nbsp;·&nbsp; Subtotal: ${fmt(i.product.price*i.qty)}</div>
              </div>
            </div>`).join('')}

          <!-- CUSTOMER DETAILS -->
          <div class="form-card">
            <h3>📋 Your Details</h3>
            <div class="form-row">
              <div class="form-group"><label>Full Name *</label><input id="fname" type="text" placeholder="Your full name"/></div>
              <div class="form-group"><label>WhatsApp Number *</label><input id="fphone" type="tel" placeholder="10-digit number" maxlength="10" value="${State.getPhone()||''}"/></div>
            </div>
          </div>

          <!-- DELIVERY ADDRESS -->
          <div class="form-card">
            <h3>📍 Delivery Address</h3>
            <div class="form-row full">
              <div class="form-group"><label>House / Flat / Building *</label><input id="fhouse" type="text" placeholder="House no., Flat no., Building name"/></div>
            </div>
            <div class="form-row">
              <div class="form-group"><label>Street / Gali / Lane *</label><input id="fstreet" type="text" placeholder="Street name or Gali no."/></div>
              <div class="form-group"><label>Locality / Colony *</label><input id="flocality" type="text" placeholder="Colony, Sector, Mohalla"/></div>
            </div>
            <div class="form-row three">
              <div class="form-group"><label>City *</label>
                <select id="fcity">
                  <option>Delhi</option><option>Noida</option><option>Greater Noida</option>
                  <option>Gurgaon</option><option>Faridabad</option><option>Ghaziabad</option>
                  <option>Dadri</option><option>Bahadurgarh</option><option>Sonipat</option><option>Other</option>
                </select>
              </div>
              <div class="form-group"><label>Landmark</label><input id="flandmark" type="text" placeholder="Near school, metro etc."/></div>
              <div class="form-group"><label>PIN Code</label><input id="fpin" type="text" placeholder="110001" maxlength="6"/></div>
            </div>
          </div>

          <!-- DELIVERY SLOT -->
          <div class="form-card">
            <h3>📅 Delivery Details</h3>
            <div class="form-row">
              <div class="form-group"><label>Delivery Date *</label><input id="fdate" type="date" min="${today}" value="${today}"/></div>
              <div class="form-group"><label>Preferred Time</label>
                <select id="ftime">
                  <option>Early Morning (5 AM – 8 AM)</option>
                  <option>Morning (8 AM – 12 PM)</option>
                  <option selected>Afternoon (12 PM – 4 PM)</option>
                  <option>Evening (4 PM – 8 PM)</option>
                  <option>Night (8 PM – 11 PM)</option>
                </select>
              </div>
            </div>
            <div class="form-row full">
              <div class="form-group"><label>Special Instructions / Customization</label>
                <textarea id="fnotes" placeholder="Specific flower color, size, outfit color for matching, function details, anything special…"></textarea>
              </div>
            </div>
          </div>

          <!-- TOTAL -->
          <div class="purchase-total-bar">
            <div>
              <div class="ptb-label">Order Total</div>
              <div style="font-size:.78rem;color:var(--mid);margin-top:.2rem">
                Subtotal ${fmt(subtotal)} + Delivery ${delivery===0?'FREE 🎉':fmt(delivery)}
              </div>
            </div>
            <div class="ptb-amount">${fmt(total)}</div>
          </div>

          <button class="btn-wa-lg" onclick="confirmOrder()">
            <span style="display:inline-flex;align-items:center;gap:8px">${WA_SVG} Send Order on WhatsApp</span>
          </button>
          <p class="wa-note">📱 WhatsApp opens with all your details pre-filled — just hit send!</p>
        </div>
      </section>
    </div>`;

  window.confirmOrder=function(){
    const name=document.getElementById('fname').value.trim();
    const phone=document.getElementById('fphone').value.trim().replace(/\D/g,'');
    const house=document.getElementById('fhouse').value.trim();
    const street=document.getElementById('fstreet').value.trim();
    const locality=document.getElementById('flocality').value.trim();
    const city=document.getElementById('fcity').value;
    const landmark=document.getElementById('flandmark').value.trim();
    const pin=document.getElementById('fpin').value.trim();
    const date=document.getElementById('fdate').value;
    const time=document.getElementById('ftime').value;
    const notes=document.getElementById('fnotes').value.trim();
    if(!name||!phone||!house||!street||!locality){alert('Please fill in name, WhatsApp number and full address.');return;}
    if(phone.length<10){alert('Please enter a valid 10-digit WhatsApp number.');return;}
    State.setPhone(phone);
    const addr=[house,street,locality,landmark?`Near ${landmark}`:'',city,pin?`PIN ${pin}`:''].filter(Boolean).join(', ');
    const lines=items.map(i=>`  • ${i.product.name} × ${i.qty} = ${fmt(i.product.price*i.qty)}`).join('\n');
    const msg=` *New Order — PhoolPatte*\n\n *Items:*\n${lines}\n\n *Subtotal:* ${fmt(subtotal)}\n *Delivery:* ${delivery===0?'FREE 🎉':fmt(delivery)}\n *Total:* ${fmt(total)}\n\n *Name:* ${name}\n *WhatsApp:* ${phone}\n📍 *Address:*\n${addr}\n *Delivery Date:* ${date}\n *Time Slot:* ${time}${notes?`\n *Instructions:* ${notes}`:''}\n\nPlease confirm availability and delivery slot. Thank you! 🙏`;
    if(fromCart) State.cartClear();
    openWA(msg);
  };
}

// ── DELIVERY PAGE ─────────────────────────────────────────────
function renderDelivery(){
  renderNavbar('delivery');
  document.getElementById('app').innerHTML=`
    <div style="padding-top:62px;min-height:100vh;background:#fff">
      <section style="text-align:center">
        <div class="container" style="max-width:700px">
          <div class="breadcrumb" style="justify-content:center"><a onclick="Router.go('home')">Home</a><span>›</span><span>Delivery</span></div>
          <div class="sec-label" style="justify-content:center">🚚 Delivery Info</div>
          <h2 class="sec-title fu">We Deliver Across <em>Delhi NCR</em></h2>
          <p class="sec-sub fu" style="margin:.5rem auto 1.5rem">Same-day delivery most areas. Order before 6 PM for evening delivery, before 10 PM for next morning.</p>
          <div class="area-pills fu">${DELIVERY_AREAS.map(a=>`<span class="area-pill">${a}</span>`).join('')}</div>
          <div style="background:var(--cream);border-radius:var(--r-lg);padding:1.5rem;margin:1.5rem 0;text-align:left" class="fu">
            <div class="sec-label">📋 Delivery Policy</div>
            <ul style="list-style:none;display:flex;flex-direction:column;gap:.7rem;margin-top:.8rem">
              <li style="font-size:.88rem;color:var(--mid);display:flex;gap:8px"><span>⚡</span><span><strong>Same Day:</strong> Order before 6 PM — delivered by 10 PM</span></li>
              <li style="font-size:.88rem;color:var(--mid);display:flex;gap:8px"><span>🌅</span><span><strong>Next Morning:</strong> Order by 10 PM — delivered by 8 AM</span></li>
              <li style="font-size:.88rem;color:var(--mid);display:flex;gap:8px"><span>🎉</span><span><strong>Free Delivery:</strong> On orders above ₹5,000</span></li>
              <li style="font-size:.88rem;color:var(--mid);display:flex;gap:8px"><span>💬</span><span><strong>Custom Slots:</strong> WhatsApp for specific time booking</span></li>
            </ul>
          </div>
          <button class="btn-primary" style="margin:0 auto" onclick="openWA('Namaste! Do you deliver to my area? My location: ')">
            <span style="display:inline-flex;align-items:center;gap:5px">${WA_SVG} Check My Area</span>
          </button>
        </div>
      </section>
      ${renderFooterHTML()}${floatBtn()}
    </div>`;
  initScrollReveal();
}

// ── OCCASIONS PAGE ────────────────────────────────────────────
function renderOccasions(){
  renderNavbar('occasions');
  document.getElementById('app').innerHTML=`
    <div style="padding-top:62px;min-height:100vh">
      <section class="occasions" style="min-height:55vh;display:flex;align-items:center">
        <div class="container occ-inner" style="width:100%">
          <div class="sec-label">🎊 All Functions</div>
          <h2 class="sec-title">We Serve Every <em>Occasion</em></h2>
          <p class="sec-sub">Select your function — we\'ll guide you on WhatsApp instantly</p>
          <div class="occ-grid" style="margin-top:2.5rem">
            ${OCCASIONS.map(o=>`<div class="occ-pill" onclick="openWA('${o.msg}')">${o.icon} ${o.label}</div>`).join('')}
          </div>
        </div>
      </section>
      <section style="background:#fff">
        <div class="container">
          <div class="sec-hdr fu">
            <div class="sec-label">🌸 Browse Products</div>
            <h2 class="sec-title">Shop Our <em>Collections</em></h2>
          </div>
          <div class="cat-grid fu">
            ${CATEGORIES.map(c=>`
              <div class="cat-card" onclick="Router.go('category',{catId:'${c.id}'})">
                <div class="cat-img"><img src="${c.img}" alt="${c.name}" loading="lazy" onerror="this.src='${fallbackImg()}'"/>
                ${c.customizable?`<div class="cat-customizable-badge">✨</div>`:''}
                </div>
                <div class="cat-body"><div class="cat-name">${c.name}</div><div class="cat-tagline">${c.tagline}</div><div class="cat-link">Browse →</div></div>
              </div>`).join('')}
          </div>
        </div>
      </section>
      ${renderFooterHTML()}${floatBtn()}
    </div>`;
  initScrollReveal();
}

// ── 404 PAGE ──────────────────────────────────────────────────
function render404() {
  renderNavbar();
  document.getElementById('app').innerHTML = `
    <div style="padding-top:62px;min-height:100vh;background:var(--cream);display:flex;align-items:center;justify-content:center">
      <div style="text-align:center;padding:3rem 1.5rem;max-width:480px">
        <div style="font-size:6rem;line-height:1;margin-bottom:1rem">🌸</div>
        <div style="font-family:'Playfair Display',serif;font-size:5rem;font-weight:700;color:var(--saffron);line-height:1;margin-bottom:.5rem">404</div>
        <h2 style="font-family:'Playfair Display',serif;font-size:1.6rem;color:var(--dark);margin-bottom:.8rem">Page Not Found</h2>
        <p style="color:var(--mid);font-size:.95rem;margin-bottom:.5rem">Yeh page abhi available nahi hai.</p>
        <p style="color:var(--light);font-size:.85rem;margin-bottom:2rem">The page you're looking for doesn't exist or may have moved.</p>
        <div style="display:flex;flex-direction:column;gap:.8rem;align-items:center">
          <button class="btn-primary" onclick="Router.go('home')" style="width:220px">🏠 Go to Home</button>
          <button class="btn-outline" onclick="Router.go('catalog')" style="width:220px">🌸 Browse Catalog</button>
          <button class="btn-outline" onclick="openWA('Namaste PhoolPatte! I need help finding something on the website.')" style="width:220px;display:flex;align-items:center;justify-content:center;gap:6px">${WA_SVG} WhatsApp Us</button>
        </div>
        <p style="margin-top:2.5rem;font-size:.78rem;color:var(--light)">© PhoolPatte — Delhi NCR's Flower Shop</p>
      </div>
    </div>
    ${floatBtn()}`;
}
