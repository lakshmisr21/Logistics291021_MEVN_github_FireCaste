const model = require('./model')

module.exports= {
    
    newtripsheet: (req,res) => {
        let user_id = jwt.decode(req.body.auth_token).id

        userModel.findById(user_id)
                .then(result =>{
                if(!result){
                    res.send({ success: false, msg: "No user was found" })
                    return
                }

                let newtripsheet = new model({
                tripsheetno: req.body.tripsheetno,
                slno: req.body.slno
                
            })
            newtripsheet.save()
            .then(result =>{
                res.status(200).send({msg:'Gernated Successfully',user_id:result._id})
            })
            .catch(err =>{
                res.status(401).send({msg:'Unsuccessful'})
            })
        })
    }

       
 }




  
