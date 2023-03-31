import express from 'express';
import character from './routes/CharacterRoute'
const app = express();



app.use('/character', character)


app.listen(8080, ()=>{
    console.log('API started. Listening on port 8080');
})
