const connection = require('../database/connection');

const metodos = {

    async create(req, res) {

        const { id } = req.body;

        const ong = await connection('ongs').where('id', id).select('name').first(); 

        if (!ong){
            res.status(400).json({ error : 'No ong found with this id.' });
        }

        return res.json({ong});
    },  
        
    async index(req, res) {  

        const ong_id = req.headers.authorization;

        const incidents = await connection('incidents')
          .where('ong_id',ong_id)
          .select('*'); 

        return res.json(incidents);
    }

}

module.exports = metodos;