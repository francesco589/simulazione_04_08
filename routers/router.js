import express from 'express';
import Controller from '../controllers/controller.js'
const router = express.Router()

router.get('/', Controller.renderHome)

router.post('/api/tweet', Controller.addTweet)

router.delete('/delete/:id', Controller.deleteTweet)

router.get('/edit/:id', Controller.editTweet)

router.patch('/editone/:id', Controller.editOne)

export default router