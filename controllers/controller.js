import axios from "axios"


class Controller{


    static async renderHome(req,res){
        const obj = await axios.get('http://localhost:3008/posts');
      
        res.render("pages/home", {posts: obj.data});

    }

    static async deleteTweet(req, res){
        const id = parseint(req.params.id)
       const resp = await axios.delete('http://localhost:3008/posts' + id)
       res.json(resp.data)
    }

    static async addTweet(req, res){
       const record = req.body.data
       const respObj = await axios.post('http://localhost:3008/posts',record)
       res.json(respObj.data)
        res.redirect("/")


    }
}

export default Controller