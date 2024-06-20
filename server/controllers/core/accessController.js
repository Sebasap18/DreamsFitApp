const Access = require('../../models/core/accessModel');
const sequelize = require('../../config/dbConfig/db');
const {QueryTypes} = require('sequelize')


/**
 * Endpoint de login
 * @param req request
 * @param res response of request
 * @returns {Promise<void>}
 */
async function loginAccess(req, res) {
    const {email, secret} = req.query
    console.log(email, secret, "access data");
    let query = `SELECT * 
                        FROM core.access acc 
                        WHERE acc.email = :email
                        AND acc.secret = :secret`;
    const criteria = {};
    if (email) criteria.email = email;
    if (secret) criteria.secret = secret;
    try {
        const access = await sequelize.query(query, {
            replacements: criteria,
            type: QueryTypes.SELECT
        });
        if (access.length === 0) {
            return res.status(404).send('No registrado. Verifique los datos de usuario y contraseña')
        }
        console.log('Authorized access for ==>{}', access[0].email)
        res.status(200).send('Acceso autorizado');
    } catch (error) {
        console.error('Error al obtener el accesso:', error);
        res.status(500).send('Error al obtener accesso');
    }
}

module.exports = {
    loginAccess,
}