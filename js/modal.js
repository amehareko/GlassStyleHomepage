/* ═══════════════════════════════════════════
   modal.js — 社交卡片弹窗
   ═══════════════════════════════════════════
   依赖 contacts.js（全局 CONTACTS 对象）。
   提供 showContact() / closeModal() 供 onclick 调用。
   ═══════════════════════════════════════════ */

const overlay = document.getElementById('modalOverlay');

/**
 * 根据 key 打开对应的社交卡片
 * @param {string} key — CONTACTS 中的键名
 */
function showContact(key) {
    const c = CONTACTS[key];
    if (!c) return;

    document.getElementById('modalIcon').innerHTML = `<i class="${c.icon}"></i>`;
    document.getElementById('modalTitle').textContent = c.title;
    document.getElementById('modalLabel').textContent = c.label;
    document.getElementById('modalValue').textContent = c.value;

    const btn = document.getElementById('modalAction');
    btn.textContent = c.action.text;
    btn.href = c.action.url;

    overlay.classList.add('active');
}

/**
 * 关闭弹窗
 * @param {MouseEvent} [e] — 可选，若传入则仅在点击遮罩层时关闭
 */
function closeModal(e) {
    if (e && e.target !== overlay) return;
    overlay.classList.remove('active');
}

/* ── 按 Escape 也关闭 ── */
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') overlay.classList.remove('active');
});
