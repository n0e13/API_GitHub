// 2. ¿Quieres saber mi información? Aquí la tienes.
// Para este ejercicio vamos a utilizar la API de usuarios de GitHub, la cual tiene esta URL: https://api.github.com/users/{username}. {username} es el nombre del usuario en GitHub, por lo que si quieres buscar a cualquier usuario, solo tienes que ponerlo en la url. Por ejemplo, https://api.github.com/users/silvialcastilla. Si ponéis esta URL en una nueva pestaña del navegador podréis observar qué datos nos devuelve el API.

// Lo primero que haremos será crear un input de tipo texto y un botón para buscar. El usuario escribirá en el input el nombre de usuario de GitHub que quiera buscar. Después crearemos una función que se ejecute cuando se pulse el botón buscar y que contenga una petición a la API para obtener información de ese usuario y así mostrarla en nuestra página:

// Lo que queremos que se imprima por consola será:

// - nombre
// - número de repositorios
// - avatar (imagen)

// Si ya has obtenido toda la información, utiliza las herramientas del arbol DOM para que esta información aparezca en la pantalla.


document.querySelector('input[type="button"]').addEventListener('click', function (event) {
    let findUser = document.getElementById("user").value;
    fetch(`https://api.github.com/users/${findUser}`)
        .then(res => res.json())
        .then(data => {
            let infoContainer = document.getElementById("user_container");
            infoContainer.innerHTML = `<p>Nombre: <strong>${data.login}</strong></p><p>Número de repos: <strong>${data.public_repos}</strong></p><p><img src="${data.avatar_url}"></p>`;
        });
});