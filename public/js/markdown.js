
async function carregarArtigo(caminho) {
    const conteudo = document.querySelector("#conteudo-artigo");

    try {
        const resposta = await fetch(caminho);

        if (!resposta.ok) {
            throw new Error("Texto não encontrado.");
        }

        const markdown = await resposta.text();
        conteudo.innerHTML = marked.parse(markdown, { breaks: true });

        const minutos = tempoLeitura(markdown);
        const indicador = document.querySelector("#tempo-leitura");

        if (indicador) {
            const idioma = document.documentElement.lang;

            indicador.textContent =
                idioma === "en"
                    ? `${minutos} min read`
                    : `${minutos} min de leitura`;
        }
    } catch {
        conteudo.textContent =
            document.documentElement.lang === "en"
                ? "Unable to load this text."
                : "Não foi possível carregar este texto.";
    }
}

function tempoLeitura(texto) {
    const palavras = texto.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(palavras / 180));
}
