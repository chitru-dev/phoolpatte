// ============================================================
//  PhoolPatte — CONFIG EXAMPLE
//  Copy this file to config.js and fill in your real values.
//  config.js is in .gitignore and will NOT be committed.
// ============================================================

// ── CONTACT & SOCIAL ─────────────────────────────────────────
var WA_NUMBER        = '91XXXXXXXXXX';            // 91 + your 10-digit WhatsApp number
var INSTAGRAM_URL    = 'https://instagram.com/yourhandle';
var INSTAGRAM_HANDLE = '@yourhandle';

// ── CLOUDINARY ────────────────────────────────────────────────
var CLOUDINARY_CLOUD = 'your_cloud_name';         // Found in your Cloudinary dashboard
var CLOUDINARY_BASE  = 'https://res.cloudinary.com/' + CLOUDINARY_CLOUD + '/image/upload';

function cloudImg(publicId, w, h) {
  w = w || 800; h = h || 500;
  return CLOUDINARY_BASE + '/w_' + w + ',h_' + h + ',c_fill,q_auto:best,e_sharpen:60/f_auto/' + publicId;
}

// ── LOGO ──────────────────────────────────────────────────────
// Replace with your Cloudinary logo public ID
var LOGO_URL = CLOUDINARY_BASE + '/w_72,h_72,c_fill,g_face,q_auto:best,e_sharpen:80/YOUR_LOGO_PUBLIC_ID';

// ── PLACEHOLDER ───────────────────────────────────────────────
var COMING_SOON_IMG  = 'images/coming_soon.svg';

// ── BUSINESS INFO ─────────────────────────────────────────────
var BUSINESS_NAME    = 'PhoolPatte';
var BUSINESS_CITY    = 'Delhi NCR';
