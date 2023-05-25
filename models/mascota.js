const { Schema, model } = require('mongoose')

const MascotaScheme = Schema({

    name: {
        type: String,
        required: true
    },
    edad: {
        type: String,
        required: true
    },
    dueño: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
    
},{
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
})

MascotaScheme.virtual('imagenes', {
    ref: "Imagen",
    localField: "_id",
    foreignField: "mascota",
    justOne: false
})

MascotaScheme.method('toJSON', function() {
    const {__v,_id,...object} = this.toObject()
    object.io = _id
    return object
})

module.exports = model('Mascota', MascotaScheme)