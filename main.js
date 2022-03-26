window.addEventListener("load", () => {
  const shopInput = document.querySelector("#mainInputShop");
  const moneyInput = document.querySelector("#mainInputMoney");
  const buttonInput = document.querySelector("#inputButton");
  const costList = document.querySelector("#costList");
  const totalMoney = document.querySelector("#total-money");

  buttonInput.addEventListener('click', costHandler);

  function costHandler(event) {

    const shopText = shopInput.value;
    const moneyText = moneyInput.value;

    const listContent = document.createElement("div");
    listContent.classList.add("costListOutput");

    const shopOutput = document.createElement("input");
    shopOutput.classList.add("listOutput");
    shopOutput.type = "text";
    shopOutput.value = shopText;
    shopOutput.setAttribute("readonly", "readonly");

    const moneyOutput = document.createElement("input");
    moneyOutput.classList.add("listOutput");
    moneyOutput.type = "text";
    moneyOutput.value = moneyText;
    moneyOutput.setAttribute("readonly", "readonly");

    const dataOutpu = document.createElement("input");
    dataOutpu.classList.add("listOutput");
    dataOutpu.type = "date";
    dataOutpu.id = "date";

    // Заполняем дату сегодняшним числом
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    let today = year + "-" + month + "-" + day;
    dataOutpu.value = today;
    dataOutpu.setAttribute("readonly", "readonly");

    listContent.appendChild(shopOutput);
    listContent.appendChild(dataOutpu);
    listContent.appendChild(moneyOutput);

    const divButton = document.createElement("div");
    const deleteButton = document.createElement("button");
    const editButton = document.createElement("button");
    editButton.classList.add("buttons");
    editButton.classList.add("edit-button");
    deleteButton.classList.add("buttons");
    deleteButton.classList.add("delete-button");

    divButton.appendChild(editButton);
    divButton.appendChild(deleteButton);
    divButton.classList.add("divButton");

    editButton.setAttribute("role", "button");
    editButton.innerText = "Edit";
    deleteButton.setAttribute("role", "button");
    deleteButton.innerText = "Delete";

    editButton.addEventListener("click", () => {
      if (shopOutput.readOnly === true && moneyOutput.readOnly === true) {
        shopOutput.removeAttribute("readonly");
        dataOutpu.removeAttribute("readonly");
        moneyOutput.removeAttribute("readonly");
        editButton.focus();
      } else {
        shopOutput.setAttribute("readonly", "readonly");
        dataOutpu.setAttribute("readonly", "readonly");
        moneyOutput.setAttribute("readonly", "readonly");
      }
    });

    deleteButton.addEventListener("click", () => {
      costList.removeChild(listContent);
    });

    //
    shopOutput.addEventListener("dblclick", () => {
      if (shopOutput.readOnly === true) {
        shopOutput.removeAttribute("readonly");
        shopInput.focus();
      } else {
        shopOutput.setAttribute("readonly", "readonly");
      }
    });

    moneyOutput.addEventListener("dblclick", () => {
      if (moneyOutput.readOnly === true) {
        moneyOutput.removeAttribute("readonly");
        shopInput.focus();
      } else {
        moneyOutput.setAttribute("readonly", "readonly");
      }
    });

    dataOutpu.addEventListener("dblclick", () => {
      if (dataOutpu.readOnly === true) {
        dataOutpu.removeAttribute("readonly");
        shopInput.focus();
      } else {
        dataOutpu.setAttribute("readonly", "readonly");
      }
    });

    listContent.appendChild(divButton);

    if (!shopText.trim() && !moneyText.trim()) {
      alert("Please fill out the task.");
    } else {
      costList.appendChild(listContent);
    }

    // Очищаем поле ввода
    costList.value = "";

    // Фокус на поле ввода кнопкой
    costList.focus();
    
    // Очистка поля ввода 
    const resetForm = () => {
      if (moneyText !== "" && shopText !== "") {
        shopInput.value = "";
        moneyInput.value = "";
      }
    }
    buttonInput.onclick = resetForm();

    mainInputShop.focus();
    // Total
    totalMoney.value = 0;
  }

});
