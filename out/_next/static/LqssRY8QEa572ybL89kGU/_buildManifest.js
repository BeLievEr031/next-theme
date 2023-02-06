(self.__BUILD_MANIFEST = (function (s, c) {
  return {
    __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
    "/": [
      s,
      "static/chunks/197-4f02b6e0d5e9d446.js",
      c,
      "static/chunks/pages/index-bf6994b00305cf20.js",
    ],
    "/_error": ["static/chunks/pages/_error-409f831d3504c8f5.js"],
    "/about": ["static/chunks/pages/about-ad83386955d4048f.js"],
    "/post/[slug]": [
      s,
      c,
      "static/chunks/pages/post/[slug]-bd3fa9311509477e.js",
    ],
    sortedPages: ["/", "/_app", "/_error", "/about", "/post/[slug]"],
  };
})(
  "static/chunks/168-df36e5445e22ae8b.js",
  "static/chunks/437-658fb50fc18ae4f5.js"
)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
