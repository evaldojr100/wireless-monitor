const RouterOSAPI = require("node-routeros").RouterOSAPI;

//Passa os parametros para a conexao
const conn = new RouterOSAPI({
    host: '172.31.30.253',
    user: 'admin',
    password: '',
    timeout: '2',
})

//Realiza a Conexao
conn.connect()
    //Buscar Interfaces
    .then( () =>{
        console.log('Conexao Realizada')
        conn.write("/interface/print").then((data) =>{
            data.map(interface =>{ console.log(interface.name)})
        }).catch((err) => console.log(err))
    })

    //Busca ips Setados
    .then ( () =>{
        conn.write("/ip/address/print").then((data) =>{
            data.map(ip => {console.log(ip.address)})
        }).catch((err)=> console.log(err))    
    })
    
    .catch( err =>{
        console.log(err)
    })
    
