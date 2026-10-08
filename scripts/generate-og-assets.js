import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function generateAssets() {
  console.log('Generating favicon and OpenGraph assets...');

  const faviconSvgPath = path.resolve('public/favicon.svg');
  const faviconSvgBuffer = fs.readFileSync(faviconSvgPath);

  // 1. Generate crisp PNG favicons
  await sharp(faviconSvgBuffer)
    .resize(192, 192)
    .png()
    .toFile('public/favicon.png');
  console.log('Created public/favicon.png (192x192 PNG)');

  await sharp(faviconSvgBuffer)
    .resize(512, 512)
    .png()
    .toFile('public/icon-512.png');
  console.log('Created public/icon-512.png (512x512 PNG)');

  await sharp(faviconSvgBuffer)
    .resize(180, 180)
    .png()
    .toFile('public/apple-touch-icon.png');
  console.log('Created public/apple-touch-icon.png (180x180 PNG)');

  // 2. Select background photo for OpenGraph
  let bgSource = './src/assets/images/oohjay_og_banner_1791453761604.jpg';
  if (!fs.existsSync(bgSource)) {
    bgSource = './public/master-bathroom-ensuite.jfif';
  }

  // Resize and crop background to 1200x630
  const bgBuffer = await sharp(bgSource)
    .resize(1200, 630, { fit: 'cover', position: 'center' })
    .toBuffer();

  // 3. Create SVG overlay with typography and branding
  const svgOverlay = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Gradient for cinematic readability -->
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#0b1219" stop-opacity="0.96"/>
        <stop offset="45%" stop-color="#0f1e2d" stop-opacity="0.92"/>
        <stop offset="70%" stop-color="#0f1e2d" stop-opacity="0.70"/>
        <stop offset="100%" stop-color="#0f1e2d" stop-opacity="0.35"/>
      </linearGradient>
      <linearGradient id="terraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#c54f2c"/>
        <stop offset="100%" stop-color="#a43716"/>
      </linearGradient>
      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.5"/>
      </filter>
    </defs>

    <!-- Overlay dark gradient -->
    <rect width="1200" height="630" fill="url(#bgGrad)"/>

    <!-- Subtle framing accents -->
    <rect x="36" y="36" width="1128" height="558" rx="16" fill="none" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1.5"/>

    <!-- Left Brand Column -->
    <g transform="translate(80, 80)">
      <!-- Top Eyebrow Pill -->
      <g>
        <rect width="260" height="34" rx="17" fill="#a43716" fill-opacity="0.25" stroke="#a43716" stroke-width="1.2"/>
        <circle cx="20" cy="17" r="4.5" fill="#e0623a"/>
        <text x="34" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="12" font-weight="700" letter-spacing="1.5" fill="#ffdbd1">
          NIGERIA &amp; BEYOND
        </text>
      </g>

      <!-- Logo & Wordmark Group -->
      <g transform="translate(0, 60)">
        <!-- Emblem icon -->
        <rect width="64" height="64" rx="16" fill="url(#terraGrad)" filter="url(#shadow)"/>
        <circle cx="26" cy="32" r="13" stroke="#fff8f3" stroke-width="4.5" fill="none" />
        <path d="M42 20v18a8 8 0 0 1-8 8h-2" stroke="#fff8f3" stroke-width="4.5" stroke-linecap="round" fill="none" />
        <circle cx="26" cy="32" r="3.5" fill="#ffdcbd" />

        <!-- Title text -->
        <text x="82" y="44" font-family="Georgia, 'Times New Roman', serif" font-size="44" font-weight="700" letter-spacing="-0.5" fill="#ffffff">
          OOH JAY
        </text>
        <text x="84" y="60" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" letter-spacing="2.8" fill="#d4c2b9">
          PLUMBING &amp; CONSTRUCTION
        </text>
      </g>

      <!-- Main Headline -->
      <g transform="translate(0, 175)">
        <text x="0" y="0" font-family="Georgia, 'Times New Roman', serif" font-size="38" font-weight="600" letter-spacing="-0.5" fill="#ffffff">
          High-Pressure Water Systems &amp;
        </text>
        <text x="0" y="46" font-family="Georgia, 'Times New Roman', serif" font-size="38" font-weight="600" letter-spacing="-0.5" fill="#ffdbd1">
          Luxury Plant Room Engineering.
        </text>
      </g>

      <!-- Subtitle description -->
      <g transform="translate(0, 275)">
        <text x="0" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="17" font-weight="400" fill="#c3d0dc">
          Specialized residential &amp; commercial water supply, luxury wet areas,
        </text>
        <text x="0" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="17" font-weight="400" fill="#c3d0dc">
          vibration-free pump arrays and turnkey architectural construction.
        </text>
      </g>

      <!-- Bottom Feature Badges & Contact -->
      <g transform="translate(0, 360)">
        <!-- Badge 1: Testing -->
        <rect x="0" y="0" width="168" height="38" rx="8" fill="#ffffff" fill-opacity="0.08" stroke="#ffffff" stroke-opacity="0.12"/>
        <text x="14" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#ffffff">
          ✓ 16-Bar Pressure Test
        </text>

        <!-- Badge 2: In-House -->
        <rect x="180" y="0" width="170" height="38" rx="8" fill="#ffffff" fill-opacity="0.08" stroke="#ffffff" stroke-opacity="0.12"/>
        <text x="194" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#ffffff">
          ✓ In-House Trades
        </text>

        <!-- Badge 3: Abeokuta / Lagos -->
        <rect x="362" y="0" width="176" height="38" rx="8" fill="#ffffff" fill-opacity="0.08" stroke="#ffffff" stroke-opacity="0.12"/>
        <text x="376" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#ffffff">
          ✓ Abeokuta · Lagos
        </text>

        <!-- Phone / WhatsApp line -->
        <text x="0" y="72" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600" letter-spacing="0.5" fill="#e0623a">
          Direct Line &amp; WhatsApp: +234 903 138 6928
        </text>
      </g>
    </g>
  </svg>
  `;

  // Composite the SVG overlay onto the background image
  const finalOgJpg = await sharp(bgBuffer)
    .composite([{ input: Buffer.from(svgOverlay), top: 0, left: 0 }])
    .jpeg({ quality: 92, chromaSubsampling: '4:4:4' })
    .toFile('public/og-image.jpg');

  console.log('Created public/og-image.jpg (1200x630 JPEG):', finalOgJpg);

  // Also create a PNG version for platforms requesting PNG
  const finalOgPng = await sharp(bgBuffer)
    .composite([{ input: Buffer.from(svgOverlay), top: 0, left: 0 }])
    .png({ quality: 95 })
    .toFile('public/og-image.png');

  console.log('Created public/og-image.png (1200x630 PNG):', finalOgPng);
}

generateAssets().catch((err) => {
  console.error('Failed to generate assets:', err);
  process.exit(1);
});
