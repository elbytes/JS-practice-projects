

function newForm(){
    var formDiv = document.createElement("div");
    formDiv.className = "input-group";
    var formdivPrepend = document.createElement("div");
    formdivPrepend.className = "input-group-prepend";
    var formSpan = document.createElement("span");
    formSpan.className = "input-group-text";
    formSpan.innerHTML = "Key value pair:";
    var inputKey = document.createElement("input");
    inputKey.type = "text";
    inputKey.className = "form-control";
    inputKey.id="inputKey";
    var inputValue = document.createElement("input");
    inputValue.type = "text";
    inputValue.className = "form-control";
    inputValue.id="inputValue";
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn btn-success";
    btn.innerText = "Submit";
    btn.onclick= function() {submit()};
    document.getElementById("card-body").appendChild(formDiv);
    formDiv.appendChild(formdivPrepend);
    formdivPrepend.appendChild(formSpan);
    formDiv.appendChild(inputKey);
    formDiv.appendChild(inputValue);
    formDiv.appendChild(btn);
}

function submit(){
    var inputKey = document.getElementById("inputKey");
    var inputValue = document.getElementById("inputValue");
    console.log(inputKey.value + inputValue.value);
}
