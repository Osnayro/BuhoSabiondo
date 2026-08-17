(function(){
var _0xstr = ['ZWZmZWN0cy1jYW52YXM=','MmQ=','cmVzaXpl','c291bmRzL3NwbGFzaC5tcDM=','c291bmRzL2ludHJvLm1wMw==','c291bmRzL2NvcnJlY3QubXAz','c291bmRzL2luY29ycmVjdC5tcDM=','c291bmRzL2xldmVsdXAubXAz','c291bmRzL2xldmVsc3RhcnQubXAz','c291bmRzL2FjaGlldmVtZW50Lm1wMw==','c291bmRzL3Bvd2VydXAubXAz','c291bmRzL3N0YXIubXAz','c291bmRzL25leHQubXAz','I0ZGRDcwMA==','I0ZGQzEwNw==','I0ZGQjMwMA==','I0ZGQTAwMA==','I0ZGRjhEQw==','I0ZGRTA4Mg==','IzFFM0E2Mw==','IzNCODJGNg==','IzhCNUNGNg==','IzEwQjk4MQ==','I0Y1OUUwQg==','I0VDNDg5OQ==','IzYzNjZGMQ==','IzE0QjhBNg==','Izg0Q0MxNg==','IzI1NjNFQg==','IzdDM0FFRA==','IzA1OTY2OQ==','I0Q5NzcwNg==','I0RDMjYyNg==','I0E3OEJGQQ==','I0M0QjVGRA==','I0RERDZGRQ==','I0ZGNDUwMA==','I0ZGNjM0Nw==','I0ZGQTUwMA==','I0ZGRkZGRg==','I0ZGMTQ5Mw==','IzAwRkY4OA==','I0VGRjZGRg==','I0RCRUFGRQ==','I0JGREJGRQ==','IzkzQzVGRA==','IzYwQTVGQQ==','IzgxOENGOA==','8J+miSBTYWJpb25kbyBFZmZlY3RzIE1hbmFnZXIgdjEuMi4xIGxpc3Rv','8J+TgSBTb25pZG9zIGEgY2FyZ2FyOg==','YXJjaGl2b3M=','8J+UiiBWb2x1bWVuOg==','c3Rhcg==','ZXN0cmVsbGE=','Y29uZmV0dGk=','Y2lyY2xl','bGlicm8=','cGx1bWE=','Y2VudGVy','cmdiYSgwLCAwLCAwLCAwLjM1KQ==','I0ZGRkRFNw==','I0I4ODYwQg==','IzhCNjkxNA==','cmdiYSgyNTUsMjU1LDI1NSwwLjUp','IzRDMUQ5NQ==','IzZCNzI4MA==','IzlDQTNBRg==','ZGl2','MA==','dWx0cmEtcG9w','ODAw','8J+miQ==','bGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzFFM0E2MywgIzNCODJGNik=','dG9w','dG9hc3QtY29udGFpbmVy','cG9zaXRpb246Zml4ZWQ7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7ei1pbmRleDoyMDAwO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjEycHg7cG9pbnRlci1ldmVudHM6bm9uZTs=','NDAl','OCU=','PHNwYW4gc3R5bGU9ImZvbnQtc2l6ZToxLjZyZW07bGluZS1oZWlnaHQ6MSI+','PC9zcGFuPiA=','dG9hc3RTbGlkZU91dCAwLjRzIGVhc2UtaW4gZm9yd2FyZHM=','bG9hZGVyLWZpbGw=','bG9hZGVyLWxhYmVs','MCU=','bm9uZQ==','Q2FyZ2FuZG8gc29uaWRvcy4uLg==','YXV0bw==','Y2FucGxheXRocm91Z2g=','JQ==','4pyFIFRvZG9zIGxvcyBzb25pZG9zIGNhcmdhZG9zOg==','ZXJyb3I=','4pqg77iPIEVycm9yIGFsIGNhcmdhciBzb25pZG86','4pqg77iPIEFsZ3Vub3Mgc29uaWRvcyBubyBzZSBjYXJnYXJvbi4gTGEgYXBwIGZ1bmNpb25hcsOhIHNpbiBlbGxvcy4=','c3BsYXNoLXNjcmVlbg==','c2tpcC1zcGxhc2gtYnRu','MTAwJQ==','wqFMaXN0byEgU2FiaW9uZG8gdGUgZXNwZXJhIPCfpok=','aGlkZGVu','V2ViIEF1ZGlvIEFQSSBubyBkaXNwb25pYmxlLg==','c3VzcGVuZGVk','Tm8gc2UgcHVkbyByZWFudWRhciBBdWRpb0NvbnRleHQ6','RXJyb3IgYWwgY3JlYXIgQXVkaW9Db250ZXh0Og==','U29uaWRvIG5vIHJlY29ub2NpZG86','8J+UhyBBdWRpbyBibG9xdWVhZG86','LQ==','ZW5kZWQ=','c2F3dG9vdGg=','c2luZQ==','RE9NQ29udGVudExvYWRlZA==','c2NvcmUtZGlzcGxheQ=='];
window._0xdec = function(i){
    try {
        var b = atob(_0xstr[i]);
        var u = new Uint8Array(b.length);
        for(var j=0; j<b.length; j++){ u[j] = b.charCodeAt(j); }
        return new TextDecoder('utf-8').decode(u);
    } catch(e) { return ''; }
};
})();
class ContiEffectsManager {
constructor(config = {}) {
this.canvas = document.getElementById(config.canvasId || _0xdec(0));
this.ctx = this.canvas ? this.canvas.getContext(_0xdec(1)) : null;
if (this.canvas) {
this.resizeCanvas();
window.addEventListener(_0xdec(2), () => this.resizeCanvas());
}
this.scoreBadge = config.scoreBadgeId
? document.getElementById(config.scoreBadgeId)
: null;
this.maxParticles = config.maxParticles || 300;
this.masterVolume = Math.min(1, Math.max(0, config.masterVolume ?? 0.8));
this.particles = [];
this.floatingTexts = [];
this.animationId = null;
this.isRunning = false;
this.soundFiles = {
splash:      _0xdec(3),
intro:       _0xdec(4),
correct:     _0xdec(5),
incorrect:   _0xdec(6),
levelup:     _0xdec(7),
levelstart:  _0xdec(8),
achievement: _0xdec(9),
powerup:     _0xdec(10),
star:        _0xdec(11),
next:        _0xdec(12)
};
this.audioPool = [];
this.maxAudioPool = 9;
this.audioPoolIndex = 0;
this.audioBuffers = {};
this.audioLoaded = false;
this.audioLoadError = false;
this.soundsLoadedCount = 0;
this.soundsTotalCount = Object.keys(this.soundFiles).length;
this.audioCtx = null;
this.audioCtxReady = false;
this.colors = {
star:      [_0xdec(13), _0xdec(14), _0xdec(15), _0xdec(16), _0xdec(17), _0xdec(18)],
estrellas: [_0xdec(13), _0xdec(14), _0xdec(15), _0xdec(16), _0xdec(17), _0xdec(18)],
confetti:  [
_0xdec(19), _0xdec(20), _0xdec(21), _0xdec(13), _0xdec(22),
_0xdec(23), _0xdec(24), _0xdec(25), _0xdec(26), _0xdec(27),
_0xdec(28), _0xdec(29), _0xdec(30), _0xdec(31), _0xdec(32)
],
libro:     [_0xdec(21), _0xdec(25), _0xdec(33), _0xdec(34), _0xdec(35), _0xdec(29)],
fuego:     [_0xdec(36), _0xdec(13), _0xdec(37), _0xdec(38), _0xdec(39), _0xdec(40), _0xdec(41), _0xdec(20)],
pluma:     [_0xdec(42), _0xdec(43), _0xdec(44), _0xdec(45), _0xdec(46), _0xdec(20)],
magic:     [_0xdec(33), _0xdec(47), _0xdec(34), _0xdec(25), _0xdec(35)],
};
window.effectsManager = this;
this.startLoop();
this._preloadSounds();
console.log(_0xdec(48));
console.log(_0xdec(49), this.soundsTotalCount, _0xdec(50));
console.log(_0xdec(51), this.masterVolume);
}
resizeCanvas() {
if (!this.canvas) return;
this.canvas.width = window.innerWidth;
this.canvas.height = window.innerHeight;
}
startLoop() {
if (this.isRunning || !this.canvas) return;
this.isRunning = true;
const loop = () => {
if (!this.isRunning) return;
this._update();
this._draw();
this.animationId = requestAnimationFrame(loop);
};
this.animationId = requestAnimationFrame(loop);
}
stopLoop() {
this.isRunning = false;
if (this.animationId) {
cancelAnimationFrame(this.animationId);
this.animationId = null;
}
}
_update() {
for (let i = this.particles.length - 1; i >= 0; i--) {
const p = this.particles[i];
p.x += p.vx;
p.y += p.vy;
p.vy += p.gravity;
p.vx *= p.friction;
p.vy *= p.friction;
p.rotation += p.rotationSpeed;
p.life -= p.decay;
if (p.attractTo && this.scoreBadge && p.life < p.maxLife * 0.6) {
const r = this.scoreBadge.getBoundingClientRect();
const tx = r.left + r.width / 2;
const ty = r.top + r.height / 2;
const dx = tx - p.x;
const dy = ty - p.y;
const dist = Math.sqrt(dx * dx + dy * dy) || 1;
p.vx += (dx / dist) * 0.1;
p.vy += (dy / dist) * 0.1;
}
if (p.life <= 0 || p.y > this.canvas.height + 120 || p.x < -120 || p.x > this.canvas.width + 120) {
this.particles.splice(i, 1);
}
}
while (this.particles.length > this.maxParticles) {
this.particles.shift();
}
for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
const ft = this.floatingTexts[i];
ft.y += ft.vy;
ft.life -= ft.decay;
ft.alpha = Math.max(0, ft.life / ft.maxLife);
if (ft.life <= 0) {
this.floatingTexts.splice(i, 1);
}
}
}
_draw() {
if (!this.ctx) return;
const ctx = this.ctx;
ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
for (const p of this.particles) {
ctx.save();
ctx.globalAlpha = Math.max(0, p.life / p.maxLife);
ctx.translate(p.x, p.y);
ctx.rotate(p.rotation);
ctx.scale(p.scale, p.scale);
switch (p.type) {
case _0xdec(52):
case _0xdec(53):
this._drawEstrella(ctx, p);
break;
case _0xdec(54):
ctx.fillStyle = p.color;
ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
break;
case _0xdec(55):
ctx.fillStyle = p.color;
ctx.beginPath();
ctx.arc(0, 0, p.size, 0, Math.PI * 2);
ctx.fill();
break;
case _0xdec(56):
this._drawLibro(ctx, p);
break;
case _0xdec(57):
this._drawPluma(ctx, p);
break;
default:
ctx.fillStyle = p.color;
ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
}
ctx.restore();
}
for (const ft of this.floatingTexts) {
ctx.save();
ctx.globalAlpha = ft.alpha;
ctx.font = `${ft.fontWeight} ${ft.fontSize}px 'Poppins', sans-serif`;
ctx.fillStyle = ft.color;
ctx.textAlign = _0xdec(58);
ctx.shadowColor = _0xdec(59);
ctx.shadowBlur = 6;
ctx.fillText(ft.text, ft.x, ft.y);
ctx.restore();
}
}
_drawEstrella(ctx, p) {
const spikes = 5;
const outerR = p.size;
const innerR = p.size * 0.4;
const grad = ctx.createRadialGradient(0, 0, innerR * 0.3, 0, 0, outerR);
grad.addColorStop(0, _0xdec(60));
grad.addColorStop(0.4, _0xdec(13));
grad.addColorStop(0.8, _0xdec(16));
grad.addColorStop(1, _0xdec(61));
ctx.fillStyle = grad;
ctx.beginPath();
for (let i = 0; i < spikes * 2; i++) {
const radius = i % 2 === 0 ? outerR : innerR;
const angle = (i * Math.PI) / spikes - Math.PI / 2;
const sx = Math.cos(angle) * radius;
const sy = Math.sin(angle) * radius;
if (i === 0) ctx.moveTo(sx, sy);
else ctx.lineTo(sx, sy);
}
ctx.closePath();
ctx.fill();
ctx.strokeStyle = _0xdec(62);
ctx.lineWidth = 0.8;
ctx.stroke();
}
_drawLibro(ctx, p) {
ctx.fillStyle = _0xdec(21);
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(-p.size / 2, -p.size * 0.15);
ctx.lineTo(-p.size / 2, p.size * 0.6);
ctx.lineTo(0, p.size * 0.5);
ctx.closePath();
ctx.fill();
ctx.fillStyle = _0xdec(29);
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(p.size / 2, -p.size * 0.15);
ctx.lineTo(p.size / 2, p.size * 0.6);
ctx.lineTo(0, p.size * 0.5);
ctx.closePath();
ctx.fill();
ctx.strokeStyle = _0xdec(63);
ctx.lineWidth = 0.5;
for (let i = 0; i < 3; i++) {
const y = -p.size * 0.05 + i * p.size * 0.15;
ctx.beginPath();
ctx.moveTo(-p.size * 0.35, y);
ctx.lineTo(-p.size * 0.05, y);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(p.size * 0.05, y);
ctx.lineTo(p.size * 0.35, y);
ctx.stroke();
}
ctx.strokeStyle = _0xdec(64);
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(0, -p.size * 0.08);
ctx.lineTo(0, p.size * 0.55);
ctx.stroke();
}
_drawPluma(ctx, p) {
ctx.fillStyle = p.color;
ctx.strokeStyle = _0xdec(65);
ctx.lineWidth = 0.6;
ctx.beginPath();
ctx.ellipse(0, 0, p.size * 0.25, p.size, -0.2, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();
ctx.strokeStyle = _0xdec(66);
ctx.lineWidth = 0.5;
ctx.beginPath();
ctx.moveTo(0, -p.size);
ctx.lineTo(0, p.size);
ctx.stroke();
}
triggerStarExplosion(x, y, count = 15) {
if (!this.canvas) return;
count = Math.min(count, 50);
for (let i = 0; i < count; i++) {
const angle = Math.random() * Math.PI * 2;
const speed = 3 + Math.random() * 9;
this.particles.push({
type: _0xdec(52),
x: x + (Math.random() - 0.5) * 20,
y: y + (Math.random() - 0.5) * 20,
vx: Math.cos(angle) * speed,
vy: Math.sin(angle) * speed - 5,
gravity: 0.18,
friction: 0.985,
rotation: Math.random() * Math.PI * 2,
rotationSpeed: (Math.random() - 0.5) * 0.35,
scale: 0.55 + Math.random() * 0.9,
size: 10 + Math.random() * 10,
life: 1, maxLife: 1,
decay: 0.005 + Math.random() * 0.01,
color: this.colors.star[Math.floor(Math.random() * this.colors.star.length)],
attractTo: true,
});
}
}
triggerBookExplosion(x, y, count = 10) {
if (!this.canvas) return;
for (let i = 0; i < count; i++) {
const angle = Math.random() * Math.PI * 2;
const speed = 2 + Math.random() * 6;
this.particles.push({
type: _0xdec(56),
x, y,
vx: Math.cos(angle) * speed,
vy: Math.sin(angle) * speed - 4,
gravity: 0.15, friction: 0.97,
rotation: Math.random() * Math.PI,
rotationSpeed: (Math.random() - 0.5) * 0.2,
scale: 0.5 + Math.random() * 0.8,
size: 8 + Math.random() * 10,
life: 1, maxLife: 1,
decay: 0.008 + Math.random() * 0.012,
color: this.colors.libro[Math.floor(Math.random() * this.colors.libro.length)],
attractTo: false,
});
}
}
triggerStarRain(count = 30) {
if (!this.canvas) return;
for (let i = 0; i < count; i++) {
setTimeout(() => {
this.particles.push({
type: _0xdec(52),
x: Math.random() * this.canvas.width,
y: -40,
vx: (Math.random() - 0.5) * 3.5,
vy: 3 + Math.random() * 6,
gravity: 0.14, friction: 0.994,
rotation: Math.random() * Math.PI * 2,
rotationSpeed: (Math.random() - 0.5) * 0.25,
scale: 0.45 + Math.random() * 0.55,
size: 7 + Math.random() * 8,
life: 1, maxLife: 1,
decay: 0.004 + Math.random() * 0.007,
color: this.colors.star[Math.floor(Math.random() * this.colors.star.length)],
attractTo: false,
});
}, i * 45);
}
}
triggerConfettiAcademico(duration = 2500, density = 3) {
if (!this.canvas) return;
const startTime = performance.now();
const colors = this.colors.confetti;
const spawn = (now) => {
if (now - startTime > duration) return;
for (let i = 0; i < density; i++) {
this.particles.push({
type: _0xdec(54),
x: Math.random() * this.canvas.width,
y: -25,
vx: (Math.random() - 0.5) * 5,
vy: 2 + Math.random() * 5,
gravity: 0.06, friction: 0.994,
rotation: Math.random() * Math.PI * 2,
rotationSpeed: (Math.random() - 0.5) * 0.25,
scale: 0.7 + Math.random() * 1.3,
size: 8 + Math.random() * 14,
life: 1, maxLife: 1,
decay: 0.003 + Math.random() * 0.006,
color: colors[Math.floor(Math.random() * colors.length)],
attractTo: false,
});
}
requestAnimationFrame(spawn);
};
requestAnimationFrame(spawn);
}
triggerFuegosAcademicos(count = 3) {
if (!this.canvas) return;
for (let i = 0; i < count; i++) {
setTimeout(() => {
const x = this.canvas.width * (0.2 + Math.random() * 0.6);
const y = this.canvas.height * (0.12 + Math.random() * 0.28);
this._burstAcademicFirework(x, y);
}, i * 400 + Math.random() * 300);
}
}
_burstAcademicFirework(x, y) {
const colors = this.colors.fuego;
const count = 50 + Math.floor(Math.random() * 40);
for (let i = 0; i < count; i++) {
const angle = Math.random() * Math.PI * 2;
const speed = 3 + Math.random() * 9;
this.particles.push({
type: _0xdec(52),
x, y,
vx: Math.cos(angle) * speed,
vy: Math.sin(angle) * speed,
gravity: 0.09, friction: 0.965,
rotation: Math.random() * Math.PI * 2,
rotationSpeed: (Math.random() - 0.5) * 0.12,
scale: 0.3 + Math.random() * 0.6,
size: 4 + Math.random() * 8,
life: 1, maxLife: 1,
decay: 0.009 + Math.random() * 0.016,
color: colors[Math.floor(Math.random() * colors.length)],
attractTo: false,
});
}
}
triggerPlumasVoladoras(count = 12) {
if (!this.canvas) return;
for (let i = 0; i < count; i++) {
setTimeout(() => {
this.particles.push({
type: _0xdec(57),
x: Math.random() * this.canvas.width,
y: -20,
vx: (Math.random() - 0.5) * 2,
vy: 1 + Math.random() * 3,
gravity: 0.02, friction: 0.996,
rotation: Math.random() * Math.PI * 2,
rotationSpeed: (Math.random() - 0.5) * 0.15,
scale: 0.6 + Math.random() * 0.8,
size: 6 + Math.random() * 8,
life: 1, maxLife: 1,
decay: 0.002 + Math.random() * 0.005,
color: this.colors.pluma[Math.floor(Math.random() * this.colors.pluma.length)],
attractTo: false,
});
}, i * 60);
}
}
triggerScreenFlash(duration = 200) {
const flash = document.createElement(_0xdec(67));
flash.style.cssText = `
position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
background: radial-gradient(circle, rgba(139, 92, 246, 0.4), rgba(30, 58, 99, 0.2));
z-index: 998; pointer-events: none;
opacity: 0.6; transition: opacity ${duration}ms ease-out;
`;
document.body.appendChild(flash);
requestAnimationFrame(() => { flash.style.opacity = _0xdec(68); });
setTimeout(() => flash.remove(), duration + 60);
}
triggerScoreBadgeFlash() {
if (!this.scoreBadge) return;
this.scoreBadge.classList.add(_0xdec(69));
setTimeout(() => this.scoreBadge.classList.remove(_0xdec(69)), 600);
const rect = this.scoreBadge.getBoundingClientRect();
const cx = rect.left + rect.width / 2;
const cy = rect.top + rect.height / 2;
for (let i = 0; i < 10; i++) {
const angle = (i / 10) * Math.PI * 2;
this.particles.push({
type: _0xdec(52),
x: cx, y: cy,
vx: Math.cos(angle) * 2.5,
vy: Math.sin(angle) * 2.5,
gravity: 0, friction: 0.9,
rotation: 0, rotationSpeed: 0,
scale: 0.5, size: 3 + Math.random() * 3,
life: 1, maxLife: 1, decay: 0.035,
color: _0xdec(13), attractTo: false,
});
}
}
triggerExplosion(x, y, scale = 1.0, color = _0xdec(13)) {
if (!this.canvas) return;
const count = Math.floor(22 * scale);
for (let i = 0; i < count; i++) {
const angle = Math.random() * Math.PI * 2;
const speed = (2 + Math.random() * 7) * scale;
this.particles.push({
type: _0xdec(52), x, y,
vx: Math.cos(angle) * speed,
vy: Math.sin(angle) * speed,
gravity: 0.12, friction: 0.955,
rotation: 0, rotationSpeed: 0,
scale: 0.45 + Math.random() * 0.85,
size: 3 + Math.random() * 9 * scale,
life: 1, maxLife: 1,
decay: 0.014 + Math.random() * 0.022,
color: color, attractTo: false,
});
}
}
triggerFloatingText(x, y, text, options = {}) {
if (!this.canvas) return;
this.floatingTexts.push({
x, y, text, vy: -1.6,
life: 1, maxLife: 1, decay: 0.011, alpha: 1,
color: options.color || _0xdec(13),
fontSize: options.fontSize || 28,
fontWeight: options.fontWeight || _0xdec(70),
});
}
triggerToastAcademico(message, options = {}) {
const { icon = _0xdec(71), bg = _0xdec(72), duration = 3000, position = _0xdec(73) } = options;
let container = document.getElementById(_0xdec(74));
if (!container) {
container = document.createElement(_0xdec(67));
container.id = _0xdec(74);
container.style.cssText = _0xdec(75);
document.body.appendChild(container);
}
container.style.top = position === _0xdec(58) ? _0xdec(76) : _0xdec(77);
const toast = document.createElement(_0xdec(67));
toast.style.cssText = `background:${bg};color:white;padding:15px 26px;border-radius:18px;font-weight:700;font-size:0.95rem;font-family:'Poppins',sans-serif;text-align:center;box-shadow:0 14px 35px rgba(0,0,0,0.28);pointer-events:auto;animation:toastSlideIn 0.5s cubic-bezier(0.175,0.885,0.32,1.275) forwards;display:flex;align-items:center;gap:12px;white-space:nowrap;letter-spacing:0.3px;`;
toast.innerHTML = _0xdec(78) + icon + _0xdec(79) + message;
container.appendChild(toast);
setTimeout(() => {
toast.style.animation = _0xdec(80);
setTimeout(() => toast.remove(), 400);
}, duration);
}
triggerStarsFromElement(element, count = 15) {
if (!element || !this.canvas) return;
const rect = element.getBoundingClientRect();
this.triggerStarExplosion(rect.left + rect.width / 2, rect.top + rect.height / 2, count);
this.playSound(_0xdec(52));
}
triggerBooksFromElement(element, count = 10) {
if (!element || !this.canvas) return;
const rect = element.getBoundingClientRect();
this.triggerBookExplosion(rect.left + rect.width / 2, rect.top + rect.height / 2, count);
}
triggerCoinExplosion(x, y, count) { this.triggerStarExplosion(x, y, count); }
triggerCoinExplosionFromElement(element, count) { this.triggerStarsFromElement(element, count); }
triggerConfetti(duration, density) { this.triggerConfettiAcademico(duration, density); }
triggerFireworks(count) { this.triggerFuegosAcademicos(count); }
triggerCoinRain() { this.triggerStarRain(); }
triggerToast(message, options) { this.triggerToastAcademico(message, options); }
_preloadSounds(onProgress) {
const loaderFill = document.getElementById(_0xdec(81));
const loaderLabel = document.getElementById(_0xdec(82));
if (loaderFill) {
loaderFill.style.width = _0xdec(83);
loaderFill.style.animation = _0xdec(84);
}
if (loaderLabel) {
loaderLabel.textContent = _0xdec(85);
}
for (let i = 0; i < this.maxAudioPool; i++) {
const audio = new Audio();
audio.preload = _0xdec(86);
audio.volume = this.masterVolume;
this.audioPool.push(audio);
}
for (const [key, path] of Object.entries(this.soundFiles)) {
const audio = new Audio();
audio.preload = _0xdec(86);
audio.src = path;
audio.volume = this.masterVolume;
audio.addEventListener(_0xdec(87), () => {
this.soundsLoadedCount++;
this.audioBuffers[key] = audio;
if (loaderFill) {
const progress = (this.soundsLoadedCount / this.soundsTotalCount) * 100;
loaderFill.style.width = progress + _0xdec(88);
}
if (loaderLabel) {
loaderLabel.textContent = `Cargando sonidos... (${this.soundsLoadedCount}/${this.soundsTotalCount})`;
}
if (onProgress) onProgress(this.soundsLoadedCount, this.soundsTotalCount);
if (this.soundsLoadedCount === this.soundsTotalCount) {
this.audioLoaded = true;
console.log(_0xdec(89), this.soundsTotalCount, _0xdec(50));
this._onSoundLoadComplete();
}
}, { once: true });
audio.addEventListener(_0xdec(90), () => {
this.soundsLoadedCount++;
console.warn(_0xdec(91), path);
if (loaderFill) {
loaderFill.style.width = (this.soundsLoadedCount / this.soundsTotalCount) * 100 + _0xdec(88);
}
if (onProgress) onProgress(this.soundsLoadedCount, this.soundsTotalCount);
if (this.soundsLoadedCount === this.soundsTotalCount && !this.audioLoaded) {
this.audioLoadError = true;
console.warn(_0xdec(92));
this._onSoundLoadComplete();
}
});
audio.load();
}
}
_onSoundLoadComplete() {
const loaderFill = document.getElementById(_0xdec(81));
const loaderLabel = document.getElementById(_0xdec(82));
const splashScreen = document.getElementById(_0xdec(93));
const skipBtn = document.getElementById(_0xdec(94));
if (skipBtn) skipBtn.style.display = _0xdec(84);
if (loaderFill) loaderFill.style.width = _0xdec(95);
if (loaderLabel) {
loaderLabel.textContent = _0xdec(96);
loaderLabel.style.color = _0xdec(22);
}
if (splashScreen) {
setTimeout(() => {
splashScreen.classList.add(_0xdec(97));
}, 900);
}
}
initGlobalAudio() {
if (this.audioCtxReady) return;
const AudioCtx = window.AudioContext || window.webkitAudioContext;
if (!AudioCtx) { console.warn(_0xdec(98)); return; }
try {
this.audioCtx = new AudioCtx();
if (this.audioCtx.state === _0xdec(99)) {
this.audioCtx.resume().then(() => {
this.audioCtxReady = true;
}).catch(err => console.warn(_0xdec(100), err));
} else {
this.audioCtxReady = true;
}
} catch (e) {
console.warn(_0xdec(101), e);
}
}
playSound(type) {
if (!this.audioLoaded && !this.audioLoadError) return;
if (!this.soundFiles[type]) {
console.warn(_0xdec(102), type);
return;
}
const sourceAudio = this.audioBuffers[type];
if (!sourceAudio) return;
const poolAudio = this.audioPool[this.audioPoolIndex];
this.audioPoolIndex = (this.audioPoolIndex + 1) % this.maxAudioPool;
poolAudio.src = this.soundFiles[type];
poolAudio.volume = this.masterVolume;
const playPromise = poolAudio.play();
if (playPromise !== undefined) {
playPromise.catch(err => console.debug(_0xdec(103), type, _0xdec(104), err.message));
}
}
playIncorrectFallback() {
if (!this.audioLoaded && !this.audioLoadError) return;
const audio = new Audio(_0xdec(6));
audio.volume = this.masterVolume;
const playPromise = audio.play();
if (playPromise !== undefined) {
playPromise.catch(() => this._playIncorrectWithAudioContext());
}
audio.addEventListener(_0xdec(105), () => audio.remove());
}
_playIncorrectWithAudioContext() {
if (!this.audioCtxReady || !this.audioCtx) return;
if (this.audioCtx.state === _0xdec(99)) { this.audioCtx.resume(); return; }
const ctx = this.audioCtx;
const now = ctx.currentTime;
const vol = this.masterVolume;
const osc = ctx.createOscillator();
const gain = ctx.createGain();
osc.type = _0xdec(106);
osc.frequency.setValueAtTime(200, now);
osc.frequency.exponentialRampToValueAtTime(95, now + 0.38);
gain.gain.setValueAtTime(0.00001, now);
gain.gain.exponentialRampToValueAtTime(0.16 * vol, now + 0.005);
gain.gain.exponentialRampToValueAtTime(0.00001, now + 0.5);
osc.connect(gain);
gain.connect(ctx.destination);
osc.start(now);
osc.stop(now + 0.5);
}
playTick() {
if (!this.audioCtxReady || !this.audioCtx) return;
if (this.audioCtx.state === _0xdec(99)) { this.audioCtx.resume(); return; }
const ctx = this.audioCtx;
const now = ctx.currentTime;
const vol = this.masterVolume;
const osc = ctx.createOscillator();
const gain = ctx.createGain();
osc.type = _0xdec(107);
osc.frequency.setValueAtTime(800, now);
gain.gain.setValueAtTime(0.00001, now);
gain.gain.exponentialRampToValueAtTime(0.3 * vol, now + 0.005);
gain.gain.exponentialRampToValueAtTime(0.00001, now + 0.1);
osc.connect(gain);
gain.connect(ctx.destination);
osc.start(now);
osc.stop(now + 0.12);
}
ensureAudio() { return; }
isSoundLoaded(type) { return !!this.audioBuffers[type]; }
getSoundLoadProgress() {
if (this.soundsTotalCount === 0) return 1;
return this.soundsLoadedCount / this.soundsTotalCount;
}
}
document.addEventListener(_0xdec(108), () => {
if (!window.effectsManager) {
window.effectsManager = new ContiEffectsManager({
canvasId: _0xdec(0),
scoreBadgeId: _0xdec(109),
maxParticles: 300,
masterVolume: 0.8,
});
}
});