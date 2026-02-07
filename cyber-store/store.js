const carregarProdutos = async () => {
    try {
        // Esta linha conecta com o seu server.js que vi na foto!
        const produtos = [
    { nome: "Processador Quantum", preco: 2500.00 },
    { nome: "Memória Neon 16GB", preco: 450.00 },
    { nome: "Placa Vídeo Cyber", preco: 3800.00 }
];
        
        const container = document.querySelector('.grid'); 
        
        if(container) {
            container.innerHTML = produtos.map(p => `
                <div class="module">
                    <h2>${p.nome}</h2>
                    <p>R$ ${p.preco.toFixed(2)}</p>
                    <button class="cyber-btn">COMPRAR</button>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error("Erro ao carregar produtos:", error);
    }
};

carregarProdutos();