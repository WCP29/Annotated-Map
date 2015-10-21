//Array of Objects
var states = [
    // NOT ALL STATES ACCOUNTED FOR! 
    {
       state_id: "ny",
       state_name: "New York",
       Accessibility: "Wheelchair"
    },
    
    {
       state_id: "pa",
       state_name: "Pennsylvania",
       Accessibility: "Wheelchair"
    },
    
    {
        state_id: "tx",
       state_name: "Texas",
       Accessibility: "Bathroom"
    },
    
    {
        state_id: "wa",
       state_name: "Washington",
       Accessibility: "Stairs"
    },
    
    {
        state_id: "fl",
       state_name: "Florida",
       Accessibility: "Stairs"
    },
    
    {
        state_id: "ca",
        state_name: "California",
       Accessibility: "Bathroom"
    },
    
    {
        state_id: "ak",
       state_name: "Alaska",
       Accessibility: "Wheelchair"
    }
]

$( document ).ready(function() {
  labelStates();
  annotation();
  changeInfo();
});

//Label Wheelchairs / Bathrooms / Stairs   
function labelStates() {
    for ( var i=0; i < states.length; i++) {
        if (states[i].Accessibility === "Wheelchair"){
            $('#' + states[i].state_id).css({'fill': 'steelblue'});
        };
        if (states[i].Accessibility === "Stairs"){
            $('#' + states[i].state_id).css({'fill': 'red'});
        };
        if (states[i].Accessibility === "Bathroom"){
            $('#' + states[i].state_id).css({'fill': 'yellow'});
        };
    };
};

function annotation() {
    //Need to be able to access data inside the object universally
    for ( var i=0; i < states.length; i++) {
        $('#' + states[i].state_id).data('state', states[i])
    };
    
    $('.map-test g').mouseover(function (e) {
  var state_data = $(this).data('state');
  $('<div class="info">' 
    + state_data.state_name 
    + '<br>' 
    + 'Accessibility: ' 
    + state_data.Accessibility.toLocaleString("en-US")
    + '</div>').appendTo('body');
}).mouseleave(function () {
  $('.info').remove();
}).mousemove(function(e) {
    var mouseX = e.pageX, // X coordinates of mouse
        mouseY = e.pageY; // Y coordinates of mouse

     $('.info').css({
        top: mouseY - 50,
        left: mouseX - 30
    });
    });
}
// Click to change information about states.
function changeInfo() {
    $('.map-test g').on('click', function() {
        var changeAccessibility = prompt('What are the Accessabilities here?');
        var state_data = $(this).data('state');
        state_data.Accessibility = changeAccessibility;
        labelStates();
    })
}