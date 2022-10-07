 let menu = document.getElementById('menu');
    
    let aba = document.getElementById('aba');
    
    let conteudo = document.getElementById('conteudo');
    let presenta = document.getElementById('presenta');
    
    
    aba.style.display = 'none';
    conteudo.style.display = 'none';
    menu.style.display = 'block';
    presenta.style.display = 'block';
    
    
    
function clicarTransformar() {
    menu.addEventListener('click', tamanhoDoMenu);
    aba.addEventListener('click', tamanhoDoMenu);
    
    
    }

    function tamanhoDoMenu() {
        if (menu.style.display == 'none') {
            menu.style.display = 'block';
            presenta.style.display = 'block';
            aba.style.display = 'none';
            conteudo.style.display = 'none';
            conteudo.innerHTML = '';
        } else {
            menu.style.display = 'none';
            presenta.style.display = 'none';
            aba.style.display = 'block';
            conteudo.style.display = 'block';
        }
  
}

menu.addEventListener('click', obterId);

function obterId(e) {    
    x = e.target.innerHTML;
    try {
        aba.firstElementChild.innerHTML = x;
    y = x.replace(' ', '_');
    
    item = document.getElementById(y);
    
    conteudo.innerHTML = item.innerHTML;
    } catch (error) {
        
    }
        
}



clicarTransformar();
