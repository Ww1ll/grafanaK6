import http from 'k6/http'
import { sleep } from 'k6'


export let options = {
    vus: 10, // número de usuários virtuais
    duration:  '30s', // duração do teste
}

export default function () {
    http.get('https://test.k6.io')
    sleep(1) // tempo de espera entre as requisições

}