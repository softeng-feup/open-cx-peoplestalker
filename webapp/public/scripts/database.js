
const dbRefObject = firebase.database().ref('sensor/dht/');
const maxPeopleInRoom = 200;

dbRefObject.limitToLast(1).on('value', gotData, errData);

function gotData(data){
    var dataValue = data.val();
    //console.log(dataValue);
    var keys = Object.keys(dataValue);
    var key = keys[0];
    var numberOfPeople = dataValue[key].PeopleInRoom;
    var percentage = (numberOfPeople / maxPeopleInRoom) * 100;
    //console.log('PeopleInRoom: ');
    //console.log(numberOfPeople);
    // const testDiv = document.querySelector('#test');
    // testDiv.innerHTML = `
    //     <h4>People in room: ${numberOfPeople}</h4>
    //     <h4>Percentage of seats occupied: ${percentage}%</h4>
    //     `;
    const testSpans = document.querySelectorAll('.test');
    testSpans.forEach(item => item.innerHTML = `
        <p>People in room: ${numberOfPeople}</p>
        <p>Percentage of seats occupied: ${percentage}%</p>
        `);
}

dbRefObject.on('value', function(snapshot){
    var max = 0;
    let dataValues = snapshot.exportVal();
    let arrayValues = [];
    for (var prop in dataValues) {
        if (Object.prototype.hasOwnProperty.call(dataValues, prop)) {
            arrayValues.push(dataValues[prop]);
        }
    }
    for(var i = 0; i<arrayValues.length ;  i++) {
        if(arrayValues[i].PeopleInRoom !== null) {
            if(arrayValues[i].PeopleInRoom > max) {
                max = arrayValues[i].PeopleInRoom;
            }
        }
    }
    // const maxDiv = document.querySelector('#max');
    // maxDiv.innerHTML = `
    //     <h4>Maximum number of persons in room: ${max}</h4>
    //     `;
    const testSpans = document.querySelectorAll('.test');
    testSpans.forEach(item => item.innerHTML += `
        <P>Maximum number of persons in room: ${max}</P>
        `);
}, errData);

function errData(err){
    console.log('error: ');
    console.log(err);
}
