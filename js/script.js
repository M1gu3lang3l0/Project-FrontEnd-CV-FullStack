//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");

function mostrarOcultarMenu()
{
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//ocultar el menu una vez se selecciona una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++)
{
    links[x].onclick = function()
    {
        menu.style.display = "none";
        menu_visible = false;
    }
}


//conexion entre FrontEnd-API Backend mediante Fetch 
console.log("probando conexion");


function saveUser(event)
{
    event.preventDefault();

    let nombres = document.getElementById("nombres").value;
    let apellidos = document.getElementById("apellidos").value;
    let tipoIdentificacion = document.getElementById("tipo_identificacion").value;
    let numeroIdentificacion = document.getElementById("numero_identificacion").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let profesion = document.getElementById("profesion").value;
    let rolString= document.getElementById("rol").value;
    let rol = parseInt(rolString);
    console.log(rol);


    let user = 
    {
        rol_id:rol,
        nombres: nombres,
        apellidos: apellidos,
        tipo_identificacion: tipoIdentificacion,
        numero_identificacion: numeroIdentificacion,
        telefono: telefono,
        email: email,
        profesion: profesion
        
      }

      let url= "http://localhost:8000/api/crear/user";
      
      fetch(url, {
         method: "POST",
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(user)
       })
 
       .then(response => {
        console.log(response);
      
       })

       return true;
}