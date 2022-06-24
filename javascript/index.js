// PAGE: CURSOS //

class Curso {
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }
}

class Cursos {
    constructor() {
        this.lista = []
    }
    agregarCurso(curso) {
        this.lista.push(curso)
    }
    removerCurso(curso) {
        this.lista = this.lista.filter((value) => {
            return value.nombre !== curso.nombre
        })
    }
    removerCursoHtml(curso) {
        let elemento = document.getElementById(curso.nombre)
        elemento.remove()
    }
    logLista() {
        console.log(this.lista);
    }
    renderHtml() {
        let contenedor = document.getElementById("contenedor")
        for (let index = 0; index < this.lista.length; index++) {
            const curso = this.lista[index];
            const elemento = document.createElement("div")
            elemento.id = curso.nombre;
            elemento.className = "curso";
            elemento.innerHTML = `
                <div class="nombre">${curso.nombre}</div>
                <div class="precio">${curso.precio}</div>
            `
            const button = document.createElement('button')
            button.textContent = "Eliminar"
            button.onclick = () => {
                this.removerCurso(curso)
                this.removerCursoHtml(curso)
                this.logLista();
            }
            elemento.append(button)
            contenedor.append(elemento)
        }
    }
    agregarCursoHtml(curso) {
        let contenedor = document.getElementById('contenedor')
        const elemento = document.createElement('div')
        elemento.className = "curso"
        elemento.id = curso.nombre
        elemento.innerHTML = `
            <div class="nombre">${curso.nombre}</div>
            <div class="precio">${curso.precio}</div>
        `
        const button = document.createElement('button')
        button.textContent = "Eliminar"
        button.onclick = () => {
            this.removerCurso(curso)
            this.removerCursoHtml(curso)
            this.logLista();
        }
        elemento.append(button)
        contenedor.append(elemento)
    }
}
const CURSOS = new Cursos()

const c1 = new Curso("Mi primer Balance",10500)
const c2 = new Curso("Monotributo",5000)
const c3 = new Curso("Iniciación Profesional",15000)
const c4 = new Curso("Clases Particulares",800)

CURSOS.agregarCurso(c1)
CURSOS.agregarCurso(c2)
CURSOS.agregarCurso(c3)
CURSOS.agregarCurso(c4)

CURSOS.renderHtml()
CURSOS.logLista()

const submitForm = (id) =>{
    let form = document.getElementById(id)
    form.addEventListener("submit",(event) =>{
        event.preventDefault();
        let nombre = form.children[0].value
        let precio = form.children[1].value
        let curso = new Curso(nombre,parseInt(precio))
        console.log(curso)
        CURSOS.agregarCurso(curso)
        CURSOS.agregarCursoHtml(curso)
        CURSOS.logLista()
    } )
}

submitForm("formulario")



// PAGE: CLIENTES //

let altaUsuario = document.getElementById ("formularioClientes");

altaUsuario. addEventListener ("submit", validarFormulario );

function validarFormulario (e){
 e.preventDefault ();
 console.log("Formulario Enviado "); 
}