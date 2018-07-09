const mongoose = require('mongoose')

const url='mongodb://fullstack:fs2018@ds127961.mlab.com:27961/fullstack-persons'
mongoose.connect(url)

const Person = mongoose.model('Person', {
    name: String,
    num: String,
    important: Boolean
  })

  module.exports=Person
  