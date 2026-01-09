/* Criação de uma timeline do GSAP com animações sincronizadas com ScrollTrigger */

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
        markers: true, //Depuração
    },
});

tl.to (
    '#Fanta',{
        top: '120%', //Move o elemento com ID Fanta para 120% do topo da viewport
        left: '0%',
    },
    'Laranja'
); //Nomeando este trecho de animação como 'orange' para sincronização futura

tl.to (
    '#Laranja-cortada',{
        top: '160%', //Move o elemento com ID Laranja-cortada para 160% do topo da viewport
        left: '23%', //Move o elemento com ID Laranja-cortada para 23% da esquerda da viewport
    },
    'Laranja'
); //Sincronizando com o trecho nomeado 'Laranja'

tl.to (
    '#Laranja',{
        width: '15%', //Reduz a largura do elemento com ID Laranja para 15%
        top: '165%', //Move o elemento com ID Laranja para 150% do topo da viewport //é 160
        right: '10%', //Move o elemento com ID Laranja para 10% da direita da viewport
    },
    'Laranja'
); //Sincronizando com o trecho nomeado 'Laranja'

tl.to (
    '#Folha',{
        top: '110%',
        left: '70%',
        rotate: '530deg',
    },
    'Laranja'
); //

tl.to (
    '#Folha2',{
        top: '110%',
        left: '0%',
        rotate: '530deg',
    },
    'Laranja'
);

/* Criação de uma outra timeline do GSAP com animações sincronizadas com ScrollTrigger */

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.three',
        start: '0% 95%',
        end: '20% 50%',
        scrub: true,
        markers: true, //Depuração
    },
});

tl2.from(
    '.lemon1',
    {
        rotate: '-90deg',
        left: '-100%',
        top: '110%',
    },
    'ca'
);

tl2.from(
    '#cocacola',
    {
        rotate: '-90deg',
        left: '-100%',
        top: '110%',
    },
    'ca'
);

tl2.from(
    '.lemon2',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca'
);

tl2.from(
    '#pepsi',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca'
);

tl2.to(
    '#Laranja-cortada',
    {
        width: '18%',
        left: '42%',
        top: '204%',
    },
    'ca'
);

tl2.to(
    '#Fanta',
    {
        width: '28%',
        left: '37%',
        top: '210%',
    },
    'ca'
);