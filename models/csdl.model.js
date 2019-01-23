const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/csdl', { useNewUrlParser: true });
const Schema = mongoose.Schema;

const CsdlSchema = new Schema({
    people: {
        name: String, 
        friends: [{firstName: String, lastName: String}]
    },
    faceUrl:[{
        group: String,
        url: String,
        totalClick: Number,
        timeClick: [String],
    }],
    smsUrl:[{
        url: String,
        totalClick: Number,
        timeClick: [String],
    }],
});
const csdl = mongoose.model('api', CsdlSchema);


//********************************************************************************** */
// update time click
// module.exports.updateTimeClick = () => {
//     return new Promise ((resolve , reject));
// }
//find newUrl
module.exports.findNewUrl = (newUrl,name) => {
    return new Promise((resolve, reject) => {
        csdl.find({"faceUrl": {$elemMatch: { url:newUrl}}}, (err, result) => {
            if(err)reject(err)
            else {
                //console.log("result:",result[0].faceUrl);
                resolve(result[0]);
            }
        })
    })
}


/***********************************************************************************************/

// get all
module.exports.getAll = () => {
    return new Promise((resolve, reject) => {
        csdl.find({}, (err, result) => {
            if(err) reject(err);
            else resolve(result);
        })
    })
}

// Store
module.exports.store = (object) => {
    return new Promise((resolve, reject) => {
        csdl.create(object, (err, result) => {
            if(err)reject(err);
            else resolve(result);
        })
    })
}
// detail
module.exports.detail = (id) => {
    return new Promise((resolve, reject) => {
        csdl.findById(id, (err, result) => {
            if(err) reject(err);
            else resolve(result);
        })
    })
}
//update
module.exports.update = (id, object) => {
    return new Promise((resolve, reject) => {
        csdl.updateOne({_id:id}, object, (err, result) => {
            if(err) reject(err);
            else resolve(result);
        })
    })
}
//delete
module.exports.delete = (id) => {
    return new Promise((resolve, reject) => {
        csdl.deleteOne({_id:id}, (err, result) => {
            if(err)reject(err)
            else resolve(result);
        })
    })
}


// module.exports = {
//     findNewUrl,
// }

