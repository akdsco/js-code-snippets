// Fill in the object constructor with the following methods below:
//
// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
//
// Run the tests to see the expected output for each method. The methods that take an argument must accept only one
// argument and it has to be a string. These methods must be the only available means of interacting with the object.
//
// Examples:
// Object.keys(bob).length should return 6.
// bob instanceof Person should return true.
// bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
// bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
// bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
// bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").
//
var Person = function(firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = () => {
    const arr = fullName.split(' ');
    if(arr[0]) {
      return arr[0]
    }
    return undefined
  };

  this.getLastName = () => {
    const arr = fullName.split(' ');
    if(arr[1]) {
      return arr[1]
    }
    return undefined
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = first => {
    if(typeof first === 'string' && first.length > 0) {
      const arr = fullName.split(' ');
      fullName = first + ' ' + arr[1];
    }
  };

  this.setLastName = last => {
    if(typeof last === 'string' && last.length > 0) {
      const arr = fullName.split(' ');
      fullName = arr[0] + ' ' + last;
    }
  };

  this.setFullName = firstAndLast => {
    if(typeof firstAndLast === 'string') {
      let arr = firstAndLast.split(' ');
      if(arr.length === 2 && typeof arr[0] === 'string' && typeof arr[1] === 'string') {
        fullName = arr.join(' ');
      }
    }
  }
};

var bob = new Person('Bob Ross');
bob.getFullName();
bob.getFirstName();
bob.getLastName();
bob.getFullName();
bob.setFirstName('Nob');
bob.setLastName('Smith');
bob.setFullName('New name');