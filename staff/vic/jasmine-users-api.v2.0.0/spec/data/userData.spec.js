describe("Testing userData", function () {

  const userData = require('../../src/data/userData');
  let username
  let password
  beforeEach(function () {

    username = "vgamez"
    password = "123"
  });

  it("Should return a empty array (empty user array)", function () {
    console.log("\nuserData-spect:")

    expect(userData.list().length).toBeLessThan(1); // lenght < 1 ? 
  });

  it('Should return an error, becouse It can\'t search any user (empty array)', function () {
    expect(function () {
      return userData.retrieve(username)
    }).toThrow(); // Throw Error ?
  })

  it('Should return an error, becouse It can\'t update any user (empty array)', function () {
    expect(function () {
      return userData.update(username, password)
    }).toThrow(); // Throw Error ?
  })

  it('Should return an error, becouse It can\'t delete any user (empty array)', function () {
    expect(function () {
      return userData.delete(username)
    }).toThrow(); // Throw Error ?
  })
  it('Should create a new user', function () {
    expect(userData.create(username, password)).not.toEqual({}) // Return a full object ? 
  })

  describe('when there is a user, and we need to search, update or delete it', function () {

    it('Should return somthing when we list()', function () {
      expect(userData.list().length).toBeGreaterThan(0); // lenght > 0 ? 
    })

    it('Should return and object when we retrive(username)', function () {
      expect(typeof (userData.retrieve(username))).toBe('object') // {username, password} === object ?
    })

    it('Should return the same name which we retrieve(username) ', function () {
      expect(userData.retrieve(username).username).toEqual(username) // useres.username === username ?
    })

    it('Shouldn\'t return and error when we update(username,password)', function ()  {
      const updatePassword = "56785"
      expect(function () {
        userData.update(username, updatePassword)
      }).not.toThrow() //throw Error ? 
    })

    it("Should delete() and user, and userData.list().length shout be []", function () {
      userData.delete(username)
      expect(userData.list().length).toBeLessThan(1) //  length < 1 ? 
    })

  })
});