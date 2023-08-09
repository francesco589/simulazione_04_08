import axios from "axios"


class Controller{


    static async renderHome(req,res){
        const obj = await axios.get('http://localhost:3008/posts');
      
        res.render("pages/home", {posts: obj.data});

    }

    static async deleteTweet(req, res){
        const id = req.params.id
       const resp = await axios.delete('http://localhost:3008/posts/' + id)
       res.json(resp.data)
    }

    static async addTweet(req, res){
        const data = {
            ...req.body,
            date: new Date()
        };
        const respObj = await axios.post('http://localhost:3008/posts', data)
        res.redirect('/')
    }

    static async editTweet(req, res){
        const obj = await axios.get('http://localhost:3008/posts');
        const par = req.params.id
        const objId = obj.data.find(el => el.id == par)
        console.log(objId)
        res.render("pages/edit", {post: objId});

    }

    static async editOne(req, res){
        const data = {
        ...req.body,
        date: new Date()
        }
        const id = req.params.id
        const edit = await axios.put('http://localhost:3008/posts/' + id, data)
        res.redirect('/')
    }
}

export default Controller