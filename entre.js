//Entrega II Java Script
//1. Crear arreglos usando funciones flecha

//Arreglos con elementos estaticos
const arregloEstatico = () => [1, 2, 3, 4, 5];


//Arreglos con elementos dinamicos

const arregloDinamico = (num1, num2, num3) => [num1, num2, num3];


//Arreglos con objetos 

const arregloDeObjetos = () => [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'María', edad: 25 },
    { nombre: 'Pedro', edad: 35 }
  ];

  

//Arreglo de funciones

const funcion1 = () => {
    console.log('Función 1: Realizando cálculos matemáticos...');
    const resultado = 10 + 20;
    console.log('El resultado de la operación es:', resultado);
  }
  
  const funcion2 = () => {
    console.log('Función 2: Realizando una petición SQL');
  }
  
  const funcion3 = () => {
    console.log('Función 3: Mostrando un mensaje en una ventana emergente.');
    alert('función 3!');
  }
  
const arregloDeFunciones = [funcion1, funcion2, funcion3];
  
  // Ejecución de las funciones en el arreglo
  arregloDeFunciones.forEach(funcion => funcion());


  //2. Usar metodos de arreglos y mostrar resultados

const funcionuno = () => {
    console.log('Función 1: Realizando cálculos matemáticos...');
    return 10 + 20;
  }
  
  const funciondos = () => {
    console.log('Función 2: Realizando una petición SQL.');
    // Simulación de una petición HTTP, devuelve un resultado ficticio
    return { data: 'Respuesta de la petición SQL' };
  }
  
  const funciontres = () => {
    console.log('Función 3: Mostrando un mensaje en una ventana emergente.');
    alert('función 3!');
  }
  
  const arreglodeFunciones = [funcionuno, funciondos, funciontres];
  
  // Método map para ejecutar cada función y almacenar los resultados
  const resultados = arreglodeFunciones.map(funcion => funcion());
  
  console.log('Resultados:', resultados);
  
  // Método forEach para ejecutar cada función y mostrar los resultados
console.log('Resultados utilizando forEach:');
arreglodeFunciones.forEach(funcion => console.log(funcion()));

// Método filter para filtrar las funciones que retornan un valor.
console.log('Funciones que retornan un valor:');
const funcionesConRetorno = arreglodeFunciones.filter(funcion => {
  const resultado = funcion();
  return resultado !== undefined && resultado !== null;
});
console.log(funcionesConRetorno);

// Método reduce para acumular los resultados de las funciones que retornan un número
console.log('Suma de resultados numéricos:');
const sumaResultadosNumericos = arreglodeFunciones.reduce((acumulador, funcion) => {
  const resultado = funcion();
  if (typeof resultado === 'number') {
    return acumulador + resultado;
  } else {
    return acumulador;
  }
}, 0);
console.log(sumaResultadosNumericos);

  
