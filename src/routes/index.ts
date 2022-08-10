import { Application, Request, Response } from "express";
import os from 'node:os';

export default (app: Application) => {
  app.get('/api', (req: Request, res: Response) =>
    res.status(200).send({
      message: 'Default Api',
    })
  );

  app.get('/api/monos/eol', (req: Request, res: Response) =>
    res.status(200).send({
      message: os.EOL,
    })
  );
  app.get('/api/monos/arch', (req: Request, res: Response) =>
    res.status(200).send({
      message: os.arch(),
    })
  );

  app.get('/api/monos/constants', (req: Request, res: Response) =>
    res.status(200).send({
      message: os.constants,
    })
  );

  app.get('/api/monos/cpus', (req: Request, res: Response) =>
    res.status(200).send({
      message: os.cpus(),
    })
  );

  app.get('/api/monos/dev-null', (req: Request, res: Response) =>
    res.status(200).send({
      message: os.devNull,
    })
  );

  app.get('/api/monos/endianness', (req: Request, res: Response) =>
    res.status(200).send({
      message: os.endianness(),
    })
  );

  app.get('/api/monos/freemem', (req: Request, res: Response) =>
    res.status(200).send({
      message: os.freemem(),
    })
  );

  app.get('/api/monos/get-priority/:pid', (req: Request, res: Response) =>
    res.status(200).send({
      message: os.getPriority(parseInt(req.params.pid)),
    })
  );

  app.get('/api/monos/homedir', (req: Request, res: Response) =>
    res.status(200).send({
      message: os.homedir(),
    })
  );

  app.get('/api/monos/loadavg', (req: Request, res: Response) =>
    res.status(200).send({
      message: os.loadavg(),
    })
  );

  app.get('/api/monos/network-interfaces', (req: Request, res: Response) =>
    res.status(200).send({
      message: os.networkInterfaces(),
    })
  );

  app.get('/api/monos/platform', (req: Request, res: Response) =>
    res.status(200).send({
      message: os.platform(),
    })
  );

  app.get('/api/monos/release', (req: Request, res: Response) =>
    res.status(200).send({
      message: os.release(),
    })
  );

  app.post('/api/monos/set-priority/:pid', (req: Request, res: Response) =>
    res.status(200).send({
      message: () => { os.setPriority(parseInt(req.params.pid), req.body.priority); return true },
    })
  );

  app.get('/api/monos/tmpdir', (req: Request, res: Response) =>
    res.status(200).send({
      message: os.tmpdir(),
    })
  );

  app.get('/api/monos/totalmem', (req: Request, res: Response) =>
    res.status(200).send({
      message: os.totalmem(),
    })
  );

  app.get('/api/monos/type', (req: Request, res: Response) =>
    res.status(200).send({
      message: os.type(),
    })
  );

  app.get('/api/monos/uptime', (req: Request, res: Response) =>
    res.status(200).send({
      message: os.uptime(),
    })
  );

  app.get('/api/monos/user-info/:encoding', (req: Request, res: Response) =>
    res.status(200).send({
      message: os.userInfo({ encoding: req.body.encoding }),
    })
  );

  app.get('/api/monos/version', (req: Request, res: Response) =>
    res.status(200).send({
      message: os.uptime(),
    })
  );
}
