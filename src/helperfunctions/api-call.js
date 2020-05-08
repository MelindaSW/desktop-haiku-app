exports.getHaiku = text => {
   fetch('http://localhost:8080/haiku', {
      body: JSON.stringify({ text: text }),
   })
      .then(resp => resp.json())
      .then(result => {
         console.log(result)
         return result
      })
      .catch(err => {
         console.log(err)
      })
}
