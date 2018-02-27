/**
 * Google Places client.
 * 
 * @author manuelbarzi
 *
 * @version 1.1.0
 */
let placesApi;
(() => {
  'use strict';

  let places

  const load = () => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script')

      script.onload = () => {
        places = new google.maps.places.PlacesService(document.createElement('div'))

        resolve()
      }
      script.onerror = () => reject(Error('Places lib could not be loaded'))

      script.src = `${inst.baseUrl}/js?libraries=places&key=${inst.key}`

      document.head.appendChild(script)
    })
  }

  const inst = {
    baseUrl: 'https://maps.googleapis.com/maps/api',

    key: 'AIzaSyChp6OnyYbZ2HKZSskxFqdzJC1drMGPzVQ',

    load,

    /**
     * Searches places by query.
     * 
     * @see https://developers.google.com/maps/documentation/javascript/places
     *
     * @param {String} query - The text to match in the search.
     * @returns {Promise} - A promise that resolves if API call succeeds, otherwise rejects.
     */
    search: query => new Promise((resolve, reject) =>
      places.textSearch({ query }, (results, status) =>
        status === google.maps.places.PlacesServiceStatus.OK ? resolve(results) : status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS ? resolve([]) : reject(Error(`Places returned status ${status}`))
      ))
  }

  placesApi = inst
})()
