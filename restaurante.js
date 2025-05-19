new Vue({
    el: "#restaurante",
    data: {
        nombre: "",
        saludo: "",
        sitio: "",
        p1:[],
        p2:[],
        aqui: "",
        domi: "",
        local:"",
        pago: "",
        postre: "",
        cafe:   "",
        direccion: "",
        telefono: "",
        precios: {
            platos: 12,
            extras: 1,
            postres: 2.5,
            cafe: 1
        },
        alertVisible: false,
        alertMessage: "",

    },
    methods: {
        /* Aqui muestro el nombre escrito por el cliente y las opciones de tomar o llevar*/
        principio: function () {
            this.saludo = "Genial " + this.nombre + ", ¿su pedido sera para tomar aqui o para llevar?"
            this.sitio = true
            
        },
        /* Aqui si selecciona tomar aqui se muestra solo el menu para tomar aqui*/
        tomar: function () {
            this.aqui = true
            this.domi = false
        },
        /* Aqui si selecciona llevar se muestra el menu mas las opciones para llevar*/
        llevar: function () {
            this.aqui = false
            this.domi = true
        },
        /* Una vez seleccionadas las opciones se muestra un resumen del pedido y el total del precio*/
        pedir: function () {
            this.alertMessage = "Gracias por su pedido, "+
                "ha seleccionado: "+ this.p1 + " con " + this.p2 + " y " +
                 this.postre + " ¿Cafe? " +this.cafe
            this.alertVisible = true;
            
            let total=0;
            total += this.p1.length * this.precios.platos
            total += this.p2.length * this.precios.extras
            if(this.postre === "Tarta de queso") total += this.precios.postres
            if(this.postre === "Brownie") total += this.precios.postres
            if(this.cafe === "si") total += this.precios.cafe
            this.total = total
            this.pago = true
            this.resultado = true
        },
        /* Aqui se guarda el pedido en el localstorage y se redirige a la pagina de recibo*/
        finalizar: function () {
            this.total
            this.nombre 
            this.p1
            this.p2
            this.postre
            this.cafe
            this.precios.platos
            this.precios.extras
            this.precios.postres
            this.precios.cafe

            localStorage.setItem("total", this.total + "€")
            localStorage.setItem("nombre", this.nombre)
            localStorage.setItem("p1", this.p1)
            localStorage.setItem("p2", this.p2)
            localStorage.setItem("postre", this.postre)
            localStorage.setItem("cafe", this.cafe)
            localStorage.setItem("platos", this.precios.platos)
            localStorage.setItem("extras", this.precios.extras)
            localStorage.setItem("postres", this.precios.postres)
            localStorage.setItem("cafes", this.precios.cafe)
            location.href = "recibo-restaurante.html"
        },
        /* Boton para cancelar y limpiar el pedido*/
        cancelar: function () {
            this.aqui = false
            this.domi = false
            this.total = 0
            this.p1 = []
            this.p2 = []
            this.postre = ""
            this.cafe = ""
            this.pago = false
        },
        /* Boton para cerrar el alerta*/
        closeAlert() {
            this.alertVisible = false;
        }

    },
    

})