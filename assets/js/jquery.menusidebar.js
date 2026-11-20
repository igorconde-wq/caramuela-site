



/* menu responsivo */
const botoes = document.querySelectorAll('.botao-sidebar');
for(const botao of botoes){
    botao.addEventListener('click', ()=>{

    document.querySelector('.sidebar-bg').style.display = 'block';
  
    document.getElementById('menu-mobile').classList.add('aberto');
  
    document.body.style.overflowY = 'hidden';
  });
  
}



window.addEventListener('resize', ()=>{

  document.querySelector('.sidebar-bg').style.display = 'none';

  document.getElementById('menu-mobile').classList.remove('aberto');

  document.body.style.overflowY = 'visible';

});



document.querySelector('.sidebar-bg').addEventListener('click', ()=>{

  document.querySelector('.sidebar-bg').style.display = 'none';

  document.getElementById('menu-mobile').classList.remove('aberto');

  document.body.style.overflowY = 'visible';

});

$('body').delegate('.sidebar ul li','click', function(){

      setTimeout(function(){

        document.querySelector('.sidebar-bg').style.display = 'none';

        document.getElementById('menu-mobile').classList.remove('aberto');

        document.body.style.overflowY = 'visible';

      },800);

});

document.getElementById('a-mb-close').addEventListener('click', ()=>{

  document.querySelector('.sidebar-bg').style.display = 'none';

  document.getElementById('menu-mobile').classList.remove('aberto');

  document.body.style.overflowY = 'visible';

});

/* fim menu responsivo */