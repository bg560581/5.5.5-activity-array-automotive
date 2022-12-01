//this shows how to call from this module...
//this includes the vehicle class as a module
// const VehicleModule = require("./vehicle.js")

let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule {
        constructor(make, model, year, color, mileage){
            super(make, model, year, color, mileage);
            this.maxPassengers = 5;
            this.passenger = 0
            this.numberOfWheels = 4
            this.maxSpeed = 160
            this.fuel = 10
            this.scheduledService = false
        }


start() {
    if (this.fuel > 0) {            
        console.log("engine has started.");
        return this.started == true
    } else {
        console.log("no fuel");
        return this.started = false;
    }
}

checkService() {
    if (this.mileage > 30000) {            
        this.scheduleService == true
        return this.scheduleService;  
    }
}

loadPassenger(num) {
    if (this.passenger < this.maxPassengers) {
         if((num + this.passenger) <= this.maxPassengers) {
            this.passenger = num;
            return this.passenger
        } else {
            console.log(this.model + " " + this.make + "not have enough space to take all passengers.");
    
        }  
    } else {
        console.log(this.model + " " + this.make + "is full");
    }
}

}

let myCar = new Car('mercury', 'A28', 2015, 'orange', 450000)
    myCar.start()
    myCar.loadPassenger(5)
    myCar.stop()
    myCar.checkService()

    console.log(myCar)