const mongoose = require('mongoose')


const url = 'mongodb://fullstack:fs2018@ds127961.mlab.com:27961/fullstack-persons'
mongoose.connect(url)

const Person = mongoose.model('Person', {
  name: String,
  num: String,
  important: Boolean
})

const person = new Person({
  name: 'Niina Männikkö',
  num: '2098777999',
  important: true
})

person
  .save()
  .then(response => {
    console.log('persom saved!')
    mongoose.connection.close()
  })

Person
  .find({})
  .then(result => {
    result.forEach(person => {
      console.log(person)
    })
    mongoose.connection.close()
  })