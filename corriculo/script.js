function gerarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Cabeçalho
    doc.setFontSize(16);
    doc.text("Gilnei Laurindo", 20, 20);
    doc.setFontSize(12);
    doc.text("Design | Editor de Vídeo | Streamer | Desenvolvedor Web | Educação Corporativa", 20, 30);
    doc.text("Natal, Rio Grande do Norte, Brasil", 20, 40);

    // Resumo
    doc.setFontSize(14);
    doc.text("Resumo", 20, 60);
    doc.setFontSize(12);
    doc.text("Com mais de 7 anos na Brisanet, exerço funções de Designer e Assistente de RH, onde minha criatividade e capacidade de escuta ativa são essenciais. Com conhecimentos avançados em vMix, produzo conteúdos ao vivo de alto impacto, contribuindo significativamente para a comunicação e educação corporativa da empresa.", 20, 70, { maxWidth: 170 });
    doc.text("Certificações em boas práticas de videoaulas, Design Thinking e segurança digital destacam minha busca contínua por aprimoramento e inovação.", 20, 90, { maxWidth: 170 });

    // Contato
    doc.setFontSize(14);
    doc.text("Contato", 20, 120);
    doc.setFontSize(12);
    doc.text("Telefone: (84) 99811-5698", 20, 130);
    doc.text("E-mail: gilneycriative@gmail.com", 20, 140);
    doc.text("LinkedIn: https://www.linkedin.com/in/gilnei-laurindo", 20, 150);
    doc.text("Portfólio: https://gilneilaurindo.github.io/", 20, 160);

    // Competências
    doc.setFontSize(14);
    doc.text("Principais Competências", 20, 180);
    doc.setFontSize(12);
    doc.text("• Streamer", 20, 190);
    doc.text("• Produção de Vídeo", 20, 200);
    doc.text("• Design", 20, 210);
    doc.text("• Programação", 20, 220);

    // Certificações
    doc.setFontSize(14);
    doc.text("Algumas Certificações", 20, 240);
    doc.setFontSize(12);
    doc.text("• Criação de vídeo institucional", 20, 250);
    doc.text("• Formação Streaming", 20, 260);
    doc.text("• Produzindo uma LiveStream profissional", 20, 270);
    doc.text("• Segurança no Mundo Digital", 20, 280);
    doc.text("• Kanban: evolua suas entregas com métricas", 20, 290);

    // Experiência
    doc.setFontSize(14);
    doc.text("Experiência", 20, 310);
    
    // Designer
    doc.setFontSize(12);
    doc.text("Brisanet Telecomunicações", 20, 320);
    doc.text("Cargo: Designer (fevereiro de 2023 - Presente)", 20, 330);
    doc.text("Local: Pereiro, Ceará, Brasil", 20, 340);
    doc.text("• Produção e edição de conteúdos audiovisuais para campanhas internas e externas.", 20, 350);
    doc.text("• Criação de materiais gráficos e vídeos institucionais.", 20, 360);

    // Assistente de RH
    doc.text("Brisanet Telecomunicações", 20, 380);
    doc.text("Cargo: Assistente de RH (outubro de 2021 - Presente)", 20, 390);
    doc.text("Local: Pereiro, Ceará, Brasil", 20, 400);
    doc.text("• Desenvolvimento de conteúdos educativos e treinamentos para colaboradores.", 20, 410);
    doc.text("• Auxílio na gestão de processos e atividades de RH.", 20, 420);

    // Assistente Administrativo
    doc.text("Brisanet Telecomunicações", 20, 440);
    doc.text("Cargo: Assistente Administrativo (agosto de 2017 - outubro de 2021)", 20, 450);
    doc.text("Local: Pereiro, Ceará, Brasil", 20, 460);

    // Assessor de Assuntos Especiais
    doc.text("Prefeitura Municipal de São Miguel", 20, 480);
    doc.text("Cargo: Assessor de Assuntos Especiais (janeiro de 2013 - novembro de 2015)", 20, 490);
    doc.text("Local: Rio Grande do Norte, Brasil", 20, 500);

    // Sobre Mim
    doc.setFontSize(14);
    doc.text("Sobre Mim", 20, 520);
    doc.setFontSize(12);
    doc.text("Atualmente, trabalho em uma empresa de telecomunicação, onde aplico minhas habilidades em design, criação audiovisual e, ocasionalmente, web design. Também sou estudante de Análise e Desenvolvimento de Sistemas na UniCesumar.", 20, 530, { maxWidth: 170 });
    doc.text("Meu objetivo é continuar evoluindo como profissional, buscando sempre novas formas de inovar e aprender.", 20, 550, { maxWidth: 170 });

    // Salvar PDF
    doc.save('Curriculo_Gilnei_Laurindo.pdf');
}
