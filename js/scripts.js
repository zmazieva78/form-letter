$(document).ready(function(){
  $("#form").submit(function(event) {
    var nameInput = $("#name").val();
    var lastNameInput = $("#lastName").val();
    var orderInput = $("#order").val();
    var dateInput = $("#date").val();
    var itemInput = $("#item").val();
    var issueInput = $("#issue").val();


    $(".name").text(nameInput);
    $(".lastName").text(lastNameInput);
    $(".order").text(orderInput);
    $(".date").text(dateInput);
    $(".item").text(itemInput);
    $(".issue").text(issueInput);

    $("#letter").show();

    event.preventDefault();

  });



});
