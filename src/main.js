window.onload = () => {
    let filterPokes = [];
    let arrayShowWhole = wholePokes(); 

    filterPokeType('Fire');

    let user = document.getElementById('user');
    const containment = document.getElementById('containmentPokes');
    containment.classList.add('container');

    //Ingreso con botón Aceptar
    document.getElementById('btn_enter').addEventListener('click',(event) => {
        event.preventDefault();
        //Oculta el primer formulario
        user.style.display = 'none';

        //Creo Section de buscar y filtrar
        const sectionSearch = document.createElement('section');
        containment.appendChild(sectionSearch);
        sectionSearch.classList.add('row','pokedex-filter');

        //DIV buscar
        const divSearch = document.createElement('div');
        sectionSearch.appendChild(divSearch);
        divSearch.setAttribute('id','search-div');
        divSearch.classList.add('col-xs-12', 'col-sm-10', 'col-md-5', 'col-lg-5','searchDIV');

        const labelSearch = document.createElement('label');
        const searchText = document.createTextNode('Nombre o Número ');
        const elementSearch = document.createElement('input');
        const buttonSearch = document.createElement('button');
        labelSearch.appendChild(searchText);
        divSearch.appendChild(labelSearch);
        divSearch.appendChild(elementSearch);
        divSearch.appendChild(buttonSearch);
        elementSearch.setAttribute('type','text');
        elementSearch.setAttribute('placeholder','Ej: 005, "Charmander", etc.');
        elementSearch.setAttribute('id','searchInputPoke');
        buttonSearch.setAttribute('type','submit');
        buttonSearch.setAttribute('value','Search');
        buttonSearch.setAttribute('id','search');
        buttonSearch.classList.add('button','button-search');

        //DIV y SPAN para el 'O' de selección
        const divMiddleText = document.createElement('div');
        const spanMiddleText = document.createElement('span');
        const labelMiddleText = document.createElement('label');
        const textOrMiddleText = document.createTextNode('O');
        sectionSearch.appendChild(divMiddleText);
        divMiddleText.appendChild(spanMiddleText);
        spanMiddleText.appendChild(labelMiddleText);
        labelMiddleText.appendChild(textOrMiddleText);
        divMiddleText.setAttribute('id','middle-text');
        divMiddleText.classList.add('col-xs-12', 'col-sm-2', 'col-md-1', 'col-lg-2', 'searchDIV');

        //Creo DIV de Filtrar
        const divFilter = document.createElement('div');
        sectionSearch.appendChild(divFilter);
        divFilter.setAttribute('id','filter-div');
        divFilter.classList.add('col-xs-12', 'col-sm-12', 'col-md-6', 'col-lg-5','filter-column-div');
        //Creo contenedor de lisado de Tipos de Pokemon
        const ulPokeType = document.createElement('ul');
        divFilter.appendChild(ulPokeType);
        ulPokeType.setAttribute('id','ul-poke-type');
        ulPokeType.classList.add('ul-filter-list');
        typePoke().forEach(element => {
            const liPokeType = document.createElement('li');
            const spanPokeType = document.createElement('span');
            const spanSelectPokeType = document.createElement('span');
            const inputPokeType = document.createElement('input');
            if (element !== undefined){
            let typePoke = document.createTextNode(element); 
            ulPokeType.appendChild(liPokeType);
            liPokeType.appendChild(spanPokeType);
            spanPokeType.appendChild(typePoke);
            liPokeType.appendChild(spanSelectPokeType);
            spanSelectPokeType.appendChild(inputPokeType);
            inputPokeType.setAttribute('type','checkbox');
            inputPokeType.setAttribute('id','switch');
            inputPokeType.setAttribute('value',element);
            spanPokeType.classList.add('pill');
            spanSelectPokeType.classList.add('span-select-type');
            spanSelectPokeType.setAttribute('id','span-checked-poke')
        }
        });
        const buttonFilter = document.createElement('button');
        const buttonInput = document.createTextNode('Filtrar');
        divFilter.appendChild(buttonFilter);
        buttonFilter.appendChild(buttonInput);
        buttonFilter.setAttribute('id','filterButton');
        buttonFilter.classList.add('btn');
        
        let checkbox = document.getElementById('switch');
        checkbox.addEventListener("change", validaCheckbox, false);

        function validaCheckbox(){
        let checked = checkbox.checked;
        if(checked){
            alert('checkbox esta seleccionado');
        }
        }





        

        /* document.getElementById('switch').addEventListener('click',(event) => {
            event.preventDefault();    

            if (document.getElementById('switch').checked){
                let valueChecked = document.getElementById('switch').value;
                console.log(valueChecked);
            }

            
        }); */

        

        // document.getElementById('filterButton').addEventListener('checked',(event) => {
        //     event.preventDefault();
            // let checkboxes = document.getElementById('switch').value;
            // let cont = 0;
            // console.log('checks '  + checkboxes);
            // for (let i = 0; i < checkboxes.length; i++) {
            //     if (checkboxes[i].checked) {
            //         cont = cont + 1;
            //     }
            // }
            // console.log(cont);


        
        // });
        











        //Creo contenedor del listado de Pokes
        const ulPokemonGrid = document.createElement('ul');
        containment.appendChild(ulPokemonGrid);
        ulPokemonGrid.setAttribute('id','ulPokemon');
        ulPokemonGrid.setAttribute('style','height:auto');
        ulPokemonGrid.classList.add('main');

        arrayShowWhole.forEach(element => {
            const liResultPoke = document.createElement('li');
            //Creo el elemento imagen y lo asigno a LI
            const figureElement = document.createElement('figure');
            let imgElementPoke = document.createElement('img');
            ulPokemonGrid.appendChild(liResultPoke);
            liResultPoke.appendChild(figureElement);
            figureElement.appendChild(imgElementPoke);    
            imgElementPoke.setAttribute('src',element.img);
            liResultPoke.classList.add('col-xs-12', 'col-sm-6', 'col-md-4', 'col-lg-3');
            //Creo el elemento Label para asignar el nombre y codigo de cada Pokemon al DIV
            const divInfoPokemon = document.createElement('div');
            liResultPoke.appendChild(divInfoPokemon);
            //Creo el parrafo para agregar el id
            const pIdPoke = document.createElement('p');
            const spanIdPoke = document.createElement('span');
            let idTextPoke = document.createTextNode(element.num);
            const prefixPoke = document.createTextNode('#');
            divInfoPokemon.appendChild(pIdPoke);
            pIdPoke.appendChild(spanIdPoke);
            spanIdPoke.appendChild(prefixPoke);
            pIdPoke.appendChild(idTextPoke);
            pIdPoke.classList.add('id');
            
            //Creo un H5 para el nombre
            const hFiveName = document.createElement('h5');
            let nombreTextPoke = document.createTextNode(element.name);
            divInfoPokemon.appendChild(hFiveName);
            hFiveName.appendChild(nombreTextPoke);
        });
    });
}
