M.AutoInit();
// $(document).ready(function(){
//       $('.go-up').click(function(){
//             $('body, html').animate({
//                   scrollTop: '0px'
//             });
//       });
// });
const data = (POKEMON.pokemon);
const cards = document.getElementById('poke-cards');    

//Aquí van las tarjetas de Pokes-->
const showData = (data) => {
      createCardPoke(data);
}

window.onload = showData(data);

function createCardPoke(dataSent){
      // limpio div
      cards.innerHTML = '';
      dataSent.forEach(element => {
            cards.innerHTML += `
            <div class="target col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                  <div class="card small">
                        <div class="card-image waves-effect waves-block waves-light center-align">
                              <img class="activator" src=" ${element.img}">
                        </div>
                        <div class="card-content">
                              <span class="card-title activator"><strong>${element.name}</strong><i class="material-icons right">more_vert</i></span>
                              <p>#${element.num}</p>
                        </div>
                        <div class="card-action">
                              <p class="parr">• Tipo: ${element.type}</p>
                              <p class="parr">• Debilidad: ${element.weaknesses}</p>
                        </div>
                        <div class="card-reveal">
                              <span class="card-title"><strong>${element.name}</strong><i class="material-icons right">close</i></span>
                              <p>Altura: ${element.height}</p>
                              <p>Peso: ${element.weight}</p>
                              <p>Posibilidad de encontrarlo: ${element.spawn_chance}</p>
                        </div>
                  </div>
            </div>
            `
      });        
}
      //Filtrado
      spanValueFilter = Array.from(document.getElementsByClassName('span-filter'))
      spanValueFilter.forEach(function(element){
            element.addEventListener('click',(event) => {
                  event.preventDefault();
                  let valueSpan = element.id;
                  if (valueSpan === 'All'){
                  document.getElementById('calc').innerHTML = '';
                  createCardPoke(data);
                  } else {
                  let valueSpain = element.innerHTML;
                  console.log(valueSpain);
                  cards.innerHTML = '';
                  let calculation = window.dataPokemon.probability(data,valueSpan).toFixed(3);
                  document.getElementById('calc').innerHTML = 'Tienes un ' + calculation + '% de problabilidad de encontrar un pokemón, tipo '+ valueSpain;
                  let dataFilter = window.dataPokemon.filterPokeType(data,valueSpan);
                  createCardPoke(dataFilter);
                  }
            });
      });

    //Buscar por nombre e ID    
    document.getElementById('search').addEventListener('click',(event) => {
        event.preventDefault();        
        let valueToFind = document.getElementById('id-search').value;
        console.log(valueToFind);
        let find = window.dataPokemon.searchFor(data,valueToFind);
        if (find[0] === undefined){
            cards.innerHTML = '';
            cards.innerHTML = `
                <div class="target col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                    <div class="card">
                    <div class="box">
                        <p>¡Ups! No se ha encontrado</p>
                    </div>
                    </div>
                </div>` 
            }else {
        cards.innerHTML = '';
        cards.innerHTML = 
            `
            <div class="target col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                  <div class="card small">
                        <div class="card-image waves-effect waves-block waves-light center-align">
                              <img class="activator" src=" ${find[0].img}">
                        </div>
                        <div class="card-content">
                              <span class="card-title activator"><strong>${find[0].name}</strong><i class="material-icons right">more_vert</i></span>
                              <p>#${find[0].num}</p>
                        </div>
                        <div class="card-action">
                              <p class="parr">• Tipo: ${find[0].type}</p>
                              <p class="parr">• Debilidad: ${find[0].weaknesses}</p>
                        </div>
                        <div class="card-reveal">
                              <span class="card-title"><strong>${find[0].name}</strong><i class="material-icons right">close</i></span>
                              <p>Altura: ${find[0].height}</p>
                              <p>Peso: ${find[0].weight}</p>
                              <p>Posibilidad de encontrarlo: ${find[0].spawn_chance}</p>
                        </div>
                  </div>
            </div>
            `
            document.getElementById('id-search').value ="";
        }
    });
    
    //Orden por nombre
    const orderList = document.getElementById('order');
    orderList.addEventListener('change', () => {
        let status = orderList.options[orderList.selectedIndex].value;
        window.dataPokemon.order(POKEMON.pokemon,status);
        createCardPoke(data);
    });

    
// });