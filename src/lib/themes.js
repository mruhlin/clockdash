const theme = (opts) => {
    return {
      background: 'black',
      color: 'white',
      ...opts
    };
};

export default [
    {
        color: 'black',
        background: 'white'
    },
    {
        background: '#04A5AA'
    },
    {
        background: '#DB162F'
    },
    {
        background: '#09588E'
    },
    {
        background: '#09588E',
        color: '#f1fa8c'
    },
    {
        background: 'tomato'
    },
    {
        background: '#553C8F'
    },
    {
        background: '#553C8F',
        color: '#f1fa8c'
    },
    {
        background: '#bd93f9',
        color: '#f1fa8c'
    },
    {
        background: '#282a36',
        color: '#f8f8f2'
    },
    {
        background: '#2E2C6E'
    },
    {
        background: '#2E2C6E',
        color: '#f1fa8c'
    },
    {
        background: '#2E2C6E',
        color: '#bd93f9'
    },
    {
        background: '#00b140', //verde
        color: '#000000'
    },
    {
        background: '#000000',
        color: '#00b140' // verde
    },
    {
        background: '#00b140' // verde
    },
    {
        background: '#420e1f',
        color: '#ff6700'
    },
    {
        color: '#420e1f',
        background: '#ff6700'
    },
    {
        color: '#ffffff',
        backgroung: '#ff6700'
    },
    {
        color: '#ff0000',
        background: '#000000'
    },
    {
        color: '#ffff00',
        background: '#000000'
    },
    {
        color: '#00ffff',
        background: '#000000'
    },
    { // hokie stripes
        color: '#ffffff',
        background: 'repeating-linear-gradient(45deg, #ff6700, #ff6700 10em, #420e1f 10em, #420e1f 20em)'
    },
    { // verde stripes
        color: '#ffffff',
        background: 'repeating-linear-gradient(45deg, #00b140, #00b140 10em, #000000 10em, #000000 20em)'
    }
].map(theme);