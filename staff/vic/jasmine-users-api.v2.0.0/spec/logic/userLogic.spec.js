describe("Testing userLogic.", function () {
    let userLogic = require('../../src/logic/userLogic');
    let username
    let password
    beforeEach(function () {
        username = "vgamez"
        password = "123"
    });

    describe("Error Case:", function () {
        it('Should return an Error if we try to register() a user already exist', function () {
            console.log("\nUserLogic-spect:")
            userLogic.register(username, password)

            expect(function () {
                userLogic.register(username, password)
            }).toThrow()
        })
        
        it('register() Should return an Error if we try It without username and/or password', function () {
            expect(function () {
                userLogic.register()
            }).toThrow()
        })

        it('update() Should return an Error if we try It without username and/or password', function () {
            expect(function () {
                userLogic.update()
            }).toThrow()
        })

        it('destroy() Should return an Error if we try It without username and/or password', function () {
            expect(function () {
                userLogic.destroy()
            }).toThrow()
        })

        it('retrieve() Should return an Error if we try It without username and/or password', function () {
            expect(function () {
                userLogic.retrieve()
            }).toThrow()
        })

        it('update() Should return an Error if we try It with unexist user', function () {
            expect(function () {
                userLogic.update("gaam") //doesn't exist
            }).toThrow()
        })

        it('update() Should return an Error if we try It with bad password', function () {
            expect(function () {
                userLogic.update(username, 454) //incorrect password
            }).toThrow()
        })
        /*-->*/
        it('update() Should return an Error if we try It without updatePassword', function () {
            expect(function () {
                userLogic.update(username, password) //no password imputed
            }).toThrow()
        })
    })

    describe("Normal Cases:", function () {
        const _userName = 'vgaaaaaamez'

        it('list() Should return a full array of users', function () {
            expect(userLogic.list().length).toBeGreaterThan(0) // length < 1 ? 
        })

        it('register(user,password) Should return a full object', function () {
            expect(userLogic.register(_userName, password)).not.toEqual({}) // Return a full object ? 
        })

        it('retrieve(username,password) Should return the same as const username', function () {
            expect(userLogic.retrieve(_userName, password).username).toEqual(_userName) // Return a correct User ?
        })

        it('update(username,password, upsdatePaswrod) Shouldn\'t throw an Error', function () {
            const updatePassword = 6786
            expect(function () {
                userLogic.retrieve(_userName, password, updatePassword)
            }).not.toThrow() // No return a Error ?
        })

        it('destroy(username,password) Should delete user', function () {
            userLogic.destroy(_userName, password) //delete user

            expect(function () {
                userLogic.retrieve(_userName, password)
            }).toThrow() //return a Error ? (there isn't the user)
        })
    })
});