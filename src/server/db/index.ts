import * as mysql from 'mysql';
import config from '../config';

import Skills from './skills';

export const Connection = mysql.createConnection(config.mysql);
Connection.connect(err => {
  if (err) console.log(err);
});

export default {
  Skills
}

// Every table is imported into idex (each ./db ts file) and exported from here, to make things easier.