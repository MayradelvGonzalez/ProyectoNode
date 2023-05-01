import { Router } from 'express';

const router = Router()

router.get('/', (req, res) => res.render('index', { title: 'Node Website' })) //renderiza, envia un archivo html que va a 
//estar ubicado ahi,lo reconoce como un .ejs. {paso un dato de back a front}
router.get('/about', (req, res) => res.render('about', { title: 'About me' }))

router.get('/contact', (req, res) => res.render('contact', { title: 'Contact me' }))

export default router;