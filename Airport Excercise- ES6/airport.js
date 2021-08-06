"use strict";

(function () {

    function Person(name, surname) {    //we make constructor function to unifie object and to know what it has >>> name and surname
        if (!name || !surname) {
            throw new Error("Fields name and surname are required");
        }
        this.name = name;
        this.surname = surname;
        this.getData = function () {
            return `${this.name} ${this.surname}`;
        };
    }

    function Seat(number = Math.floor((101 - 10) * Math.random() + 10), category = "e") { //if exists its category written in function, if it doesnt exists its "e"
        if (!["e", "b"].includes(category)) {
            throw new Error("Invalid category input");
        }
        this.number = number;
        this.category = category;
        this.getData = function () {
            return `${this.number}, ${this.category.toUpperCase()}`;
        };
    }

    function Passenger(person, seat) {
        if (!person || !(person instanceof Person)) {
            throw new Error("Invalid person input");
        }
        if (!seat || !(seat instanceof Seat)) {
            throw new Error("Invalid seat input");
        }
        this.person = person;
        this.seat = seat;
        this.getData = function () {
            return `${this.seat.getData()}, ${this.person.getData()}`;
        };
    }

    function Flight(relation, date) {
        if (!relation || !date) {
            throw new Error("Fields relation and date are required");
        }
        this.relation = relation;
        this.date = new Date(date); //because passengers will be obliged to enter in certain date format
        this.listOfPassengers = []; //initially empty array
        this.addPassenger = function (passenger) {
            if (!passenger || !(passenger instanceof Passenger)) {
                throw new Error("Invalid person input");
            }
            this.listOfPassengers.push(passenger);
        };
        this.getData = function () {
            let result = "";
            let day = this.date.getDate();
            let month = this.date.getMonth() + 1; //because getMonth() returns from 0-11 > indexes
            let year = this.date.getFullYear();
            result += `     ${day}.${month}.${year}.${this.relation}
`;
            this.listOfPassengers.forEach(function (passenger) {
                result += `         ${passenger.getData()}
`;
            });
            return result;
        };
        this.numberOfPassengers = function () {
            return this.listOfPassengers.length;
        };
    }

    function Airport() {
        this.name = "Nikola Tesla",
            this.listOfFlights = [];
        this.addFlight = function (flight) {
            if (!flight || !(flight instanceof Flight)) {
                throw new Error("Invalid flight");
            }
            this.listOfFlights.push(flight);
        };

        this.getTotalPassengerNumber = function () {
            let count = 0;
            this.listOfFlights.forEach(function (flight) {
                count += flight.numberOfPassengers();
            });
            return count;
        };

        this.getData = function () {
            let result = `Airport: ${this.name}, total passengers: ${this.getTotalPassengerNumber()}
`;
            this.listOfFlights.forEach(function (flight) {
                result += flight.getData();
            });
            return result;
        };
    }

    function createFlight(relation, date) {
        return new Flight(relation, date);
    }

    function createPassenger(name, surname, seatNumber, seatCategory) {
        let person = new Person(name, surname);
        let seat = new Seat(seatNumber, seatCategory);
        return new Passenger(person, seat);

    }

    //testing
    try {
        let nikolaTesla = new Airport();
        let flight1 = createFlight("Belgrade - New York", "Oct 25 2017");
        let flight2 = createFlight("Barcelona - Belgrade", "Nov 11 2017");
        let passenger1 = createPassenger("John", "Snow", 1, "b");
        let passenger2 = createPassenger("Cersei", "Lanister", 2, "b");
        let passenger3 = createPassenger("Daenerys", "Targaryen", 14);
        let passenger4 = createPassenger("Tyrion", "Lannister");

        flight1.addPassenger(passenger1);
        flight1.addPassenger(passenger2);

        flight2.addPassenger(passenger3);
        flight2.addPassenger(passenger4);

        nikolaTesla.addFlight(flight1);
        nikolaTesla.addFlight(flight2);
        console.log(nikolaTesla);
        console.log(nikolaTesla.getData());

    } catch (error) {
        console.log("Error message:" + error.message);
    }

})();