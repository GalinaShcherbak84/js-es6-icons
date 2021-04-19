const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
];

//colori
const colors = ['#001858', '#8bd3dd', '#f582ae'];

const container = document.querySelector('.icons');
//console.log(container);

// 1 printare le icone a schermo
//printIcons(icons, container);

// 2 printare le icone colorate
const coloredIcons = colorIcons(icons, colors);
printIcons(coloredIcons, container);








// funzioni

// 1 printare le icone a schermo
function printIcons(icons, container){
    // generara il markup per le icone
    let html = '';
    icons.forEach((icon) =>{
        //console.log(ikon);
        const {family, prefix, name, color} = icon;
        html += 
        `<div class="icon p-20">
            <i class="${family} ${prefix}${name} p-20" 
            style="color: ${color}"></i>
            <div class="titel">${name}</div>
        </div>
        `
    });
    // aggiunta icone al container
    container.innerHTML = html;
}
 
// 2 return color icons collection by type
function colorIcons(icons, colors){
    const types = getType(icons);
    console.log(types);
    console.log(colors);
    // assegna un colore per tipo ad ogni icona.
    const coloredIcons = icons.map((icon) =>{
        const indexType = types.indexOf(icon.type);
        //console.log(indexType);
        return {
            ...icon,
            color: colors[indexType],
        }
    })
    return coloredIcons;
};

// get icons type (unique)
function getType(icons){
    const types =[];
    icons.forEach((icon) =>{
        if(!types.includes(icon.type)){
            types.push(icon.type);
        }
    }) 
    return(types);
}