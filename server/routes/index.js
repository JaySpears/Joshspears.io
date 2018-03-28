// Dependencies.
import path from 'path';
import { app } from './../index.js';

// Route classes.
import mainRoutes from './route.main.js';

// Get route methods.
app.get('*', mainRoutes.Root);

// Post route methods.
