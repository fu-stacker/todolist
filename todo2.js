let tasks = $("#taskInput");
console.log(tasks.val());
let x = 0;
$("#addBtn").click(function () {
  let html = `<li>${tasks.val()} <button class="del">delete</button> </li>`;
  $("#taskList").append(html);
  x++;
  $("span").text(x);
  tasks.val("");
  console.log($("#taskList").html());
});

$("#taskList").on("click", ".del", function () {
  $(this).parent("li").remove();
});
console.log($("#taskList").html());
