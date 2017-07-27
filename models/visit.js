// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const moment= require('moment')
//
// const VisitSchema = new Schema({
//     _creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//     meeting: { type: Date, required: true },
// });
//
//
// VisitSchema.virtual('timeRemaining').get(function () {
//   let remaining = moment(this.meeting).fromNow(true).split(' ');
//   let [days, unit] = remaining;
//   return { days, unit };
// });
//
// VisitSchema.virtual('inputFormattedDate').get(function(){
//   return moment(this.meeting).format('YYYY-MM-DD');
// });
// VisitSchema.methods.belongsTo = function(user){
//   return this._creator.equals(user._id);
// }
//
// module.exports = mongoose.model('Visit', VisitSchema);
