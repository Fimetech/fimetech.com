# Logo Assets

Place your company logo in this directory with one of the following names:

- `logo.svg` (recommended for best quality and scalability)
- `logo.webp` (modern format with good compression)
- `logo.png` (fallback format)

## Format Priority

The Logo component will automatically detect and use your logo in this order:

1. SVG (best for scalability and file size)
2. WebP (modern format with good compression)
3. PNG (universal compatibility)

## Recommended Specifications

- **Dimensions**: 180x45px (or similar aspect ratio ~4:1)
- **Background**: Transparent
- **Format**: SVG preferred for crisp display on all screen sizes
- **File size**: < 50KB for optimal loading performance

## Current Logo

No logo file detected. Add your logo as:

- `/public/logo/logo.svg` (recommended)
- `/public/logo/logo.webp`
- `/public/logo/logo.png`

The component will automatically use it in the header.

## Adjusting Dimensions

If your logo has different proportions, update the dimensions in:
`src/lib/constants.ts` → `siteConfig.logo.width` and `siteConfig.logo.height`
