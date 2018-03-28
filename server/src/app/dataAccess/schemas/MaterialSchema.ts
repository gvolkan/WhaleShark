import DataAccess = require('../DataAccess');
import ICustsomerModel = require('./../../model/MaterialModel');
let timestamps = require('mongoose-timestamp');

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class MaterialSchema {

    static get schema () {
        let schema =  mongoose.Schema({
            name : {type: String, required: true},
            no : {type: String, required: false},
            guige : {type: String, required: false},
            unit : {type: String, required: false},
            vendor : {type: String, required: false},
            inPrice : {type: Number, required: false},
            outPrice : {type: Number, required: false},
            remark : {type: String, required: false},
        });
        schema.plugin(timestamps);
        return schema;
    }
}
let schema = mongooseConnection.model<ICustsomerModel>('Materials', MaterialSchema.schema);
export = schema;
