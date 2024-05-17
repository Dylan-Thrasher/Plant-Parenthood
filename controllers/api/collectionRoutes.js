const router = require('express').Router();
const { Collection } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  console.log('where iin collectionrouts post')
  
  req.body.user_id = req.session.user_id;
  console.log(req.body)
  req.body.user_id = req.session.user_id
  try {
    const newCollection = await Collection.create({
      ...req.body
    });

    res.status(200).json(newCollection);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const collectionData = await Collection.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!collectionData) {
      res.status(404).json({ message: 'No collection found with this id!' });
      return;
    }

    res.status(200).json(collectionData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
