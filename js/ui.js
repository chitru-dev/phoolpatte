// ============================================================
//  PhoolPatte — UI.JS  (Navbar, PhoneGate, Toast, Modal, Chatbot, Cards)
// ============================================================

// ── TOAST ─────────────────────────────────────────────────────
var Toast = (() => {
  let el, timer;
  function init() {
    el = document.createElement('div');
    el.id = 'toast';
    Object.assign(el.style, {
      position:'fixed',bottom:'5.5rem',left:'50%',transform:'translateX(-50%) translateY(20px)',
      background:'var(--dark)',color:'#fff',borderRadius:'50px',padding:'.65rem 1.4rem',
      fontSize:'.84rem',fontWeight:'600',whiteSpace:'nowrap',zIndex:'1000',
      opacity:'0',transition:'all .28s',pointerEvents:'none',
      display:'flex',alignItems:'center',gap:'7px',boxShadow:'0 6px 24px rgba(0,0,0,.25)'
    });
    document.body.appendChild(el);
  }
  function show(msg, icon='✅') {
    if (!el) init();
    el.innerHTML = `${icon} ${msg}`;
    el.style.opacity='1'; el.style.transform='translateX(-50%) translateY(0)';
    clearTimeout(timer);
    timer = setTimeout(()=>{ el.style.opacity='0'; el.style.transform='translateX(-50%) translateY(20px)'; }, 2600);
  }
  return { show };
})();

// ── PHONE GATE ─────────────────────────────────────────────────
var PhoneGate = (() => {
  let pending = null;
  function render() {
    if (document.getElementById('gateOverlay')) return;
    document.body.insertAdjacentHTML('beforeend', `
      <div class="gate-overlay" id="gateOverlay">
        <div class="gate-box">
          <div class="gate-icon">📱</div>
          <div class="gate-title">One quick step!</div>
          <p class="gate-sub">Enter your WhatsApp number to like, wishlist or add to cart. We only use it for your orders.</p>
          <input class="gate-input" id="gateInput" type="tel" placeholder="Enter 10-digit WhatsApp number" maxlength="10"/>
          <button class="btn-primary btn-full" onclick="PhoneGate.confirm()">✅ Continue</button>
          <div class="gate-skip" onclick="PhoneGate.skip()">Skip for now</div>
          <p class="gate-privacy">🔒 Saved only on your device. Never shared.</p>
        </div>
      </div>`);
    document.getElementById('gateInput').addEventListener('keydown', e => { if(e.key==='Enter') PhoneGate.confirm(); });
  }
  function ask(cb) {
    if (State.hasPhone()) { cb(State.getPhone()); return; }
    render();
    pending = cb;
    document.getElementById('gateOverlay').classList.add('open');
    setTimeout(()=>document.getElementById('gateInput')?.focus(), 200);
  }
  function confirm() {
    const inp = document.getElementById('gateInput');
    const val = inp.value.trim().replace(/\D/g,'');
    if (val.length < 10) { inp.style.borderColor='var(--rose)'; inp.placeholder='Enter valid 10-digit number'; return; }
    State.setPhone(val); close();
    if (pending) { pending(val); pending=null; }
  }
  function skip() { close(); if(pending){pending(null);pending=null;} }
  function close() { document.getElementById('gateOverlay')?.classList.remove('open'); }

  // Change number from anywhere
  function changeNumber() {
    render();
    const ov = document.getElementById('gateOverlay');
    const box = ov.querySelector('.gate-box');
    box.querySelector('.gate-title').textContent = 'Change your number';
    box.querySelector('.gate-sub').textContent = 'Enter your new WhatsApp number below.';
    const inp = box.querySelector('#gateInput');
    inp.value = State.getPhone() || '';
    pending = (num) => { if(num) Toast.show('Number updated!','📱'); };
    ov.classList.add('open');
    setTimeout(()=>inp?.focus(),200);
  }

  return { ask, confirm, skip, changeNumber };
})();

// ── NAVBAR ─────────────────────────────────────────────────────
function renderNavbar(active='home') {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  const phone = State.getPhone();
  nav.innerHTML = `
    <div class="logo" onclick="Router.go('home')">
      <img class="logo-icon" src="${LOGO_URL}" alt="PhoolPatte Logo">
      <span class="logo-name">Phool<span>Patte</span></span>
    </div>
    <ul class="nav-links">
      <li><a onclick="Router.go('home')"     class="${active==='home'?'active':''}">Home</a></li>
      <li><a onclick="Router.go('catalog')"  class="${active==='catalog'?'active':''}">Catalog</a></li>
      <li><a onclick="Router.go('occasions')">Occasions</a></li>
      <li><a onclick="Router.go('delivery')">Delivery</a></li>
    </ul>
    <div class="nav-right">
      ${phone ? `<button class="change-num-link" onclick="PhoneGate.changeNumber()" title="Change number">📱 ${phone.slice(-4)}</button>` : ''}
      <button class="nav-icon-btn" onclick="Router.go('wishlist')" title="Saved">🤍<span class="nav-badge" id="wishBadge"></span></button>
      <button class="nav-icon-btn" onclick="Router.go('cart')"    title="Cart">🛒<span class="nav-badge" id="cartBadge"></span></button>
    </div>`;
  State.updateNavBadges();
}

// ── PRODUCT MODAL ──────────────────────────────────────────────
var ProductModal = (() => {
  let cur=null, qty=1;
  function render() {
    if (document.getElementById('modalOverlay')) return;
    document.body.insertAdjacentHTML('beforeend', `
      <div class="modal-overlay" id="modalOverlay" onclick="ProductModal.bgClick(event)">
        <div class="modal">
          <button class="modal-close" onclick="ProductModal.close()">✕</button>
          <div class="modal-img"><img id="mImg" src="" alt=""/><div class="modal-img-tag" id="mTag"></div></div>
          <div class="modal-info">
            <div class="modal-cat"  id="mCat"></div>
            <div class="modal-name" id="mName"></div>
            <div class="modal-price-row">
              <div class="modal-price" id="mPrice"></div>
              <div class="modal-orig"  id="mOrig"></div>
              <div class="modal-disc"  id="mDisc"></div>
            </div>
            <div class="modal-desc"     id="mDesc"></div>
            <div class="modal-includes" id="mIncl"></div>
            <div class="modal-qty-row">
              <label>Qty</label>
              <div class="qty-ctrl">
                <button onclick="ProductModal.dq(-1)">−</button>
                <span id="mQty">1</span>
                <button onclick="ProductModal.dq(1)">+</button>
              </div>
            </div>
            <div class="modal-like-row">
              <button class="modal-like-btn" id="mLike" onclick="ProductModal.like()">🤍 Like</button>
              <button class="modal-wish-btn" id="mWish" onclick="ProductModal.wish()"><span id="mWishIcon"></span> <span id="mWishLabel">Wishlist</span></button>
            </div>
            <div class="modal-action-row">
              <button class="btn-primary btn-full" onclick="ProductModal.cart()">🛒 Add to Cart</button>
              <button class="btn-wa-lg"            onclick="ProductModal.buy()">
                <span style="display:inline-flex;align-items:center;gap:6px">${WA_SVG} Order via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>`);
  }
  function open(id) {
    render();
    const p = PRODUCTS.find(x=>x.id===id); if(!p) return;
    cur=p; qty=1;
    logProductVisit(id);
    const cat = CATEGORIES.find(c=>c.id===p.cat);
    const isCustom = p.cat === 'custom';
    document.getElementById('mImg').src     = p.img;
    document.getElementById('mImg').onerror = function(){ this.src=fallbackImg(); };
    document.getElementById('mTag').textContent = p.tag;
    document.getElementById('mTag').className   = `modal-img-tag${isCustom?' custom':''}`;
    document.getElementById('mCat').textContent  = cat ? cat.name : '';
    document.getElementById('mName').textContent = p.name;
    // Custom products: show "Starting from ₹X"
    if(isCustom) {
      document.getElementById('mPrice').textContent = `Starting from ₹${p.price.toLocaleString('en-IN')}`;
      document.getElementById('mOrig').textContent  = '';
      document.getElementById('mDisc').textContent  = '';
    } else {
      document.getElementById('mPrice').textContent= fmt(p.price)+(p.unit?` / ${p.unit}`:'');
      document.getElementById('mOrig').textContent = fmt(p.orig);
      document.getElementById('mDisc').textContent = discPct(p.price,p.orig)+'% off';
    }
    document.getElementById('mDesc').textContent = p.desc;
    document.getElementById('mQty').textContent  = 1;
    document.getElementById('mIncl').innerHTML   = `<h4>Includes</h4><ul>${p.includes.map(i=>`<li>${i}</li>`).join('')}</ul>`;
    // Hide qty row and add-to-cart for custom products
    const qtyRow = document.querySelector('.modal-qty-row');
    const cartBtn = document.querySelector('.modal-action-row .btn-primary');
    if(qtyRow) qtyRow.style.display = isCustom ? 'none' : '';
    if(cartBtn) cartBtn.style.display = isCustom ? 'none' : '';
    syncLW();
    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow='hidden';
  }
  function syncLW() {
    if(!cur) return;
    const lb=document.getElementById('mLike'); const wb=document.getElementById('mWish');
    const lk=State.isLiked(cur.id); const wl=State.isWishlisted(cur.id);
    if(lb){lb.classList.toggle('active',lk);lb.textContent=lk?'❤️ Liked':'🤍 Like';}
    if(wb){
      wb.classList.toggle('active',wl);
      const iconEl=document.getElementById('mWishIcon');
      const labelEl=document.getElementById('mWishLabel');
      if(iconEl) iconEl.innerHTML=wishIconSVG(wl);
      if(labelEl) labelEl.textContent=wl?'Wishlisted':'Wishlist';
    }
  }
  function dq(d){ qty=Math.max(1,qty+d); document.getElementById('mQty').textContent=qty; }
  function like(){ PhoneGate.ask(()=>{ const n=State.toggleLike(cur.id); syncLW(); refreshCard(cur.id); Toast.show(n?'Added to Liked!':'Removed',n?'❤️':'🤍'); }); }
  function wish(){ PhoneGate.ask(()=>{ const n=State.toggleWishlist(cur.id); syncLW(); refreshCard(cur.id); Toast.show(n?'Added to Wishlist!':'Removed','💾'); }); }
  function cart(){ PhoneGate.ask(()=>{ State.cartAdd(cur.id,qty); refreshCard(cur.id); Toast.show('Added to cart!','🛒'); close(); }); }
  function buy()  { close(); Router.go('purchase',{product:cur,qty}); }
  function bgClick(e){ if(e.target===document.getElementById('modalOverlay')) close(); }
  function close(){ document.getElementById('modalOverlay')?.classList.remove('open'); document.body.style.overflow=''; cur=null; }
  return {open,close,dq,like,wish,cart,buy,bgClick};
})();

// ── CARD HELPERS ───────────────────────────────────────────────
function refreshCard(id) {
  const card = document.querySelector(`[data-pid="${id}"]`);
  if (!card) return;
  const lb=card.querySelector('.like-btn'); const wb=card.querySelector('.wish-btn');
  if(lb){lb.classList.toggle('liked',State.isLiked(id));lb.textContent=State.isLiked(id)?'❤️':'🤍';}
  if(wb){wb.classList.toggle('wishlisted',State.isWishlisted(id));wb.innerHTML=wishIconSVG(State.isWishlisted(id));}
}
function cardLike(id){ PhoneGate.ask(()=>{ const n=State.toggleLike(id); refreshCard(id); Toast.show(n?'Liked!':'Removed','❤️'); }); }
function cardWish(id){ PhoneGate.ask(()=>{ const n=State.toggleWishlist(id); refreshCard(id); Toast.show(n?'Wishlisted!':'Removed','🔖'); }); }
function cardCart(id){ PhoneGate.ask(()=>{ State.cartAdd(id,1); refreshCard(id); Toast.show('Added to cart!','🛒'); }); }

// SVG icons for wishlist (hollow/filled bookmark)
function wishIconSVG(filled) {
  return filled
    ? `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#E8651A"><path d="M5 3a2 2 0 0 0-2 2v16l9-4 9 4V5a2 2 0 0 0-2-2H5z"/></svg>`
    : `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9A7A5A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`;
}

function productCardHTML(p) {
  const tmap={'Popular':'hot','New':'new','Premium':'prem','Best Value':'value','Hot':'hot','Customized':'custom'};
  const tc = tmap[p.tag]||'hot';
  const isCustom = p.cat === 'custom';
  // "Starting from" label for custom products
  const priceDisplay = isCustom
    ? `<div class="prod-price">Starting ₹${p.price.toLocaleString('en-IN')}</div>`
    : `<div class="prod-price"><s>${fmt(p.orig)}</s> ${fmt(p.price)}</div>`;
  // Action button: custom → WhatsApp only; others → Add to Cart
  const actionBtn = isCustom
    ? `<button class="btn-wa-nav" style="font-size:.68rem;padding:.32rem .75rem;background:var(--wa);border:none;border-radius:50px;color:#fff;font-weight:700;display:flex;align-items:center;gap:4px" onclick="event.stopPropagation();openWA('Namaste! I want a custom ${p.name}. Can you help me?')">${WA_SVG}</button>`
    : `<button class="card-cart-btn" onclick="event.stopPropagation();cardCart(${p.id})"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg> Add</button>`;
  return `
    <div class="prod-card" data-pid="${p.id}" onclick="ProductModal.open(${p.id})">
      <div class="prod-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='${fallbackImg()}'"/>
        <div class="prod-tag ${tc}">${p.tag}</div>
        <div class="card-actions" onclick="event.stopPropagation()">
          <button class="card-action-btn like-btn ${State.isLiked(p.id)?'liked':''}" onclick="cardLike(${p.id})">${State.isLiked(p.id)?'❤️':'🤍'}</button>
          <button class="card-action-btn wish-btn ${State.isWishlisted(p.id)?'wishlisted':''}" onclick="cardWish(${p.id})">${wishIconSVG(State.isWishlisted(p.id))}</button>
        </div>
      </div>
      <div class="prod-body">
        <div class="prod-name">${p.name}</div>
        <div class="prod-desc">${p.desc}</div>
        <div class="prod-foot">
          <div>
            ${priceDisplay}
            ${p.unit?`<div class="prod-unit">${p.unit}</div>`:''}
          </div>
          ${actionBtn}
        </div>
      </div>
    </div>`;
}

// ── CHATBOT ────────────────────────────────────────────────────
var Chatbot = (() => {
  let open = false;
  const QUICK = ['Delivery areas','Pricing','Custom order','Fresh flowers','Payment','Jaimala','Chadar','Bulk flowers','Follow on Instagram','Other'];

  function init() {
    if (document.getElementById('chatBubbleBtn')) return;

    document.body.insertAdjacentHTML('beforeend', `
      <button class="chat-bubble-btn" id="chatBubbleBtn" onclick="Chatbot.toggle()">
        <span class="chat-dot"></span>
        <span class="label">Ask PhoolPatte</span>
      </button>

      <div class="chatbot-panel" id="chatbotPanel">
        <div class="chat-header">
          <div class="chat-header-info">
            <div class="chat-avatar">🌸</div>
            <div>
              <div class="chat-header-name">PhoolPatte Assistant</div>
              <div class="chat-header-status"><div class="chat-status-dot"></div> Online now</div>
            </div>
          </div>
          <button class="chat-close-btn" onclick="Chatbot.toggle()">✕</button>
        </div>
        <div class="chat-messages" id="chatMessages"></div>
        <div class="chat-quick-replies" id="chatQR"></div>
        <div class="chat-input-row">
          <input class="chat-input" id="chatInput" placeholder="Ask anything…" onkeydown="if(event.key==='Enter')Chatbot.send()"/>
          <button class="chat-send-btn" onclick="Chatbot.send()">➤</button>
        </div>
      </div>`);

    botMsg(`Namaste! 🌸 Welcome to PhoolPatte!\n\nI\'m here to help you with flowers, prices, delivery, and custom orders. What can I help you with?`);
    renderQR(QUICK);
  }

  function toggle() {
    init();
    open = !open;
    document.getElementById('chatbotPanel').classList.toggle('open', open);
    if (open) setTimeout(()=>scrollBottom(),100);
  }

  function renderQR(items) {
    const el = document.getElementById('chatQR');
    if (!el) return;
    el.innerHTML = items.map(q => `<button class="qr-btn" onclick="Chatbot.quickReply('${q}')">${q}</button>`).join('');
  }

  function botMsg(text, delay=0) {
    const msgs = document.getElementById('chatMessages');
    if (!msgs) return;
    // typing indicator
    const typing = document.createElement('div');
    typing.className='chat-msg typing bot';
    typing.innerHTML='<div class="typing-dots"><span></span><span></span><span></span></div>';
    msgs.appendChild(typing);
    scrollBottom();
    setTimeout(()=>{
      typing.remove();
      const m = document.createElement('div');
      m.className='chat-msg bot';
      m.textContent = text;
      msgs.appendChild(m);
      scrollBottom();
    }, delay||600);
  }

  function userMsg(text) {
    const msgs = document.getElementById('chatMessages');
    if (!msgs) return;
    const m = document.createElement('div');
    m.className='chat-msg user';
    m.textContent=text;
    msgs.appendChild(m);
    scrollBottom();
  }

  function scrollBottom() {
    const el=document.getElementById('chatMessages'); if(el) el.scrollTop=el.scrollHeight;
  }

  function quickReply(q) {
    init();
    if (!open) { open=true; document.getElementById('chatbotPanel').classList.add('open'); }
    userMsg(q);
    if (q === 'Other') {
      botMsg(`No problem! For any other query, our team is available directly on WhatsApp. 😊\n\nClick below to chat with us:`, 700);
      setTimeout(()=>{
        const msgs=document.getElementById('chatMessages');
        const btn=document.createElement('button');
        btn.className='btn-wa-lg';
        btn.style.cssText='width:auto;margin:.4rem 0;font-size:.8rem;padding:.6rem 1rem';
        btn.innerHTML=`${WA_SVG} Chat on WhatsApp`;
        btn.onclick=()=>openWA('Namaste PhoolPatte! I have a query that the chatbot couldn\'t answer. Can you help?');
        msgs.appendChild(btn);
        scrollBottom();
      }, 1400);
      renderQR(QUICK);
      return;
    }
    if (q === 'Follow on Instagram') {
      botMsg(`We'd love to have you! 📸\n\nFollow us on Instagram ${INSTAGRAM_HANDLE} for daily flower inspiration, real wedding photos and seasonal offers!`, 700);
      setTimeout(()=>{
        const msgs=document.getElementById('chatMessages');
        const btn=document.createElement('button');
        btn.className='btn-purple';
        btn.style.cssText='margin:.4rem 0;font-size:.8rem;padding:.55rem 1rem';
        btn.innerHTML=`${IG_SVG} Follow ${INSTAGRAM_HANDLE}`;
        btn.onclick=openIG;
        msgs.appendChild(btn);
        scrollBottom();
      }, 1300);
      renderQR(QUICK);
      return;
    }
    // Match KB
    const lower = q.toLowerCase();
    const match = CHATBOT_KB.find(kb => kb.q.some(kw => lower.includes(kw)));
    botMsg(match ? match.a : `Thanks for your question! 🌸\n\nFor the most accurate answer, please WhatsApp us directly — we reply within 30 minutes.\n\nOr browse our catalog to find what you need!`, 700);
    renderQR(QUICK);
  }

  function send() {
    const inp=document.getElementById('chatInput'); if(!inp) return;
    const txt=inp.value.trim(); if(!txt) return;
    inp.value='';
    init();
    if (!open) { open=true; document.getElementById('chatbotPanel').classList.add('open'); }
    userMsg(txt);
    const lower=txt.toLowerCase();
    const match=CHATBOT_KB.find(kb=>kb.q.some(kw=>lower.includes(kw)));
    botMsg(match?match.a:`Thanks for your message! 🌸\n\nFor a detailed answer, WhatsApp us — we reply within 30 minutes! You can also tap one of the quick replies below.`,800);
    renderQR(QUICK);
  }

  return { toggle, quickReply, send };
})();

// ── SCROLL REVEAL ─────────────────────────────────────────────
function initScrollReveal() {
  const obs = new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('vis'); }),{threshold:.1});
  document.querySelectorAll('.fu').forEach(el=>obs.observe(el));
}
