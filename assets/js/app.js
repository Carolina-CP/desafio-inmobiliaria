// se declara el arreglo
const propiedades = [
    {
      nombre: "Casa de campo",
      descripcion: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      cuartos: 2,
      metros: 170
    },
    {
      nombre: "Casa de playa",
      descripcion: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      cuartos: 2,
      metros: 130
    },
    {
      nombre: "Casa en el centro",
      descripcion: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      cuartos: 1,
      metros: 80
    },
    {
      nombre: "Casa rodante",
      descripcion: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      cuartos: 1,
      metros: 6
    },
    {
      nombre: "Departamento",
      descripcion: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      cuartos: 3,
      metros: 200
    },
    {
      nombre: "Mansión",
      descripcion: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      cuartos: 5,
      metros: 500
    }
  ];

  // se declara el for of
let html = ''; 
for (let propiedad of propiedades) {
 
  html += `
  
  <div class='propiedad'> 
    <img src='${propiedad.src}' class='img'></img>
    <section>  
     <h5>${propiedad.nombre}</h5>
    <div>
      <p> Cuartos: ${propiedad.cuartos}</p>
      <p> Metros: ${propiedad.metros}</p>
    </div>
    <p>${propiedad.descripcion}</p>
    <button>Ver más</button>
  </section>
  </div>
  `}

  
 // se declaran las variables
let inputCuartos = document.querySelector('#inputCuartos');
let inputMetrosDesde = document.querySelector('#inputMetrosDesde');
let inputMetrosHasta = document.querySelector('#inputMetrosHasta');

let btnBuscar = document.querySelector('#botonBuscar');
let listaPropiedades = document.querySelector('.propiedades');
let contadorPropiedades = document.querySelector('#contador-propiedades')


// se carga el dom con el arreglo
listaPropiedades.innerHTML = html;

// se capturan lo datos 
btnBuscar.addEventListener('click', () => {
  console.log('botón ok')

    inputCuartos = inputCuartos.value; 
    inputMetrosDesde = inputMetrosDesde.value; 
    inputMetrosHasta = inputMetrosHasta.value; 
      console.log(inputCuartos, inputMetrosDesde, inputMetrosHasta);

  // alerta de datos faltantes 
if (inputCuartos ==="" || inputMetrosDesde ==="" || inputMetrosHasta ===""){
  alert('Faltan campos por llenar')
} 

//aplicación de filtros 

let nuevaListaDePropiedades = propiedades.filter(function(propiedad){
  return propiedad.cuartos <= inputCuartos && propiedad.metros >= inputMetrosDesde && propiedad.metros <= inputMetrosHasta

});

// visualización de filtro en la consola
console.log(nuevaListaDePropiedades)

// contador de propiedades
contadorPropiedades.innerHTML = nuevaListaDePropiedades.length;


/* (estuve mucho tiempo tratando de que se visualizara, no sé que hago mal,
pero no quiero seguir atrasada con la tarea)*/
// se declara el for of filtrado con el nuevo html
let html = ''; 
for (let propiedad of propiedades) {
 
  html += `
  
  <div class='propiedad'> 
    <img src='${propiedad.src}' class='img'></img>
    <section>  
     <h5>${propiedad.nombre}</h5>
    <div>
      <p> Cuartos: ${propiedad.cuartos}</p>
      <p> Metros: ${propiedad.metros}</p>
    </div>
    <p>${propiedad.descripcion}</p>
    <button>Ver más</button>
  </section>
  </div>
  `}

});

 
