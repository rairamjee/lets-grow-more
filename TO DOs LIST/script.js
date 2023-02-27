
function getAndupdate(){
    console.log('Updating List');
    tit = document.getElementById('titl').value;
    desc = document.getElementById('descrip').value;
    if (localStorage.getItem('itemsJson') == null) {
      itemJsonArray = [];
      itemJsonArray.push([tit, desc]);
      localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else {
      itemJsonArrayStr = localStorage.getItem('itemsJson')
      itemJsonArray = JSON.parse(itemJsonArrayStr);
      itemJsonArray.push([tit, desc]);
      localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
  }
  update();
}
  function update(){
    if (localStorage.getItem('itemsJson') == null) {
      itemJsonArray = [];
      localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else {
      itemJsonArrayStr = localStorage.getItem('itemsJson')
      itemJsonArray = JSON.parse(itemJsonArrayStr);
  }

    let tableBody = document.getElementById("tablebody");
    let str = "";
    itemJsonArray.forEach((element,index) => {
      str += `
        <tr>
          <th scope="row">${index + 1}</th>
          <td>${element[0]}</td> 
          <td>${element[1]}</td>
          <td><button class="btn1" onclick="deleted(${index})">Delete</button></td>
        </tr>`;

    });
    tableBody.innerHTML = str;
  }
  add = document.getElementById("add");
  add.addEventListener("click", getAndupdate);
  update();

  function deleted(itemIndex){
    console.log("Delete",itemIndex);
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);

    itemJsonArray.splice(itemIndex,1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();
  }

  function clearStorage(){
    if(confirm("Do You really want to Clear ?")){
    console.log("Clear List");
    localStorage.clear();
    update();
    }
  }