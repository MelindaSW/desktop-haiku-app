exports.getHaiku = text => {
   fetch('http://localhost:8080/api/haiku', {
      body: JSON.stringify({ text: text }),
   })
      .then(resp => resp.json())
      .then(result => {
         console.log(result)
      })
      .catch(err => {
         console.log(err)
      })
}
