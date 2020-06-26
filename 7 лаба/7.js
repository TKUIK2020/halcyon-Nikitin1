let promise = fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
.then((response) => {return response.json();})
.then((data) => {console.log(data);})
.catch((error) => {console.error('Ошибочка:', error)});