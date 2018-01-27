(function () {
    $("form").submit(function (event) {
        event.preventDefault();

        var input = $('[name="title"]');

        $('ul').append('<li>' + input.val() + '<a href="#">✓</a> </li>');

        input.val('');

        /*$('li > a').click(function(e){
            $(this).parent().remove();
        });*/
    });

    $(document).click(function (e) {
        var target = $(e.target);
        if (target.is("a")) {
            target.parent().remove();
        }
    });
});

(function () {
    $(document).ready(function () {
        console.log("ready!");

        $("form input").last().click(function (e) {
            e.preventDefault();

            var $li = $('<li>' + $("form input").val() + '<a href="#">✓</a></li>');

            $("ul").append($li);

            $("form").trigger("reset");

            $li.find('a').click(function () {
                console.log(this);

                //$(this).closest("li").remove();
                $li.remove();
            });
        })
    });
})();

(function () {
    var $titleInput = $("input[type=text]");
    var $list = $("ul");

    $("form").submit(function (e) {
        e.preventDefault();

        var title = $titleInput.val()
        var confirm = "<a href='#'>✔︎</a>"

        $list.append("<li>" + title + confirm + "</li>");

        $titleInput.val("")
    });

    // $(window).click(function (e) {
    //     if (e.target.tagName === 'A') {
    //         e.target.parentNode.remove();
    //     }
    // });

    $(document).on('click', 'a', function () {
        $(this).parent().remove();
    });
});