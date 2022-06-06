// Write a simple function that log "Hello Codenation" to the console
// The write a highorder function which will run the simple function 5 times even though you only call it once

// Write a simple function that log "Hello Codenation" to the console
const simpleFunction = () => {
    console.log("Hello Codenation");
  };
  
  // Then write a higher order function which will run the simple function 5 times even though you only call it once
  const higherOrderFunction = (numTime) => {
    for (let i = 0; i < numTime; i++) {
      simpleFunction();
    }
  };
  
  // simpleFunction(); - will log "Hello Codenation"
  higherOrderFunction(5);
  
