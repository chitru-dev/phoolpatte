// ============================================================
//  PhoolPatte — STATE.JS
// ============================================================
const State = (() => {
  function load(key, fb=[]) { try{return JSON.parse(localStorage.getItem('pp_'+key))??fb}catch{return fb} }
  function save(key,val)    { try{localStorage.setItem('pp_'+key,JSON.stringify(val))}catch{} }

  let cart     = load('cart',    []);
  let wishlist = load('wishlist',[]);
  let liked    = load('liked',   []);
  let phone    = load('phone',   null);

  function cartAdd(id,qty=1){ const e=cart.find(i=>i.id===id); if(e)e.qty+=qty; else cart.push({id,qty}); save('cart',cart); updateNavBadges(); logProductVisit(id); }
  function cartRemove(id)   { cart=cart.filter(i=>i.id!==id); save('cart',cart); updateNavBadges(); }
  function cartQty(id,qty)  { const e=cart.find(i=>i.id===id); if(!e)return; if(qty<1){cartRemove(id);return;} e.qty=qty; save('cart',cart); }
  function cartClear()      { cart=[]; save('cart',cart); updateNavBadges(); }
  function getCart()        { return cart.slice(); }
  function cartCount()      { return cart.reduce((s,i)=>s+i.qty,0); }
  function cartTotal()      { return cart.reduce((s,i)=>{ const p=PRODUCTS.find(x=>x.id===i.id); return s+(p?p.price*i.qty:0); },0); }
  function isInCart(id)     { return cart.some(i=>i.id===id); }

  function toggleWishlist(id){ if(wishlist.includes(id))wishlist=wishlist.filter(i=>i!==id); else wishlist.push(id); save('wishlist',wishlist); updateNavBadges(); logProductVisit(id); return wishlist.includes(id); }
  function isWishlisted(id)  { return wishlist.includes(id); }
  function getWishlist()     { return wishlist.slice(); }

  function toggleLike(id)    { if(liked.includes(id))liked=liked.filter(i=>i!==id); else liked.push(id); save('liked',liked); logProductVisit(id); return liked.includes(id); }
  function isLiked(id)       { return liked.includes(id); }
  function getLiked()        { return liked.slice(); }

  function getPhone()        { return phone; }
  function hasPhone()        { return !!phone; }
  function setPhone(num)     { phone=num; save('phone',num); logUserPhone(num); }

  function updateNavBadges(){
    const cb=document.getElementById('cartBadge'); const wb=document.getElementById('wishBadge');
    if(cb){const c=cartCount();cb.textContent=c;cb.classList.toggle('show',c>0)}
    if(wb){const w=wishlist.length;wb.textContent=w;wb.classList.toggle('show',w>0)}
  }
  return {cartAdd,cartRemove,cartQty,cartClear,getCart,cartCount,cartTotal,isInCart,toggleWishlist,isWishlisted,getWishlist,toggleLike,isLiked,getLiked,getPhone,hasPhone,setPhone,updateNavBadges};
})();
