const router = require('express').Router();
const { Collection } = require('../../models');
const withAuth = require('../../utils/auth');
const {log} = new (require('../../utils/logger'))
// Creates a new plant to add to the user's collection
// We probably should have named the collection table collection-plant or something - Charles
/*
  COLLECTION EXPLAINED - TLDR
  Collection is the model used to represent a user's SINGLE plant
  user_id in the model is used to tie each row to an id in the User table.
*/


router.post('/save', async (req, res) => {
  log('============================', 'green');
  log('updating user');
  log(req.body, 'red', 'bgWhite');
  try {
    const collection = await Collection.findByPk(req.body.id)
    collection.plant_name = req.body.newName;
    
    collection.save();
    res.status(200).json(collection);
   
  } catch (err) {
    console.error(err)
    res.status(400).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  log('adding to collection', 'white', 'bgBlue');
  req.body.user_id = req.session.user_id;
  log(req.body, 'white', 'bgBlue');
  try {
    const newCollection = await Collection.create({
      ...req.body
    });

    res.status(200).json(newCollection);
  } catch (err) {
    res.status(400).json(err);
  }
});


// Delete a collection from Collection table by user_id
// This worked as expected during demo, have not tested since - Charles
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
