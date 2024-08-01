import { ILogin, ResponseLogin } from "../Model/ILogin";

export class PageController {
    url: string;
    tokenLog: string | undefined;

    constructor(url: string) {
        this.url = url;
    }

    async login(data: ILogin, endPoint: string): Promise<ResponseLogin> {
        const response = await fetch(`${this.url}${endPoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.status != 200) {
            throw new Error("No se pudo iniciar sesion");
        } else {
            alert("")
        }


        const responseLogin = await response.json();
        this.tokenLog = responseLogin.token;
        return responseLogin;
    }
}