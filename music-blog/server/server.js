import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/postRoutes.js';



dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/posts',routes);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    });
})
.catch(err => {
    console.error('Database connection error:', err);
});

export default app;