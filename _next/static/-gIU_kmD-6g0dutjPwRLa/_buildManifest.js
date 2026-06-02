self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [
      {
        "source": "/website-app//_next/:path+",
        "destination": "/website-app/_next/:path+"
      }
    ],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()