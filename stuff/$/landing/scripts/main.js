var $box1 = $('#box-1');

$box1.click(function (e) {
    console.log(this instanceof HTMLElement);
    console.log(this === document.querySelector('#box-1'));
    $box1.toggleClass('highlight');
});