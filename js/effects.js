/**
 * 视觉特效引擎
 * Canvas粒子系统 + 足球飘落 + 烟花庆祝 + 数字跳动
 */

var Effects = {
  canvas: null,
  ctx: null,
  particles: [],
  animId: null,
  fireworks: [],

  init: function() {
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'particle-canvas';
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    this.resize();
    window.addEventListener('resize', this.resize.bind(this));
  },

  resize: function() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  },

  spawnParticle: function(x, y) {
    var p = {
      x: x || Math.random() * this.canvas.width,
      y: y || -10,
      r: Math.random() * 3 + 1,
      vx: (Math.random() - .5) * .6,
      vy: Math.random() * .8 + .3,
      life: 1,
      decay: Math.random() * .003 + .001,
      color: Math.random() < .7 ? '59,130,246' : '5,150,105',
    };
    this.particles.push(p);
  },

  spawnFirework: function(x, y) {
    var count = 30;
    for (var i = 0; i < count; i++) {
      var angle = (Math.PI * 2 / count) * i;
      var speed = Math.random() * 3 + 2;
      var colors = ['251,191,36','5,150,105','220,38,38','59,130,246','217,119,6'];
      this.fireworks.push({
        x: x, y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r: Math.random() * 2 + 2,
        life: 1,
        decay: Math.random() * .015 + .01,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
  },

  startParticleRain: function() {
    var self = this;
    this.particles = [];
    this.fireworks = [];

    function frame() {
      if (!self.canvas) return;
      var ctx = self.ctx;
      var w = self.canvas.width;
      var h = self.canvas.height;
      ctx.clearRect(0, 0, w, h);

      // 粒子
      if (Math.random() < .05) self.spawnParticle();

      for (var i = self.particles.length - 1; i >= 0; i--) {
        var p = self.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;

        if (p.life <= 0 || p.y > h + 10) {
          self.particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + p.color + ',' + p.life + ')';
        ctx.fill();

        // 足球轮廓
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r + 1.5, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(' + p.color + ',' + (p.life * .3) + ')';
        ctx.stroke();
      }

      // 烟花粒子
      for (var j = self.fireworks.length - 1; j >= 0; j--) {
        var f = self.fireworks[j];
        f.x += f.vx;
        f.y += f.vy;
        f.vy += .03;
        f.life -= f.decay;

        if (f.life <= 0) { self.fireworks.splice(j, 1); continue; }

        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + f.color + ',' + f.life + ')';
        ctx.fill();
      }

      self.animId = requestAnimationFrame(frame);
    }
    frame();
  },

  stop: function() {
    if (this.animId) cancelAnimationFrame(this.animId);
    this.particles = [];
    this.fireworks = [];
    if (this.ctx && this.canvas) this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  burstCelebration: function(count) {
    var self = this;
    count = count || 3;
    for (var i = 0; i < count; i++) {
      setTimeout(function() {
        var x = Math.random() * (self.canvas ? self.canvas.width : 800) * .6 + (self.canvas ? self.canvas.width : 800) * .2;
        var y = Math.random() * (self.canvas ? self.canvas.height : 600) * .4 + 100;
        self.spawnFirework(x, y);
      }, i * 500 + Math.random() * 200);
    }
  },
};

// 数字跳动动画
function animateNumber(el, from, to, duration) {
  var start = performance.now();
  function tick(now) {
    var progress = Math.min((now - start) / duration, 1);
    var eased = 1 - Math.pow(1 - progress, 3);
    var current = Math.round(from + (to - from) * eased);
    el.textContent = current;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// 进度条动画
function animateProgressBar(el, targetWidth, duration) {
  el.style.transition = 'width ' + (duration || 800) + 'ms ease-out';
  el.style.width = targetWidth + '%';
}

// 序列动画 - 给元素组依次添加animate-in
function staggerAnimate(selector, delay) {
  delay = delay || 60;
  var els = document.querySelectorAll(selector);
  els.forEach(function(el, i) {
    el.style.animationDelay = (i * delay) + 'ms';
    el.classList.add('animate-in');
  });
}
