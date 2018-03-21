const mongoose = require('mongoose')
const assert = require('assert')
const { User, Recipe } = require('../src/models')


describe('models', () => {
    before(() => {
        return mongoose.connect('mongodb://localhost/recipes-book-models-test')
    })

    describe('create a recipe with followers', () => {
        let owner, recipe, follower, follower2

        before(() => {
            owner = new User({
                name: 'name',
                username: 'username'
            })

            recipe = new Recipe({
                owner: owner._id
            })

            follower = new User({
                name: 'name',
                username: 'username-follower',
                recipesFollowing: [recipe._id]
            })

            follower2 = new User({
                name: 'name',
                username: 'username-follower2',
                recipesFollowing: [recipe._id]
            })

            return Promise.all([
                owner.save().then(_owner => owner = _owner),
                recipe.save().then(_recipe => recipe = _recipe),
                follower.save().then(_follower => follower = _follower),
                follower2.save().then(_follower2 => follower2 = _follower2)
            ])
                .then(() => {
                    const id = recipe._id.toString()

                    return Recipe.findOne({ _id: id })
                })
                .then(_recipe => recipe = _recipe)
        })

        it('should create a lease', () => {
            assert(owner, 'should owner be created')

            assert(recipe, 'should recipe be created')

            assert(follower, 'should follower be created')

            assert(follower2, 'should follower 2 be created')

            assert.equal(recipe.owner.toString(), owner._id.toString(), 'should owner match')

            assert(follower.recipesFollowing, 'should follower have recipes following')

            assert.equal(follower.recipesFollowing.length, 1, 'should follower have one recipe following')

            assert.equal(follower.recipesFollowing[0].toString(), recipe._id.toString(), 'should follower recipe following match')

            assert(follower2.recipesFollowing, 'should follower2 have recipes following')

            assert.equal(follower2.recipesFollowing.length, 1, 'should follower2 have one recipe following')

            assert.equal(follower2.recipesFollowing[0].toString(), recipe._id.toString(), 'should follower2 recipe following match')
        })
    })

    after(done => {
        return mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(done)
        })
    })
})