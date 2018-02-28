const TaskApi = require('../src/TaskApi')
const assert = require('assert')

describe('Task API', () => {
    let taskApi

    beforeEach(() => {
        taskApi = new TaskApi('http', 'localhost', 5000)
    })

    it('should create, retrieve and remove a task', done => {
        const title = 'title', description = 'description'

        let id

        taskApi.create(title, description)
            .then(res => {
                assert.equal(res.status, 'OK', 'should create task')
                assert(res.data, 'should respond with data')

                id = res.data.id
                assert(id, 'should respond with id in data')

                return taskApi.retrieve(id)
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should retrieve task')

                return taskApi.remove(id)
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should remove task')

                done()
            })
            .catch(done)
    })

    it('should list tasks', done => {
        const title = 'title', description = 'description'

        taskApi.create(title, description)
            .then(() => taskApi.list())
            .then(res => {
                assert.equal(res.status, 'OK', 'should list tasks')

                assert(res.data, 'should respond with data')
                assert(res.data.length > 0, 'should respond with tasks in data')

                const [task] = res.data

                assert(task.id, 'should have id')
                assert(task.title, 'should have title')
                assert.equal(task.title, title, 'title should match')
                assert(!task.description, 'should not have description')

                return taskApi.remove(task.id)
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should remove task')

                done()
            })
            .catch(done)
    })

    it('should mark task DOING', done => {
        const title = 'title', description = 'description'

        let id

        taskApi.create(title, description)
            .then(res => {
                assert.equal(res.status, 'OK', 'should create task')
                assert(res.data, 'should respond with data')

                id = res.data.id
                assert(id, 'should respond with id in data')

                return taskApi.markDoing(id)
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should mark task DOING')

                return taskApi.remove(id)
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should remove task')

                done()
            })
            .catch(done)
    })

    it('should mark task REVIEW', done => {
        const title = 'title', description = 'description'

        let id

        taskApi.create(title, description)
            .then(res => {
                assert.equal(res.status, 'OK', 'should create task')
                assert(res.data, 'should respond with data')

                id = res.data.id
                assert(id, 'should respond with id in data')

                return taskApi.markReview(id)
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should mark task REVIEW')

                return taskApi.remove(id)
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should remove task')

                done()
            })
            .catch(done)
    })

    it('should mark task DONE', done => {
        const title = 'title', description = 'description'

        let id

        taskApi.create(title, description)
            .then(res => {
                assert.equal(res.status, 'OK', 'should create task')
                assert(res.data, 'should respond with data')

                id = res.data.id
                assert(id, 'should respond with id in data')

                return taskApi.markDone(id)
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should mark task DONE')

                return taskApi.remove(id)
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should remove task')

                done()
            })
            .catch(done)
    })

    it('should mark task TODO', done => {
        const title = 'title', description = 'description'

        let id

        taskApi.create(title, description)
            .then(res => {
                assert.equal(res.status, 'OK', 'should create task')
                assert(res.data, 'should respond with data')

                id = res.data.id
                assert(id, 'should respond with id in data')

                return taskApi.markTodo(id)
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should mark task TODO')

                return taskApi.remove(id)
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should remove task')

                done()
            })
            .catch(done)
    })
})