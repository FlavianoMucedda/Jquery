let clicker = 1;

$('#add').on('click', function() {
    $('#count').text(clicker++ + ' times')
})