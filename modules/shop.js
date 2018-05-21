module.exports= function(app){
    let items=[
                {id:1, name:'joy'},
                {id:2, name: 'peace'},
                { id:3, name:'gentleness'}
         ];

    app.get('/items', (req, res)=>{
        res.send({
            data: items,
        })
    });

    app.post('/items/:name', (req, res)=>{
        let params = req.params;
        console.log(params);
        let name= params.name
        items.push(name);
       res.send({
           items,
           message: 'successfully created'
        })
    });

    app.put('/items/:id', (req, res)=>{
        let id = req.params.id;
        let name= req.body.name;
        for (item in items){
            if(items[item].id == id){
                items[item].name = name
                console.log(item)
            }
        }
        console.log(item)
        res.send({
            message: id  + 'Updated Successfully'
        })
    })
}