import express from 'express';
import Controller from '../controllers/controller.js'
const router = express.Router()

router.get('/', Controller.renderHome)

router.post('/api/tweet', Controller.addTweet)

router.delete('/delete', Controller.deleteTweet)


export default router