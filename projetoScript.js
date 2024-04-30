function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "close_white_36dp.svg";
    }
}

//////////////////////////////////////////////////////////


document.addEventListener('DOMContentLoaded', function() {
    const bandeiraBrasil = document.getElementById('bandeira-brasil');
    const bandeiraInglaterra = document.getElementById('bandeira-inglaterra');

    let idiomaSelecionado = localStorage.getItem('idiomaSelecionado');

    if (!idiomaSelecionado) {
        idiomaSelecionado = 'portugues';
        localStorage.setItem('idiomaSelecionado', idiomaSelecionado);
    }

    if (idiomaSelecionado === 'portugues') {
        traduzirParaPortugues();
    } else {
        traduzirParaIngles();
    }

    bandeiraBrasil.addEventListener('click', function() {
        if (idiomaSelecionado !== 'portugues') {
            traduzirParaPortugues();
            localStorage.setItem('idiomaSelecionado', 'portugues');
            idiomaSelecionado = 'portugues';
        }
    });

    bandeiraInglaterra.addEventListener('click', function() {
        if (idiomaSelecionado !== 'ingles') {
            traduzirParaIngles();
            localStorage.setItem('idiomaSelecionado', 'ingles');
            idiomaSelecionado = 'ingles';
        }
    });

    function traduzirParaPortugues() {
        document.getElementById('textoIdioma').innerHTML = `
            <h1 class="apresentacao__conteudo__titulo">Meus <strong>Projetos</strong></h1>
            <p class="apresentacao__conteudo__texto">Alguns dos projetos desenvolvidos na plataforma Alura como parte do programa Jovem Tech.</p>
        `;
        document.querySelectorAll('.cabecalho__itens')[0].innerText = 'Inicio';
        document.querySelectorAll('.cabecalho__itens')[1].innerText = 'Habilidades';
        document.querySelectorAll('.cabecalho__itens')[2].innerText = 'Projetos';
        document.querySelector('.rodape a').innerText = 'Desenvolvido por Andre Felipe';

        // Adiciona os ícones aos links do menu
        document.querySelectorAll('.cabecalho__itens').forEach((item, index) => {
            let iconSrc = '';
            if (index === 0) {
                iconSrc = 'casa.png'; // Ícone para o primeiro item
            } else if (index === 1) {
                iconSrc = 'computador.png'; // Ícone para o segundo item
            } else if (index === 2) {
                iconSrc = 'pasta.png'; // Ícone para o terceiro item
            }
        
            item.innerHTML = `<img src="${iconSrc}"> ${item.innerText}`;
        });
        
        // Redireciona para a página correta quando um item do menu é clicado
        document.querySelectorAll('.cabecalho__itens').forEach(item => {
            item.addEventListener('click', function() {
                const link = this.innerText.toLowerCase().trim();
                if (link === 'inicio') {
                    window.location.href = 'index.html';
                } else if (link === 'habilidades') {
                    window.location.href = 'habilidades.html';
                } else if (link === 'projetos') {
                    window.location.href = '#';
                }
            });
        });

    }
    

    function traduzirParaIngles() {  
        document.getElementById('textoIdioma').innerHTML = `
            <h1 class="apresentacao__conteudo__titulo">My <strong style="color: #FF3030;">Projects</strong></h1>
            <p class="apresentacao__conteudo__texto">Some of the projects developed on the Alura platform as part of the Jovem Tech program.</p>
        `;

        document.querySelectorAll('.cabecalho__itens')[0].innerText = 'Home';
        document.querySelectorAll('.cabecalho__itens')[1].innerText = 'Skills';
        document.querySelectorAll('.cabecalho__itens')[2].innerText = 'Projects';
        document.querySelector('.rodape a').innerText = 'Developed by Andre Felipe';


        // Adiciona os ícones aos links do menu
        document.querySelectorAll('.cabecalho__itens').forEach((item, index) => {
            let iconSrc = '';
            if (index === 0) {
                iconSrc = 'casa.png'; // Ícone para o primeiro item
            } else if (index === 1) {
                iconSrc = 'computador.png'; // Ícone para o segundo item
            } else if (index === 2) {
                iconSrc = 'pasta.png'; // Ícone para o terceiro item
            }
        
            item.innerHTML = `<img src="${iconSrc}"> ${item.innerText}`;
        });



        // Redireciona para a página correta quando um item do menu é clicado
        document.querySelectorAll('.cabecalho__itens').forEach(item => {
            item.addEventListener('click', function() {
                const link = this.innerText.toLowerCase().trim();
                if (link === 'home') {
                    window.location.href = 'index.html';
                } else if (link === 'skills') {
                    window.location.href = 'habilidades.html';
                } else if (link === 'projects') {
                    window.location.href = '#';
                }
            });
        });

    }
});

///////////////////////////////////////////////////////////////////////////////
//CODIGO TRADUCAO MENU//

document.addEventListener('DOMContentLoaded', function() {
    const bandeiraBrasilMobile = document.getElementById('bandeira-brasil-mobile');
    const bandeiraInglaterraMobile = document.getElementById('bandeira-inglaterra-mobile');

    let idiomaSelecionado = localStorage.getItem('idiomaSelecionado');

    if (!idiomaSelecionado) {
        idiomaSelecionado = 'portugues';
        localStorage.setItem('idiomaSelecionado', idiomaSelecionado);
    }

    if (idiomaSelecionado === 'portugues') {
        traduzirParaPortugues();
    } else {
        traduzirParaIngles();
    }

    bandeiraBrasilMobile.addEventListener('click', function() {
        if (idiomaSelecionado !== 'portugues') {
            traduzirParaPortugues();
            localStorage.setItem('idiomaSelecionado', 'portugues');
            idiomaSelecionado = 'portugues';
        }
    });

    bandeiraInglaterraMobile.addEventListener('click', function() {
        if (idiomaSelecionado !== 'ingles') {
            traduzirParaIngles();
            localStorage.setItem('idiomaSelecionado', 'ingles');
            idiomaSelecionado = 'ingles';
        }
    });

    function traduzirParaPortugues() {
        document.getElementById('textoIdioma').innerHTML = `
            <h1 class="apresentacao__conteudo__titulo">Meus <strong>Projetos</strong></h1>
            <p class="apresentacao__conteudo__texto">Alguns dos projetos desenvolvidos na plataforma Alura como parte do programa Jovem Tech.</p>
        `;
        document.querySelectorAll('.cabecalho__itens__mobile')[0].innerText = 'Inicio';
        document.querySelectorAll('.cabecalho__itens__mobile')[1].innerText = 'Habilidades';
        document.querySelectorAll('.cabecalho__itens__mobile')[2].innerText = 'Projetos';
        document.querySelector('.rodape a').innerText = 'Desenvolvido por Andre Felipe';

        // Adiciona os ícones aos links do menu
        document.querySelectorAll('.cabecalho__itens__mobile').forEach((item, index) => {
            let iconSrc = '';
            if (index === 0) {
                iconSrc = 'casa.png'; // Ícone para o primeiro item
            } else if (index === 1) {
                iconSrc = 'computador.png'; // Ícone para o segundo item
            } else if (index === 2) {
                iconSrc = 'pasta.png'; // Ícone para o terceiro item
            }
        
            item.innerHTML = `<img src="${iconSrc}"> ${item.innerText}`;
        });
        
        // Redireciona para a página correta quando um item do menu é clicado
        document.querySelectorAll('.cabecalho__itens__mobile').forEach(item => {
            item.addEventListener('click', function() {
                const link = this.innerText.toLowerCase().trim();
                if (link === 'inicio') {
                    window.location.href = 'index.html';
                } else if (link === 'habilidades') {
                    window.location.href = 'habilidades.html';
                } else if (link === 'projetos') {
                    window.location.href = '#';
                }
            });
        });

    }
    

    function traduzirParaIngles() {  
        document.getElementById('textoIdioma').innerHTML = `
            <h1 class="apresentacao__conteudo__titulo">My <strong style="color: #FF3030;">Projects</strong></h1>
            <p class="apresentacao__conteudo__texto">Some of the projects developed on the Alura platform as part of the Jovem Tech program.</p>
        `;

        document.querySelectorAll('.cabecalho__itens__mobile')[0].innerText = 'Home';
        document.querySelectorAll('.cabecalho__itens__mobile')[1].innerText = 'Skills';
        document.querySelectorAll('.cabecalho__itens__mobile')[2].innerText = 'Projects';
        document.querySelector('.rodape a').innerText = 'Developed by Andre Felipe';


        // Adiciona os ícones aos links do menu
        document.querySelectorAll('.cabecalho__itens__mobile').forEach((item, index) => {
            let iconSrc = '';
            if (index === 0) {
                iconSrc = 'casa.png'; // Ícone para o primeiro item
            } else if (index === 1) {
                iconSrc = 'computador.png'; // Ícone para o segundo item
            } else if (index === 2) {
                iconSrc = 'pasta.png'; // Ícone para o terceiro item
            }
        
            item.innerHTML = `<img src="${iconSrc}"> ${item.innerText}`;
        });



        // Redireciona para a página correta quando um item do menu é clicado
        document.querySelectorAll('.cabecalho__itens__mobile').forEach(item => {
            item.addEventListener('click', function() {
                const link = this.innerText.toLowerCase().trim();
                if (link === 'home') {
                    window.location.href = 'index.html';
                } else if (link === 'skills') {
                    window.location.href = 'habilidades.html';
                } else if (link === 'projects') {
                    window.location.href = '#';
                }
            });
        });

    }
});