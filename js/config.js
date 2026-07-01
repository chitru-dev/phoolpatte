// ============================================================
//  PhoolPatte — CONFIG.JS
//  ⚠️  SENSITIVE FILE — do NOT commit to public GitHub repos
//  Add this file to your .gitignore
//  Update values below with your real credentials
// ============================================================

// ── CONTACT & SOCIAL ─────────────────────────────────────────
// Using var (not const) so these are globally accessible across all script tags
var WA_NUMBER        = '919999999999';          // Your WhatsApp: 91 + 10-digit mobile
var INSTAGRAM_URL    = 'https://instagram.com/phoolpatte';
var INSTAGRAM_HANDLE = '@phoolpatte';

// ── CLOUDINARY ────────────────────────────────────────────────
var CLOUDINARY_CLOUD = 'dulok9kk9';
var CLOUDINARY_BASE  = 'https://res.cloudinary.com/' + CLOUDINARY_CLOUD + '/image/upload';

// Helper: generate a sharp Cloudinary URL
function cloudImg(publicId, w, h) {
  w = w || 800; h = h || 500;
  return CLOUDINARY_BASE + '/w_' + w + ',h_' + h + ',c_fill,q_auto:best,e_sharpen:60/f_auto/' + publicId;
}

// ── LOGO ──────────────────────────────────────────────────────
var LOGO_URL = CLOUDINARY_BASE + '/w_72,h_72,c_fill,g_face,q_auto:best,e_sharpen:80/v1780893772/WhatsApp_Image_2026-06-08_at_10.07.34_AM_clhpth.jpg';

// ── PLACEHOLDER ───────────────────────────────────────────────
var COMING_SOON_IMG  = 'images/coming_soon.svg';

// ── BUSINESS INFO ─────────────────────────────────────────────
var BUSINESS_NAME    = 'PhoolPatte';
var BUSINESS_CITY    = 'Delhi NCR';
