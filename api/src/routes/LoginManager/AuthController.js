const { response } = require("./AuthRoutes");
const bcrypt = require('bcryptjs');
const { Usuario } = require('../../db');
const { generarJWT } = require("../../helpers/generar-JWT");


const login = async (req, res = response) => {
    const { email, password } = req.body;
    try {

        //Verificar si el email existe
        const user = await Usuario.findOne({
            where: {
                email: email
            }
        });
        if (!user) {
            return res.status(400).json({ msg: "Usuario / Password no son correctos - correo" });
        }
        //Verificar si el usuario esta activo
        if (!user.state) {
            return res.status(400).json({ msg: "Usuario - estado false" });
        }



        //Verificar la contraseña


        const validPassword = bcrypt.compareSync(password, user.password);

        if (!validPassword) {
            return res.status(400).json({ msg: "Password no es correctos - password" });
        }

        //Generar el JWT
        const token = await generarJWT(user.id);

        res.json({
            ok : true,
            user,
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador"
        });
    }



};
//renew Token
const renewToken = async (req, res) => {

    const user = req.user;

    // Generar un nuevo JWT
    const token = await generarJWT(user.id);

    // Obtener el usuario por UID
    
    console.log("Soy el usuario que renueva el token: ",user.toJSON());

    res.json({
        ok : true,
        user,
        token,
    })
}

module.exports = {
    login,
    renewToken
}