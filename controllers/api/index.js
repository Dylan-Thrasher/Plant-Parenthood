const router = require('express').Router();
const userRoutes = require('./userRoutes');
const plantRoutes = require('./plantRoutes');
const collectionRoutes = require('./collectionRoutes')

router.use('/users', userRoutes);
router.use('/plants', plantRoutes);
router.use('/collection', collectionRoutes);

module.exports = router;
