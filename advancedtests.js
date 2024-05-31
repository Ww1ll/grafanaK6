// criando cenários mais complexos

import http from 'k6/http'
import { sleep } from 'k6'

export let options = {
    stages: [
        { duration: '30s', target: 20 }, 
        { duration: '1m', target: 20 }, 
        { duration: '10s', target: 0 }, 
    ]
}
// agrupando diferentes casos de teste
export default function () {
    group('Visit home page', function () {
        http.get('htttps://test.k6.io')
        sleep(1)
    })

    group('Login and Browse', function() {
        let loginRes = http.post(
            'htttps://test.k6.io/login',
            { username: 'user', password: 'pass' }
        )
        sleep(1)
    })

    let browseRes = http.get('htttps://test.k6.io/dashboard')
    sleep(1)

}