export default function unsplashLoader({ src, width, quality }) {
  return `${src}?auto=format&fit=crop&w=${width}&q=${quality || 75}`;
}
