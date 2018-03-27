const User = mongoose.model('User', {
    id: String,
    name: String,
    surname: String,
    email: String,
    username: String,
    password: String,
    stats: {
            leagueCreated:Number,
            leaguejoined:Number,
            win:Number,
            lost:Number,
            setswin:Number,
            setslost:Number,
            gameswin:Number,
            gameslost:Number,
            level:Number
        }
    
})