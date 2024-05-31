// Criando usuários virtuais que simulam usuários reais
export let options = {
    vus: 50, // numero de usuarios virtuais
    duration: '1m' // duracao do teste
}


// simulação de cenários de navegação simples entre páginas

import http from 'k6/http'
import { sleep } from 'k6'

export default function () {
    http.get('htttps://test.k6.io')
    sleep(1)
    http.get('htttps://test.k6.io/contact')
    sleep(1)
}



// validação das respostas -> p garantir que as respostas estão ok, utilizar check func

import { check } from 'k6'

export default function (){
    let res = http.get('htttps://test.k6.io')

    check(res, {
        'status is 200': (r) => r.status === 200,
        'body size is 1176 bytes': (r) => r.body.length === 1176,
    })

}


// parametros e configurações do teste, como duração e intensidade

export let op = {
    stages: [
        { duration: '30s', target: 20 }, // de 0 a 20 usuários em 30s
        { duration: '1m', target: 20 }, // fixa em 20 usuarios por 1min
        { duration: '10s', target: 0 }, // de 20 a 0 usuarios em 10s
    ],
}