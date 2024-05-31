// simulação dados reais

export default function(){
    let userId = Math.floor(Math.random() * 100)
    let res = http.get(`https://test.k6.io/user/${userId}`)
    check(res, { 'status was 200': (r) => r.status === 200 })
}


// integrando com api externa

export default function(){
    let apiKey = __ENV.API_KEY
    let res = http.get(`https://api.external.com/data?api_key=${apiKey}`)
    check(res, { 'status was 200':  (r) => r.status === 200 })

}