var len;
var results = '';

function setBackground() {
    document.body.style.backgroundImage = 'url(swp1.jpg)';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
}

function getFeelingLucky() {
    var params = {
        "q": $("#query").val(),
        "count": "50",
        "offset": "0",
        "mkt": "en-us"
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "c3bf0bd7adc0413b8607075eb4e51e28");
        },
        type: "GET",
    })
        .done(function (data) {
            len = data.webPages.value.length;
            
            for (i = 0; i < 1; i++) {
                results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
                console.log(data.webPages.value[i].url);
                window.open(
                    data.webPages.value[i].url, "_blank");
            }
        })
        .fail(function () {
            alert("error");
        });
}



function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "c3bf0bd7adc0413b8607075eb4e51e28");
      },
      type: "GET",
    })
    .done(function (data) {
        len = data.webPages.value.length;
        results = "";
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }

        $("#searchResults").css("visibility", "visible");
        $('#searchResults').html(results);
      $('#searchResults').dialog();
    })
    .fail(function () {
      alert("error");
    });
}

function searchOnClick()
{
    apiSearch();
}

function nameOnClick(element)
{
    //var imgArray = new Array();

    //imgArray[0] = new Image();
    //imgArray[0] = 'url(swp1.jpg)'
    ////imgArray[0].src = 'C:\Users\oppen\OneDrive\Documents\- MIS 521\mis-421-assignment-2-jquery-and-ajax-bcstephens3/swp1.jpg';

    //imgArray[1] = new Image();
    ////imgArray[1].src = 'C:\Users\oppen\OneDrive\Documents\- MIS 521\mis-421-assignment-2-jquery-and-ajax-bcstephens3/swp2.jpg';
    //imgArray[1] = 'url(swp2.jpg)'

    //imgArray[2] = new Image();
    //imgArray[2] = 'url(swp3.jpg)'
    ////imgArray[2].src = 'C:\Users\oppen\OneDrive\Documents\- MIS 521\mis-421-assignment-2-jquery-and-ajax-bcstephens3/swp3.jpg';
    ////alert("we have our array");
    ///*------------------------------------*/
    ////var img = 'C:\Users\oppen\OneDrive\Documents\- MIS 521\mis-421-assignment-2-jquery-and-ajax-bcstephens3/swp1.jpg';
    //var img = 'url(swp1.jpg)';
    //console.log(img)
    //console.log(imgArray[1])
    //console.log(imgArray.length)

    //for (var i = 0; i < imgArray.length; i++) {
    //    if (imgArray[i] == img) // << check this
    //    {
    //        if (i === imgArray.length) {
    //            //document.getElementById(element).src = imgArray[0].src;
    //            document.body.style.backgroundImage = imgArray[0];
    //            break;
    //        }
    //        //document.getElementById(element).src = imgArray[i + 1].src;
    //        document.body.style.backgroundImage = imgArray[i+1];
    //        break;
    //    }
    //}
    //alert("in this thing");
    
    console.log(document.body.style.backgroundImage);
    if (document.body.style.backgroundImage === 'url("swp1.jpg")') {
        document.body.style.backgroundImage = 'url("swp2.jpg")'
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }
    else if (document.body.style.backgroundImage === 'url("swp2.jpg")') {
        document.body.style.backgroundImage = 'url("swp3.jpg")'
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }
    else if (document.body.style.backgroundImage === 'url("swp3.jpg")') {
        document.body.style.backgroundImage = 'url("swp1.jpg")'
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }
}

function currentGalaxyTimeClick() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var aMOrPM;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    if (h === 12) {
        h = 12
        aMOrPM = "PM";
    }
    else if (h === 13)
    {
        h = 01
        aMOrPM = "PM";
    }
    else if (h === 14) {
        h = 02
        aMOrPM = "PM";
    }
    else if (h === 15) {
        h = 03
        aMOrPM = "PM";
    }
    else if (h === 16) {
        h = 04
        aMOrPM = "PM";
    }
    else if (h === 17) {
        h = 05
        aMOrPM = "PM";
    }
    else if (h === 18) {
        h = 06
        aMOrPM = "PM";
    }
    else if (h === 19) {
        h = 07
        aMOrPM = "PM";
    }
    else if (h === 20) {
        h = 08
        aMOrPM = "PM";
    }
    else if (h === 21) {
        h = 09
        aMOrPM = "PM";
    }
    else if (h === 22) {
        h = 10
        aMOrPM = "PM";
    }
    else if (h === 23) {
        h = 11
        aMOrPM = "PM";
    }
    else if (h === 24) {
        h = 12
        aMOrPM = "AM";
    }
    else
    {
        aMOrPM = "AM";
    }
    curr_time = h + ':' + m + ' ' + aMOrPM;
    html = "<p>" + curr_time + "</p>";
    document.getElementById("time").style.visibility = "visible";
    document.getElementById("time").innerHTML = html; //document --> refers to index.html 
}

