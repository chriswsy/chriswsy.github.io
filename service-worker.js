/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/2019/07/30/hello-world/index.html","0fb3851b137c50fa7636e4f1b6a11a2e"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/2019/07/31/笔记/index.html","a931eff33a7699ab8bd9c7d2520382c0"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/archives/2019/07/index.html","50da4f88001f64c97cc4ef7cb8ccd9fc"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/archives/2019/index.html","a81a083422aaa1b5e88328b3398c2977"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/archives/index.html","3f630f3f807d5c8109f0ebd3d3f0d853"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/assets/css/APlayer.min.css","975d05cf29068aa90b268be3cbd052e8"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/books/index.html","7e4f7c8342f1db10917be8c4ccc711ac"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/catagories/index.html","377ceba17dc69729a564dd42ab8674a3"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/css/index.css","21d4decec9adf26ceb9e9c5d2ce86a0c"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/gallery/index.html","3e5eda7ed197b9861e005233ffd84f07"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/games/index.html","8f69c78e34722d931765c2560ac3e437"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/images/IMG_5869.jpg","fd672b3c408aa490051dcdf9e198d5db"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/images/pwaicons/144x144.png","4ce2e8805c8fbabd1a6b2e8e30d87313"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/images/pwaicons/192x192.png","a2d2064513c0882aa68ec9107b2e3e1d"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/images/pwaicons/36x36.png","600d13554126932d9f7c86f9bdafa0f7"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/images/pwaicons/48x48.png","3048221f488f9324b7ba922df3bb9f41"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/images/pwaicons/512x512.png","739431db64d6900f15cfee54b76dd1e1"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/images/pwaicons/72x72.png","aa27d6ea05c694203089b79228b87077"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/images/pwaicons/96x96.png","68d8848d4ed0dda6d3f1695946f773ca"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/index.html","bc3b0e51210cadfbf0e2d3a708f13701"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/js/copy.js","2df53f41386e9a8aa3d951bc1c26c8a3"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/js/fancybox.js","ee0be6a35548fe934306d9ff7288c837"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/js/fireworks.js","f6da66de730cc068efd0d0b0a9ec64ae"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/js/head.js","b9e08a7c6c53c212ac368a067c24e951"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/js/scroll.js","df62ed0aa46f5a87efac38d5d7ae8334"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/js/search/algolia.js","1b3fd9bd7b25cc7a4b161560633949b9"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/js/search/local-search.js","36ab540addfb4965eec234762a84076a"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/js/sidebar.js","e3308924d89861ff54f17f8de0f864f0"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/js/transition.js","5d563c00e9727268fc4d9828a96ad029"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/js/utils.js","0f4c919396ae09acfe14a9eda775ee3a"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/movies/index.html","41a57d9fad7a78639c4c766d3b3daa8f"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/slides/index.html","a668aff565845fbad8850afe187223b4"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/tags/Markdown/index.html","4f936c2131d97458e6b928667fe4d675"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/tags/index.html","ae85614b550ba68fedac347e68a384b4"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/tags/笔记/index.html","911a458f93ac8c926e5c74ae77a6ca98"],["C:/Users/CHRISOMEN/Documents/blogs/chriswsy/public/tags/读书/index.html","37f3d87493d4b746a828d1d4ff3005f6"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







