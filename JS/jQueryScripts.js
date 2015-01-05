/**
 * Created by camer_000 on 1/5/2015.
 */
$(document).ready(function(){

   $hideStream = false;

    $streamBox = $('#streamBox');


    $streamToggle1 = $('#streamToggle1');
    $streamToggle2 = $('#streamToggle2');

    $streamToggle1.click(function(){
        if(!$hideStream){
            $hideStream = true;
            $streamBox.hide();
            console.log("yes");
        } else{
            $hideStream = false;
            $streamBox.show();
        }
    });

    $streamToggle2.click(function(){
        if(!$hideStream){
            $hideStream = true;
            $streamBox.hide();
        } else{
            $hideStream = false;
            $streamBox.show();
        }
    });

});