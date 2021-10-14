import axios from 'axios'

const API_URL = 'http://localhost:8081'

class AuthenticationService {
    constructor(){
        this.username = null;
        this.password = null;
    }

    executeAuthenticationService(username, password) {
        return axios.get(`${API_URL}/auth`,
            { headers: { authorization: this.createBasicAuthToken(username, password) } })
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }
    
}

export default new AuthenticationService()