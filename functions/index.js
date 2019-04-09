const express = require('express');
const cors = require('cors');
const functions = require('firebase-functions');
const app = express();
const api = functions.https.onRequest(app);
var Correios = require('./correios');
const correios = Correios();

app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded());

app.post('/calc_frete', (req, response) => {
    const nCdServico = req.body.nCdServico;
    const sCepOrigem = req.body.sCepOrigem;
    const sCepDestino = req.body.sCepDestino;
    const nVlPeso = req.body.nVlPeso;
    const nCdFormato = req.body.nCdFormato;
    const nVlComprimento = req.body.nVlComprimento;
    const nVlAltura = req.body.nVlAltura;
    const nVlLargura = req.body.nVlLargura;
    const nVlDiametro = req.body.nVlDiametro;
    var args = {
        nCdServico: nCdServico,
        sCepOrigem: sCepOrigem,
        sCepDestino: sCepDestino,
        nVlPeso: nVlPeso,
        nCdFormato: nCdFormato,
        nVlComprimento: nVlComprimento,
        nVlAltura: nVlAltura,
        nVlLargura: nVlLargura,
        nVlDiametro: nVlDiametro
    }
    correios.calcPrecoPrazo(args, (err, res) => { 
       response.json(res[0]) 
    });
});

exports.widgets = functions.https.onRequest(app);