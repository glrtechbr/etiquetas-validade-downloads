// Constantes compartilhadas entre o processo principal (Node) e a interface.

export const CONSERVACOES = [
  { id: 'resfriado', nome: 'Resfriado', icone: '🌡️', faixaPadrao: '0°C A 5°C' },
  { id: 'congelado', nome: 'Congelado', icone: '❄️', faixaPadrao: '-18°C OU INFERIOR' },
  { id: 'ambiente', nome: 'Ambiente', icone: '📦', faixaPadrao: 'LOCAL SECO E AREJADO' },
];

export const CONSERVACAO_IDS = CONSERVACOES.map((c) => c.id);

export function conservacaoPorId(id) {
  return CONSERVACOES.find((c) => c.id === id) || null;
}

export const UNIDADES = ['KG', 'G', 'L', 'ML', 'UN', 'PCT', 'CX', 'PORÇÃO'];

export const SETORES_PADRAO = ['Cozinha', 'Bar', 'Estoque Seco'];

export const STATUS = {
  ATIVA: 'ativa',
  UTILIZADA: 'utilizada',
  DESCARTADA: 'descartada',
};

// Situação calculada de uma etiqueta em relação à data atual.
export const SITUACAO = {
  VENCIDO: 'vencido',
  HOJE: 'hoje',
  PROXIMO: 'proximo',
  OK: 'ok',
  UTILIZADA: 'utilizada',
  DESCARTADA: 'descartada',
};

export const SITUACAO_INFO = {
  vencido: { nome: 'Vencido', icone: '⛔' },
  hoje: { nome: 'Vence hoje', icone: '⚠️' },
  proximo: { nome: 'A vencer', icone: '⏳' },
  ok: { nome: 'No prazo', icone: '✅' },
  utilizada: { nome: 'Utilizada', icone: '✔️' },
  descartada: { nome: 'Descartada', icone: '🗑️' },
};

export const TAMANHOS_ETIQUETA = [
  { larguraMm: 60, alturaMm: 40 },
  { larguraMm: 50, alturaMm: 30 },
  { larguraMm: 40, alturaMm: 25 },
  { larguraMm: 50, alturaMm: 25 },
  { larguraMm: 60, alturaMm: 60 },
  { larguraMm: 100, alturaMm: 50 },
  { larguraMm: 100, alturaMm: 100 },
  { larguraMm: 100, alturaMm: 150, rolo: 'etiqueta de envio' },
  { larguraMm: 100, alturaMm: 62, rolo: 'Brother DK-11202' },
  { larguraMm: 62, alturaMm: 29, rolo: 'Brother DK-11209' },
];

/** Limites dos campos de tamanho da etiqueta (mm). */
export const LIMITES_ETIQUETA = { minLargura: 20, maxLargura: 120, minAltura: 15, maxAltura: 200 };

export const CONFIG_PADRAO = {
  empresa: { nome: '', cnpj: '' },
  impressora: {
    modo: 'zpl', // 'zpl' (Direto USB: RAW, sem o driver), 'driver' (driver do sistema), 'rede' (IP:9100)
    // 'zpl' (Zebra) ou 'tspl' (Caibeu, Xprinter, Gprinter, TSC…): vale nos modos 'zpl' (Direto USB) e 'rede'.
    linguagem: 'zpl',
    nome: '',
    host: '',
    porta: 9100,
    papel: '', // modo driver: nome do papel do driver ('' = automático, pelo tamanho da etiqueta)
    // Tamanho da etiqueta de antes de um papel fixo ajustá-lo: { larguraMm, alturaMm, papel,
    // ajustado: { larguraMm, alturaMm } }. Volta ao escolher o papel Automático.
    tamanhoAntesDoPapel: null,
  },
  etiqueta: {
    larguraMm: 60,
    alturaMm: 40,
    dpi: 203,
    deslocamentoXMm: 0,
    deslocamentoYMm: 0,
    escurecimento: 0, // -30 a 30 (0 = padrão da impressora): ^MD no ZPL, DENSITY no TSPL
    // Rolo (TSPL): 'espaco' (espaço entre as etiquetas), 'marca' (marca preta no verso) ou
    // 'continuo'; espacoMm de 0 a 10, de 0,5 em 0,5. Conferido na hora do uso (normalizarMidia).
    midia: { tipo: 'espaco', espacoMm: 2 },
    girar180: false, // TSPL: DIRECTION 1 (etiqueta saindo de cabeça para baixo)
    // Orientação do desenho: 'auto' (a etiqueta em pé, altura >= 1,15 x largura, sai deitada e
    // girada para ficar maior), 0 (em pé) ou 90 (deitada). O ZPL não gira nesta versão.
    giro: 'auto',
    // Etiqueta só com a data na manipulação e na validade (decisão do dono, 1.2.x).
    // Quem quiser a hora religa em Configurações; a v7 do banco local desligou nos PCs antigos.
    mostrarHora: false,
    faixas: {
      resfriado: '0°C A 5°C',
      congelado: '-18°C OU INFERIOR',
      ambiente: 'LOCAL SECO E AREJADO',
    },
  },
  alertas: {
    diasAviso: 2, // quantos dias antes do vencimento a etiqueta entra em "a vencer"
    notificacoes: true,
  },
  setorPadrao: '',
  dispositivo: '', // nome deste computador nas solicitações e no rastreio (padrão: nome do Windows)
};
