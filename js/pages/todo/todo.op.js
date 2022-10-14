
const saveTodo = () =>{
    if(updateId){
        updateTodo()
        updateId = false;
        addTodo()
    }
}

const addTodo = () =>{
    const name = $("#todoname").val()
    const date = $("#tododate").val()
    const body = { name, date}
    add(body)
        .then(() => {
            handleSuccess()
        })
        .catch(handleErrors)
        .finally( openModal("hide", "add"))
        .finally(handleFinally);
}