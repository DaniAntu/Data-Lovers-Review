// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

window.dataPokemon = {

//ordena los pokemons por nombre y número
order : (data,status) => {
  if (status === 'less'){
    data.sort(function (a,b){
      if(a.num > b.num){
        return 1;
      }
      if (a.num < b.num){
        return -1;
      } 
      return 0;
    });
  }else if(status === 'major'){
    data.reverse(function (a,b){
      if(a.num > b.num){
        return 1;
      }
      if (a.num < b.num){
        return -1;
      } 
      return 0;
    });
  }else if (status === 'upward'){
    data.sort(function (a,b){
      if(a.name > b.name){
        return 1;
      }
      if (a.name < b.name){
        return -1;
      } 
      return 0;
    });
  } else if(status === 'falling'){
    data.reverse(function (a,b){
      if(a.name > b.name){
        return 1;
      }
      if (a.name < b.name){
        return -1;
      } 
      return 0;
    });
  } 
},

//Filtra pokemon por tipo
filterPokeType : (datas,typePoke) => {
  const filtered = datas.filter(element => {return element.type.indexOf(typePoke) >= 0;});
  return filtered;  
},

searchFor : (data, pokeParameter) => {
  const finding = data.filter(element => {return element.num.indexOf(pokeParameter) >= 0;});  
  if (finding[0] === undefined){
    const finding = data.filter(element => {return element.name.indexOf(pokeParameter) >= 0;});
    return finding;
  }
  return finding;
},

//Calcula probabilidad de aparición por tipo
//google.charts.load('current', {'packages':['corechart']});
  //    google.charts.setOnLoadCallback(drawChart);
probability : (data, type) => {
  let calculo = data.filter((element) => {return element.type.indexOf(type) >= 0})
  .reduce((acum,element)=> {return acum + element.spawn_chance},0);

  return calculo/151;
}

}
