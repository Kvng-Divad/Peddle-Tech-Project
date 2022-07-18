const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const repositorySchema = new Schema({
  username: { type: String, required: true },
  repositoryname: { type: String, required: true },
  description: { type: String, required: true },
  stars: { type: Number, required: true },
  issues: {  type: Number, required: true },
  
}, {
  timestamps: true,
});

const  Repository = mongoose.model('Repository',  repositorySchema);

module.exports = Repository;