$(document).ready(function(){


var today = moment().format("MMM Do, YYYY");
$("#currentDate").text(today);


$(".saveBtn").on("click", function(){
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(text, time);
})

function updateTime(){
    var currentTime = moment().hour();
    console.log(currentTime)
    $(".hour").each(function(){
        var hour = parseInt(
            $(this).attr("id").split("hour")[1]
        )
            // if(block hour < current hour, add a class or attribute to change the style to acknowledge the past)
            if (hour < currentTime){
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");
            }

            // else if (hour === current hour then its the present)
            else if (hour === currentTime){
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            // else (future)
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
    })

}
updateTime()
var time = setInterval(updateTime, 15000);

$("#hour8 .description").val(localStorage.getItem("hour8"))
$("#hour9 .description").val(localStorage.getItem("hour9"))
$("#hour10 .description").val(localStorage.getItem("hour10"))
$("#hour11 .description").val(localStorage.getItem("hour11"))
$("#hour12 .description").val(localStorage.getItem("hour12"))
$("#hour13 .description").val(localStorage.getItem("hour13"))
$("#hour14 .description").val(localStorage.getItem("hour14"))
$("#hour15 .description").val(localStorage.getItem("hour15"))
$("#hour16 .description").val(localStorage.getItem("hour16"))
$("#hour17 .description").val(localStorage.getItem("hour17"))
//one for each hour

})
