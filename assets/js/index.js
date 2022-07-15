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

let botonBuscar = document.querySelector('#botonBuscar');
botonBuscar.addEventListener("click", function(botonBuscar){

let cantidadDeCuartos = document.querySelector('#inputCantidadDeCuartos').value;
let metrosDesde = document.querySelector('#inputMetrosDesde').value;
let metrosHasta = document.querySelector('#inputMetrosHasta').value;

console.log(cantidadDeCuartos);
console.log(metrosDesde);
console.log(metrosHasta);

if (cantidadDeCuartos ==="" || metrosDesde ==="" || metrosHasta ===""){
  alert('Faltan campos por llenar')
} 
});

  const listaPropiedadesTotal = document.querySelector('.propiedades');
  let contenidoPropiedadesTotal = '';
  for (let propiedad of propiedades) {
   
    contenidoPropiedadesTotal += `
    
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

  listaPropiedadesTotal.innerHTML = contenidoPropiedadesTotal;

  /*
  const listaPropiedades = document.querySelector('.propiedad');
  let contenidoPropiedades = '';
  for (let propiedad of propiedades) {
  
    
    // if para filtrar cuartos
    if(propiedad[cuartos] > cantidadDeCuartos && propiedad[cuartos] < cantidadDeCuartos){
  
        contenidoPropiedades += `
    
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
  
     // if para filtrar metros cuadrados
    `} if (propiedad.metros > metrosDesde && propiedad.metros < metrosHasta){
  
      contenidoPropiedades += `
  
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
  `} else{
    contenidoPropiedades += `
    
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
    </div>`
  
  }
  
    }
   
  
  listaPropiedades.innerHTML = contenidoPropiedades;
  
*/
