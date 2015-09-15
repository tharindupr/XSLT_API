var mongoose     = require('mongoose');
var Schema= mongoose.Schema;


var PostSchema   = new Schema({
owner:String,
datetime:{ type: Date, default: Date.now },
content:String
});

module.exports = mongoose.model('Post', PostSchema);