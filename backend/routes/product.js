const express = require ("express");
const Product = require ("../models/product");
const router = express.Router();


module.exports = function(){


router.post("/img", (req,res) => {

    
    if (!req.files.profile) {
        return res.status(400).send("No files were uploaded");
    }

    let image = req.files.profile;

    // let ext = image.name.split(".")[1];
    // console.log(ext);

    let date = new Date ();
    let imageName = date.getTime() + ".png"

    image.mv("./public/profile/" + imageName, (error) => {

        if (error) return res.status(500).send(error);

        let newObj = new Product({
            name : req.body.name,
            price : req.body.price,
            profile : "http://localhost:3000/profile/" + imageName
        });

        newObj.save((error) => {
            if (error) {
                res.status(500).send(error);
            }
            else{
                res.json(newObj);
            }
        });
    });
    
});

router.get("/", (req, res) => {
    
    Product.find({}, (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else{
            res.json(result)
        }
    });
});

router.get("/:id", (req,res) => {

    Product.findById(req.params.id, (error, result) => {
        if(error){
            res.statusCode(500).json(error);
        }
        else{
            res.json(result)
        }
    });

});
   

return router;

};