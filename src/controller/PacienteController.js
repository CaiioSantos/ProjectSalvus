const Paciente = require('../models/Paciente');

class PacienteController {
    async store(req, res){
        const paciente = await Paciente.create({
            name: req.body.name ,
            medicament: req.body.medicament});

        return res.json(paciente);
    }
    async list(req, res){
        const paciente = await Paciente.findAll()
        return res.json(paciente)
    }
    
    async update (req, res){
        const paciente = await Paciente.findOne({ where:{id:req.params.id}})
        const pacienteAtualizado = await paciente.update(req.body);
        return res.json(pacienteAtualizado);
    }
    async destroy(req, res){
        const paciente = await Paciente.findOne({ where:{id:req.params.id}})
        paciente.destroy();
        return res.send();
    }
    async show(req, res){
        const paciente = await Paciente.findOne({ where:{id:req.params.id}})
        return res.json(paciente);
    }
}
module.exports = new PacienteController;