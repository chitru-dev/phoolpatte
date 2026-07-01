// ============================================================
//  PhoolPatte — CENTRAL DATA FILE  (edit product/category info here)
//  ⚠️  Credentials & keys live in js/config.js — keep that file private!
// ============================================================


// ── CATEGORIES ───────────────────────────────────────────────
// customizable:true → shows "Match it to your outfit!" tagline + custom order CTA
var CATEGORIES = [
  { id:'custom',    name:'Custom Orders',          hindi:'कस्टमाइज़ करें',       icon:'✨', customizable:false,
    tagline:'Apni pasand ke flowers, apna design — bilkul alag!',
    desc:'Share your outfit color, flower preference & budget — we design it from scratch on WhatsApp.',
    img:'https://res.cloudinary.com/ldrvfua0/image/upload/f_auto,q_auto/custom_order_qhdf3f', color:'#F3E8FF' },
  { id:'jaimala',   name:'Jaimala / Varmala',      hindi:'जयमाला / वरमाला',      icon:'💐', customizable:true,
    tagline:'Match your Varmala to your lehenga color perfectly!',
    desc:'Fresh rose, rajnigandha & orchid garlands — custom color, length & design.',
    img:'https://res.cloudinary.com/ldrvfua0/image/upload/v1782849262/jaimala_varmala_fiilvc.png', color:'#FFF3E0' },
  { id:'chadar',    name:'Phoolon ki Chadar',       hindi:'फूलों की चादर',        icon:'🌺', customizable:true,
    tagline:'Make her entry unforgettable — your colors, your flowers',
    desc:'Bridal entry canopy — held over the bride as she arrives.',
    img:'https://res.cloudinary.com/ldrvfua0/image/upload/v1782850536/phoolon_ki_chaddar_ufvmce.png', color:'#FCE4EC' },
  { id:'bouquet',   name:'Bouquets', hindi:'बुके ',        icon:'💝', customizable:true,
    tagline:'A bouquet as unique as your love story',
    desc:'Hand-crafted bouquets for bride, gifting, stage & car decoration.',
    img:'https://res.cloudinary.com/ldrvfua0/image/upload/v1782850678/bouquet_banner_ymeewp.png', color:'#FFF0F5' },
  { id:'jewellery', name:'Flower Jewellery',        hindi:'फूल ज्वेलरी',          icon:'💎', customizable:true,
    tagline:'Real flowers that complement your outfit perfectly',
    desc:'Haar, bangles, maang tikka & earrings made from real flowers.',
    img:'https://res.cloudinary.com/ldrvfua0/image/upload/v1782850284/flower_jewellery_ddreqv.png', color:'#E8F5E9' },
  { id:'bulk',      name:'Bulk Loose Flowers',   hindi:'थोक / मंदिर के फूल',  icon:'🏵️', customizable:false,
    tagline:'Fresh from Ghazipur Mandi every single morning',
    desc:'Genda, rose petals, mogra by kg — for pooja, mandap & decoration.',
    img:'https://res.cloudinary.com/ldrvfua0/image/upload/v1782850670/loose_flowers_otxqet.png', color:'#FFF8E1' },
  { id:'decoration',name:'Haldi / Mehendi Décor',  hindi:'हल्दी / मेहंदी डेकोर', icon:'🎊', customizable:true,
    tagline:'Set the vibe for your most-photographed function',
    desc:'Full backdrop, seating, props & entry arch — designed to match your theme.',
    img:'https://res.cloudinary.com/ldrvfua0/image/upload/v1782851314/haldi_mehendi_naex63.png', color:'#FBE9E7' },

];

// ── PRODUCTS ─────────────────────────────────────────────────
// tag: 'Popular'|'New'|'Premium'|'Best Value'|'Hot'|'Customized'
var PRODUCTS = [

  // ─ CUSTOM ORDERS (always first) ─
  { id:101, cat:'custom', name:'Design Your Own Jaimala', price:2000, orig:3000, tag:'Customized', unit:'',
    img:COMING_SOON_IMG,
    desc:'Pick your flowers, colors and length — we build your dream jaimala from scratch matching your outfit.',
    includes:['Your choice of flowers','Match to outfit color','Custom length','Pair for bride & groom','Free design consultation'] },
  { id:102, cat:'custom', name:'Custom Phoolon ki Chadar', price:4000, orig:6000, tag:'Customized', unit:'',
    img:COMING_SOON_IMG,
    desc:'Your dream bridal chadar — any flower, any color combination, any size. Designed just for your entry.',
    includes:['100% custom design','Flower & color choice','Size customization','Free consultation','Setup guide included'] },
  { id:103, cat:'custom', name:'Bespoke Wedding Décor Package', price:15000, orig:25000, tag:'Customized', unit:'',
    img:COMING_SOON_IMG,
    desc:'Full custom decoration for your function — we plan it together over WhatsApp from mood board to setup.',
    includes:['Complete consultation','Mood board creation','All flowers & setup','Haldi/Mehendi/Shaadi','Removal after function'] },
  { id:104, cat:'custom', name:'Custom Flower Jewellery Set', price:1500, orig:2200, tag:'Customized', unit:'per set',
    img:COMING_SOON_IMG,
    desc:'Full bridal flower jewellery set made to match your exact lehenga or saree shade — tell us the color!',
    includes:['Color-matched flowers','Haar + bangles + tikka','Earrings included','Stays fresh 10–12 hrs','Custom on any budget'] },
  { id:105, cat:'custom', name:'Custom Bouquet Design', price:800, orig:1400, tag:'Customized', unit:'',
    img:COMING_SOON_IMG,
    desc:'Send us your outfit photo and we design a bouquet that perfectly matches your look.',
    includes:['Outfit color matching','Premium ribbon wrap','Flowers of your choice','Gift packaging available','Same day available'] },

  // ─ JAIMALA ─
  { id:1, cat:'jaimala', name:'Royal Rose Jaimala', price:2500, orig:3200, tag:'Popular', unit:'',
    img:COMING_SOON_IMG,
    desc:'Fresh red & white roses with rajnigandha strings — 4–5 ft, stays fresh 24 hrs. Perfect for phera ceremony.',
    includes:['Premium red & white roses','Rajnigandha strings','4–5 ft standard length','Custom sizing on request'] },
  { id:2, cat:'jaimala', name:'Orchid & Rose Varmala', price:3500, orig:4500, tag:'Premium', unit:'',
    img:COMING_SOON_IMG,
    desc:'Luxurious orchid and rose varmala — modern and elegant for contemporary weddings.',
    includes:['Purple & white orchids','Red roses accent','Jasmine strings','Custom length available'] },
  { id:3, cat:'jaimala', name:'Mogra & Genda Jaimala', price:1800, orig:2400, tag:'Hot', unit:'',
    img:COMING_SOON_IMG,
    desc:'Traditional mogra and marigold jaimala — divine fragrance, auspicious for all wedding rituals.',
    includes:['Fresh mogra strings','Genda (marigold)','Traditional style','Pair for bride & groom'] },
  { id:4, cat:'jaimala', name:'Lily & Carnation Varmala', price:4200, orig:5500, tag:'New', unit:'',
    img:COMING_SOON_IMG,
    desc:'Exotic lily and carnation varmala — for couples who want something unique and different.',
    includes:['White lilies','Pink carnations','Green fillers','Custom design available'] },
  { id:20, cat:'jaimala', name:'Pink Rose Varmala', price:2200, orig:2900, tag:'Popular', unit:'',
    img:COMING_SOON_IMG,
    desc:'Soft pink rose varmala — elegant, romantic and perfect for a pastel-themed wedding.',
    includes:['Pink roses','Baby breath accent','4 ft length','Matching petals basket'] },
  { id:21, cat:'jaimala', name:'Full Rajnigandha Jaimala', price:1600, orig:2200, tag:'Hot', unit:'',
    img:COMING_SOON_IMG,
    desc:'Pure rajnigandha jaimala — heavenly fragrance that fills the whole mandap. A timeless classic.',
    includes:['Full rajnigandha strings','Deep fragrance','5 ft length','Pair included'] },

  // ─ CHADAR ─
  { id:5, cat:'chadar', name:'Classic Rose Phoolon ki Chadar', price:4500, orig:6000, tag:'Popular', unit:'',
    img:COMING_SOON_IMG,
    desc:'Bridal entry canopy with fresh red roses & marigold — held by family as the bride makes her grand entry.',
    includes:['Full red rose coverage','Marigold border','4 handles for family','Matching petals basket'] },
  { id:6, cat:'chadar', name:'White & Pink Luxe Chadar', price:6000, orig:8000, tag:'Premium', unit:'',
    img:COMING_SOON_IMG,
    desc:'Elegant white and pink floral chadar — dreamy and sophisticated for a modern bridal entry.',
    includes:['White & pink roses','Mogra flower strings','Decorative tassels','4–6 handles'] },
  { id:7, cat:'chadar', name:'Genda Phool Bridal Chadar', price:3200, orig:4200, tag:'Hot', unit:'',
    img:COMING_SOON_IMG,
    desc:'Vibrant marigold chadar — bright, traditional, full of festive energy for a classic Indian entry.',
    includes:['Fresh genda phool','Red rose accents','Chunni style design','4 handle points'] },
  { id:22, cat:'chadar', name:'Purple Orchid Chadar', price:7500, orig:10000, tag:'Premium', unit:'',
    img:COMING_SOON_IMG,
    desc:'Luxurious purple orchid & white rose chadar — a regal entry fit for a queen.',
    includes:['Purple & white orchids','Draping fabric base','Silver thread tassels','6 handles'] },

  // ─ BOUQUETS ─
  { id:30, cat:'bouquet', name:'Bridal Bouquet — Red Roses', price:1200, orig:1800, tag:'Popular', unit:'',
    img:COMING_SOON_IMG,
    desc:'Classic red rose bridal bouquet with baby breath and ribbon wrap — every bride\'s dream.',
    includes:['20 premium red roses','Baby breath fillers','Satin ribbon wrap','Lasts 24+ hours'] },
  { id:31, cat:'bouquet', name:'Pastel Mix Bouquet', price:1500, orig:2200, tag:'New', unit:'',
    img:COMING_SOON_IMG,
    desc:'Dreamy pastel bouquet with pink, peach, white & lilac flowers — perfect for modern brides.',
    includes:['Pink carnations','Peach roses','White lilies','Gift packaging'] },
  { id:32, cat:'bouquet', name:'Car Decoration Bouquets (Set of 4)', price:800, orig:1200, tag:'Hot', unit:'per set',
    img:COMING_SOON_IMG,
    desc:'Fresh flower bouquets to decorate the wedding car — set of 4 for bonnet, boot and doors.',
    includes:['4 bouquets','Rose & genda combo','Satin ribbons','Fits all cars'] },
  { id:33, cat:'bouquet', name:'Welcome Bouquet for Guests', price:500, orig:750, tag:'Best Value', unit:'each',
    img:COMING_SOON_IMG,
    desc:'Small but elegant welcome bouquets for VIP guests and family members — bulk discounts available.',
    includes:['5–7 stems per bouquet','Mix of seasonal flowers','Ribbon wrapped','Min order 10'] },

  // ─ JEWELLERY ─
  { id:8, cat:'jewellery', name:'Complete Bridal Flower Set', price:1800, orig:2500, tag:'Popular', unit:'per set',
    img:COMING_SOON_IMG,
    desc:'Full bridal flower jewellery with mogra & rose — all pieces for a complete floral look.',
    includes:['Haar (necklace)','2 Bangles','Maang tikka','Earrings','Fresh mogra & rose'] },
  { id:9, cat:'jewellery', name:'Mogra Haath Phool & Bangles', price:800, orig:1200, tag:'New', unit:'per set',
    img:COMING_SOON_IMG,
    desc:'Floral bangles and haath phool with fresh roses and mogra — perfect for haldi & mehendi.',
    includes:['2 floral bangles','Haath phool','Rose & mogra','Custom color available'] },
  { id:10, cat:'jewellery', name:'Rose Petal Maang Tikka', price:450, orig:650, tag:'Hot', unit:'',
    img:COMING_SOON_IMG,
    desc:'Delicate rose petal maang tikka — beautiful finishing touch for any bridal look.',
    includes:['Fresh rose petals','Mogra strings','Custom chain length','Stays fresh 8–10 hrs'] },
  { id:34, cat:'jewellery', name:'Groom Flower Sehra', price:1200, orig:1800, tag:'Hot', unit:'',
    img:COMING_SOON_IMG,
    desc:'Traditional mogra & rose sehra for the groom — drapes beautifully and smells divine.',
    includes:['Fresh mogra strings','Rose petal curtain','Adjustable size','Matching pocket flower'] },
  { id:35, cat:'jewellery', name:'Flower Anklets (Payal)', price:600, orig:900, tag:'New', unit:'per pair',
    img:COMING_SOON_IMG,
    desc:'Fresh flower anklets — delicate mogra and rose for the bride\'s feet. Stays fresh through the ceremony.',
    includes:['Mogra & mini rose','Adjustable fit','Matching toe ring option','Stays fresh 6–8 hrs'] },

  // ─ BULK ─
  { id:11, cat:'bulk', name:'Genda Phool (Marigold)', price:120, orig:160, tag:'Best Value', unit:'per kg',
    img:COMING_SOON_IMG,
    desc:'Fresh marigold by kg from Ghazipur Mandi — for temple, haldi setup, door torans & mandap. Min 5 kg.',
    includes:['Fresh marigold per kg','Min order 5 kg','Morning delivery available','Bulk pricing on 20+ kg'] },
  { id:12, cat:'bulk', name:'Red Rose Petals', price:200, orig:280, tag:'Popular', unit:'per kg',
    img:COMING_SOON_IMG,
    desc:'Fresh red rose petals by kg — for petal showers, flooring, bed decoration and chadar. Min 2 kg.',
    includes:['Fresh rose petals per kg','Min order 2 kg','Red or mixed available','Same day possible'] },
  { id:13, cat:'bulk', name:'Mogra (Jasmine)', price:350, orig:480, tag:'Hot', unit:'per kg',
    img:COMING_SOON_IMG,
    desc:'Fresh mogra (jasmine) by kg — divine fragrance for pooja, jewellery making and decoration.',
    includes:['Fresh mogra per kg','Fragrant & fresh','Min order 1 kg','Temple & wedding use'] },
  { id:14, cat:'bulk', name:'Mixed Temple Flowers Pack', price:90, orig:130, tag:'Best Value', unit:'per kg',
    img:COMING_SOON_IMG,
    desc:'Mixed seasonal flowers by kg — genda, rose, champa for daily pooja and temple.',
    includes:['Genda + rose + champa','Fresh daily','Min order 2 kg','Loose bulk packing'] },
  { id:36, cat:'bulk', name:'Lotus Flowers (Kamal)', price:45, orig:65, tag:'New', unit:'per piece',
    img:COMING_SOON_IMG,
    desc:'Fresh lotus flowers — sacred for pooja, havans and temple offerings. Min order 10 pieces.',
    includes:['Full bloom lotus','Min order 10 pcs','Fresh daily','Early morning delivery'] },
  { id:37, cat:'bulk', name:'Champa / Plumeria Bulk', price:180, orig:250, tag:'Popular', unit:'per kg',
    img:COMING_SOON_IMG,
    desc:'Fresh champa (plumeria) by kg — heavenly fragrance for garlands, pooja & mandap decoration.',
    includes:['Fresh champa per kg','Strong fragrance','Min order 2 kg','Daily fresh stock'] },

  // ─ DECORATION ─
  { id:15, cat:'decoration', name:'Full Haldi Setup', price:5500, orig:8000, tag:'Popular', unit:'',
    img:COMING_SOON_IMG,
    desc:'Complete haldi decoration — backdrop, bridal seating, entry arch & yellow flower props.',
    includes:['Floral backdrop','Bride + groom seat','Entry flower arch','Genda strings','Flower props'] },
  { id:16, cat:'decoration', name:'Mehendi Décor Setup', price:4500, orig:6500, tag:'New', unit:'',
    img:COMING_SOON_IMG,
    desc:'Colorful mehendi decoration with flowers, drapes and fairy lights.',
    includes:['Colorful floral backdrop','Seating decoration','Flower drapes & strings','LED fairy lights','Mehendi props'] },
  { id:38, cat:'decoration', name:'Sangeet Night Decoration', price:7000, orig:10000, tag:'Hot', unit:'',
    img:COMING_SOON_IMG,
    desc:'Vibrant sangeet decoration — flower strings, balloon clusters, backdrop and stage. Party ready!',
    includes:['Flower string backdrop','Stage decoration','Balloon cluster setup','LED fairy lights','Entry flower gate'] },
  { id:39, cat:'decoration', name:'Sagai (Engagement) Décor', price:4000, orig:6000, tag:'Popular', unit:'',
    img:COMING_SOON_IMG,
    desc:'Elegant engagement decoration — flower backdrop, ring ceremony table and seating.',
    includes:['Floral backdrop','Ring table decoration','Seating for couple','Flower petals scatter','Fairy lights'] },

];

// ── USER DATA LOG ────────────────────────────────────────────
// This is saved to localStorage per user. Export via admin later.
// Fields: phone, visitedProducts, likedProducts, wishlisted, cartItems
function getUserLog() {
  try { return JSON.parse(localStorage.getItem('pp_userlog')) || {}; } catch { return {}; }
}
function saveUserLog(log) {
  try { localStorage.setItem('pp_userlog', JSON.stringify(log)); } catch {}
}
function logProductVisit(productId) {
  const log = getUserLog();
  if (!log.visited) log.visited = [];
  if (!log.visited.includes(productId)) log.visited.push(productId);
  log.lastSeen = new Date().toISOString();
  saveUserLog(log);
}
function logUserPhone(phone) {
  const log = getUserLog();
  log.phone = phone;
  log.phoneSetAt = new Date().toISOString();
  saveUserLog(log);
}
// Call this to get a full summary for promotion use:
function getPromotionData() {
  const log = getUserLog();
  const state = {
    cart:      JSON.parse(localStorage.getItem('pp_cart')     || '[]'),
    wishlist:  JSON.parse(localStorage.getItem('pp_wishlist') || '[]'),
    liked:     JSON.parse(localStorage.getItem('pp_liked')    || '[]'),
  };
  return {
    phone:     log.phone      || null,
    visited:   log.visited    || [],
    wishlist:  state.wishlist,
    liked:     state.liked,
    cart:      state.cart,
    lastSeen:  log.lastSeen   || null,
  };
}

// ── TESTIMONIALS ─────────────────────────────────────────────
var TESTIMONIALS = [
  { name:'Priya Sharma',    loc:'Noida Sector 18',     avatar:'👩', bg:'#FFF3E0',
    text:'Jaimala was absolutely gorgeous! Rose petals so fresh, fragrance lasted all day. WhatsApp ordering super easy, delivered on time. Ordered again for sister\'s wedding!' },
  { name:'Rahul Verma',     loc:'Gurgaon DLF Phase 4', avatar:'👨', bg:'#FBE9E7',
    text:'Ordered phoolon ki chadar last minute — prepared overnight, delivered at 5 AM! Premium quality full rose cover. Bahut shukriya PhoolPatte!' },
  { name:'Sunita Agarwal',  loc:'Faridabad',            avatar:'👩', bg:'#E8F5E9',
    text:'Got full haldi decoration — backdrop, seat, genda strings, entry arch. Everything perfect, price very reasonable vs event companies!' },
  { name:'Deepak Malhotra', loc:'Greater Noida',        avatar:'👨', bg:'#EDE7F6',
    text:'Flower jewellery set for wife\'s haldi was stunning! Fresh mogra and rose, lasted the whole ceremony. Highly recommend.' },
  { name:'Ananya Kapoor',   loc:'South Delhi',           avatar:'👩', bg:'#FCE4EC',
    text:'Custom varmala matched my pink lehenga perfectly. The team was so helpful on WhatsApp and understood exactly what I wanted!' },
  { name:'Vikram Singh',    loc:'Ghaziabad',             avatar:'👨', bg:'#FFF8E1',
    text:'Bought genda phool in bulk for my mother\'s birthday pooja. Freshest flowers I\'ve seen — better than the local market. Will always order from here.' },
];

// ── DELIVERY AREAS ────────────────────────────────────────────
var DELIVERY_AREAS = [
  '🏙️ Delhi (All Areas)','🏢 Noida','🌆 Greater Noida',
  '🏗️ Gurgaon','🌃 Faridabad','🏘️ Ghaziabad',
  '🏡 Dadri','🌉 Bahadurgarh','🏙️ Sonipat',
  '🌇 Rohini','🏘️ Dwarka','🌆 Lajpat Nagar',
];

// ── OCCASIONS ────────────────────────────────────────────────
var OCCASIONS = [
  { icon:'🌼', label:'Haldi',              msg:'Main Haldi function ke liye decoration chahiye. Please share options and pricing.' },
  { icon:'🎨', label:'Mehendi',            msg:'Main Mehendi function ke liye decoration chahiye.' },
  { icon:'💒', label:'Shaadi',             msg:'Main Shaadi ke liye Jaimala/Varmala chahiye.' },
  { icon:'💍', label:'Sagai / Engagement', msg:'Main Sagai ke liye flowers/decoration chahiye.' },
  { icon:'🛕', label:'Pooja & Havan',      msg:'Main Pooja/Havan ke liye phool chahiye (genda, mogra, lotus, etc.).' },
  { icon:'🌺', label:'Phoolon ki Chadar',  msg:'Main Phoolon ki Chadar order karna chahta/chahti hoon.' },
  { icon:'🏠', label:'Griha Pravesh',      msg:'Main Griha Pravesh ke liye flowers aur decoration chahiye.' },
  { icon:'🎂', label:'Birthday',           msg:'Main Birthday ke liye flower decoration chahiye.' },
  { icon:'💑', label:'Anniversary',        msg:'Main Anniversary ke liye flowers/decoration chahiye.' },
  { icon:'👶', label:'Mundan / Namkaran',  msg:'Main Mundan/Namkaran ke liye flowers chahiye.' },
  { icon:'🎓', label:'Graduation',         msg:'Main Graduation ke liye bouquet/decoration chahiye.' },
];

// ── CHATBOT KNOWLEDGE BASE ───────────────────────────────────
var CHATBOT_KB = [
  { q:['delivery','deliver','area','location','noida','gurgaon','delhi','ncr','faridabad'],
    a:`We deliver across all of Delhi NCR — Delhi, Noida, Greater Noida, Gurgaon, Faridabad, Ghaziabad, and more! 🚚\n\n⚡ Same-day delivery if you order before 6 PM\n🌅 Next-morning delivery for orders before 10 PM\n🎉 Free delivery on orders above ₹5,000` },
  { q:['price','cost','rate','how much','kitna','cheap','expensive'],
    a:`Our prices start from:\n\n💐 Jaimala / Varmala — ₹1,600 onwards\n🌺 Phoolon ki Chadar — ₹3,200 onwards\n💎 Flower Jewellery — ₹450 onwards\n🏵️ Bulk flowers (genda) — ₹90/kg\n🎊 Haldi / Mehendi Décor — ₹4,500 onwards\n\nAll prices negotiable for bulk orders! WhatsApp us 😊` },
  { q:['fresh','quality','how fresh','mandi'],
    a:`All flowers are sourced fresh every morning from Ghazipur Phool Mandi — one of Asia's largest flower markets! 🌿\n\nWe NEVER use stored or old flowers. Your order is prepared the same day of delivery.` },
  { q:['custom','customize','match','outfit','color','lehenga','colour'],
    a:`Yes! We specialize in custom orders 🎨\n\nSend us:\n• Your outfit photo / color shade\n• Your preferred flowers\n• Your budget\n\nWe\'ll design your perfect jaimala, chadar, jewellery or decoration to match. WhatsApp us for a free consultation!` },
  { q:['time','when','hours','open','timing'],
    a:`We\'re open 6 AM – 10 PM, 7 days a week! 🕐\n\nYou can WhatsApp us anytime and we\'ll respond within 30 minutes during working hours.\n\n📦 Same-day delivery: order before 6 PM\n🌅 Next-morning: order before 10 PM` },
  { q:['payment','pay','upi','cash','online','gpay','phonepay'],
    a:`We accept all payment methods:\n\n📲 UPI (GPay, PhonePe, Paytm)\n💵 Cash on delivery (for select areas)\n🏦 Bank transfer\n\nPayment is collected at the time of delivery — no advance needed for standard orders!` },
  { q:['cancel','refund','return','wrong','mistake'],
    a:`Our cancellation policy:\n\n✅ Free cancellation up to 6 hours before delivery\n📞 Cancellations after that — WhatsApp us, we\'ll try our best\n\nIf there\'s any quality issue, we\'ll replace immediately. Your satisfaction is our priority! 🌸` },
  { q:['instagram','insta','follow','social','photos'],
    a:`Follow us on Instagram for daily flower inspiration! 📸\n\n${INSTAGRAM_HANDLE} — you\'ll see our latest work, seasonal offers and real wedding photos!\n\nWe post new designs every day 🌺` },
  { q:['jaimala','varmala','garland','haar'],
    a:`Our Jaimala & Varmala collection includes:\n\n💐 Royal Rose Jaimala — ₹2,500\n🌺 Orchid & Rose Varmala — ₹3,500\n🌼 Mogra & Genda Jaimala — ₹1,800\n✨ Custom Jaimala (match your outfit!) — ₹2,000+\n\nAll pairs include one for bride and groom. Custom colors available!` },
  { q:['chadar','phoolon','entry','bride'],
    a:`Phoolon ki Chadar (the flower canopy for bridal entry):\n\n🌹 Classic Rose Chadar — ₹4,500\n🤍 White & Pink Luxe Chadar — ₹6,000\n🌼 Genda Phool Chadar — ₹3,200\n✨ Custom Chadar — ₹4,000+\n\nAll include 4 handles for family members to hold!` },
  { q:['bulk','temple','pooja','kg','marigold','genda','mogra'],
    a:`Bulk & Temple Flowers:\n\n🏵️ Genda Phool — ₹120/kg (min 5 kg)\n🌹 Rose Petals — ₹200/kg (min 2 kg)\n🌸 Mogra / Jasmine — ₹350/kg (min 1 kg)\n🌺 Champa — ₹180/kg\n🪷 Lotus — ₹45/piece\n\nBulk discounts available for 20+ kg orders!` },
];

// ── HELPERS ───────────────────────────────────────────────────
var WA_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="width:1em;height:1em;vertical-align:middle"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.549 4.1 1.51 5.829L.057 23.25a.75.75 0 00.916.99l5.57-1.463A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.686-.483-5.25-1.336l-.376-.214-3.894 1.023 1.04-3.792-.232-.389A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>`;
var IG_SVG  = `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="width:1em;height:1em;vertical-align:middle"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`;

function waLink(msg) { return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`; }
function openWA(msg) { window.open(waLink(msg), '_blank'); }
function openIG()    { window.open(INSTAGRAM_URL, '_blank'); }
function fmt(n)      { return '₹' + Number(n).toLocaleString('en-IN'); }
function discPct(price, orig) { return Math.round((1 - price / orig) * 100); }
function fallbackImg() { return COMING_SOON_IMG; }
