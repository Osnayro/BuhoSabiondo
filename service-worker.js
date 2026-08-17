(function(){
var _0xstr = ['cGFlcy1jaGFsbGVuZ2UtdjUuMy4y','Li8=','Li9pbmRleC5odG1s','Li9zdHlsZXMuY3Nz','Li9lZmZlY3RzLmpz','Li9iYW5jby1sZWN0b3JhLmpz','Li9iYW5jby1tYXRlbWF0aWNhMS5qcw==','Li9iYW5jby1tYXRlbWF0aWNhMi5qcw==','Li9iYW5jby1jaWVuY2lhcy5qcw==','Li9hcHAuanM=','Li9idWhvLXN2Zy5qcw==','Li9maXJlYmFzZS1pbml0Lmpz','Li9zZWVkLWZpcmVzdG9yZS5qcw==','Li9idWhvLlBORw==','Li9idWhvLXVuaWZvcm1lLlBORw==','Li9pY29uby1hcHAuUE5H','Li9pY29uby1hcHAtbWFza2FibGUuUE5H','Li9tYW5pZmVzdC5qc29u','Li9zb3VuZHMvc3BsYXNoLm1wMw==','Li9zb3VuZHMvY29ycmVjdC5tcDM=','Li9zb3VuZHMvaW5jb3JyZWN0Lm1wMw==','Li9zb3VuZHMvbGV2ZWx1cC5tcDM=','Li9zb3VuZHMvbGV2ZWxzdGFydC5tcDM=','Li9zb3VuZHMvYWNoaWV2ZW1lbnQubXAz','Li9zb3VuZHMvcG93ZXJ1cC5tcDM=','Li9zb3VuZHMvc3Rhci5tcDM=','Li9zb3VuZHMvbmV4dC5tcDM=','aW5zdGFsbA==','8J+miSBQQUVTIENoYWxsZW5nZSB2NS4zLjIgLSBJbnN0YWxhbmRvLi4u','8J+TpiBDYWNoZWFuZG8gYXJjaGl2b3MuLi4=','4pqg77iPIEFsZ3Vub3MgYXJjaGl2b3Mgbm8gc2UgcHVkaWVyb24gY2FjaGVhcjo=','4pyFIEluc3RhbGFjacOzbiBjb21wbGV0YWRh','YWN0aXZhdGU=','8J+miSBQQUVTIENoYWxsZW5nZSB2NS4zLjIgLSBBY3RpdmFuZG8uLi4=','8J+Xke+4jyBFbGltaW5hbmRvIGNhY2jDqSBhbnRpZ3VhOg==','4pyFIEFjdGl2YWNpw7NuIGNvbXBsZXRhZGE=','ZmV0Y2g=','R0VU','bmF2aWdhdGU=','UmVjdXJzbyBubyBkaXNwb25pYmxlIG9mZmxpbmU=','U2VydmljZSBVbmF2YWlsYWJsZQ==','bWVzc2FnZQ==','c2tpcFdhaXRpbmc=','Y2xlYXJDYWNoZQ==','8J+Xke+4jyBDYWNow6kgZWxpbWluYWRh','8J+miSBQQUVTIENoYWxsZW5nZSBTZXJ2aWNlIFdvcmtlciB2NS4zLjIgcmVnaXN0cmFkbw=='];
window._0xdec = function(i){
    try {
        var b = atob(_0xstr[i]);
        var u = new Uint8Array(b.length);
        for(var j=0; j<b.length; j++){ u[j] = b.charCodeAt(j); }
        return new TextDecoder('utf-8').decode(u);
    } catch(e) { return ''; }
};
})();
const CACHE_NAME = _0xdec(0);
const ASSETS = [
_0xdec(1),
_0xdec(2),
_0xdec(3),
_0xdec(4),
_0xdec(5),
_0xdec(6),
_0xdec(7),
_0xdec(8),
_0xdec(9),
_0xdec(10),
_0xdec(11),
_0xdec(12),
_0xdec(13),
_0xdec(14),
_0xdec(15),
_0xdec(16),
_0xdec(17),
_0xdec(18),
_0xdec(19),
_0xdec(20),
_0xdec(21),
_0xdec(22),
_0xdec(23),
_0xdec(24),
_0xdec(25),
_0xdec(26)
];
self.addEventListener(_0xdec(27), (event) => {
console.log(_0xdec(28));
event.waitUntil(
caches.open(CACHE_NAME)
.then((cache) => {
console.log(_0xdec(29));
return cache.addAll(ASSETS).catch((error) => {
console.warn(_0xdec(30), error);
return Promise.resolve();
});
})
.then(() => {
console.log(_0xdec(31));
return self.skipWaiting();
})
);
});
self.addEventListener(_0xdec(32), (event) => {
console.log(_0xdec(33));
event.waitUntil(
caches.keys()
.then((keys) => {
return Promise.all(
keys.filter((key) => key !== CACHE_NAME)
.map((key) => {
console.log(_0xdec(34), key);
return caches.delete(key);
})
);
})
.then(() => {
console.log(_0xdec(35));
return self.clients.claim();
})
);
});
self.addEventListener(_0xdec(36), (event) => {
if (event.request.method !== _0xdec(37)) return;
event.respondWith(
caches.match(event.request)
.then((cachedResponse) => {
if (cachedResponse) return cachedResponse;
return fetch(event.request)
.then((networkResponse) => {
if (!networkResponse || networkResponse.status !== 200) return networkResponse;
const responseClone = networkResponse.clone();
caches.open(CACHE_NAME)
.then((cache) => cache.put(event.request, responseClone))
.catch(() => {});
return networkResponse;
})
.catch(() => {
if (event.request.mode === _0xdec(38)) return caches.match(_0xdec(2));
return new Response(_0xdec(39), { status: 503, statusText: _0xdec(40) });
});
})
);
});
self.addEventListener(_0xdec(41), (event) => {
if (event.data === _0xdec(42)) self.skipWaiting();
if (event.data === _0xdec(43)) {
caches.delete(CACHE_NAME).then(() => console.log(_0xdec(44)));
}
});
console.log(_0xdec(45));