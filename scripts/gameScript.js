import { games } from "./config.js";

$(function () {
  
  $.each(games, function (index, item) {
    var el = `<div class='card text-center mx-auto bg-dark blue' style="width: 200px">
  <button class='cardOpen btn btn-outline-info'> ${item.title} </button>
   <div class='cardHide'>
       <br>
       <a href="${item.link}" target="_blank" class="link-info" >GAME LINK</a>
       <p class="text-pink">Create by: ${item.author} </p>
   </div>
 </div>`;

    $("#cards").append(el);
  });
});
