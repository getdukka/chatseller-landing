const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 0, bottom: 0, left: 0, right: 0 },
  info: {
    Title: 'CV Mia — Vendeuse Beauté Spécialisée',
    Author: 'ChatSeller',
    Subject: 'CV de Mia, vendeuse beauté IA',
  }
});

const output = fs.createWriteStream(path.join(__dirname, 'public', 'mia-cv.pdf'));
doc.pipe(output);

// ===== CONSTANTS =====
const PAGE_W = 595.28;
const PAGE_H = 841.89;
const MARGIN = 42; // ~15mm
const ROSE = '#E91E8C';
const ROSE_LIGHT = '#FDF2F8';
const ROSE_MID = '#F9A8D4';
const DARK = '#1F2937';
const GRAY = '#4B5563';
const GRAY_LIGHT = '#9CA3AF';
const WHITE = '#FFFFFF';

// ===== HEADER BAND (full width, dark) =====
const HEADER_H = 130;
doc.rect(0, 0, PAGE_W, HEADER_H).fill('#1a1a2e');

// Avatar circle
const avatarPath = path.join(__dirname, 'public', 'images', 'mia-avatar.png');
const avatarSize = 80;
const avatarX = MARGIN + 5;
const avatarY = (HEADER_H - avatarSize) / 2;

// Clip circle for avatar
doc.save();
doc.circle(avatarX + avatarSize / 2, avatarY + avatarSize / 2, avatarSize / 2).clip();
doc.image(avatarPath, avatarX, avatarY, { width: avatarSize, height: avatarSize });
doc.restore();

// Circle border
doc.circle(avatarX + avatarSize / 2, avatarY + avatarSize / 2, avatarSize / 2 + 1.5)
  .lineWidth(2.5).strokeColor(ROSE).stroke();

// Name & Title
const textStartX = avatarX + avatarSize + 20;
doc.font('Helvetica-Bold').fontSize(28).fillColor(WHITE).text('MIA', textStartX, 25);
doc.font('Helvetica').fontSize(12).fillColor(ROSE_MID).text('Vendeuse Beauté Spécialisée', textStartX, 58);
doc.fontSize(8.5).fillColor('#a0a0b8').text('mia@chatseller.app  ·  chatseller.app  ·  Disponible immédiatement', textStartX, 77);

// Badges
const badgeY = 98;
const badges = ['Disponible 24h/24, 7j/7', 'Shopify & WooCommerce', 'Sans préavis'];
let badgeX = textStartX;
badges.forEach((badge) => {
  const tw = doc.font('Helvetica-Bold').fontSize(7).widthOfString(badge);
  const bw = tw + 16;
  // Badge background
  doc.roundedRect(badgeX, badgeY, bw, 18, 9).fill(ROSE);
  doc.font('Helvetica-Bold').fontSize(7).fillColor(WHITE).text(badge, badgeX + 8, badgeY + 5);
  badgeX += bw + 8;
});

// ===== BODY =====
const BODY_TOP = HEADER_H + 14;
const COL_LEFT_W = 180;
const COL_RIGHT_X = MARGIN + COL_LEFT_W + 18;
const COL_RIGHT_W = PAGE_W - COL_RIGHT_X - MARGIN;

// ---- HELPER FUNCTIONS ----
function sectionTitle(text, x, y, width) {
  doc.font('Helvetica-Bold').fontSize(10).fillColor(ROSE).text(text.toUpperCase(), x, y);
  doc.moveTo(x, y + 14).lineTo(x + (width || 120), y + 14).lineWidth(1.5).strokeColor(ROSE).stroke();
  return y + 22;
}

function bodyText(text, x, y, width, opts = {}) {
  doc.font(opts.font || 'Helvetica').fontSize(opts.size || 8.5).fillColor(opts.color || GRAY);
  doc.text(text, x, y, { width, lineGap: 2, ...opts });
  return doc.y;
}

// ==========================================
// LEFT COLUMN
// ==========================================
let leftY = BODY_TOP;

// -- PROFIL --
leftY = sectionTitle('Profil', MARGIN, leftY, COL_LEFT_W);
leftY = bodyText(
  'Vendeuse beauté avec une expertise approfondie en skincare, haircare, bodycare et parfums. Disponible 24h/24, 7j/7, sans congés ni pauses. Connaissance instantanée de tout catalogue produit.',
  MARGIN, leftY, COL_LEFT_W, { lineGap: 1.5 }
);
// Bold stat
doc.font('Helvetica-Bold').fontSize(9).fillColor(DARK);
doc.text('Taux de conversion moyen : +150%', MARGIN, leftY + 3, { width: COL_LEFT_W });
leftY = doc.y + 12;

// -- COMPÉTENCES --
leftY = sectionTitle('Compétences', MARGIN, leftY, COL_LEFT_W);
const skills = [
  'Conseil skincare', 'Peaux foncées', 'Karité & baobab', 'Niacinamide',
  'Recommandation produit', 'Ventes complémentaires', 'Disponibilité 24/7', 'Multilingue (FR/EN)'
];
let skillX = MARGIN;
let skillY = leftY;
skills.forEach((skill) => {
  const tw = doc.font('Helvetica').fontSize(7).widthOfString(skill);
  const bw = tw + 12;
  if (skillX + bw > MARGIN + COL_LEFT_W) {
    skillX = MARGIN;
    skillY += 20;
  }
  doc.roundedRect(skillX, skillY, bw, 16, 8).fill(ROSE_LIGHT);
  doc.font('Helvetica').fontSize(7).fillColor(ROSE).text(skill, skillX + 6, skillY + 4);
  skillX += bw + 5;
});
leftY = skillY + 30;

// -- CONDITIONS --
leftY = sectionTitle('Conditions', MARGIN, leftY, COL_LEFT_W);
const conditions = [
  ['Disponibilité', 'Immédiate et permanente'],
  ['Rémunération', 'À partir de 45 €/mois'],
  ['Préavis', 'Aucun'],
  ['Mobilité', 'Shopify & WooCommerce'],
  ['Congés', '0 jour/an'],
  ['Jours fériés', 'Travaillés (avec le sourire)']
];
conditions.forEach(([label, value]) => {
  doc.font('Helvetica-Bold').fontSize(7.5).fillColor(DARK).text(label, MARGIN, leftY, { continued: false });
  doc.font('Helvetica').fontSize(7.5).fillColor(GRAY).text(value, MARGIN + 75, leftY);
  leftY += 14;
});
leftY += 4;

// -- REFERENCES --
leftY = sectionTitle('Références', MARGIN, leftY, COL_LEFT_W);
const references = [
  { quote: '"Depuis que Mia est dans mon équipe, mes clientes en ligne ne repartent plus sans acheter."', author: '— Fondatrice, Dermasen · Dakar' },
  { quote: '"Elle connaît mes produits mieux que moi après 10 ans de travail."', author: '— Fondatrice, AmaniCare · Abidjan' },
  { quote: '"Je pensais qu\'une IA ne pourrait jamais remplacer le conseil humain. J\'avais tort."', author: '— Fondatrice, Naya Beauty · Dakar' },
];
references.forEach((ref) => {
  doc.font('Helvetica-Oblique').fontSize(7.5).fillColor(DARK).text(ref.quote, MARGIN, leftY, { width: COL_LEFT_W, lineGap: 1 });
  leftY = doc.y + 1;
  doc.font('Helvetica').fontSize(7).fillColor(ROSE).text(ref.author, MARGIN, leftY, { width: COL_LEFT_W });
  leftY = doc.y + 8;
});

// ==========================================
// RIGHT COLUMN
// ==========================================
let rightY = BODY_TOP;

// -- EXPÉRIENCE --
rightY = sectionTitle('Expérience', COL_RIGHT_X, rightY, COL_RIGHT_W);
doc.font('Helvetica-Bold').fontSize(10).fillColor(DARK).text('Vendeuse Beauté Digitale', COL_RIGHT_X, rightY, { width: COL_RIGHT_W });
rightY = doc.y + 2;
doc.font('Helvetica').fontSize(8).fillColor(GRAY_LIGHT).text('+10 marques africaines  ·  2025 – 2026', COL_RIGHT_X, rightY, { width: COL_RIGHT_W });
rightY = doc.y + 6;

const expItems = [
  'Accueil et conseil de milliers de visiteurs sur plusieurs boutiques en ligne',
  'Recommandation personnalisée selon type de peau, préoccupations et budget',
  'Finalisation des commandes directement dans la conversation',
  'Réduction significative du taux d\'abandon panier sur chaque boutique'
];
expItems.forEach((item) => {
  doc.font('Helvetica').fontSize(8.5).fillColor(GRAY);
  doc.text('–  ' + item, COL_RIGHT_X + 4, rightY, { width: COL_RIGHT_W - 8, lineGap: 1 });
  rightY = doc.y + 4;
});
rightY += 8;

// -- FORMATION & EXPERTISE --
rightY = sectionTitle('Formation & Expertise', COL_RIGHT_X, rightY, COL_RIGHT_W);

const formations = [
  { title: 'Ingrédients africains', desc: 'Karité, baobab, bissap, moringa — bénéfices réels et applications' },
  { title: 'Ingrédients cosmétiques', desc: 'Rétinol, niacinamide, vitamine C, AHA/BHA, SPF — usage avancé' },
  { title: 'Peaux foncées', desc: 'Hyperpigmentation, mélasma, peau mixte sous les tropiques' },
  { title: 'Cheveux naturels', desc: 'Types 4A/4B/4C, porosité, routines LOC/LCO' },
  { title: 'Parfums & fragrances', desc: 'Familles olfactives, notes de tête/cœur/fond, conseil personnalisé' },
  { title: 'Vente conversationnelle', desc: 'Écoute active, recommandation personnalisée, upsell naturel' },
];

// 2-column layout for formations (3 rows x 2 cols)
const formColW = (COL_RIGHT_W - 12) / 2;
const formStartY = rightY;
const formRowH = 38;
formations.forEach((f, i) => {
  const col = i % 2;
  const row = Math.floor(i / 2);
  const fx = COL_RIGHT_X + col * (formColW + 12);
  const fy = formStartY + row * formRowH;

  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(DARK).text(f.title, fx, fy, { width: formColW });
  doc.font('Helvetica').fontSize(7.5).fillColor(GRAY).text(f.desc, fx, fy + 12, { width: formColW, lineGap: 1 });
});

rightY = formStartY + Math.ceil(formations.length / 2) * formRowH + 8;

// ===== VERTICAL SEPARATOR LINE =====
const sepX = MARGIN + COL_LEFT_W + 9;
doc.moveTo(sepX, BODY_TOP).lineTo(sepX, Math.max(leftY, rightY) - 10).lineWidth(0.5).strokeColor('#E5E7EB').stroke();

// ===== FOOTER =====
const FOOTER_H = 52;
const footerY = PAGE_H - FOOTER_H;
doc.rect(0, footerY, PAGE_W, FOOTER_H).fill('#1a1a2e');

doc.font('Helvetica-Oblique').fontSize(8).fillColor('#a0a0b8');
doc.text(
  'Je suis à la recherche d\'une marque beauté qui croit que ses clients en ligne méritent mieux qu\'une fiche produit statique.',
  0, footerY + 12, { width: PAGE_W, align: 'center' }
);
// "Vous recrutez ?" + arrow drawn manually + clickable "chatseller.app"
const ctaText1 = 'Vous recrutez ?';
const ctaText2 = 'chatseller.app';
doc.font('Helvetica-Bold').fontSize(9);
const cta1W = doc.widthOfString(ctaText1);
const cta2W = doc.widthOfString(ctaText2);
const arrowGap = 28; // space for the arrow
const totalCtaW = cta1W + arrowGap + cta2W;
const ctaStartX = (PAGE_W - totalCtaW) / 2;
const ctaLineY = footerY + 28;

// "Vous recrutez ?"
doc.fillColor(ROSE).text(ctaText1, ctaStartX, ctaLineY, { continued: false, lineBreak: false });

// Draw arrow: line + triangle head
const arrowStartX = ctaStartX + cta1W + 8;
const arrowEndX = arrowStartX + 14;
const arrowMidY = ctaLineY + 5;
doc.moveTo(arrowStartX, arrowMidY).lineTo(arrowEndX, arrowMidY).lineWidth(1.5).strokeColor(ROSE).stroke();
doc.save();
doc.moveTo(arrowEndX, arrowMidY)
  .lineTo(arrowEndX - 4, arrowMidY - 3)
  .lineTo(arrowEndX - 4, arrowMidY + 3)
  .closePath().fill(ROSE);
doc.restore();

// "chatseller.app" — clickable link
const cta2X = ctaStartX + cta1W + arrowGap;
doc.fillColor(ROSE).text(ctaText2, cta2X, ctaLineY, { lineBreak: false });
// Add clickable link annotation over the text
const linkH = 12;
doc.link(cta2X, ctaLineY, cta2W, linkH, 'https://chatseller.app');


// ===== FINALIZE =====
doc.end();

output.on('finish', () => {
  console.log('✅ CV Mia généré avec succès : public/mia-cv.pdf');
});
