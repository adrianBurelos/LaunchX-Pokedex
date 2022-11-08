

// json.abilities[0].ability.name
    
    async function searchPokemon() {

        let find = document.getElementById("input-text")
        const url = `https://pokeapi.co/api/v2/pokemon/${find.value}`;
        let response = await fetch(url);

        // console.log(response.status); // 200
        // console.log(response.statusText); // OK
    
        if (response.status === 200) {
            let data = await response.json();
            
            document.getElementById("img-pokemon").src = data.sprites.other.dream_world.front_default
            document.getElementById("name-pokemon").innerHTML = "<p>NOMBRE </p>" + data.abilities[0].ability.name
            document.getElementById("ataque-pokemon").innerHTML = "<p>ATAQUE</p>" +data.abilities[1].ability.name
            document.getElementById("peso-pokemon").innerHTML = "<p>PESO</p>" +data.weight
            document.getElementById("tipo-pokemon").innerHTML = "<p>TIPO</p>" +data.types[0].type.name
            //  console.log(data.abilities[0].ability.name) NOMBRE_POKEMON
            //console.log(data.sprites.other.dream_world.front_default)
        }else{
            console.log('Ha ocurrido un error ' + response.error)
        }
    }

    document.addEventListener("keyup", function(event) {
        if (event.code === 'Enter') {
            fetchText()
        }
    });
    

   
    