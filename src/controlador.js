const axios = require('./API');
const API_key = require('./ApiKey');
const fs = require('fs/promises');


const listarEmpresas = async (req, res) => {
    const { dominioEmpresa } = req.query;

    try {
        const buscar = await axios.get(`?api_key=${API_key}&domain=${dominioEmpresa}`);

        const { name } = buscar.data;

        if (name === null) {
            return res.status(200).json(buscar.data);
        }

        const lerArrayEmpresas = (await fs.readFile('src/empresas.json')).toString();

        const arrayEmpresas = JSON.parse(lerArrayEmpresas);

        const verificaArray = arrayEmpresas.some(empresa => empresa.name === name);

        if (verificaArray) {
            return res.status(200).json(buscar.data);
        };

        arrayEmpresas.push(buscar.data);

        const arrayEmpresasString = JSON.stringify(arrayEmpresas);

        await fs.writeFile('src/empresas.json', arrayEmpresasString);

        return res.status(200).json(buscar.data);
    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    };

};



module.exports = { listarEmpresas }