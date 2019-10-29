$(document).ready(function(){
  $("#form").submit(function(event) {
    var blanks = ["name", "lastName", "order", "date", "item", "issue"];
    // var nameInput = $("#name").val();
    // var lastNameInput = $("#lastName").val();
    // var orderInput = $("#order").val();
    // var dateInput = $("#date").val();
    // var itemInput = $("#item").val();
    // var issueInput = $("#issue").val();

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });
    // $(".name").text(nameInput);
    // $(".lastName").text(lastNameInput);
    // $(".order").text(orderInput);
    // $(".date").text(dateInput);
    // $(".item").text(itemInput);
    // $(".issue").text(issueInput);

    $("#letter").show();

    event.preventDefault();

  });



});
