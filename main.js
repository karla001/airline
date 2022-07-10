
document.trip.addEventListener('submit', e=>{
    e.preventDefault();
    showTrip()
});

function showTrip(){
    let diet = '';
    // combining diet selections into one statement
    if( document.trip.vegan.checked){
        diet += document.trip.vegan.value + " ,";
    }
    if( document.trip.pescetarian.checked){
        diet += document.trip.pescetarian.value + " ,";
    }
    if( document.trip.paleo.checked){
        diet += document.trip.paleo.value + " ,";
    }
    // combining form inputs into a trip message to be displayed
    let trip = 
    'First Name: '+ document.trip.firstname.value +'\n'+
    'Last Name: '+ document.trip.lastname.value +'\n'+
    'Age: '+document.trip.age.value+'\n'+
    'Gender: '+document.trip.gender.value+'\n'+
    'Location: '+document.trip.location.value+'\n'+
    'Dietary Restrictions: '+diet+'\n';

    alert(trip)
}