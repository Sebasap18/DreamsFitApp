const Access = require('../../models/core/accessModel');


/**
 * encuentra el acceso
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
async function findAccess(req, res) {
    const email = req.query;
    const secret = req.query;
    const criteria = {};
    if (email) criteria.email = email;
    if (secret) criteria.secret = secret;
    try {
        // Realizar la consulta con las condiciones
        const access = await Access.findAll({
            where: criteria,
        });

        res.json(access);
    } catch (error) {
        console.error('Error al obtener el accesso:', error);
        res.status(500).send('Error al obtener accesso');
    }
}

module.exports = {
    findAccess,
}