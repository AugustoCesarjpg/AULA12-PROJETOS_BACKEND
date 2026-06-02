const PORTA = Number(process.env.PORTA);
const API_KEY = process.env.API_KEY;

require('dotenv').config();

const NOME_DO_MAPA = process.env.NOME_DO_MAPA;
const MULTIPLICADOR_XP = Number(process.env.MULTIPLICADOR_XP);
const MODO_DE_JOGO = process.env.MODO_DE_JOGO;

console.log("\n=== SERVIDOR ONLINE ===");

console.log(`Porta: ${PORTA}`);
console.log(`Mapa Atual: ${NOME_DO_MAPA}`);
console.log(`Modo de Jogo: ${MODO_DE_JOGO}`);

console.log(`API Key carregada: ${API_KEY ? "SIM" : "NÃO"}`);

if (MODO_DE_JOGO === "MANUTENÇÃO") {
    console.log("STATUS: Servidor fechado para reparos. Erro 503.");
} else if (MODO_DE_JOGO === "EVENTO") {
    console.log(`STATUS: EVENTO ATIVO! XP Total: ${MULTIPLICADOR_XP * 2}`);
} else {
    console.log(`STATUS: Jogando normalmente. XP: ${MULTIPLICADOR_XP}`);
}