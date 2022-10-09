const fs = require('fs');
const ip = require('ip');
const os = require('os');
const moment = require('moment');
const HandleDBMSMySQL = require('../config/database/HandleDBMSMySQL');

class ModelAccess {
    constructor() {
        this._HandleDBMSMySQL = new HandleDBMSMySQL();
        this.envFile = JSON.parse(fs.readFileSync('../config/server/env.json', 'utf8', 'r'));
    }

    destroy(param = null) {
        var varToString = varObj => Object.keys(varObj)[0];
        new Error('Parâmetros incorretos para a classe: \`%s\`, parâmetro \`%s\`', this.constructor.name, varToString({ param }));
        delete this.varObj;
    }
    
    postAccess(timestamp = null, hostname = null, ip = null) {
        this._timestamp = (typeof timestamp !== 'string' || timestamp === null) ? this.destroy(timestamp) : timestamp;
        this._hostname = (typeof hostname !== 'string' || hostname === null) ? this.destroy(hostname) : hostname;
        this._ip = (typeof ip !== 'string' || ip === null) ? this.destroy(ip) : ip;
    
        var table = 'access';
        var sqlInsert = `insert into ${this.envFile.database}.${table} values(null, '${this._timestamp}', '${this._hostname}', '${this._ip}')`;
 
        this._HandleDBMSMySQL.queryInsert(sqlInsert)
            .then(res => { console.log(res); })
            .catch(err => { console.log(err); });
        //
        this._HandleDBMSMySQL.close();
    }
}

module.exports = ModelAccess;

 //Descomentar abaixo para fins de teste
 //Entrar na pasta e rodar o node diretamente: node ModelAccess.js
 var a = new ModelAccess();
 a.postAccess(moment(new Date()).format('YYYY-MM-DD HH:mm:ss'), os.hostname(), ip.address('lo', 'ipv4'));
