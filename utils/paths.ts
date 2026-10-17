// apply for github page
const BASE_PATH = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export function publicPath(path: string): string {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
