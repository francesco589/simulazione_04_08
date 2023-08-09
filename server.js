import express from 'express';
import axios from 'axios';
import cors from 'cors';
import router from './routers/router.js';

const port = 8181
const app = express();

app.use(cors());
app.set('view engine', 'ejs');
app.use(express.static("public"))
app.use(express.urlencoded({ extendend: true }));
app.use(express.json());

app.use('/', router)

app.listen(port, ()=> console.log("server on " + port ));