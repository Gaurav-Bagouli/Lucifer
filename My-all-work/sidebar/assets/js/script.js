$(document).ready(function () {
    $("#ship-data").hide()
    $("#capsule-data").hide()
    $("#rocket-data").hide()

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });

    $("#ships").click(function(){
        $("#ship-data").show()
        $("#capsule-data").hide()
        $("#capsule-details").hide();
        $("#rocket-data").hide()
        $("#rocket-details").hide();
    })
    $("#capsules").click(function(){
        $("#ship-data").hide()
        $("#capsule-data").show()
        $("#ship-details").hide();
        $("#rocket-data").hide()
        $("#rocket-details").hide();
    })
    $("#rockets").click(function(){
        $("#ship-data").hide()
        $("#capsule-data").hide()
        $("#capsule-details").hide();
        $("#rocket-data").show();
        $("#ship-details").hide();
    })
});

$(document).ready(function () {
    $.ajax({
       url: "https://api.spacexdata.com/v3/ships/?limit=5&offset=0",
       type: "get",
       success: function (response) {
           console.log("All Responce for ships", response);
           let str = "";
           response.map(item => {
               str += `<div class="card col-sm-2">
                      <img class = "spaceX" src = "https://www.spacex.com/static/images/share.jpg">
                      <h3>${item.ship_name}</h3>
                      Home Port :- <span>${item.home_port}</span><br>
                      <button id="ship_details_${item.ship_id}" data-id="${item.ship_id}">Details</button>
                     </div>`;
           });
            $("#ship-data").html(str);
           }
   });
   $(document).on("click", "button[id^=ship_details_]", function () {
    let id = $(this).attr("data-id");
    $.ajax({
        url: "https://api.spacexdata.com/v3/ships/" + id,
       type: "get",
       success: function (response) {

           console.log("Particular Responce for ships", response);

           $(".title").text(response.ship_name)
        if(statuscode=403 && id=="AMERICANCHAMPION"){
            $(".detail-img").attr("src", "https://pbs.twimg.com/media/E82gVF9WEAEuU97?format=jpg&name=large");
           }
        else if(statuscode=403 && id=="AMERICANISLANDER"){
            $(".detail-img").attr("src", "https://spacexfleet.com/wp-content/uploads/2020/06/OCISLY-DM-2-closeup-scaled.jpg");
        }
        else if(statuscode=403 && id == "AMERICANSPIRIT"){
            $(".detail-img").attr("src", "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/go-searcher-1588971225.jpg?crop=1.00xw:0.848xh;0,0&resize=900:*");
        }
        else if(statuscode=403 && id == "ASOG"){
            $(".detail-img").attr("src", "https://icdn.digitaltrends.com/image/digitaltrends/spacex-mr-steven.jpg");
        }
        else if(statuscode=403 && id == "BETTYRGAMBARELLA"){
            $(".detail-img").attr("src", "https://spaceflightnow.com/wp-content/uploads/2021/07/asog1.jpg");
        }
        else{
           $(".detail-img").attr("src", response.image);
        }
           $(".url").attr("href",response.url);
           $(".type").text(response.ship_type);
           $(".roles").text(response.roles[0]);
           $("#ship-details").show();
       }
   })
})
});

$(document).ready(function () {
    $.ajax({
       url: "https://api.spacexdata.com/v3/capsules/?limit=5&offset=5",
       type: "get",
       success: function (response) {
           console.log("All Responces for capsule", response);
           let str = "";
           response.map(item => {
               str += `<div class="card col-sm-2">
                      <img class = "spaceX" src = "https://www.spacex.com/static/images/share.jpg">
                      <h3>${item.capsule_serial}</h3>
                     <p>${item.status}</p>
                     <p>${item.details}</p>
                      <button id="capsules_details_${item.capsule_serial}" data-id="${item.capsule_serial}">Details</button>
                     </div>`;
           });
            $("#capsule-data").html(str);
           }
   });
   $(document).on("click", "button[id^=capsules_details_]", function () {
    let id = $(this).attr("data-id");
    $.ajax({
        url: "https://api.spacexdata.com/v3/capsules/" + id,
       type: "get",
       success: function (response) {

           console.log("Particular Responce for capsule", response);

           $(".title").text(response.capsule_serial)
           $(".original_launch").text(response.original_launch);
           $(".original_launch_unix").text(response.original_launch_unix);
           $(".status").text(response.status);
           $("#capsule-details").show();
       }
   })
})
});

$(document).ready(function () {
    $.ajax({
       url: "https://api.spacexdata.com/v3/rockets/?limit=5&offset=0",
       type: "get",
       success: function (response) {
           console.log("All Responces for rockets", response);
           let str = "";
           response.map(item => {
               str += `<div class="card col-sm-2">
                      <img class = "spaceX" src = "https://www.spacex.com/static/images/share.jpg">
                      <h3>${item.rocket_name}</h3>
                      Type :-<span>${item.rocket_type}</span><br>
                     Active :- <span>${item.active}</span><br>
                      <button id="rocket_details_${item.rocket_id}" data-id="${item.rocket_id}">Details</button>
                     </div>`;
           });
            $("#rocket-data").html(str);
           }
   });
   $(document).on("click", "button[id^=rocket_details_]", function () {
    let id = $(this).attr("data-id");
    $.ajax({
        url: "https://api.spacexdata.com/v3/rockets/" + id,
       type: "get",
       success: function (response) {

           console.log("Particular Responce for rockets", response);

           $(".title").text(response.rocket_name)
           if(statuscode=403 && id == "falcon1"){
            $(".detail-img").attr("src", "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found-300x169.jpg");
           }
           else {
           $(".detail-img").attr("src", response.flickr_images[0]);
           }
           $(".id").text(response.id);
           $(".cost_per_launch").text(response.cost_per_launch);
           $(".first_flight").text(response.first_flight);
           $("#rocket-details").show();
       }
   })
})
});