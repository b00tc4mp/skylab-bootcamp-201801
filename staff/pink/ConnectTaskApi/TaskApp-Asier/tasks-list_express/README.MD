# USE task model as follows:

{ id, text, done } // OPTIONAL add 'username' field

id -> string
text -> string
done -> boolean
OPTIONAL username -> string

## PREVIEW api:

### taskRouter
-   create -> POST /api/tasks BODY { text }
-   mark done -> PUT /api/tasks/:id 
-   remove -> DELETE /api/tasks/:id
-   list done -> GET /api/tasks/done
-   list todo -> GET /api/tasks/todo
-   remove all -> DELETE /api/tasks
-   update -> PATCH /api/tasks/:id BODY { text }

### taskLogic
 -  create(text)
 -  markDone(id)
 -  remove(id)
 -  listDone()
 -  listTodo()
 -  removeAll()
 -  update(id, text)

### taskData
 - create(text, false) // done = false
 - retrieve(id)
 - update(id, text, done)
 - delete(id)
 - list()

FOR WHOM goes beyond... TDD https://github.com/mhevery/jasmine-node
TESTING order: 1) taskData, 2) taskLogic, 3) API (with http client, e.g. fetch)
