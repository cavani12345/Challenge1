function userData(data){
    var display = document.getElementById('userinfo');
    result = `<tr>
        <th>Name</th>
        <th>Email</th>
        <th>View User Post</th>
        </tr>` ; 
    result += data.map(function(item){

    return  ` 
        <tr>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td class="button"  onclick="fetchPost(${item.id})"><button>Get User’s Posts</button></td>
        </tr>
        `
      }).join('')

    display.innerHTML = result
      }

function fetchData(){
      fetch(' https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => userData(data))
      }
fetchData();

    
function fetchPost(data){
      fetch(` https://jsonplaceholder.typicode.com/users/${data}/posts`)
           .then(response => response.json())
           .then(data => displayPost(data))
     }  
     
function displayPost(post){
      var display = document.getElementById('userpost');
      result = `` ; 

      result += post.map(function(item){
  
      return  ` 
          <strong>Post Title: ${item.title}</strong><br>
           <p>${item.body}</p>
          `
        }).join('')
  
      display.innerHTML = result; 
}