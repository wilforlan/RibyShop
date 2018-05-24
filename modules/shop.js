var ItemModel = require("../models/item");

module.exports= function(app){

    app.get('/items', (req, res)=>{
        ItemModel.find((err, objects) => {
            if (err) {
                res.send("Error Getting Items")  
            }else{
                res.send({
                    data: objects,
                })
            }
          })
    });

    app.post('/items', (req, res)=>{
        let itemObject = req.body.item;

        var newItem = new ItemModel(itemObject);
        newItem.save((err, created) => {
            if (err) {
              res.send("Error Creating New Item")  
            }else{
                res.send({
                    created,
                    message: 'successfully created'
                })
            }
        })
    });

    app.put('/items/:id', (req, res)=>{
        let id = req.params.id;
        let itemObject = req.body.item;

        ItemModel.where({ _id: id }).update(itemObject).exec((err, updated) => {
            res.send({
                // item,
                message: 'Updated Successfully'
            })
        });
    })

    app.delete('/items/:id', (req, res)=>{
        let id = req.params.id;

        ItemModel.where({ _id: id }).remove().exec((err, updated) => {
            res.send({
                // item,
                message: 'Delete Successfully'
            })
        });
    })

}