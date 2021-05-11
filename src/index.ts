import express, { Request, Response } from "express";

class App{
    private app: express.Application = express();

    /**
     * constructor
     */
    public constructor() {
        this.deneme();
    }

    public deneme(){
        this.app.get("/", (req: Request, res: Response) => {
            res.send("Hello World");
          });
          
        this.app.listen(5000, () => console.log("Server listening on http://localhost:5000"));
    }
}

new App();

