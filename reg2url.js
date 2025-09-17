function extractDomain(url) {
  const res = url.match(/^(?:https?:\/\/)?(?:www\.)?([^\/]+)$/i);
  return res ? res[1] : null;
}

console.log(extractDomain("https://www.google.com")); // "google.com"
console.log(extractDomain("http://example.org"));     // "example.org"
console.log(extractDomain("https://sub.domain.com")); // "sub.domain.com"
console.log(extractDomain("invalid-url"));           // "invalid-url"
