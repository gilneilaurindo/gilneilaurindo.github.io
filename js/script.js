/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* ===== MENU MOBILE ===== */
<script>
document.addEventListener('DOMContentLoaded', function () {

    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    if (!menuIcon || !navbar) {
        console.error('Menu mobile: elemento não encontrado');
        return;
    }

    menuIcon.addEventListener('click', function () {
        navbar.classList.toggle('active');
        this.classList.toggle('bx-x');
    });

});
</script>



/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });



    function gerarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Gilnei Laurindo", 20, 20);
    doc.setFontSize(12);
    doc.text("Design | Editor de Vídeo | Streamer | Desenvolvedor Web | Educação Corporativa", 20, 30);
    doc.text("Natal, Rio Grande do Norte, Brasil", 20, 40);

    doc.setFontSize(14);
    doc.text("Resumo", 20, 60);
    doc.setFontSize(12);
    doc.text("Com mais de 7 anos na Brisanet, exerço funções de Designer e Assistente de RH, onde minha criatividade e capacidade de escuta ativa são essenciais. Com conhecimentos avançados em vMix, produzo conteúdos ao vivo de alto impacto, contribuindo significativamente para a comunicação e educação corporativa da empresa. Certificações em boas práticas de videoaulas, Design Thinking e segurança digital destacam minha busca contínua por aprimoramento e inovação.", 20, 70, { maxWidth: 170 });

    doc.setFontSize(14);
    doc.text("Contato", 20, 120);
    doc.setFontSize(12);
    doc.text("Telefone: (84) 99811-5698", 20, 130);
    doc.text("E-mail: gilneycriative@gmail.com", 20, 140);
    doc.text("LinkedIn: https://www.linkedin.com/in/gilnei-laurindo", 20, 150);
    doc.text("Portfólio: https://gilneilaurindo.github.io/", 20, 160);

    doc.setFontSize(14);
    doc.text("Principais Competências", 20, 180);
    doc.setFontSize(12);
    doc.text("• Streamer", 20, 190);
    doc.text("• Produção de Vídeo", 20, 200);
    doc.text("• Design", 20, 210);
    doc.text("• Programação", 20, 210);

    doc.setFontSize(14);
    doc.text("Algumas Certificações", 20, 230);
    doc.setFontSize(12);
    doc.text("• Criação de vídeo institucional", 20, 240);
    doc.text("• Formação Streaming", 20, 250);
    doc.text("• Produzindo uma LiveStream profissional", 20, 260);
    doc.text("• Segurança no Mundo Digital", 20, 270);
    doc.text("• Kanban: evolua suas entregas com métricas", 20, 280);
    
    doc.setFontSize(14);
    doc.text("Cursando ensino superior ", 20, 230);
    doc.setFontSize(12);
    doc.text("• Análise e Desenvolvimento de Sistemascriação", 20, 240);

    doc.setFontSize(14);
    doc.text("Experiência", 20, 300);
    doc.setFontSize(12);
    doc.text("Brisanet Telecomunicações", 20, 310);
    doc.text("Cargo: Designer (fevereiro de 2023 - Presente)", 20, 320);
    doc.text("Local: Pereiro, Ceará, Brasil", 20, 330);
    doc.text("• Produção e edição de conteúdos audiovisuais para campanhas internas e externas.", 20, 340);
    doc.text("• Criação de materiais gráficos e vídeos institucionais.", 20, 350);

    doc.text("Brisanet Telecomunicações", 20, 370);
    doc.text("Cargo: Assistente de RH (outubro de 2021 - Presente)", 20, 380);
    doc.text("Local: Pereiro, Ceará, Brasil", 20, 390);
    doc.text("• Desenvolvimento de conteúdos educativos e treinamentos para colaboradores.", 20, 400);
    doc.text("• Auxílio na gestão de processos e atividades de RH.", 20, 410);

    doc.text("Brisanet Telecomunicações", 20, 430);
    doc.text("Cargo: Assistente Administrativo (agosto de 2017 - outubro de 2021)", 20, 440);
    doc.text("Local: Pereiro, Ceará, Brasil", 20, 450);

    doc.text("Prefeitura Municipal de São Miguel", 20, 470);
    doc.text("Cargo: Assessor de Assuntos Especiais (janeiro de 2013 - novembro de 2015)", 20, 480);
    doc.text("Local: Rio Grande do Norte, Brasil", 20, 490);

    doc.setFontSize(14);
    doc.text("Sobre Mim", 20, 510);
    doc.setFontSize(12);
    doc.text("Atualmente, trabalho em uma empresa de telecomunicação, onde aplico minhas habilidades em design, criação audiovisual e, ocasionalmente, web design. Também sou estudante de Análise e Desenvolvimento de Sistemas na UniCesumar, onde estou constantemente aprimorando minhas competências em diversas tecnologias e linguagens de programação.", 20, 520, { maxWidth: 170 });

    doc.text("Meu objetivo é continuar evoluindo como profissional, buscando sempre novas formas de inovar e aprender. Seja na criação de um design intuitivo, na edição de um vídeo envolvente, na transmissão de um evento ao vivo ou no desenvolvimento de um site funcional, estou aqui para transformar ideias em realidade.", 20, 550, { maxWidth: 170 });

    doc.save('Curriculo_Gilnei_Laurindo.pdf');
}



/*========== sticky navbar ==========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*========== remove menu icon navbar when click navbar link (scroll) ==========*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });
