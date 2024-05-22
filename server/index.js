import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'

const app = express();
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello to StackOverFlow Clone API');

})

app.use('/user', userRoutes);
app.use('/questions', questionRoutes);

const PORT = process.env.PORT || 5000;

const CONNECTION_URL = 'mongodb+srv://cs21b001:Amandak1@stackoverflow-clone.bz4qpbh.mongodb.net/?retryWrites=true&w=majority&appName=StackOverFlow-clone'

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));