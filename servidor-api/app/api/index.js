/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {}


api.dados = function(req, res) {

    res.json([
        { price: 50.5, quantity: 1 },
        { price: 200.5, quantity: 2 },
        { price: 100.2, quantity: 5 },
        { price: 10.5, quantity: 100 },
        { price: 3000.5, quantity: 2000 },
        { price: 4000.2, quantity: 10000 },
        { price: 1.5, quantity: 12 },
        { price: 0.50, quantity: 22 }
    ]);
    
};


module.exports = api;