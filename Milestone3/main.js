// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

let icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];


printIcons();



function printIcons() {
    const select = document.getElementById('type');
    const container = document.querySelector('.container_icone');
    container.innerHTML = '';

    icons.forEach((item) => {

        if (select.value == item.type || select.value == "all") {

            if (item.type == 'user') {
                var nome = 'user'
            } else if (item.type == 'vegetable') {
                var nome = 'vegetable'
            } else if (item.type == 'animal') {
                var nome = 'animal'
            }

            const cardElement = `
                <div class="cards ${nome}">
                    <i class="${item.family} ${item.prefix}${item.name}"></i>
                    <p>${item.name}</p>
                </div>
            `

            document.querySelector('.container_icone').insertAdjacentHTML('beforeend', cardElement)
        }
    })
}


const select = document.getElementById('type');

select.addEventListener('change', printIcons)


/* icons.forEach((icon, index, array) => {

    if (icon.type == 'user') {
        var nome = 'user'
    } else if (icon.type == 'vegetable') {
        var nome = 'vegetable'
    } else if (icon.type == 'animal') {
        var nome = 'animal'
    }

    const cardElement = `
        <div class="cards ${nome}">
            <i class="${icon.family} ${icon.prefix}${icon.name}"></i>
            <p>${icon.name}</p>
        </div>
    `




    document.querySelector('.container_icone').insertAdjacentHTML('beforeend', cardElement)
})
 */

