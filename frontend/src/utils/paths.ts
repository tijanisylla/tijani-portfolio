/**
 * Get the full path for a public asset
 * Uses PUBLIC_URL which is automatically set by Create React App based on homepage in package.json
 * For GitHub Pages: /tijani-portfolio
 * For custom domain: (empty string)
 * @param path - The asset path (e.g., '/images/logo.png')
 * @returns The full path with base URL (e.g., '/tijani-portfolio/images/logo.png' or '/images/logo.png')
 */
export const getAssetPath = (path: string): string => {
  // PUBLIC_URL is set by Create React App based on homepage in package.json
  // For custom domain (https://tijanisylla.dev): PUBLIC_URL is empty string
  // For GitHub Pages (https://tijanisylla.github.io/tijani-portfolio): PUBLIC_URL is '/tijani-portfolio'
  const baseUrl = process.env.PUBLIC_URL || '';
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  // Combine baseUrl and path, ensuring no double slashes
  return baseUrl ? `${baseUrl}${cleanPath}` : cleanPath;
};
