$('form').submit(function (e) {
    e.preventDefault();

    var query = $('input').val();

    $.ajax({
        url: "https://quiet-inlet-67115.herokuapp.com/api/search/all?q=" + query,
        success: function (result) {
            console.log(result);

            var list = '';
        
            result.forEach(function(v) {
                list += v.name + ', '; 
            });

            $("#box").html(list);
        }
    });
});