
    var caixa = document.getElementById('caixa');
    var menu = document.getElementById('menu');
    var apresenta = document.getElementById('apresenta');
    
    var aba = document.getElementById('aba');
    
    var conteudo = document.getElementById('conteudo');
    
aba.style.display = 'none';
conteudo.style.gridColumn = 'none';

    
menu.addEventListener('click', obterId);
aba.addEventListener('click', tamanhoDoMenu);

    
    function obterId(e) {
    var x = e.target.getAttribute('id');
    var y = e.target.innerHTML;
        
        
        if (x != null) {
            aba.style.display = 'none';
            apresenta.style.display = 'block';
            conteudo.style.gridColumn = 'none';
        } else {
            try {
                menu.style.display = 'none';
                apresenta.style.display = 'none';
                aba.style.display = 'block';
                conteudo.style.gridColumn = '2 / span2';
                
                var z = y.replace(' ', '_');
                aba.firstElementChild.innerHTML = y;            
    
                item = document.getElementById(z);  
                
                conteudo.innerHTML = item.innerHTML;
        } catch (error) {            
        
        }
            console.log('Não');
            
        }
}

function tamanhoDoMenu() {    
    menu.style.display = 'block';
    aba.style.display = 'none';
    conteudo.style.gridColumn = 'none';
    conteudo.innerHTML = '';
}


    
/* 
function tamanhoDoMenu() {
    
        menu.style.display = 'block';
        aba.style.display = 'none';
        conteudo.style.gridColumn = 'none';
        conteudo.innerHTML = '';
            
    } else {
        
    }
}

function clicarTransformar() {
    
        x = e.target.innerHTML;
    
        
        
        
    
}
    


var x;


   
menu.addEventListener('click', obterId);
    
    console.log(x);
    
    
          
    menu.addEventListener('click', tamanhoDoMenu);
    aba.addEventListener('click', tamanhoDoMenu);
    conteudo.addEventListener('click', tamanhoDoMenu);
    
    
    }

    
  
}







clicarTransformar();*/
