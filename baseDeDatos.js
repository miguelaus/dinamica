
/*
let nombre = prompt("dinos tu nombre")

let edad = prompt("dinos tu edad por favor")

const saludo = () => {

    if (edad >= 18) {
       
        
        alert(`Holaa ${nombre} y tiene ${edad} puedes ver nuestro catalogo`);

        var pais = prompt(`cuentanos de ti ${nombre} de donde vienes?`);
        alert (`asi que eres de ${pais} ${nombre}`);
        let pasaporte = prompt("tienes pasaporte europeo?").toLowerCase()

        if (pasaporte == "si") {
            alert(`perfecto ${nombre} eres bienvenido aquí`)
        } else {
            alert(`policia!!! tenemos un inmigrante!! ${nombre}! vete a tu maldito pais`)
        
        };
        
    } 
        
        else {
            alert (`${nombre} tienes ${edad}, por lo tanto eres menor de edad, no puedes estar aqui`);
            
        }  ; 

        alert(`Tu nombre es ${nombre} y tienes ${edad} y tu pais de origen es ${pais}`)
};

  
saludo();

*/
/*

const productosJulio = {
    prod1: "10kh",
    prod2: "10",
    prod3: "20",
}


console.log(Object.entries(productosJulio))


const productosAgosto = {
    prod4: "20g de harina",
    prod5: "50g",
    prod6: "60g",
    mostrarInfo: function() {
        console.log(`Los productos de Agosto son: ${this.prod1} , ${this.prod2} , ${this.prod3}`)
    }

}


const nuevosProductos = {...productosAgosto, ...productosJulio}

const { prod4 } = nuevosProductos;

function Personaje(name, age, power, level ) {
    this.name = name;
    this.age = age;
    this.power = power;
    this.life = true;
    this.talk = true;
    this.level = 1 ;

}

const character1 = new Personaje ("julio", 22, "tira pedos")

console.log(character1)

console.log(Object.entries(character1))

*/




/**/ 
/*

productos = [
    {nombre: "harina", precio: 250, },
    {nombre: "pollo" , precio: 300,},
    {nombre: "yogurt", precio:200,},
    {nombre: "carne" , precio: 300,},
    {nombre: "calamares", precio:500,},
    {nombre: "papas" , precio: 300,},
    {nombre: "arroz", precio:200,},
    {nombre: "fruta" , precio: 300,},

]
*//*
let musicoterapeutas = [
    {nombre: "Juan", apellido:"Rodriguez", area: "Buenos Aires" , especialidad:"Discapacidad" , online:true , tel:45454545 },
    {nombre: "Teresa", apellido: " Garcia", area: "Buenos Aires" , especialidad:"Salud Mental" , online:false , tel:42454545 },
    {nombre: "Juan", apellido: "Pelotas", area: "Buenos Aires" , especialidad:"Discapacidad" , online:true , tel:44454545 },
    {nombre: "Juana", apellido:"Gonzalez", area: "Buenos Aires" , especialidad:"Salud Mental" , online:false , tel:15454545 },
    {nombre: "Juan", apellido: "Peralta", area: "Chubut" , especialidad:"Discapacidad" , online:true , tel:45354545 },
]   

/*

//aca solo se esta agregando un objeto independiente asignado a la variable nuevoMt, por ello es que se agrega SIN el spread.
let nuevoMt = 
    {nombre: "Juana", apellido:" Perez", area: "Chaco" , especialidad:"Salud Mental" , online:false , tel:15454545 }

/*
musicoterapeutas2 = [...musicoterapeutas, nuevoMt];
console.log(musicoterapeutas2)
*/

/*
// aca se agrega con el spread (...) porque la variable nuevoMt2 esta planteada como un array con corchetes []. Esto
// permite agregar varios objetos y separarlos al ser agregados en la lista.
let nuevoMt2 = [
    {nombre: "Juana", apellido:"Lopez", area: "Formosa" , especialidad:"Salud Mental" , online:false , tel:15424545 },
    {nombre: "Gabriel", apellido:"Lupo", area: "Cordoba" , especialidad:"Discapacidad" , online:false , tel:15424545 }
]

const musicoterapeutas3 = [ ...musicoterapeutas, ...nuevoMt2]

const mtFiltrados = musicoterapeutas3.filter( musico => musico.area.toLowerCase() == "buenos aires");

console.log(mtFiltrados)













/*
busqueda = musicoterapeutas.filter ( musico => musico.nombre.toLowerCase() == "teresa garcia"  )

busqueda1 = musicoterapeutas.find ( musico => musico.area.toLowerCase() == "buenos aires")
console.log(busqueda1)

busqueda2 = musicoterapeutas.filter (musico => musico.area.toLowerCase() == "buenos aires")

busqueda3 = musicoterapeutas.filter (musico => musico.online == true)


busqueda4 = musicoterapeutas.every( musico => musico.online == true )

console.log(busqueda4)

*/
/*









const peliculas = ["hulk", "titanic", "halloween", "home alone", "green mile"]
*/




/*
const indice = peliculas.forEach ((producto,indice) => {
 if (producto === "halloween") {
    console.log ("encontrado en el indice " + indice)

 }
})

const indice2 = peliculas.findIndex (pelicula  =>  pelicula === "titanic")
console.log(indice2)

const indice3 = peliculas.indexOf("hulk")
console.log (indice3)


/*
for (let objeto in productos) {

    console.log (objeto)
}

let objeto1 = {
    prop1: "propiedades1",
    prop2: "propiedades2",

}

for (let cualidades in objeto1) {

    console.log (objeto1[cualidades ])
}


/*
productos.push({nombre:"gofio", precio:200,})



productos.forEach((producto) => {
    `el precio es ${producto.precio} y su nombre es ${producto.nombre}`
});

const lista = productos.map(producto => `el nombre es ${producto.nombre} y su precio es ${producto.precio}`)


const lista2 = productos.map (producto => `el nombre es ${producto.nombre} y su precio es ${producto.precio}`)


console.time("lista")
console.table (lista)
console.timeEnd("lista")

console.time("lista2")
console.table(lista2)
console.timeEnd("lista2")

*/




/*
const listaPuntaje = puntajes.map((puntaje) => {

    return console.log(`su puntaje es: ${puntaje}`)
})


listaPuntaje.table

/*
const [ , , ,tercero,] = productos;


console.table (productos)

productos[3] = {
    nombre: "gofio",
    precio: 200,
};


console.table(productos);

console.log (tercero)

productos[3] = {
    nombre: "banana con dulce de leche",
    precio : 250,
}

const [ , , , tercero2 ,] = productos;

console.log (tercero2);

productos.unshift({ nombre: "papas fritas", precio: 100,}); 
productos.pop()
productos.push({nombre: "arroz con leche", precio:  250})

console.table(productos)

productos.shift();

console.table(productos);




*/

/*
const personaje1 = {
    alturas : 1.70,
    pesos : 56,
    nombres: "Victor",
    poder: {
        ultravision: true,
        superfuerza: true,
        velocidad: false,
    }
};


const personaje2 = {
    altura : 2,
    peso : 80,
    nombre: "Sara",
    poderes: {
        ultravision: false,
        superfuerza: false,
        velocidad: true,
    }
}
/*
const {altura} = personaje1;

const {poderes: { ultravision }} = personaje1;

const { superfuerza } = personaje1.poderes;

console.log(ultravision);
console.log(superfuerza);

const poderesDisponibles = [ultravision, superfuerza];

console.log (poderesDisponibles);*/

/*
const unaFuncion = () => {
  return personaje2.altura + personaje1.alturas
}


const productos = {
    lacteos : "leche",
    bebida: "vino",
    quesos: "gruyere",

}

console.log(Object.keys(productos));

console.log(Object.entries(productos))

*/
/*
iniciarApp();

function iniciarApp() {
	console.log("iniciando")
  
	usuarioAutenticado ();
}

function usuarioAutenticado (usuario) {

    usuario = prompt("nombre de usuario")
   
	console.log(`autenticando usuario: ${usuario}`) 

}


function accederCuenta() {
    
}*//*

const reproductor = {
    reproducir : id =>  console.log (`reproduciendo canción ${id}`),

    stop: id => console.log (`se ha detenido la reproducción de : ${id}`),
    }

console.table(reproductor)

reproductor.reproducir(10);

reproductor.stop(2)*/

/*

let elemento = document.querySelector('.card:nth-child(1)')
let elemento2 = document.querySelector('.bg-card:nth-child(2) ')


console.log(elemento)


const titulo = document.querySelector('.clase-1 h1')
/*
titulo.textContent = "nuevo"

titulo.innerHTML = "otro"

titulo.innerText ="ultimo"


*/

// como seleccionar con querySelector('.clase') 
// también se puede seleccionar hijos ('.clase h1')
// se puede poner la variable o acceder a los childNodes [numero]
/*
const navegador = document.querySelector('nav')

console.log(navegador.childNodes[1].childNodes[1].textContent)
console.log(navegador.children)
*/

// Definimos las variables
/*
let age = prompt("¿Cuál es tu edad?");
let destinationCountry = prompt("¿A qué país te gustaría emigrar?");
let profession = prompt("¿Cuál es tu profesión?");
let willingToAcceptUnskilledJobs = confirm("¿Estás dispuesto(a) a aceptar trabajos no calificados en el país de destino?");
let travelCompanions = prompt("¿Cuántas personas viajarán contigo (incluyéndote a ti)?");
let savings = prompt("¿Cuánto dinero llevas ahorrado en tu moneda local?");
let timeToAdapt = prompt("¿Cuánto tiempo estás dispuesto(a) a dedicar para adaptarte al nuevo contexto (en meses)?");

// Convertimos los valores a los tipos de datos correctos
age = parseInt(age);
travelCompanions = parseInt(travelCompanions);
savings = parseFloat(savings);
timeToAdapt = parseInt(timeToAdapt);

// Verificamos si el usuario es apto para inmigrar
if (age >= 18 && destinationCountry === "Canadá" && profession === "Ingeniero" && willingToAcceptUnskilledJobs === true && travelCompanions === 1 && savings >= 10000 && timeToAdapt >= 6) {
  console.log("¡Felicidades! Eres apto para inmigrar a Canadá.");
} else {
  console.log("Lo siento, no eres apto para inmigrar a Canadá en este momento."

  */
 