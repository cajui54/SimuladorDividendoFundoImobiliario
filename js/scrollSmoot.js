function scrollTo(element){
    document.querySelector(element).scrollIntoView({behavior: 'smooth'});
}

document.querySelector('#ancora-home').addEventListener('click', function(event){
    event.preventDefault();
    scrollTo('#scrollHeader');
});
document.querySelector('#ancora-calculadora').addEventListener('click', function(event){
    event.preventDefault();
    scrollTo('#calculadoraScroll')
});
document.querySelector('#ancora-sobre').addEventListener('click', function(event){
    event.preventDefault();
    scrollTo('#scrollSobre');
});
document.querySelector('#ancora-rodape').addEventListener('click', function(event){
    event.preventDefault();
    scrollTo('#scrollRodape');
});
document.querySelector('#btnConfirmar').addEventListener('click', function(event){
    event.preventDefault();
    scrollTo("#scrollResultado");
});

/*function scrollElement(element){
    document.querySelector(element).scrollIntoView({behavior: 'smooth'});
}
document.querySelector('#ancora-Home').addEventListener('click', function(event){
    event.preventDefault();
    scrollElement("#scrollHeader");
});*/