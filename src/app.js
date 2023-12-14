import express from 'express';
import userRoutes from './routes/user.js'; 
import blogRoutes from './routes/blog.js'; 
import aboutRoutes from './routes/about.js'; 
import homeRoutes from './routes/home.js'; 
import projectRoutes from './routes/project.js'; 
import researchRoutes from './routes/research.js'; 
import './config.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  Headers: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
}; 

app.use(cors(corsOptions));


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/user', userRoutes);
app.use('/blog', blogRoutes);
app.use('/about', aboutRoutes);
app.use('/home', homeRoutes);
app.use('/project', projectRoutes);
app.use('/research', researchRoutes);



const PORT = process.env.PORT || 4000;

app.listen(PORT, (err) => {
  if (err) {
    console.error('Error starting the server:', err);
  } else {
    console.log(`Server started on port ${PORT}`);
  }
});

