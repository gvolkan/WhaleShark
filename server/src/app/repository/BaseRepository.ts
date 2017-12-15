/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import IRead = require('./interfaces/Read');
import IWrite = require('./interfaces/Write');
import IHeroModel = require('./../model/interfaces/HeroModel');

import mongoose = require('mongoose');

class RepositoryBase<T extends mongoose.Document> implements IRead<T>, IWrite<T> {

    private _model: mongoose.Model<mongoose.Document>;

    constructor (schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }

    create (item: T, callback: (error: any, result: any) => void) {
        this._model.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._model.find({}, callback).sort({createdAt: -1});
    }

    update (_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) {
        this._model.update({_id: _id}, item, callback);

    }

    delete (_id: string, callback: (error: any, result: any) => void) {
        this._model.remove({_id: this.toObjectId(_id)}, (err) => callback(err, null));

    }

    findById (_id: string, callback: (error: any, result: T) => void) {
        this._model.findById( _id, callback).sort({create_at: -1});
    }
    
    find (keys: any = [], reg: RegExp, projection: string= '', callback: (error: any, result: T) => void) {
        let conditions = [];
        keys.forEach((key: string) => {
            let tmp: any = {};
            tmp[key] = reg;
            conditions.push(tmp);
        });
        this._model.find(conditions, projection || null, callback).sort({create_at: -1});
    }

    private toObjectId (_id: string): mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    }

}

export = RepositoryBase;