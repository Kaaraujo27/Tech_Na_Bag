const partsData = {
  hdd: {
    tag: "ARMAZENAMENTO & CONEXÃO",
    title: 'HD 3.5" na Tampa + Cabo SATA Amarelo',
    desc: "Para liberar espaço na base da maleta para a placa-mãe e a fonte, o disco rígido mecânico foi fixado diretamente na tampa superior. O cabo SATA amarelo faz a ponte articulada acompanhando o movimento de abertura da maleta sem tensionar os conectores.",
    specs: ["Fixação Vertical", "Interface SATA III", "Otimização de Espaço"]
  },
  vents: {
    tag: "DISSIPAÇÃO PASSIVA",
    title: "Furos de Ventilação na Tampa",
    desc: "Conjunto de perfurações circulares usinadas ao lado do disco rígido para permitir a troca térmica da parte superior da maleta e aliviar a pressão interna de ar quente.",
    specs: ["Usinagem Artesanal", "Alívio Térmico", "Fluxo Auxiliar"]
  },
  cutout: {
    tag: "ENGENHARIA TÉRMICA",
    title: "Recorte Retangular de Exaustão",
    desc: "Abertura estrutural recortada na tampa superior exatamente sobre o eixo da ventoinha da Fonte ATX. Isso impede o bloqueio de ar e garante refrigeração contínua dos componentes internos.",
    specs: ["Alinhamento Milimétrico", "Zero Restrição de Ar", "Acabamento Reforçado"]
  },
  mobo: {
    tag: "PROCESSAMENTO CENTRAL",
    title: "Placa-Mãe Desktop & Cooler CPU",
    desc: "Coração do sistema instalado sobre base isolada no lado esquerdo da maleta. O perfil do cooler foi dimensionado para respeitar a altura interna da caixa de alumínio.",
    specs: ["Arquitetura Desktop", "Base Isolada", "Acesso Rápido à RAM"]
  },
  psu: {
    tag: "ALIMENTAÇÃO ELÉTRICA",
    title: "Fonte ATX de Alta Eficiência",
    desc: "Posicionada no lado direito da base inferior para equilibrar o peso da maleta durante o transporte pela alça. Sua ventoinha principal atua como exaustor central do sistema.",
    specs: ["Padrão ATX", "Equilíbrio de Centro de Massa", "Proteção contra Surtos"]
  },
  cables: {
    tag: "ORGANIZAÇÃO INTERNA",
    title: "Cable Management Frontal",
    desc: "Todos os cabos excedentes da fonte ATX foram agrupados e roteados na canaleta frontal. Além da estética limpa para exposição na feira, isso evita que fios encostem nas pás das ventoinhas.",
    specs: ["Fluxo de Ar Livre", "Segurança Mecânica", "Visual Profissional"]
  }
};

const hotspots = document.querySelectorAll('.hotspot');
const partTag = document.getElementById('partTag');
const partTitle = document.getElementById('partTitle');
const partDesc = document.getElementById('partDesc');
const partSpecs = document.getElementById('partSpecs');

hotspots.forEach(spot => {
  spot.addEventListener('click', () => {
    hotspots.forEach(s => s.classList.remove('selected'));
    spot.classList.add('selected');

    const key = spot.getAttribute('data-part');
    const data = partsData[key];
    if (data) {
      partTag.textContent = data.tag;
      partTitle.textContent = data.title;
      partDesc.textContent = data.desc;
      partSpecs.innerHTML = data.specs.map(s => `<span class="spec-pill">${s}</span>`).join('');
    }
  });
});

const toggleAirflow = document.getElementById('toggleAirflow');
const airflowLayer = document.getElementById('airflowLayer');
let airflowOn = false;

toggleAirflow.addEventListener('click', () => {
  airflowOn = !airflowOn;
  airflowLayer.classList.toggle('visible', airflowOn);
  toggleAirflow.classList.toggle('active', airflowOn);
  toggleAirflow.textContent = airflowOn ? 'Simular Fluxo de Ar: ON' : 'Simular Fluxo de Ar: OFF';
});

const toggleFairMode = document.getElementById('toggleFairMode');
let fairOn = false;

toggleFairMode.addEventListener('click', () => {
  fairOn = !fairOn;
  document.body.classList.toggle('fair-mode', fairOn);
  toggleFairMode.textContent = fairOn ? 'Modo Feira: ON' : 'Modo Feira: OFF';
});

document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    item.classList.toggle('open');
    btn.querySelector('span').textContent = item.classList.contains('open') ? '−' : '+';
  });
});
