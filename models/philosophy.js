const mongoose = require('mongoose');
const Schema = mongoose.Schema;


if (mongoose.models.Philosophy) {
    delete mongoose.models.Philosophy;
}
const philosophySchema = new Schema({
    topic: { type: String, required: true },
    introduction: { type: Schema.Types.Mixed, required: true },
    body: { type: Array, required: true },
    conclusion: { type: Schema.Types.Mixed,required: true },
    owner:{type:Schema.Types.ObjectId,ref:'userSchema',require:true}
});

const Philosophy = mongoose.model('Philosophy', philosophySchema);

module.exports = Philosophy;
