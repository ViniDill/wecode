
export   function getProducts() {
     return new Promise((res) => {
          res([
               {
                    name: 'Scarpin Sligback Bebecê Salto Médio Taça Detalhe Metalizado',
                    image: '/static/images/produtos/produto-1.png',
                    price: { amount: 179.9, isDiscount: null },
                    id: 1,
               },
               {
                    name: 'Coturno Feminino Bebecê Tratorado Detalhe Tachas',
                    image: '/static/images/produtos/produto-2.png',
                    price: { amount: 349.9, isDiscount: 315 },
                    id: 2,
               },
               {
                    name: 'Sandália Braco Blanc Tratorada...',
                    image: '/static/images/produtos/produto-4.png',
                    price: { amount: 459.90, isDiscount: 319.89 },
                    id: 4,
               },
               {
                    name: 'Scarpin Bebecê Salto Alto Taça Com Fivela',
                    image: '/static/images/produtos/produto-3.png',
                    price: { amount: 159.90, isDiscount: null },
                    id: 3,
               },
               {
                    name: 'Slingback Branco Tiras Bico Fino Couro',
                    image: '/static/images/produtos/produto-5.png',
                    price: { amount: 379.9, isDiscount: null },
                    id: 5,
               },
          ]);
     });
}

