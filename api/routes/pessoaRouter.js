const { Router } = require('express');
const PessoaControler = require('../controllers/PessoaContoller')

const router = Router();

router.get('/pessoas', PessoaControler.pegaTodasAsPessoas);
router.get('/pessoas/:id', PessoaControler.pegaUmaPessoa);
router.post('/pessoas', PessoaControler.criaPessoa);
router.put('/pessoas/:id', PessoaControler.atualizaPessoa);
router.delete('/pessoas/:id', PessoaControler.apagaPessoa);

module.exports = router