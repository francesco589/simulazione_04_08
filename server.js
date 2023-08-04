import express from 'express';
import axios from 'axios';
import cors from 'cors';

const port = 8181
const app = express();

app.use(cors());
app.set('view engine', 'ejs');
app.use(express.static("public"))
app.use(express.urlencoded({ extendend: true }));
app.use(express.json());

app.get('/', async (req, res) =>{
    const obj = await axios.get('http://localhost:3008/posts');
        res.render("pages/home", {posts: obj.data});
} )

app.get('/edit/:id', async (req, res) =>{
    const obj = await axios.get('http://localhost:3008/posts');
    const par = req.params.id
    const objId = obj.data.find(el => el.id == par)
    console.log(objId)
        res.render("pages/edit", {post: objId});
} )

app.put('/one/:id', async (req, res) =>{
    const data = {
		...req.body,
		date: new Date()
    }
    const id = req.params.id
    const edit = await axios.put('http://localhost:3008/posts/' + id, data)
    res.redirect('/')
    })

app.post('/api/tweet', async (req, res) => {
    const data = {
		...req.body,
		date: new Date()
	};
    const respObj = await axios.post('http://localhost:3008/posts', data)
    res.redirect('/')

})


app.listen(port, ()=> console.log("server on " + port ));