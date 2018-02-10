describe('Beers API based on Fetch API', () => {
  let target = beersApi

  beersApi = undefined

  describe('Search', () => {
    let beers

    beforeEach(done =>
      target.search('mahou')
        .then(_beers => {
          beers = _beers

          done()
        })
        .catch(done)
    )

    it('should get results on search', () => {
      expect(beers).not.toBeUndefined()

      expect(beers.length > 0).toBeTruthy()
    })
  })

  describe('Retrieve', () => {
    let beer

    beforeEach(done =>
      target.retrieve('fD2DR3')
        .then(_beer => {
          beer = _beer

          done()
        })
        .catch(done)
    )

    it('should get detail on retrive', () => {
      expect(beer).not.toBeUndefined()

      expect(beer.name).toBeDefined()
    })
  })
})
