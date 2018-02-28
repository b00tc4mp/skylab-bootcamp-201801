/** 
 * Task entity
 */
class Task {
    constructor(id, title, description, status) {
        this.id = id
        this.title = title
        this.description = description
        this.status = status
    }

    static from({id, title, description, status}) {
        return new Task(id, title, description, status)
    }
}

Task.TODO = 0
Task.DOING = 1
Task.REVIEW = 2
Task.DONE = 3

// Task.from = function({id, title, description, status}) {
//     return new Task(id, title, description, status)
// }

module.exports = Task