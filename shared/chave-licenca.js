// Chave de licença do Prazzo (20261126000001_chave_de_licenca.sql):
// PRZ-XXXX-XXXX-XXXX-XXXX, 16 letras e números sem 0/O e 1/I. Usada pelo app
// (tela de ativação do computador novo) e pelo Painel do Proprietário (a chave
// gerada e o texto para o cliente). Quem confere a chave é a nuvem.

/** O que conta da chave: maiúsculas, sem traços nem espaços e sem o "PRZ" do começo. */
export function corpoDaChave(texto) {
  const c = String(texto ?? '').toUpperCase().replace(/[^A-Z0-9]/g, '');
  return c.length === 19 && c.startsWith('PRZ') ? c.slice(3) : c;
}

/** A chave no formato PRZ-XXXX-XXXX-XXXX-XXXX ('' quando não tem os 16 caracteres). */
export function chaveFormatada(texto) {
  const c = corpoDaChave(texto);
  if (!/^[A-Z0-9]{16}$/.test(c)) return '';
  return `PRZ-${c.slice(0, 4)}-${c.slice(4, 8)}-${c.slice(8, 12)}-${c.slice(12)}`;
}
