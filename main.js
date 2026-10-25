document.addEventListener('DOMContentLoaded', () => {
  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // burger meni
  const burger = document.getElementById('burgerBtn');
  const nav = document.getElementById('mainNav');
  if (burger && nav) {
    burger.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // galerija
  const itemsEl = document.getElementById('items');
  if (itemsEl) {
    const data = [
      {id:1, title:'Jakna', cat:'odeca', img:'images/jakna.jpeg'},
      {id:2, title:'Pametni sat', cat:'tech', img:'images/pametni-sat.jpeg'},
      {id:3, title:'Lampa za sto', cat:'dom', img:'images/lampa.jpeg'},
      {id:4, title:'Trenerka', cat:'odeca', img:'images/trenerka.jpeg'},
      {id:5, title:'Slušalice', cat:'tech', img:'images/slusalice.jpeg'},
      {id:6, title:'Jastuk', cat:'dom', img:'images/jastuk.jpeg'},
      {id:7, title:'Plastično ogledalo', cat:'dom', img:'images/ogledalo.jpeg'},
      {id:8, title:'Duks', cat:'odeca', img:'images/duks.jpeg'},
      {id:9, title:'Bežični punjač', cat:'tech', img:'images/bezicni-punjac.jpeg'}
    ];

    const render = (filter = 'sve') => {
      itemsEl.innerHTML = '';
      data
        .filter(d => filter === 'sve' ? true : d.cat === filter)
        .forEach(d => {
          const card = document.createElement('article');
          card.className = 'item';
          card.innerHTML = `
            <img src="${d.img}" alt="${d.title}">
            <div class="p">
              <h3>${d.title}</h3>
              <p class="muted">Kategorija: ${d.cat}</p>
            </div>`;
          itemsEl.appendChild(card);
        });
    };

    render();

    document.querySelectorAll('.side-link').forEach(btn => {
      btn.addEventListener('click', () => render(btn.dataset.category));
    });
  }

  // forma
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = document.getElementById('formMsg');
      if (msg) msg.textContent = 'Hvala! Vaša poruka je evidentirana.';
      form.reset();
    });
  }
});
