//1. Abstraction Kya Hai?
    // Abstraction ek concept che je unnecessary details ne hide kare che ne important features ne highlight kare che. OOP (Object-Oriented Programming) ma abstraction no use kari ne complex systems ne simple interface ma represent kari sakay che.
    // JavaScript ma abstraction achieve karva mate aap functions, classes, ne modules no use kari sakay che.
// Definition:
// Abstraction ka matlab hai complex system ke unnecessary details ko hide karke sirf essential cheez dikhana.

// Simple Words:
// User ko sirf woh functionality dikhani jo use chahiye, baki internal process hidden rahe

// 💡 Example:
// Car ka start button.
// User bas button dabata hai → car start ho jati hai.
// Engine ka internal kaam (fuel ignite, ignition) user ko pata nahi hota.
// Ye hi abstraction hai.

class Car {
    start() {
        this.#igniteFuel();  // internal process hidden
        console.log("Car started!");
    }

    #igniteFuel() {          // private method
        console.log("Fuel ignited...");
    }
}

let myCar = new Car();
myCar.start();  // Output: Fuel ignited... Car started!
// myCar.#igniteFuel(); 


// 1.
