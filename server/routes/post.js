const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const Post = mongoose.model("Post");

router.get("/allpost",requireLogin,(req,res)=>{
    Post.find()
    .populate("postedby","id name")
    .populate("comments.postedby","id name")
    .then(posts=>{
        res.json(posts)
    }).catch(err=>{
        console.log(err);
    })
})
router.post('/createpost',requireLogin,(req,res)=>{
    const {title,body,pic} = req.body;
    if(!title || !body || !pic){
       return res.status(422).json({error:"please add all the fields"});
    }
   req.user.password = undefined
    const post = new Post({
        title,
        body,
        photo:pic,
        postedby:req.user
    })
    post.save().then(result=>{
        res.json({post:result})
    }).catch(err=>{
        console.log(err);

    })
});
router.get('/mypost',requireLogin,(req,res)=>{

    Post.find({postedby:req.user.id})
    .populate("postedby","_id name")
    .then(mypost=>{
        res.json({mypost})
    }).catch(err=>{
        console.log(err);
    })
})

router.put('/like',requireLogin,(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{likes:req.user.id}
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/unlike',requireLogin,(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $pull:{likes:req.user.id}
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/comment',requireLogin,(req,res)=>{
    const comment = {
        text:req.body.text,
        name:req.body.name,
        postedBy:req.user
    }
    console.log(req.user)
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{comments:comment}
    },{
        new:true
    }).populate("postedBy","id name")
    .populate("comments.postedBy","id name")
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
module.exports = router
