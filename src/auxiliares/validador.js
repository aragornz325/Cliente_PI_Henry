
export function validador (form, chequear) {
    if (!form.name) {chequear.push ('el nombre no puede estar vacio')
} else if (form.name.length < 3) {chequear.push('el nombre debe contener un minimo de 3 letras')}
    if (!form.description) {chequear.push('debes incluir una descripcion')
} else if (form.description.length < 15) {chequear.push('la descripcion debe contener al menos 15 caracteres')} 
    if (!form.rating) {chequear.push('debes ranquear tu juego')
}else if (!/^[1-5]$/.test(form.rating)) {
        chequear.push('el rating debe ser un numero entre el 1 y el 5')};
    if (form.image && !/(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)(jpg)\/?/gm.test(form.image)) 
{chequear.push('la imagen debe ser una URL valida')}
    if (form.genres.length < 1) chequear.push('debes especificar al menos un genero');
    if (form.platforms.length < 1) chequear.push('debes especificar las plataformas soportadas');
}

export function validadorContacto (input, chequear) {
    if (!input.nombre) {chequear.push('debes ingresar tu nombre')
} else if (input.nombre.length<2) {chequear.push('ingresa un nombre valido')}
    if (!input.apellido) {chequear.push('debes ingresar tu apellido')
} else if (input.apellido.length<2) {chequear.push('ingresa un apellido valido')}
    if (!input.mensaje) {chequear.push('no has ingresado un mensaje')
} else if (input.mensaje.length<10) {chequear.push('el mensaje es demaciado corto')}
    if (!input.email) {chequear.push('el campo E-Mail es obligatorio')
} else  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email)) 
{chequear.push('ingresa una direccion de email valida')}
}