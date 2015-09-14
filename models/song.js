var mongoose     = require('mongoose');
var Schema= mongoose.Schema;


var PostSchema   = new Schema({
songId:String,
name:String,
artist:String
});
module.exports = mongoose.model('Post', PostSchema);