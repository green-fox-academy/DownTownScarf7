export{};

let name: string = 'GreenFox';

function greet(inName = 'GreenFox member!'){
  return console.log(`Greetings, ${inName}`);
};
greet('Bence');
