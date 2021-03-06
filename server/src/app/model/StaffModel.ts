import mongoose = require('mongoose');

interface StaffModel extends mongoose.Document {
    name: string;
    phone: string;
    address: string;
    remark: string;
    userId: string;
}

export = StaffModel;
