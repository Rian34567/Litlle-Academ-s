document.addEventListener('DOMContentLoaded', () => {
    // Menu hamburguer
    const menuToggle = document.getElementById('mobile-menu');
    const navbar = document.querySelector('.navbar ul');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }

    // Função para mostrar/ocultar os sabores
    window.toggleSabores = function(id) {
        const saboresDiv = document.getElementById(id);
        if (saboresDiv) {
            saboresDiv.style.display = saboresDiv.style.display === 'none' ? 'block' : 'none';
        }
    };

    // Inserir o Google Maps (se necessário)
    const mapaContainer = document.getElementById('mapa');
    if (mapaContainer) {
        mapaContainer.innerHTML = `
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3755.0345963731793!2d-47.9404455239458!3d-19.753684681595455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bad036dc90da0b%3A0x7d51e2721bc7f52e!2sCentro%20de%20Forma%C3%A7%C3%A3o%20Profissional%20Fidelis%20Reis%20-%20SENAI%20Uberaba!5e0!3m2!1spt-PT!2sbr!4v1730247894010!5m2!1spt-PT!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `;
    }

    // Validação do formulário de Orçamentos
    const orcamentoForm = document.getElementById('orcamento-form');
    if (orcamentoForm) {
        orcamentoForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o envio padrão
            const nome = orcamentoForm.nome.value;
            const email = orcamentoForm.email.value;
            const descricao = orcamentoForm.descricao.value;

            if (nome && email && descricao) {
                // Simular o envio do formulário
                document.getElementById('confirmacao').classList.remove('hidden');
                orcamentoForm.reset();
            } else {
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
    }

    // Validação do formulário de Contato
    const contatoForm = document.getElementById('contato-form');
    if (contatoForm) {
        contatoForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o envio padrão
            const nome = contatoForm.nome.value;
            const email = contatoForm.email.value;
            const mensagem = contatoForm.mensagem.value;

            if (nome && email && mensagem) {
                alert('Mensagem enviada com sucesso!');
                contatoForm.reset();
            } else {
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
    }
});
