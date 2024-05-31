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
        http.get('https://test.k6.io')
        sleep(1)
    })

    group('Login and Browse', function() {
        let loginRes = http.post(
            'https://test.k6.io/login',
            { username: 'user', password: 'pass' }
        )
        sleep(1)
    })

    let browseRes = http.get('htttps://test.k6.io/dashboard')
    sleep(1)

}

// uso de grupos e check
import { group, check } from 'k6'

export default function () {
    group('Group 01',  function() {
        let res = http.get('https://test.k6.io/')
        check(
            res,
            { 'status was 200': (r) => r.status === 200 }
        )
    })


    group('Group 02',  function() {
        let res = http.get('https://test.k6.io/about')
        check(
            res,
            { 'status was 200': (r) => r.status === 200 }
        )
    })

}


// para obeter uma captura de métricas mais detalhada

import { Trend } from 'k6/metrics'

let myTren = new Trend('custom_trend')

export default function () {
    let res = http.get('https://test.k6.io')
    myTrend.add(res.timings.duration)

}

// após execução dos testes, para obter uma analisa detalhada
    // k6 run --out json=test-results.json script.js
