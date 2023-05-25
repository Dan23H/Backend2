const {Schema, model} = require('mongoose')

const UsuarioScheme = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    passwordconfirm: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    }
},{
    toJSON: {
        virtuals: true
    }, 
    toObject: {
        virtuals: true
    }
})

UsuarioScheme.virtual('mascotas', {
    ref: "Mascota",
    localField: "_id",
    foreignField: "dueño",
    justOne: false
})

module.exports = model("Usuario", UsuarioScheme)