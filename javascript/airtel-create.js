$(document).ready(function () {

    $('.leftmenutrigger').on('click', function(e) {
        $('.side-nav').toggleClass("open");
        e.preventDefault();
    });



    

    $("#circle_update").click(function () {


        var plandetails = [];
        var total_rows = $('#total_rows').val();

        for(var i=0; i<total_rows; i++)
        {
            
            var plan = {
                "bplCode": $('#row-'+i+'-bplCode').val(),
                "planName": $('#row-'+i+'-planName').val(),
                "rental": $('#row-'+i+'-rental').val(),
                "type": $('#row-'+i+'-type').val(),
                "packs": $('#row-'+i+'-packs').val(),
                "value4g": $('#row-'+i+'-value4g').val(),
                "value3g": $('#row-'+i+'-value3g').val(),
                "isFamily": $('#row-'+i+'-isFamily').val(),
                "wynk": $('#row-'+i+'-wynk').val(),
                "movies": $('#row-'+i+'-movies').val(),
                "individualLadder": $('#row-'+i+'-individualLadder').val(),
                "secure": $('#row-'+i+'-secure').val(),
                "dataRollover": $('#row-'+i+'-dataRollover').val(),
                "freeSms": $('#row-'+i+'-freeSms').val(),
                "outgoingRoaming": $('#row-'+i+'-outgoingRoaming').val(),
                "freeChild": $('#row-'+i+'-freeChild').val(),
                "incomingRoaming": $('#row-'+i+'-incomingRoaming').val(),
                "amazonPrime": $('#row-'+i+'-amazonPrime').val(),
                "sideOffer1": $('#row-'+i+'-sideOffer1').val(),
                "sideOffer2": $('#row-'+i+'-sideOffer2').val(),
                "sideOffer3": $('#row-'+i+'-sideOffer3').val(),
                "sideOffer4": $('#row-'+i+'-sideOffer4').val(),
                "freeGBPerChild": $('#row-'+i+'-freeGBPerChild').val(),
                "validity": $('#row-'+i+'-validity').val()
            };

            plandetails.push(plan);
        }
           
        var data = {
            circleId: $('#select_circle').val(),
            plandetails: plandetails,
        };
        console.log('update data:' , data);
      //  alert(JSON.stringify(data));

        $.ajax({
            type: "POST",
            url: 'http://10.5.200.248:30938/cms/updatepostpaidplandetails',
            data: data,
            success: function (data) {
              //  data = JSON.parse(data);
                console.log('updated data', JSON.stringify(data));
               // alert(JSON.stringify(data));
                if (data.status.code == 200 && data.status.message.toLowerCase() =='success') {
                    $("#select_circle").change();
                }
                $("#select_circle").change();
//                window.location.replace("home.html");
            },
            error : function(xhr,status,error) {
               // console.log(xhr,status,error);
                alert(xhr,status,error);
            }	
           
        });

    });



    $("#user_login").click(function () {

        var data = {
            "username": $('#userid').val(),
            "password": $('#password').val(),
        };

        $.ajax({
            type: "POST",
          //  dataType: 'json',
            contentType: "application/json;charset=UTF-8",

            url: 'http://10.5.200.248:30938/cms/loginuser',
            data: data,
            success: function (data) {
              //  data = JSON.parse(data);
                console.log(JSON.stringify(data));
               // alert(JSON.stringify(data));
                if (data.status.code == 200 && data.status.message.toLowerCase() =='success') {
                    window.location.replace("home.html");
                }
//                window.location.replace("home.html");
            },
            error : function(xhr,status,error) {
               // console.log(xhr,status,error);
                alert(xhr,status,error);
            }	
           
        });

    });




    $.ajax({
        type: "POST",
        url: 'http://10.5.200.248:30938/cms/getallcircles',
        data: {},
        success: function (data) {
            //console.log(data);
            if (data.status.code == 200 && data.status.message.toLowerCase() =='success') {
                var circles =  data.result.circles;
                var option = [];
                //option.push('<option value="">Select</option>');
                for (var i = 0; i < circles.length; i++) {
                    option.push('<option value="' + circles[i].code + '">' + circles[i].name + '</option>');
                }
                $('#select_circle').html(option.join(''));
                $("#select_circle").change();

                $("#selected_cirtel_name").html($("#select_circle option:selected").text());
                
            }
        },
        error : function(xhr,status,error) {
            console.log(xhr,status,error);

        }	
       
    });



    $("#select_circle").change(function () {
        
        var circle_code = $("#select_circle").val();
        var data = { "circleId" : circle_code}; 

        $.ajax({
            type: "POST",
           // dataType: 'json',
         //  beforeSend: function(xhr){xhr.setRequestHeader('X-Test-Header', 'test-value');},
           headers: {
            'header1': 'value1',
            'header2': 'value2'
        },
        contentType: 'application/json; charset=utf-8',
      //      contentType: "application/json;charset=UTF-8",

            url: 'http://10.5.200.248:30938/cms/getpostpaidplandetails',
            data: data,
            success: function (data) {
              //  data = JSON.parse(data);
                data = {
                    "status": {
                        "code": 200,
                        "message": "Success"
                    },
                    "result": {
                        "plandetails": [
                            {
                                "bplCode": "PKG_1157",
                                "planName": "Family Infinity Plan 649",
                                "rental": 649,
                                "type": "Infinity",
                                "packs": 0,
                                "value4g": 90,
                                "value3g": 100,
                                "isFamily": 1,
                                "wynk": "1",
                                "movies": "1",
                                "individualLadder": 1,
                                "secure": 1,
                                "dataRollover": 1,
                                "freeSms": 1,
                                "outgoingRoaming": 1,
                                "freeChild": 1,
                                "incomingRoaming": 1,
                                "amazonPrime": 1,
                                "sideOffer1": 0,
                                "sideOffer2": 1,
                                "sideOffer3": 0,
                                "sideOffer4": 0,
                                "freeGBPerChild": 10,
                                "validity": 1
                            },
                            {
                                "bplCode": "PKG_1182",
                                "planName": "FAMILY INFINITY 799 PLAN",
                                "rental": 799,
                                "type": "Infinity",
                                "packs": 0,
                                "value4g": 100,
                                "value3g": 100,
                                "isFamily": 1,
                                "wynk": "1",
                                "movies": "1",
                                "individualLadder": 1,
                                "secure": 1,
                                "dataRollover": 1,
                                "freeSms": 1,
                                "outgoingRoaming": 1,
                                "freeChild": 2,
                                "incomingRoaming": 1,
                                "amazonPrime": 1,
                                "sideOffer1": 0,
                                "sideOffer2": 1,
                                "sideOffer3": 0,
                                "sideOffer4": 0,
                                "freeGBPerChild": 10,
                                "validity": 1
                            },
                            {
                                "bplCode": "PKG_1183",
                                "planName": "FAMILY INFINITY 1199 PLAN",
                                "rental": 1199,
                                "type": "Infinity",
                                "packs": 0,
                                "value4g": 120,
                                "value3g": 120,
                                "isFamily": 1,
                                "wynk": "1",
                                "movies": "1",
                                "individualLadder": 1,
                                "secure": 1,
                                "dataRollover": 1,
                                "freeSms": 1,
                                "outgoingRoaming": 1,
                                "freeChild": 3,
                                "incomingRoaming": 1,
                                "amazonPrime": 1,
                                "sideOffer1": 0,
                                "sideOffer2": 1,
                                "sideOffer3": 0,
                                "sideOffer4": 0,
                                "freeGBPerChild": 10,
                                "validity": 1
                            },
                            {
                                "bplCode": "PKG_1207",
                                "planName": "FAMILY INFINITY 1599 PLAN",
                                "rental": 1599,
                                "type": "Infinity",
                                "packs": 0,
                                "value4g": 150,
                                "value3g": 150,
                                "isFamily": 1,
                                "wynk": "1",
                                "movies": "1",
                                "individualLadder": 1,
                                "secure": 1,
                                "dataRollover": 1,
                                "freeSms": 1,
                                "outgoingRoaming": 1,
                                "freeChild": 3,
                                "incomingRoaming": 1,
                                "amazonPrime": 1,
                                "sideOffer1": 1,
                                "sideOffer2": 1,
                                "sideOffer3": 0,
                                "sideOffer4": 0,
                                "freeGBPerChild": 10,
                                "validity": 1
                            },
                            {
                                "bplCode": "PKG_1332",
                                "planName": "Infinity Family ADV Rental Plan 2499",
                                "rental": 2499,
                                "type": "Infinity",
                                "packs": 0,
                                "value4g": 450,
                                "value3g": 450,
                                "isFamily": 1,
                                "wynk": "1",
                                "movies": "1",
                                "individualLadder": 1,
                                "secure": 1,
                                "dataRollover": 1,
                                "freeSms": 1,
                                "outgoingRoaming": 1,
                                "freeChild": 0,
                                "incomingRoaming": 1,
                                "amazonPrime": 1,
                                "sideOffer1": 0,
                                "sideOffer2": 1,
                                "sideOffer3": 0,
                                "sideOffer4": 0,
                                "freeGBPerChild": 10,
                                "validity": 6
                            },
                            {
                                "bplCode": "PKG_807",
                                "planName": "Infinity Family Plan 399",
                                "rental": 399,
                                "type": "Infinity",
                                "packs": 0,
                                "value4g": 20,
                                "value3g": 20,
                                "isFamily": 1,
                                "wynk": "0",
                                "movies": "0",
                                "individualLadder": 1,
                                "secure": 0,
                                "dataRollover": 1,
                                "freeSms": 1,
                                "outgoingRoaming": 1,
                                "freeChild": 0,
                                "incomingRoaming": 1,
                                "amazonPrime": 1,
                                "sideOffer1": 0,
                                "sideOffer2": 0,
                                "sideOffer3": 0,
                                "sideOffer4": 0,
                                "freeGBPerChild": 10,
                                "validity": 1
                            },
                            {
                                "bplCode": "PKG_808",
                                "planName": "myPlan 1 NAT 199",
                                "rental": 499,
                                "type": "Infinity",
                                "packs": 0,
                                "value4g": 75,
                                "value3g": 75,
                                "isFamily": 1,
                                "wynk": "1",
                                "movies": "1",
                                "individualLadder": 1,
                                "secure": 1,
                                "dataRollover": 1,
                                "freeSms": 1,
                                "outgoingRoaming": 1,
                                "freeChild": 0,
                                "incomingRoaming": 1,
                                "amazonPrime": 1,
                                "sideOffer1": 0,
                                "sideOffer2": 1,
                                "sideOffer3": 0,
                                "sideOffer4": 0,
                                "freeGBPerChild": 10,
                                "validity": 1
                            }
                        ]
                    }
                };

                console.log(data);
                if (data.status.code == 200 && data.status.message.toLowerCase() =='success') {
                    var plandetails =  data.result.plandetails;
                    var dataString = '';
                    
                    for (var i = 0; i < plandetails.length; i++) {
                        dataString += '<tr><td><input id="row-'+i+'-amazonPrime" '+plandetails[i].amazonPrime+'" value="'+plandetails[i].amazonPrime + '"></td><td><input id="row-'+i+'-bplCode" value="'+plandetails[i].bplCode + '"></td><td><input id="row-'+i+'-dataRollover" value="'+plandetails[i].dataRollover+'"></td><td><input id="row-'+i+'-freeChild" value="'+plandetails[i].freeChild + '"></td><td><input id="row-'+i+'-freeGBPerChild" value="'+plandetails[i].freeGBPerChild + '"></td><td><input id="row-'+i+'-freeSms" value="'+plandetails[i].freeSms+'"></td><td><input id="row-'+i+'-incomingRoaming" value="'+plandetails[i].incomingRoaming +'"></td><td><input id="row-'+i+'-individualLadder" value="'+plandetails[i].individualLadder+'"></td><td><input id="row-'+i+'-isFamily" value="'+plandetails[i].isFamily+'"></td><td><input id="row-'+i+'-movies" value="'+plandetails[i].movies + '"></td><td><input id="row-'+i+'-outgoingRoaming" value="'+plandetails[i].outgoingRoaming + '"></td><td><input id="row-'+i+'-packs" value="'+plandetails[i].packs+'"></td><td><input id="row-'+i+'-planName" value="'+plandetails[i].planName+'"></td><td><input id="row-'+i+'-rental" value="'+plandetails[i].rental+'"></td><td><input id="row-'+i+'-secure" value="'+plandetails[i].secure+'"></td><td><input id="row-'+i+'-sideOffer1" value="'+plandetails[i].sideOffer1+'"></td><td><input id="row-'+i+'-sideOffer2" value="'+plandetails[i].sideOffer2+'"></td><td><input id="row-'+i+'-sideOffer3" value="'+plandetails[i].sideOffer3+'"></td><td><input id="row-'+i+'-sideOffer4" value="'+plandetails[i].sideOffer4+'"></td><td><input id="row-'+i+'-type" value="'+plandetails[i].type+'"></td><td><input id="row-'+i+'-validity" value="'+plandetails[i].validity+'"></td><td><input id="row-'+i+'-value3g" value="'+plandetails[i].value3g +'"></td><td><input id="row-'+i+'-value4g" value="'+plandetails[i].value4g+'"></td><td><input id="row-'+i+'-wynk" value="'+plandetails[i].wynk+'"></td></tr>';
                    }
                    $('#table_value').html(dataString);
                    $('#total_rows').val(plandetails.length);

                    
                }
                $("#selected_cirtel_name").html($("#select_circle option:selected").text());

            },
            error : function(xhr,status,error) {
                console.log(xhr,status,error);
            }	
           
        });

        
    

        //console.log("changed called");
    });




   



}); // ready close
