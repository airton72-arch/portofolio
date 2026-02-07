require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.post('/perguntar', async (req, res) => {
    const { mensagem } = req.body;
    try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.CHAVE_IA}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                temperature: 0.6, 
                max_tokens: 2048,
                messages: [
                    { 
                        role: "system", 
                        content: `VOCÊ É O CHAPPIE - NÚCLEO DE INTELIGÊNCIA SUPREMA.
Você é a voz oficial do portfólio de Airton Heinen.
DIRETRIZES:
1. FOCO EM INOVAÇÃO: Fale sobre tecnologia, design e arquitetura de sistemas.
2. ESQUEÇA AS NRs: Você não é mais um instrutor de segurança. O foco é o talento do seu criador.
3. ESTILO EXECUTIVO: Seja inteligente, direto e demonstre autoridade técnica.
4. LINGUAGEM: Responda sempre em Português do Brasil de forma clara e impecável.`
                    },
                    { role: "user", content: mensagem }
                ]
            })
        });

        const dados = await response.json();
        
        if (dados.choices && dados.choices[0]) {
            res.json({ resposta: dados.choices[0].message.content });
        } else {
            res.json({ resposta: "Chappie está recalibrando os sensores. Tente novamente." });
        }

    } catch (e) {
        console.error("ERRO NO NÚCLEO:", e);
        res.status(500).json({ erro: "Erro de conexão com o cérebro da IA." });
    }
});

app.listen(port, () => console.log(`🚀 Chappie Elite Online: http://localhost:${port}`));