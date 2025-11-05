const obj = {
    name: "Adrian",
    greet: function(){
        console.log(`Hello, ${this.name}`);
    },
    greet2: () => {
        // can't access this name
        console.log("Hello, " + this.name);
    }
}

obj.greet();
obj.greet2();