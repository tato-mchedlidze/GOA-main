// hw1
fetch("jsonplaceholder.com")
    .then( response => response.json())
    .then( data => console.log(data))
    .catch( error => console.log(error))


// hw2
fetch('https://goa-api.onrender.com/mentors/Data Tezelashvili')
    .then(res => res.json())
    .then(json => console.log(json));

