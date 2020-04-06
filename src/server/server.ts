import * as express from 'express';
import * as passport from 'passport';

import './middleware/localstrategy';
import './middleware/bearerstrategy';
import routes from './routes';

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(passport.initialize());

app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
