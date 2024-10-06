//Ejercicio 1.2
console.log("Ejercicio 1.2")
let a = 6;
let b = 40;
let c = a+b;
console.log("La suma de a y b es:", c)

//Ejercicio 1.3
const ej13 = document.getElementById("ej1.3")
ej13.addEventListener("click",
  ()=>{
    fEj13()
  })
const fEj13 = ()=>{
  let nombre = prompt("¿Cuál es tu nombre?")
  console.log("Hola, " + nombre)
}

//Ejercicio 2.1
console.log("\nEjercicio 2.1")
let x = 56
let y = 32
let q = 45
if(x>y){
  if(x>q){
    console.log("El mayor de los tres numeros es x que vale:", x)
  }else{
    console.log("El mayor de los tres numeros es q que vale:", q)
  }
}else if(y>q){
  console.log("El mayor de los tres numeros es y que vale:", y)
}else{
  console.log("El mayor de los tres numeros es q que vale:", q)
}

//Ejercicio 2.2
const ej22 = document.getElementById("ej2.2")
ej22.addEventListener("click",
  ()=>{
    fEj22()
  })
  const fEj22 = ()=>{
    let numero = prompt("Ingrese un numero y le dire si es par o impar");
    numero = Number(numero);
    let divisor = 2;
    let resto = numero % divisor;
    if(resto === 1){
      console.log("El numero", numero, "es impar");
    }else{
      console.log("El numero", numero, "es par");
    }
  }

//Ejercicio 3.1
console.log("\nEjercicio 3.1")
let laps = 10
while(laps>0){
  console.log(laps)
  laps--
}

//Ejercico 3.2
const ej32 = document.getElementById("ej3.2")
ej32.addEventListener("click",
  ()=>{
    fEj32()
  })
const fEj32 = ()=>{
  let t
  do{
    t = prompt("Ingrese un numero mayor a 100")
  }while(t<100)
  console.log("El numero", t, "es mayor a 100")
}


//Ejercicio 4.1
const ej41 = document.getElementById("ej4.1")
ej41.addEventListener("click",
  ()=>{
    fEj41()
  })
const fEj41 = ()=>{
  let r
  r = prompt("Ingrese un numero")
  function esPar(r){
    let resto
    resto = r % 2
    if(resto === 1){
      return false
    }else{
      return true
   }
  }
  console.log("El nummero", r, "es par:", esPar(r))
}

//Ejercicio 4.2
const ej42 = document.getElementById("ej4.2")
ej42.addEventListener("click",
  ()=>{
    fEj42()
  })
const fEj42 = ()=>{
  let f
  f = prompt("Ingrese un valor para convertir de grados Celsius a Fahrenheit")
  function convertirCelsiusAFahrenheit(f){
    let F = f*1.8+32
    console.log("El valor en  grados Fahrenheit es:", F)
  }
  convertirCelsiusAFahrenheit(f)
}


//Ejercicio 5.1
const ej51 = document.getElementById("ej5.1")
ej51.addEventListener("click",
  ()=>{
    fEj51()
  })
const fEj51 = ()=>{
  let persona = {
    nombre: "Alvaro",
    edad: 21,
    ciudad: "Junin"
  }
  console.log("Datos de la persona:")
  console.log("Nombre:", persona.nombre)
  console.log("Edad:", persona.edad)
  function actualizarCiudad(){
    let city
    city = prompt("Si desea ingrese una nueva ciudad")
    persona.ciudad = city
  }
  actualizarCiudad()
  console.log("Ciudad actualizada:", persona.ciudad)
}

//Ejercicio 5.2
const ej52 = document.getElementById("ej5.2")
ej52.addEventListener("click",
  ()=>{
    fEj52()
  })
const fEj52 = ()=>{
  let libro = {
    titulo: "Principios de Java Script",
    autor: "Javier Sanchez",
    anio: null
  }
  libro.anio = prompt("Ingrese el año de publicacion del libro")
  function antiguedadLibro(a){
    if((2024-a)>10){
      console.log("El libro tiene mas de 10 años")
    }else{
      console.log("El libro tiene menos de 10 años")
    }
  }
  antiguedadLibro(libro.anio)
}

//Ejercicio 6.1
console.log("\nEjercicio 6.1")
let arr1 = [1,2,3,4,5,6,7,8,9,10]
let arr2 = []
arr1.forEach((elemento, indice)=>{
  arr2.push(arr1[indice]*2)
})
console.log("Numeros originales:", arr1)
console.log("Numeros multiplicados por 2:", arr2)

//Ejercicio 6.2
console.log("\nEjercicio 6.2")
let pares = []
for(let i=1; i<21; i++){
  if(i%2===0){
    pares.push(i)
  }
}
console.log("Primeros 10 numeros pares:")
console.log(pares)

//Ejercicio 7.1
const changeColor = ()=>{
  const parr1 = document.getElementById('parr1')
  parr1.classList.add('azul')
  const parr2 = document.getElementById('parr2')
  parr2.classList.add('azul')
  const parr3 = document.getElementById('parr3')
  parr3.classList.add('azul')
}
const buttonClick = document.getElementById("buttonParrafos")
buttonClick.addEventListener("click",
  ()=>{
    changeColor()
})

//Ejercicio 7.2
const getInfo =()=>{
  const texto = document.getElementById('texto').value
  let w
  w = prompt("Has ingresado:", texto)
}
const buttonAlerta = document.getElementById("alerta")
buttonAlerta.addEventListener("click",
  ()=>{
    getInfo()
  }
)

//Ejercico 8.1
const primero = document.getElementById("1er")
primero.addEventListener("click",
  ()=>{
    console.log("Elemento 1")
  }
)
const segundo = document.getElementById("2do")
segundo.addEventListener("click",
  ()=>{
    console.log("Elemento 2")
  }
)
const tercero = document.getElementById("3ro")
tercero.addEventListener("click",
  ()=>{
    console.log("Elemento 3")
  }
)
const cuarto = document.getElementById("4to")
cuarto.addEventListener("click",
  ()=>{
    console.log("Elemento 4")
  }
)

//Ejercicio 8.2
const campoTexto = document.getElementById("campoTexto")
const btnDesh = document.getElementById("btnDesh")
const btnHab = document.getElementById("btnHab")
btnDesh.addEventListener("click",
  ()=>{
    campoTexto.disabled = true
  })
  btnHab.addEventListener("click",
    ()=>{
      campoTexto.disabled = false
  })

//Ejercicio 9.1
document.addEventListener("DOMContentLoaded", function () {
  const emailForm = document.getElementById("emailForm");
  const emailInput = document.getElementById("email");
  const savedEmailContainer = document.getElementById("savedEmailContainer");
  const savedEmailElement = document.getElementById("savedEmail");
  const deleteEmailButton = document.getElementById("deleteEmail");
  function displaySavedEmail() {
      const savedEmail = localStorage.getItem("email");
      if (savedEmail) {
          savedEmailElement.textContent = savedEmail;
          savedEmailContainer.style.display = "block";
      } else {
          savedEmailContainer.style.display = "none";
      }
  }
  emailForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = emailInput.value;
      localStorage.setItem("email", email);
      displaySavedEmail(); 
      emailInput.value = "";
  });
  deleteEmailButton.addEventListener("click", function () {
      localStorage.removeItem("email");
      displaySavedEmail(); 
  });
  displaySavedEmail();
});