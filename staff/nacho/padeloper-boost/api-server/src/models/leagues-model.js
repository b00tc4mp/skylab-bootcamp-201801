const mongoose = require('mongoose')
const League = mongoose.model('League', {
    idadmin: String,
    name: String,
    city: String,
    club: String,
    category: String,
    type: String,
    created: {type:Date, default:Date.now},
    players:[
        {
            iduser:{type: Schema.ObjectId,ref:'User'},
            status:Boolean
        }
    ],
    teams: [
        {
            id:String,
            name:String,
            players:[{type: Schema.ObjectId,ref:'User'}]
        }
    ],
    matches:[
        {
            id:String,
            teams:Array,
            result:{
                winner:{
                    idteam: String,
                    games: Array
                },
                loser:{
                    idteam: String,
                    games: Array
                }
            }
        }
    ]
})