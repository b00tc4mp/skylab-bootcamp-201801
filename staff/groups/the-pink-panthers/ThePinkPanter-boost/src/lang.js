export default {
    get: function() {
        const lang = localStorage.getItem('lang')

        return lang || 'es'
    },

    set: function(lang) {
        localStorage.setItem('lang', lang)
    }
}