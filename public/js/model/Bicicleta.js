// const redis = require('redis');
// const redisClient = redis.createClient({
//     socket: {
//         host: 'some-redis',
//         port: '6379'
//     },
//     username: '',
//     password: ''
// });

// redisClient.on('error', err => console.log('Redis Server Error', err));


// (async () => {
//     await redisClient.connect();
//     await redisClient.set('ky', 'value');
//     const value = await redisClient.get('key');
//     console.log(value);
//     // await redisClient.disconnect();
// })();

// ----------------------------------------------------------- //

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "mysqldb",
  user: "mysqluser",
  password: "password123",
  database: "redbicis"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("You are connected!");
});
// con.end();

// ------------------------------------------------------------ //

let Bicicleta = function (id, color, modelo, lat, lng) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.lat = lat;
    this.lng = lng;
};

Bicicleta.prototype.toString = function () {
    return `id: ${this.id} | color: ${this.color}`;
};

Bicicleta.allBicis = [];

Bicicleta.listAll =  function() {
    // console.log('Acabo de entrar a listar keys\n\n');
    // redisClient.keys("*", function (err, keys){
    //     console.log("Voy a empezar a iterar");
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.log(keys);
    //     keys.array.forEach(element => {
    //         console.log(element);
    //     });
    // });
}

Bicicleta.add = async function (aBici) {
    try {
        let query = 'INSERT INTO Bicicleta SET ' + con.escape(aBici);
        con.query(query, (err, results, fields) => {
            console.log(results);
        });
        // await redisClient.set(aBici.id, JSON.stringify(aBici));
        console.log(query);
    } catch (error) {
        console.log(error);
    }
    Bicicleta.allBicis.push(aBici);
};

Bicicleta.findById = async function (aBiciId) {
    try {
        // var aBici = Bicicleta.allBicis.find((x) => x.id == aBiciId);
        // var rediBici = await redisClient.get(aBiciId);
        var rediBici = 2;
        // console.log(rediBici);
        // if (aBici) return aBici;
        if (rediBici) return JSON.parse(rediBici);
        else throw new Error(`No existe una Bicicleta con el id: ${aBiciId}`);
    } catch (error) {
        console.log(error);
    }
    
};

Bicicleta.removeById = async function (aBiciId) {
    try {
        var aBici = Bicicleta.findById(aBiciId);
        for (let i = 0; i < Bicicleta.allBicis.length; i++) {
            if (Bicicleta.allBicis[i].id == aBiciId) {
                Bicicleta.allBicis.splice(i, 1);
                break;
            }
        }
        // await redisClient.del(aBiciId);
    } catch (error) {
        console.log(error);
    }
    
    
};

Bicicleta.update = function (id, newBici) {
    this.allBicis = this.allBicis.map( e => {
        if (e.id === id) {
            return newBici;
        }
        return e;
    });
}

module.exports = Bicicleta;