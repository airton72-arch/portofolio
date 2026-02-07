const carregarProdutos = async () => {
    try {
        // Esta linha conecta com o seu server.js que vi na foto!
        const response = await fetch('http://localhost:3000/api/produtos');
        const produtos = await response.json();
        
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