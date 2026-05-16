/* ═══════════════════════════════════════════
   clock.js — 实时时钟
   ═══════════════════════════════════════════
   每秒更新一次时:分:秒 和 日期显示。
   ═══════════════════════════════════════════ */

const WEEK = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

function pad(n) {
    return String(n).padStart(2, '0');
}

function updateClock() {
    const now = new Date();

    document.getElementById('clockHour').textContent = pad(now.getHours());
    document.getElementById('clockMin').textContent = pad(now.getMinutes());
    document.getElementById('clockSec').textContent = pad(now.getSeconds());
    document.getElementById('clockDate').textContent =
        `${now.getFullYear()}年${pad(now.getMonth() + 1)}月${pad(now.getDate())}日 ${WEEK[now.getDay()]}`;
}

// 立即执行一次，再用定时器每秒刷新
updateClock();
setInterval(updateClock, 1000);
