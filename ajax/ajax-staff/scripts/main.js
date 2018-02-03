$('form').submit(function (e) {
    e.preventDefault();

    var query = $('input').val();

    $.ajax({
        url: "data/staff.json",
        success: function (result) {
            console.log(result);

            var list = '';

            var filtered = result.filter(function(v) {
                return v.name.indexOf(query) !== -1;
            })
        
            filtered.forEach(function(v) {
                list += v.name + ', '; 
            });

            $("#box").html(list);
        }
    });
});