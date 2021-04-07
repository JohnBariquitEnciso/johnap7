console.log("index.js");

// var client  = mqtt.connect({ host:'test.mosquitto.org', port: 8081})
// or
var client  = mqtt.connect('wss://test.mosquitto.org:8081/mqtt')

// var client  = mqtt.connect({ host:'mqtt.eclipse.org/mqtt', port: 443})
// or
// var client  = mqtt.connect('wss://mqtt.eclipse.org:443/mqtt')

client.on('connect', function () {
    console.log('connected')
  
})

var Topic = document.getElementById('published').value
var message = document.getElementById('subtopic').value

client.on('message', function (Topic, message) {
  $('#tbl tbody').prepend("<tr><td>" + Topic + "</td><td>" + message +"</td></tr>")
})

var pub = document.getElementById('published')
var pay = document.getElementById('payload')
var sub = document.getElementById('subtopic')

$(document).ready(function(){
  $('#publish').click(function(){
    client.publish(pub.value, pay.value)
  })
  $('#subscribe').click(function(){
    client.subscribe(sub.value)
  })
})


var pub_button = document.getElementById('pub-button');
var pub_input = document.getElementById('pub-input');
