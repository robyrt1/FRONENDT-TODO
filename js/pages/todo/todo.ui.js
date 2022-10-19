const cleanTododForm = () => {
  $("#todoname").val("");
  $("#tododate").val("");
};

const showSucessMsg = () => {
  $("#msg").append( `
        <div class="    ui positive message">
        <i class="close icon"></i>
            <div>   
                Sucess
            <div>   

        </div>  
    `);
};  

const showErrorMsg = () => {
  $("#msg").append(`
              <div class="ui negative message">
            <i class="close icon"></i>
                  <div>
                  Error
              <d    iv>

          </d>                                                                                                                                                                                                                                                                                                                                      
      `);
};

const closeMsg = (time) => {
    setTimeout(() =>{
        $("#msg").empty();
    }, time);
};

const loadTableData = async () => {
  const todos = await getTodos();
  let tableContent = "";

  todos.forEach((todo, index) => {
    tableContent += `
        <tr>
            <td>${index + 1}</td>
            <td>${todo.name}</td>
            <td>${todo.date}</td>
            <td>
                <button class="ui blue button"><i class="edit icon" /> Edit</button>
                <button class="ui red button"><i class="trash icon" /> Remove</button>
            </td>
        </tr>
    `;
  });

  $("#tableTbody").empty();
  $("#tableTbody").append(tableContent);
};

const openModal = (param, op) => {
  const headerMsg =
    op === "add"
      ? `<i class="plus icon" /> Add to-do`
      : `<i class="edit icon" /> Update to-do`;

  $("#todoModalHeader").empty();
  $("#todoModalHeader").append(headerMsg);
  $(".ui.modal").modal(param);
};


const handleSuccess = () => {
    showSucessMsg();
    loadTableData();
}   

const handleErrors = (error) => {
    console.error(error)
    showErrorMsg();
}

const handleFinally = () =>{
    closeMsg(5000);
    cleanTododForm();
}