import express = require('express');
import router from './database/routers/index';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config(): void {
    const allowedOrigins = ['http://localhost:3000/', 'http://localhost:3000']; // Defina aqui as origens confiáveis permitidas
    const allowedMethods = ['GET', 'POST', 'DELETE', 'OPTIONS', 'PUT', 'PATCH']; // Defina aqui os métodos permitidos

    const accessControl: express.RequestHandler = (req, res, next) => {
      const origin = req.get('origin') as string;
      if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
        res.header('Access-Control-Allow-Methods', allowedMethods.join(','));
        res.header('Access-Control-Allow-Headers', '*');
      }
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
    this.app.use(router);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// Essa segunda exportação é estratégica, e a execução dos testes de cobertura depende dela
export const { app } = new App();