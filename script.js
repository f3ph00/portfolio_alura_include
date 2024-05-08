let time = 5000;
let currentImageIndex = 0;
let images = document.querySelectorAll("#slider img");
let max = images.length;

function nextImage() {
    images[currentImageIndex].classList.remove("selected");
    currentImageIndex++;
    if (currentImageIndex >= max) {
        currentImageIndex = 0;
    }
    images[currentImageIndex].classList.add("selected");
}

function start() {
    setInterval(() => {
        nextImage();
    }, time);
}

window.addEventListener("load", start);

// Código da borda
const borda = document.getElementById('slider');
let corAtual = 0;

setInterval(function() {
    corAtual = (corAtual + 1) % 3;
    if (corAtual === 0) {
        borda.style.borderColor = 'rgb(255,0,0)';
    } else {
        borda.style.borderColor = 'rgb(255, 255, 255)';
    }
}, 5000);

//CÓDIO MENU MOBILE
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

////CÓDIGO IDIOMA

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
            document.querySelectorAll('.cabecalho__itens').forEach(item => {
                item.style.pointerEvents = 'none';
            });

            traduzirParaPortugues();

            setTimeout(() => {
                document.querySelectorAll('.cabecalho__itens').forEach(item => {
                    item.style.pointerEvents = 'auto';
                });
            }, 1000);

            localStorage.setItem('idiomaSelecionado', 'portugues');
            idiomaSelecionado = 'portugues';
        }
    });

    bandeiraInglaterra.addEventListener('click', function() {
        if (idiomaSelecionado !== 'ingles') {
            document.querySelectorAll('.cabecalho__itens').forEach(item => {
                item.style.pointerEvents = 'none';
            });

            traduzirParaIngles();

            setTimeout(() => {
                document.querySelectorAll('.cabecalho__itens').forEach(item => {
                    item.style.pointerEvents = 'auto';
                });
            }, 1000);

            localStorage.setItem('idiomaSelecionado', 'ingles');
            idiomaSelecionado = 'ingles';
        }
    });

    function traduzirParaPortugues() {
        document.getElementById('textoIdioma').innerHTML = `
            <main class="apresentacao__projeto">
            <h1 class="apresentacao__conteudo__titulo">Andre <strong>Felipe</strong></h1>
            <p class="apresentacao__conteudo__texto">Olá! Meu nome é André Felipe, tenho 22 anos e estou cursando graduação em cibersegurança na Anhanguera. Faço parte do Brazilian Advanced Team no San Jose Institute of Technology, onde participo do programa de formação profissional em Segurança da Informação. Também estou no programa Jovem Tech em busca de conhecimento na área de programação. Além disso, cursei o curso técnico de programação de jogos digitais no IFMA e sou apaixonado por desenvolvimento de jogos. É um prazer compartilhar um pouco sobre minha trajetória e interesses na área.</p>
            <div class="apresentacao__links">
                <h2 class="apresentacao__conteudo__redes">Acesse minhas redes:</h2>
                <a class="apresentacao__links__link" href="https://github.com/f3ph00" target="_blank"> <img src="github.png">GitHub</a>
                <a class="apresentacao__links__link"  href="https://linkedin.com/in/andrefelipesilvar/" target="_blank"> <img src="linkedin.png">Linkedin</a>
                <a class="apresentacao__links__link" href="https://www.instagram.com/f3ph0/" target="_blank"> <img src="instagram.png">Instagram</a>
            </div>
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
                    window.location.href = '#';
                } else if (link === 'habilidades') {
                    window.location.href = 'habilidades.html';
                } else if (link === 'projetos') {
                    window.location.href = 'projetos.html';
                }
            });
        });
        
     
    }

    function traduzirParaIngles() {
        document.getElementById('textoIdioma').innerHTML = `
            <h1 class="apresentacao__conteudo__titulo">Andre <strong>Felipe</strong></h1>
            <p class="apresentacao__conteudo__texto">Hello! My name is André Felipe, I'm 22 years old, and I'm studying cybersecurity at Anhanguera University. I'm part of the Brazilian Advanced Team at the San Jose Institute of Technology, where I participate in the professional training program in Information Security. I'm also in the Jovem Tech program, seeking knowledge in the programming field. Additionally, I completed the technical course in digital game programming at IFMA, and I'm passionate about game development. It's a pleasure to share a bit about my journey and interests in the field.</p>
            <div class="apresentacao__links">
                <h2 class="apresentacao__conteudo__redes">Access my social networks:</h2>
                <a class="apresentacao__links__link" href="https://github.com/f3ph00" target="_blank"> <img src="github.png">GitHub</a>
                <a class="apresentacao__links__link"  href="https://linkedin.com/in/andrefelipesilvar/" target="_blank"> <img src="linkedin.png">Linkedin</a>
                <a class="apresentacao__links__link" href="https://www.instagram.com/f3ph0/" target="_blank"> <img src="instagram.png">Instagram</a>
            </div>
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
                    window.location.href = '#';
                } else if (link === 'skills') {
                    window.location.href = 'habilidades.html';
                } else if (link === 'projects') {
                    window.location.href = 'projetos.html';
                }
            });
        });

    }
});

////CÓDIGO IDIOMA MENU

document.addEventListener('DOMContentLoaded', function() {
    
    const bandeiraBrasilMobile = document.getElementById('bandeira-brasil-mobile')
    const bandeiraInglaterraMobile = document.getElementById('bandeira-inglaterra-mobile')

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
            document.querySelectorAll('.cabecalho__itens__mobile').forEach(item => {
                item.style.pointerEvents = 'none';
            });

            traduzirParaPortugues();

            setTimeout(() => {
                document.querySelectorAll('.cabecalho__itens__mobile').forEach(item => {
                    item.style.pointerEvents = 'auto';
                });
            }, 1000);

            localStorage.setItem('idiomaSelecionado', 'portugues');
            idiomaSelecionado = 'portugues';
        }
    });

    bandeiraInglaterraMobile.addEventListener('click', function() {
        if (idiomaSelecionado !== 'ingles') {
            document.querySelectorAll('.cabecalho__itens__mobile').forEach(item => {
                item.style.pointerEvents = 'none';
            });

            traduzirParaIngles();

            setTimeout(() => {
                document.querySelectorAll('.cabecalho__itens__mobile').forEach(item => {
                    item.style.pointerEvents = 'auto';
                });
            }, 1000);

            localStorage.setItem('idiomaSelecionado', 'ingles');
            idiomaSelecionado = 'ingles';
        }
    });

    function traduzirParaPortugues() {
        document.getElementById('textoIdioma').innerHTML = `
            <main class="apresentacao__projeto">
            <h1 class="apresentacao__conteudo__titulo">Andre <strong>Felipe</strong></h1>
            <p class="apresentacao__conteudo__texto">Olá! Meu nome é André Felipe, tenho 22 anos e estou cursando graduação em cibersegurança na Anhanguera. Faço parte do Brazilian Advanced Team no San Jose Institute of Technology, onde participo do programa de formação profissional em Segurança da Informação. Também estou no programa Jovem Tech em busca de conhecimento na área de programação. Além disso, cursei o curso técnico de programação de jogos digitais no IFMA e sou apaixonado por desenvolvimento de jogos. É um prazer compartilhar um pouco sobre minha trajetória e interesses na área.</p>
            <div class="apresentacao__links">
                <h2 class="apresentacao__conteudo__redes">Acesse minhas redes:</h2>
                <a class="apresentacao__links__link" href="https://github.com/f3ph00" target="_blank"> <img src="github.png">GitHub</a>
                <a class="apresentacao__links__link"  href="https://linkedin.com/in/andrefelipesilvar/" target="_blank"> <img src="linkedin.png">Linkedin</a>
                <a class="apresentacao__links__link" href="https://www.instagram.com/f3ph0/" target="_blank"> <img src="instagram.png">Instagram</a>
            </div>
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

        document.querySelectorAll('.cabecalho__itens__mobile').forEach(item => {
            item.addEventListener('click', function() {
                const link = this.innerText.toLowerCase().trim();
                if (link === 'inicio') {
                    window.location.href = '#';
                } else if (link === 'habilidades') {
                    window.location.href = 'habilidades.html';
                } else if (link === 'projetos') {
                    window.location.href = 'projetos.html';
                }
            });
        });
    }

    function traduzirParaIngles() {
        document.getElementById('textoIdioma').innerHTML = `
            <h1 class="apresentacao__conteudo__titulo">Andre <strong>Felipe</strong></h1>
            <p class="apresentacao__conteudo__texto">Hello! My name is André Felipe, I'm 22 years old, and I'm studying cybersecurity at Anhanguera University. I'm part of the Brazilian Advanced Team at the San Jose Institute of Technology, where I participate in the professional training program in Information Security. I'm also in the Jovem Tech program, seeking knowledge in the programming field. Additionally, I completed the technical course in digital game programming at IFMA, and I'm passionate about game development. It's a pleasure to share a bit about my journey and interests in the field.</p>
            <div class="apresentacao__links">
                <h2 class="apresentacao__conteudo__redes">Access my social networks:</h2>
                <a class="apresentacao__links__link" href="https://github.com/f3ph00" target="_blank"> <img src="github.png">GitHub</a>
                <a class="apresentacao__links__link"  href="https://linkedin.com/in/andrefelipesilvar/" target="_blank"> <img src="linkedin.png">Linkedin</a>
                <a class="apresentacao__links__link" href="https://www.instagram.com/f3ph0/" target="_blank"> <img src="instagram.png">Instagram</a>
            </div>
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

        document.querySelectorAll('.cabecalho__itens__mobile').forEach(item => {
            item.addEventListener('click', function() {
                const link = this.innerText.toLowerCase().trim();
                if (link === 'home') {
                    window.location.href = '#';
                } else if (link === 'skills') {
                    window.location.href = 'habilidades.html';
                } else if (link === 'projects') {
                    window.location.href = 'projetos.html';
                }
            });
        });
    }
});



