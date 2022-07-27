
const Router = require("express");
const { getPacientes, postPaciente, getOnePacienteAndUsers, deletePaciente, updatePaciente } = require("./pacienteController");
const {check} = require('express-validator');
const { esAdminRol } = require("../../middlewares/validarAdmin");
const { verficarEmail , verificarId} = require("../../helpers/db-validators");
const validarJWT = require("../../middlewares/jwt-validator");
const validarCampos = require("../../middlewares/validar-campos");


const router = Router()
//Tar los pacientes
router.get('/',getPacientes);
//Postea un paciente
router.post('/',
[check('email','No es un email valido').isEmail(),
check('email').custom(verficarEmail),
check('name','Nombre requerido').not().isEmpty(),
check('password','La contraseña debe ser minimo de 6 characteres').isLength({min : 6})], 
postPaciente);
//Trae un paciente por id.
router.get('/:id',[
    validarCampos,
    check('id').custom(verificarId),

], getOnePacienteAndUsers);
router.put("/:id", updatePaciente)
router.delete('/:id',[
    validarJWT,
    esAdminRol,
    check('id', 'No es un is valido').custom(verificarId),
    validarCampos
],deletePaciente)


module.exports = router;