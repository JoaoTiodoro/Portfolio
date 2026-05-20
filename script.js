// ── NAV MOBILE ──
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
});

// ── NAV SCROLL COMPACTO ──
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 60) {
    nav.style.height = '56px';
  } else {
    nav.style.height = '64px';
  }
});

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── FILTRO DE PROJETOS ──
function filterProjects(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.project-card').forEach(card => {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.style.display = 'flex';
      card.style.opacity = '0';
      setTimeout(() => {
        card.style.transition = 'opacity 0.3s';
        card.style.opacity = '1';
      }, 10);
    } else {
      card.style.display = 'none';
    }
  });
}

// ── MODAL CASE STUDY ──
function openModal(id) {
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ── FORMULÁRIO DE CONTATO ──
function submitForm() {
  const success = document.getElementById('formSuccess');
  success.style.display = 'block';
  setTimeout(() => { success.style.display = 'none'; }, 5000);
}
