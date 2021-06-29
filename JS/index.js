
function userData(data){
  var display = document.getElementById('userinfo');
   result = `<tr>
   <th>id</th>
   <th>Name</th>
   <th>Email</th>
   <th>View Detail</th>
   </tr>` ; 
    result += data.map(function(item){

      return  ` 
      <tr>
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.email}</td>
      </tr>
      `
    }).join('')
    display.innerHTML = result
    }

    
    function fetchData(){
    fetch(' https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => userData(data))}

      fetchData();
    