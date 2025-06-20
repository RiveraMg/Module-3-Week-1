function sistemaMensajes(){

    //impremir un mensaje de bienvenida al usuario
    console.log('Bienvenido a I-MESSAGE Tu sistema interactivo de mensaje de texto!');

    //recibir los datos que el usuario ingrese por medio de inputs
    let nombre = prompt('Hola! como te llamas?')
     //validaciones e imprimir mensajes dde errores
    if (nombre === '' || nombre === null){
        alert('ERROR: VALOR INVALIDO, por favor ingrese una nombre, este campo no debe estar vacio')
        console.error('ERROR: VALOR INVALIDO, por favor ingrese una nombre, este campo no debe estar vacio');
    } else {
        let edad = prompt(`Hola ${nombre}! Cuantos años tienes?`)
        //parseo de edad a INT
        edad = parseInt(edad)
    
        //validaciones e imprimir mensajes dde errores
        if (isNaN(edad)){
            alert('ERROR: VALOR INVALIDO, por favor ingrese una edad valida!')
            console.error('ERROR: VALOR INVALIDO, por favor ingrese una edad valida!');
    
        } else if (edad > 110 || edad <1){
            alert('ERROR: VALOR INVALIDO, por favor ingrese una edad valida!')
            console.error('ERROR: VALOR INVALIDO, por favor ingrese una edad valida!');
    
        } else if (edad < 18){
            alert(`Bienvenido ${nombre}, Eres menor de edad. Puedes seguir aprendiendo y disfutando de lo que te apasiona!`);
        
        } else {
            alert(`Hola ${nombre}, Eres mayor de edad. Estas list@ para disfrutar de las oportunidades y todos los retos que el mundo de la programacion tiene para ti?`)
        }
    }


}
sistemaMensajes()
