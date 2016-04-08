var fs = require('fs');
var characters = JSON.parse(fs.readFileSync('characters.json', 'utf8'));
var mystique = JSON.parse(fs.readFileSync('mystique.json', 'utf8'));
var series = JSON.parse(fs.readFileSync('series.json', 'utf8'));


//1
characters.data.results.forEach(function(el){
    // console.log(el.name);
});

//2
var idname = characters.data.results.reduce(function(acc, curr){
    acc[curr.id] = curr.name;
    return acc;
}, {});

// console.log(idname);

//3
var namedchars = characters.data.results.reduce(function(acc, curr){
    // console.log(acc);
    if (curr.description){
        acc[curr.name] = curr.description;
    }
    return acc;
}, {});

// console.log(namedchars);

//4
var warlock = characters.data.results.filter(function(el){
    return ( el.name === "Adam Warlock")
})[0].comics.items.map(function(item){
            return item.name;
        });


console.log(warlock);