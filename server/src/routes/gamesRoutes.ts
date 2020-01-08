import {Router} from 'express';

class GamesRoutes{

  router : Router = Router();

  constructor(){
     this.config();
  }
  config():void{
     this.router.get('/',(rep, res) => res.send('Games'));
  }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;