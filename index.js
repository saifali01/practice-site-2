function myfunction1(){
$('.form-group').on('input','.prc1',function(){
        var totalsum=0;
        $('.form-group .prc1').each(function(){
          var inputval=$(this).val();
          if($.isNumeric(inputval)){
totalsum+=parseFloat(inputval);

          }
        });
  $('#result1').val(totalsum);
      });

}

var x=document.getElementById('result1').innerHTML=0;
x = myfunction1();


        function myfunction2(){

              $('.form-group').on('input','.prc2',function(){
                      var totalsum=0;
                      $('.form-group .prc2').each(function(){
                        var inputval=$(this).val();
                        if($.isNumeric(inputval)){
                          totalsum+=parseFloat(inputval);
                        }
                      });
              $('#result2').val(totalsum);
                    });
        }
        var y=document.getElementById('result2').innerHTML=0;
   y = myfunction2();
