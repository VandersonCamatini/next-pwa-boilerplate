if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let n=Promise.resolve();return s[e]||(n=new Promise((async n=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=n}else importScripts(e),n()}))),n.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},n=(n,s)=>{Promise.all(n.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(n)};self.define=(n,r,a)=>{s[n]||(s[n]=Promise.resolve().then((()=>{let s={};const t={uri:location.origin+n.slice(1)};return Promise.all(r.map((n=>{switch(n){case"exports":return s;case"module":return t;default:return e(n)}}))).then((e=>{const n=a(...e);return s.default||(s.default=n),s}))})))}}define("./sw.js",["./workbox-030153e1"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.4f28a96f7c001568836d.js",revision:"qj4yM7a3RnWuYronaMXm4"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.8b64e5560fd208fe3d21.js",revision:"qj4yM7a3RnWuYronaMXm4"},{url:"/_next/static/chunks/framework.abffcf18e526b7c0dbcd.js",revision:"qj4yM7a3RnWuYronaMXm4"},{url:"/_next/static/chunks/main-f30990e2596ec4d9cd3d.js",revision:"qj4yM7a3RnWuYronaMXm4"},{url:"/_next/static/chunks/pages/_app-0640c588481cb482637b.js",revision:"qj4yM7a3RnWuYronaMXm4"},{url:"/_next/static/chunks/pages/_error-baca363ecc6f08f7369d.js",revision:"qj4yM7a3RnWuYronaMXm4"},{url:"/_next/static/chunks/pages/index-e98f63cffe6f79b2ce98.js",revision:"qj4yM7a3RnWuYronaMXm4"},{url:"/_next/static/chunks/polyfills-4f14e8c8ea1352d3ef0d.js",revision:"qj4yM7a3RnWuYronaMXm4"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"qj4yM7a3RnWuYronaMXm4"},{url:"/_next/static/qj4yM7a3RnWuYronaMXm4/_buildManifest.js",revision:"qj4yM7a3RnWuYronaMXm4"},{url:"/_next/static/qj4yM7a3RnWuYronaMXm4/_ssgManifest.js",revision:"qj4yM7a3RnWuYronaMXm4"},{url:"/img/hero-illustration.svg",revision:"5fd5143cba1046a214d9a359fce22e89"},{url:"/img/icon-192.png",revision:"d27169d080684ebb57b8387d05c4b444"},{url:"/img/icon-512.png",revision:"f1d74b43a3832183202483a40d9e9d84"},{url:"/img/logo.svg",revision:"202525302ad30aca5b2b790d4b0b5796"},{url:"/manifest.json",revision:"f519600b184acb2197102ea4fbf3a839"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
