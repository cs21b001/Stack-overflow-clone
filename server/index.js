import 'abort-controller/polyfill.js';
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answer.js'


dotenv.config();

const DB_URL = process.env.CONNECTION_URL





//All dependencies are imported correclty

const app = express();
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello to StackOverFlow Clone API');

})

app.use('/user', userRoutes);
app.use('/questions', questionRoutes);
app.use('/answer', answerRoutes)

const PORT = process.env.PORT || 5000;


mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        const server = app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
        process.on('SIGTERM', () => {
            server.close(() => {
                console.log('Process terminated')
            })
        })
    })
    .catch((error) => console.log(error.message));