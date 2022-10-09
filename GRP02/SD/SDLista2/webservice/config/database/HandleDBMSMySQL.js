const fs = require('fs');
const mysql = require('mysql');

class HandleDBMSMySQL {

    constructor(host = null, database = null, user = null, password = null, port = null) {
        var envFile = JSON.parse(fs.readFileSync('../config/server/env.json', 'utf8', 'r'));
        if (envFile) {
            this._host = (typeof host !== 'string' || host === null) ? envFile.host : host;
            this._database = (typeof database !== 'string' || database === null) ? envFile.database : database;
            this._user = (typeof user !== 'string' || user === null) ? envFile.user : user;
            this._password = (typeof password !== 'string' || password === null) ? envFile.password : password;
            this._port = envFile.port;
        }
        this.connect();
    }

    connect() {
        this.connection = mysql.createConnection({
            host: this._host,
            database: this._database,
            user: this._user,
            password: this._password,
            port: this._port
        });
    }

    queryInsert(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, results) => {
                if (err) { reject(err); }
                else { resolve(results); }
            });
        });
    }

    querySelect(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, results, fields) => {
                if (err) { reject(err); }
                else {
                    var resultsJSON = { 'metadata': {}, 'data': {} };
                    resultsJSON.metadata = fields.map((r) => Object.assign({}, r));
                    resultsJSON.data = results.map((r) => Object.assign({}, r));
                    resolve(resultsJSON);
                }
            });
        });
    }

    queryUpdate(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, results) => {
                if (err) { reject(err); }
                else { resolve(results); }
            });
        });
    }

    queryDelete(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, results) => {
                if (err) { reject(err); }
                else { resolve(results); }
            });
        });
    }

    close() {
        return new Promise((resolve, reject) => {
            this.connection.end(err => {
                if (err) { reject(err); }
                else { resolve(); }
            });
        });
    }

}

module.exports = HandleDBMSMySQL;