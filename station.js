let StationTrains = [];

function Station(trainName, stationName, maxtrain) {
    this.trainName = trainName;
    this.stationName = stationName;
    this.maxtrain = maxtrain;
}

function AddTrain() {
    const trainName = document.getElementById('Train').value;
    const stationName = document.getElementById('Station').value;
    const maxtrain = parseInt(document.getElementById('maxtrain').value);

    const curr_train = new Station(trainName, stationName, maxtrain);

    if (StationTrains.length < maxtrain) {
        StationTrains.push(curr_train);
        alert("Train Added Successfully");
    } else {
        alert("Station Max Capacity Reached. Can't Add More Trains");
    }
}
