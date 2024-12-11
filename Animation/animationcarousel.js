var ang1 = 0;
var ang2 = 0;

$("#prev1").click(function(){
	ang1 = ang1 + 30;
  $("*").css("--ang1", ang1);
});

$("#next1").click(function(){
	ang1 = ang1 - 30;
  $("*").css("--ang1", ang1);
});

$("#prev2").click(function(){
	ang2 = ang2 + 45;
  $("*").css("--ang2", ang2);
});

$("#next2").click(function(){
	ang2 = ang2 - 45;
  $("*").css("--ang2", ang2);
});