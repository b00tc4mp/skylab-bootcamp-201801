describe('Google Places client', () => {
  'use strict'

  let target = placesApi

  placesApi = undefined

  beforeEach(() => {
    target.key = 'AIzaSyChp6OnyYbZ2HKZSskxFqdzJC1drMGPzVQ'
  })

  describe('on search with valid query', () => {
    let places, error

    beforeEach(done => {
      target.init()
        .then(() => target.search('restaurante gracia'))
        .then(_places => {
          places = _places

          done()
        })
        .catch(err => {
          error = err.message

          done()
        })
    })

    it('should get results', () => {
      expect(error).toBeUndefined()

      expect(places).not.toBeUndefined()

      expect(places.length > 0).toBeTruthy()
    })
  })

  describe('on search with invalid query', () => {
    let places, error

    beforeEach(done => {
      target.init()
        .then(() => target.search('%&·%&·$%&'))
        .then(_places => {
          places = _places

          done()
        })
        .catch(err => {
          error = err.message

          done()
        })
    })

    it('should get zero results', () => {
      expect(error).toBeUndefined()

      expect(places).not.toBeUndefined()

      expect(places.length).toBe(0)
    })
  })

  describe('on wrong base url', () => {
    let error

    beforeEach(done => {
      target.baseUrl = 'https://wrong_maps.googleapis.com/maps/api'

      target.init()
        .then(done)
        .catch(err => {
          error = err.message

          done()
        })
    })

    it('should get error on loading the lib', () => {
      expect(error).not.toBeUndefined()
    })
  })
})