const buildString = (...template) => `I like ${template.join(', ')}!`;

console.log(buildString('Cheese','Milk','Chocolate'));