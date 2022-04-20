//  $(document).ready(function () {
//              $.ajax({
//                 url: "https://api.spacexdata.com/v3/dragons",
//                 type: "get",
//                 success: function (response) {
//                     console.log("All Responce for dragon", response);
//                     let str = "";
//                     response.map(item => {
//                         str += `<div class="card">
//                                <h3>${item.name}</h3>
//                               <img class="image-path" src="${item.flickr_images[1]}">
//                                <button id="dragon_details_${item.id}" data-id="${item.id}">Details</button>
//                               </div>`;
//                     });
//                      $("#dragon-data").html(str);
//                     }
//             });
//             $(document).on("click", "button[id^=dragon_details_]", function () {
//              let id = $(this).attr("data-id");
//              $.ajax({
//                  url: "https://api.spacexdata.com/v3/dragons/" + id,
//                 type: "get",
//                 success: function (response) {

//                     console.log("Particular Responce for dragon", response);

//                     $(".title").text(response.name)
//                     $(".detail-img").attr("src", response.flickr_images[1]);
//                     $(".Wikipedia").attr("href",response.wikipedia);
//                     $(".type").text(response.type);
//                     $(".active").text(response.active);
//                     $("#dragon-details").show();
//                 }
//             })
//          })
//         });
                                                       
        $(document).ready(function () {
            $.ajax({
               url: "https://api.spacexdata.com/v3/capsules",
               type: "get",
               success: function (response) {
                   console.log("All Responces for capsule", response);
                   let str = "";
                   response.map(item => {
                       str += `<div class="card">
                              <h3>${item.capsule_serial}</h3>
                             <p>${item.status}</p>
                              <button id="capsules_details_${item.capsule_serial}" data-id="${item.capsule_serial}">Details</button>
                             </div>`;
                   });
                    $("#capsules-data").html(str);
                   }
           });
           $(document).on("click", "button[id^=capsules_details_]", function () {
            let id = $(this).attr("data-id");
            $.ajax({
                url: "https://api.spacexdata.com/v3/capsules/" + id,
               type: "get",
               success: function (response) {

                   console.log("Particular Responce", response);

                   $(".title").text(response.name)
                   $(".detail-img").attr("src", response.flickr_images[1]);
                   $(".Wikipedia").attr("href",response.wikipedia);
                   $(".type").text(response.type);
                   $(".active").text(response.active);
                   $("#dragon-details").show();
               }
           })
        })
       });

