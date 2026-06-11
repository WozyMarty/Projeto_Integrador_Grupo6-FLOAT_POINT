// Aguarda o DOM carregar completamente
document.addEventListener("DOMContentLoaded", function() {

    // --- FUNCIONALIDADE 1: CÁLCULO / LOGICA DE REDE E MANIPULAÇÃO DO DOM ---
    const btnVerificar = document.getElementById("btnVerificar");
    const ipInput = document.getElementById("ipInput");
    const resultado = document.getElementById("resultado");

    btnVerificar.addEventListener("click", function() {
        const valorInput = ipInput.value.trim();

        // Validação simples se o campo está vazio
        if (valorInput === "") {
            alert("Por favor, digite um valor!"); // Alerta/Confirmação exigido no escopo
            resultado.textContent = "Erro: Campo vazio.";
            return;
        }

        // Simulação de cálculo/análise do primeiro octeto
        const primeiroOcteto = parseInt(valorInput.split('.')[0]);

        if (isNaN(primeiroOcteto)) {
            resultado.textContent = "Por favor, insira um formato de IP válido (Ex: 192).";
            return;
        }

        // Lógica de determinação de classe (Cálculo básico/Lógica)
        if (primeiroOcteto >= 1 && primeiroOcteto <= 126) {
            resultado.textContent = `O IP fornecido pertence à Classe A.`;
        } else if (primeiroOcteto >= 128 && primeiroOcteto <= 191) {
            resultado.textContent = `O IP fornecido pertence à Classe B.`;
        } else if (primeiroOcteto >= 192 && primeiroOcteto <= 223) {
            resultado.textContent = `O IP fornecido pertence à Classe C (Mesma classe da LAN Clientes!).`;
        } else {
            resultado.textContent = `Classe de IP alternativa ou Inválida.`;
        }
    });

    // --- FUNCIONALIDADE 2: MUDANÇA DE ESTILO DINÂMICA ---
    const btnTema = document.getElementById("btnTema");
    
    btnTema.addEventListener("click", function() {
        // Alterna a classe dark-mode no elemento body
        document.body.classList.toggle("dark-mode");
        
        // Altera o texto do botão dinamicamente (Manipulação do DOM)
        if (document.body.classList.contains("dark-mode")) {
            btnTema.textContent = "Alternar Modo Claro";
        } else {
            btnTema.textContent = "Alternar Modo Escuro";
        }
    });
});