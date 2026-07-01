var Router = (() => {
  const routes = {
    home:      ()  => renderHome(),
    catalog:   (o) => renderCatalog(o),
    category:  (o) => renderCategory(o),
    cart:      ()  => renderCart(),
    wishlist:  (o) => renderWishlist(o),
    purchase:  (o) => renderPurchase(o),
    delivery:  ()  => renderDelivery(),
    occasions: ()  => renderOccasions(),
    '404':     ()  => render404(),
  };

  function go(page, opts={}) {
    const fn = routes[page];
    if (!fn) { go('404'); return; }
    window.scrollTo({ top:0, behavior:'instant' });
    fn(opts);
    history.pushState({ page, opts }, '', `#${page}`);
  }

  window.addEventListener('popstate', (e) => {
    if (e.state?.page) { const fn = routes[e.state.page]; if(fn){ fn(e.state.opts||{}); return; } }
    renderHome();
  });

  function init() {
    const hash = window.location.hash.replace('#','').split('?')[0];
    if (routes[hash]) go(hash);
    else if (hash && hash.length > 0) go('404');
    else go('home');
  }

  return { go, init };
})();
