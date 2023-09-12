const db = require('./db')

const Post = db.sequelize.define('pessoas', {
    nome: {
        type:db.Sequelize.STRING,
    },
    horario: {
        type:db.Sequelize.TEXT
    }
})

// Post.sync({force:true})
 module.exports = Post