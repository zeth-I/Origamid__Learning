// Navegação por TAB (Importante aprender como funciona).

function tabNav(){
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    tabContent[0].classList.add('active');

    if(tabMenu.length &&  tabContent.length){
    function activeTab(index){
        tabContent.forEach((section) => {
            section.classList.remove('active');
        });
        tabContent[index].classList.add('active');
    }
    
    tabMenu.forEach((itemMenu, index)=>{
    itemMenu.addEventListener('click', () => {
        activeTab(index);
        });
    });
    }
}
tabNav();

// Navegação Accordion list
function accordionInit () {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';
    if(accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);
    
        function activeAccordion () {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }
    
        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        })  
    }
}

accordionInit();

/* Já existe uma propriedade CSS para isso  
//Scroll Suave

function scrollSuaveInterno () {
    const linkInterno = document.querySelectorAll('.js-menu a[href^"#"]');
    
    function scrollToSection (event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    linkInterno.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })
}

scrollSuaveInterno();
*/

// Scroll Animado

function scrollAnimado () {
        const sections = document.querySelectorAll('.js-scroll');
        if(sections.length) {
        const meiaTela = window.innerHeight * 0.6;

        function animaScroll () {
            sections.forEach((section) => {
                
                const sectionTop = section.getBoundingClientRect().top;
                const visibleSection = (sectionTop - meiaTela) < 0;

                if(visibleSection) {
                    section.classList.add('ativo')
                } else section.classList.remove('ativo')
            })
        } 
    }
window.addEventListener('scroll', animaScroll)
}

scrollAnimado();