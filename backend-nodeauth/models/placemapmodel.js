const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const placemap = new Schema({
    longitude:decimal,
    latitude:decimal,
    description:text,
    name:string
    
  });
  
  const Place = mongoose.model('Place', placemap);
  module.exports = Place;