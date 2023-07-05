

//creacion de una funcion para que el btn enviar lo dispare
const enviar = (event) => {
    event.preventDefault()

    const tarea = document.getElementById("TareaID").value
    
    const descripcion = document.getElementById("descripcionid").value

    // Decalaracion de un objeto
    const TareaToDo = {
        tarea,
        descripcion
    }

    console.log(TareaToDo)
    localStorage.setItem("TareaTodo",JSON.stringify(TareaToDo));
}