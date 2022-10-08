const express = require('express');
const router = express.Router();


/// ENVIO MANUAL DE VALORES A LA LISTA

const items = [

//{id: 1, name: 'p1'},
  //{id: 2, name: 'p2'},
 // {id: 3, name: 'p3'}

]

/// ENVIO MANUAL DE VALORES A LA LISTA


router.get('/',(req,res)=> {
  res.render('index',{
    NOMBRE: "SERVICIOS TELEMATICOS",
    INTEGRANTE1: "INGRITH GUEVARA",
    INTEGRANTE2: "LAURA CASTRO",
    INTEGRANTE3: "ANDERSON GORDILLO"

  })
});



router.get('/products',(req,res,next)=> {  //la ruta en el navegador
  res.render('products',{    //nombre del archibo products.ejs
    items: items   // itemAs es la variable o arreglo creado manualmente
  })
});



router.post('/new-product',(req,res,next) => {

  // REQ LA PETICION
  const { newItem } = req.body;
  items.push ({
    id:items.length + 1,
    name: newItem
  });
  res.redirect('/products');
})

module.exports = router;
