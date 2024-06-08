export class FetchAdapter {
    #baseUrl = "http://localhost:5000"
    #accessToken = null

    async get(endpoint) {
        const url = this.#baseUrl + endpoint
        const payload = {
            method: "GET",
            mode: "cors",
            headers: this.getHeaders()
        }
        return await this.send(url, payload)
    }



    async post(endpoint, formData) {
        const url = this.#baseUrl + endpoint
        const payload = {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(formData),
            headers: this.getHeaders()
        }

        console.log(payload)
        return await this.send(url, payload)
    }

    async send(url, payload) {
        try{
            const res = await fetch(url, payload)
            return res.json()
        }catch {
            throw new Error("server dont response")
        }


    }

    setAccessToken(token){
        this.#accessToken=token

    }

    getHeaders(){
        const headers = {
            'content-type': 'application/json',
        }
        if (this.#accessToken!== null){
            headers['authorization'] = 'Bearer '+ this.#accessToken}


        return headers
    }
}