const mongoose = require('mongoose')
const assert = require('assert')
const { User, Post } = require('../src/models')

describe('models', () => {
    before(done => {
        mongoose.connect('mongodb://localhost/pause-test')

        const db = mongoose.connection

        db.on('error', done)

        db.once('open', done)
    })

    describe('create user', () => {
        let user

        before(done => {
            user = new User({
                name: 'name',
                surame: 'surname',
                email: 'email',
                username: 'username',
                password: 'password',
                city: 'city',
                country: 'country',
                kudos: 0,
                createAt: new Date,
                about: 'about',
                followers: [],
                following: [],
                timelineTitle: 'timeline title'
            })

            user.save()
                .then(_user => {
                    user = _user

                    done()
                })
                .catch(done)
        })

        it('should create user', () => {
            assert(user, 'should have created user')
        })
    })

    describe('create post', () => {
        let post

        before(done => {
            post = new Post({
                title: 'title',
                shortDescription: 'short description',
                fullDescription: 'full description',
                kudos: '',
                counterVisits: 0,
                idPostTemplate: '',
                namePostTemplate: '',
                tag: '',
                createAt: new Date,
                comments: []
            })

            post.save()
                .then(_post => {
                    post = _post

                    done()
                })
                .catch(done)
        })

        it('should create post', () => {
            assert(post, 'should have created post')
        })
    })

    describe('find post by user id', () => {
        let user, post1, post2, posts

        before(done => {
            user = new User({
                name: 'name',
                surame: 'surname',
                email: 'email',
                username: 'username',
                password: 'password',
                city: 'city',
                country: 'country',
                kudos: 0,
                createAt: new Date,
                about: 'about',
                followers: [],
                following: [],
                timelineTitle: 'timeline title'
            })

            post1 = new Post({
                title: 'title',
                shortDescription: 'short description',
                fullDescription: 'full description',
                owner: user._id,
                kudos: '',
                counterVisits: 0,
                idPostTemplate: '',
                namePostTemplate: '',
                tag: '',
                createAt: new Date,
                comments: []
            })

            post2 = new Post({
                title: 'title',
                shortDescription: 'short description',
                fullDescription: 'full description',
                kudos: '',
                counterVisits: 0,
                idPostTemplate: '',
                namePostTemplate: '',
                tag: '',
                createAt: new Date,
                comments: []
            })

            Promise.all([
                user.save()
                    .then(_user => user = _user),
                post1.save()
                    .then(_post1 => post1 = _post1),
                post2.save()
                    .then(_post2 => post2 = _post2)
            ])
                .then(() => {
                    return Post.find({ owner: user._id }).populate({ path: 'owner', select: 'username' })
                })
                .then(_posts => {
                    posts = _posts

                    done()
                })
                .catch(done)
        })

        it('should find post by user id', () => {
            assert(user, 'should have saved user')

            assert(post1, 'should have saved post1')

            assert(post2, 'should have saved post2')

            assert(posts && posts instanceof Array && posts.length === 1, 'should have found one post for the user')

            const [post] = posts

            assert.equal(post._id.toString(), post1._id.toString(), 'should found post match post 1')

            assert(post.owner, 'should owner of found be defined')

            assert.equal(post.owner.username, user.username, 'should owner of found post match user')
        })
    })

    after(function (done) {
        mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(done)
        })
    })
})