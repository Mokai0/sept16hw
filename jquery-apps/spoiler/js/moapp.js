//Look up that treevid off youtube about pokemon being ppl
//make an icon that will serve as the video link
//make the spiler info that pokemon are ppl



//Hide the spoiler info
$('.spoiler span').hide();
//When you click on the spoiler
$('.spoiler').append('<button>Skip the vid!</button>');
$('button').click(function(){
  $(this).prev().show();
  $(this).remove();
});
