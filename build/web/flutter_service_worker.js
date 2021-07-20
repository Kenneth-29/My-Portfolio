'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "bb77460f4cbee3a9ef441e54d213fbea",
".git/config": "3c1754d188727a9660071e3534ae6d9f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "a45a0330cf3a9f90cb66606199832391",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6454cc36b6d8274a3292e1706ebe4b70",
".git/logs/refs/heads/master": "6454cc36b6d8274a3292e1706ebe4b70",
".git/logs/refs/remotes/origin/HEAD": "ecdfa6f87ab93a77ec73900864665c37",
".git/logs/refs/remotes/origin/master": "ea40ae53d74e2cc834e55cf5d9d8d670",
".git/objects/0f/15ed0eb4dff326ce9905a1d2586dfba28561df": "55f833e9623ebeae87d300951fb0f419",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "6655e717f185770489b36816ed0d52de",
".git/objects/10/3031608581d0e868c923a31713421dfcc2b1f7": "31a9caffebb3863380a8cab556a07a4a",
".git/objects/10/511be9e2c4ebeff0ed290729754f95cde86499": "799fabecc124e1ad604e901f368b7567",
".git/objects/19/638a60bdbef5086487fb9df14d849ea225f492": "aea4d1ab4d3dddd32239130bbff38382",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/1d/1a42e7a3a56894c53d656924c6eac0338676f5": "441b7700dce677ce3b19e13c74ba1226",
".git/objects/1f/2fa6646e9573714731b3e3bf21e9a0eec863bc": "6bd31deb16c41e29d8ba4637f1341605",
".git/objects/22/aaea4f774564bb1405b2e8e7e9a7edb6465b46": "da5a35d22e75a6f01abec8829a84f5a6",
".git/objects/25/6c4a6eca7f4d2d7016d0bfd25317fa000a7da4": "2c42ac3bb346e34032e87beeebe7ddfa",
".git/objects/2a/42865efc37b9e3d1887504f644635fc3bca30d": "7291ca07363cd4abcaa32bd37fbe3883",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/2b/2b4949ebf327cc6af92c4470989423e28e5376": "ecac757fdda70eb397ef870064aaa578",
".git/objects/2d/b7cd046c009545117f2a4e91ef9e0c029740a8": "afca29d4cfeedd728c16abf25310821d",
".git/objects/2e/5b354f7a583c1c1f415821be2ce3be962092d6": "a5e92c6827c7257fb2ef944c9a4045ec",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/35/c9d326836068337cb23ec27e8f5ae04ec524e7": "a021712cc451613c227dae5cfa27fe0e",
".git/objects/3b/e32e41c170962fe6e535bfd13a3555fde2d2d1": "cf0a50ec599ff1da1fe9bb5a1807f169",
".git/objects/3c/a3d4d4a51d0edc749c73072ef06e28178ec265": "33cdecf7ff0f30a5d280d4c70901e531",
".git/objects/3e/3b797ce693b89882e12bcdc975c0bab34afeed": "53ddf4e6043987ace773dd60fdaa71bc",
".git/objects/44/ebb58edc56492bcbea6fe1e8921dda4d9eef62": "c58bda5b7c22a8b488bee73bef2f5661",
".git/objects/5e/496a809790295e3a83bd8001198635e3b6ed6d": "cf9e4b7b0cfcc62ab1c0d160ec1be865",
".git/objects/5f/26f3d0b8a6ee5100a2fb40e810ad878c7c36b0": "be71dea8025aa9829e7a9018f9dd8a63",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
".git/objects/62/7bc5f2d0852be1b729ca38afdc627f7dfdcfb0": "05eee805f308c2bcf8494bec9cb7a445",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/6a/4fb1379beaf7896ba07fe642976326524dc076": "69cff2970fbf64be8cbb1e86f9f1a1b1",
".git/objects/6b/4362311bfe4deab146a1933e56793f45f7c6af": "221b262a6af21b63aee12607bf7f298c",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/6f/08404fe81b586f67c36e49467e83b2721e7c4d": "d8bd4f48cae86cb78922e09172129a27",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/72/9a8e1f65698649bfd87808176715f5823b0e42": "98dd539afd971a4ac4487e2d6bcbf322",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/f698725488a6db31d01f7cdbee9f5560f1f492": "67bf348b0a05879b39f6c6c1b8646451",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
".git/objects/82/67a6577df77b45cbd3104b4c5f1777cd25cc25": "64ce68c8ee4e95eeaee97e5225aab84f",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/85/8fad2cd454a561037c5f9c5fc5f1cbd1c9dd93": "89035cb46f825a0a450faa534e1e6b13",
".git/objects/88/7fa220b164ee3adb998953478eccdcbed27437": "0178c714898a44bed4434520bbeccd2d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8f/008c36844f28454149ce1a22effe513dc726e6": "0fa45b087e693064e5a2ce35615095ae",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/93f554b5fe272676d85e02bbba05099d0dd9b0": "fcd1088f96fba28af655fdfd2aa186c8",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a9/520b78ac4635319aafe2cc88f1b40c8289b1c8": "f268f08f109671711197a41d2104993e",
".git/objects/a9/cacf3aed7419e5818dfea95df1f6839634d348": "3a8d40c05ec39e8311bc399e714943d0",
".git/objects/af/465a20f18d5c9d29d804f31f7017b0d68dca3c": "708a3e20e2dbac3d259c9bcc44f42287",
".git/objects/af/8bd061c35b607a73aec6f94b8d899c8cf8e300": "0006c69ae792bbd261035182a881c4be",
".git/objects/b1/c07efaa2d1abe48ab8cdb68a5805e68709b0df": "86a8c2fbd626b42ce750a7b2d850ce7f",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/c8/df92b853992397794e13e57140bbab28367e15": "4e587a7e4ba7acfc9ac1796c5c862e78",
".git/objects/c9/0ba594fa1d1c45df50bf46d87addf4933220ee": "b0945f93046b0517377da9bde61dfe83",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
".git/objects/d1/a8cf6320e6f7739d49db0f122fd39583f705d1": "27e00f24d7d563b58c941fecb1efede7",
".git/objects/d5/5d6f8ea9a5b55b73c57381ccf74bf076cf6057": "2af46a75f4c523d6236c441347a8ae61",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/db/9ed3cb7b099ecb7ed460483bd55effe2b1ad5d": "6ca7d3e243a19605956996b6dcff343f",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/f0c299049e460bd76dac9520b4cd540e0f1ced": "635fb5fd8d7c8f57fc2829627259bb3f",
".git/objects/e7/fa1f9f7c0087029f6814d102fdb3e21f064fef": "172110f6f016954cfabd5b9dbe4107bf",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/ea/451768f979a94413b529b60da76ff7d51ab516": "33689bbb0ad3542a006f137627ac62f5",
".git/objects/ef/71de11396f979ef160e782308788238cb0ae13": "fbf82a1cf1c7bf3f6faad94d29af33bc",
".git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "50b1229f40423533da8629dc65d38889",
".git/objects/f7/12c2e237b21dbdcac4df152848bdd852ba0298": "e8a9728290e4c1d84d889b9f761edfc9",
".git/objects/fb/a04809ffaf15d74edf41e74889b2a7b7b8335d": "5551ccdd023223ae6291d1261c4f5842",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "8cd8693ced3c797431323a7707d38029",
".git/packed-refs": "a07e7dbd1af270f9a8f1c99c13afbdce",
".git/refs/heads/master": "0e3afd58834b9fd1256e30216503279c",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "0e3afd58834b9fd1256e30216503279c",
"assets/AssetManifest.json": "bfd5e5886f1af1193c132e20baea28d4",
"assets/assets/android.png": "eae21107612ecac3c66a87ba511583bb",
"assets/assets/flutter.png": "83c269fb754ea70684b3966016c3844b",
"assets/assets/google.png": "96fff8d12ad4e12895ec8054015d5501",
"assets/assets/java.png": "1148c2a424450f5de697383eaa2578bc",
"assets/assets/medium.png": "5b32f37a43e0b6a5b79965f7e1a8aece",
"assets/assets/microsoft.png": "d5da7c4fc0fc259a843d9ff1bf0b956d",
"assets/assets/portfolio.png": "6be1f844f4137db74d6f20195f830457",
"assets/assets/portfolio_img.jpg": "3a13dc1b25029af5edd693011fc72776",
"assets/assets/ss1.png": "d03085edcd4b2b438570b3444f565d4c",
"assets/assets/ss10.png": "ad07da6db692c60382f67999658f834c",
"assets/assets/ss11.png": "6188c255067f6ee9be625f5f255b5c9b",
"assets/assets/ss12.png": "1e7a586fbcfe528525af188da7244ad2",
"assets/assets/ss13.png": "53db7650516d559b8647903c8d9d1915",
"assets/assets/ss14.png": "3fc0638dfed34ac0e065ee8f4b4c88e5",
"assets/assets/ss2.png": "953cdc0f3a75bad9036e16f0f9671592",
"assets/assets/ss3.png": "049858570caeee6bd0da211aa6be0bae",
"assets/assets/ss4.png": "217bfa11750f780068a7516965c72f7e",
"assets/assets/ss5.png": "6a05f7f8bb99ba29f6244bdb918b659a",
"assets/assets/ss6.png": "656da2903731f486629f92d6b0ef75d7",
"assets/assets/ss7.png": "00659e60b66c9c20b56a5603c52c1fb4",
"assets/assets/ss8.png": "b78def1f51b5b6bd580287dcb43b50bd",
"assets/assets/ss9.png": "b8bd306a112ccca42e896013ad3c7e26",
"assets/FontManifest.json": "fd6a312ff70895f2bf377fcfd32e8862",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/Poppins-Black.ttf": "0573b9231a8316427ad6e751b52e87a4",
"assets/fonts/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/fonts/Poppins-ExtraBold.ttf": "544fa4f2678a8285eb88b8dfe503c90c",
"assets/fonts/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/fonts/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/fonts/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/NOTICES": "060ae229d621b1fb21b8bb62f738163a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"favicon.png": "a89de4cb673b12bb1e1668d05bc6b70f",
"icons/Icon-192.png": "cd86466c513ae9ef19d038e910ced12d",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "375d559f6f9a4e8214024847ad4b6db3",
"/": "375d559f6f9a4e8214024847ad4b6db3",
"main.dart.js": "d813d777e1bec3b5d63abed1da43fccc",
"manifest.json": "75721181c830e84b9d2b33e7c2b97e0a",
"README.md": "cc4ccd149976c3d5ef8dc7bdf11456ad",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
