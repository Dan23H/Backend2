const { Schema, model } = require('mongoose')

const ImagenScheme = Schema({

    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    imagen: {
        data: {
            type: Buffer,
            required: true
        },
        contentType: {
            type: String
        }
    },
    mascota: {
        type: Schema.Types.ObjectId,
        ref: 'Mascota'
    }
    
},{
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
})

ImagenScheme.method('toJSON', function() {
    const {__v,_id,...object} = this.toObject()
    object.io = _id
    return object
})

module.exports = model('Imagen', ImagenScheme)