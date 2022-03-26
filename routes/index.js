import express from 'express';
const router = express.Router();
import path from 'path';
import { fileURLToPath } from 'url';

// set up the root directory reference
// find the global URL using fileURLTopath
// and then turn that into the __dirname (somethin like Users/Desktop/schlichting_e_ngo_team/)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// All this process is routing: request a page and respond with somehting (text, data, whatever)
router.get('/', (req, res) => { // "/" = root of the project
    // res.send('Hello from Express! And testing no demon')
    res.sendFile(path.join(__dirname, '../views/index.html'));
})

// Add your views here (/burak, /shirin, /natalia, /eduardo)

router.get('/audio', (req, res) => {
    // res.end(`This is Eduardo's Page`);
    res.sendFile(path.join(__dirname, '../views/audio.html'));
})

router.get('/video', (req, res) => {
    // res.end(`This is Shirin's Page`);
    res.sendFile(path.join(__dirname, '../views/video.html'));
})



// this catches broken routes - requests for resources that don't exists (like a 404 page)
// router.use((req, res) => {
//     res.sendFile(path.join(__dirname, '../views/404.html'));

// })

export default router;