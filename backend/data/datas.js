const bcrypt = require( 'bcryptjs');

const data = {
  users: [
    {
      name: 'Songji',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
     {
      name: 'Nicole',
      email: 'user@deuxiemeexample.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
      {
      name: 'Julie',
      email: 'julie@jolie.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
    name:"Pendentif Lunaire en Cristal de Swarovski",
    category: "Pendentif",
    image: '/images/Moon-pendant.png',
    material:"cristal de Swarovski,  argent 925",
    price: 45,
    countInStock: 3
    },
    {
    name:"Pendentif Labradorite",
    category: "Pendentif",
    image:'/images/Labradorite-pendant-big.png',
    material:"labradorite,argent 925",
    price: 80,
    countInStock: 2
    },
     {
    name:"Pendentif Labradorite",
    category: "Pendentif",
    image:'/images/Labradorite-medium-pendant.png',
    material:"labradorite,argent 925",
    price: 45,
    countInStock: 3
    },
    {
    name:"Pendentif Oeil du Tigre",
    category: "Pendentif",
    image:'/images/EyeTiger-pendant.png',
    material:"labradorite,argent 925",
    price: 45,
    countInStock: 3
    },
    {
    name:"Pendentif en Quartz Rose",
    category: "Pendentif",
    image: '/images/Quartz-pendant.png',
    material:"améthiste, argent 925",
    price: 35,
    countInStock: 6,
  }
  ]
}

module.exports = data;