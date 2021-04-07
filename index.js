console.log("index.js");

// var client  = mqtt.connect({ host:'test.mosquitto.org', port: 8081})
// or
var client = mqtt.connect('wss://test.mosquitto.org:8081/mqtt');

// var client  = mqtt.connect({ host:'mqtt.eclipse.org/mqtt', port: 443})
// or
// var client  = mqtt.connect('wss://mqtt.eclipse.org:443/mqtt')
var pub = document.getElementById('published');
var pay = document.getElementById('payload');
var sub = document.getElementById('subtopic');

var d = new Date();

var Topic = document.getElementById('published').value;
var message = document.getElementById('subtopic').value;


$(document).ready(function () {

  $('#connect').click(function () {
    $('#status').val("Connecting...").css("color", "green");
    client.on('connect', function () {
      $('#status').val("Connected Successfully!");
    });  
    $('#publish').click(function(){
var delayTime = 2000; //This is the time of delay
var that = this;




      if(pub.value !='' && pay.value != ''){
       
        client.publish(pub.value, pay.value);
        $('#tablePub tbody').prepend("<tr><td>" + pub.value + "</td><td>" + pay.value +"</td><td>" + d.toUTCString() +"</td></tr>");
      }else{
        setTimeout(function(){ alert("Please fill up the form");},500);
      }
      
    });
    $('#subscribe').click(function(){
      client.subscribe(sub.value);
      $('#tableSub tbody').prepend("<tr><td>" + sub.value + "</td><td>" + d.toUTCString() +"</td></tr>");
    });
    client.on('message', function (Topic, message) {
      $('#tbl tbody').prepend("<tr><td>" + Topic + "</td><td>" + message +"</td><td>" + d.toUTCString() +"</td></tr>");
    });
    //Diconnected
    $("#disconnect").click(function(){
      $('#status').val("Disconnected!").css("color","red");
      client =""; 
    
  });
  // Unsubscribe
  $("#unsubscribe").click(function(){
    client.subscribe = "";

  });

});

});



