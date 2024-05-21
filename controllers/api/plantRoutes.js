const router = require('express').Router();
const { Plant } = require('../../models');
const withAuth = require('../../utils/auth');
// Creates a plant to add to the Plant table 
// I'm confused here - Do we want this?? - Charles
router.post('/?', withAuth, async (req, res) => {
  console.log('trying to make a plant')
  try {
    const newPlant = await Plant.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPlant);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Deletes a plant - IS THIS DELETING A PLANT FROM OUR STATIC PLANT TABLE??? - Charles
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const plantData = await Plant.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!plantData) {
      res.status(404).json({ message: 'No plant found with this id!' });
      return;
    }

    res.status(200).json(plantData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ??
router.get('/test', async(req, res) => {
  try{
    let watering = 'Average';
    let sunlight = 'full sun';
    let cycle = 'Perennial';
    const plants = await Plant.findAll({
      where: {
        watering: 'Average'
      }
  });
  console.log(plants);
  res.status(200).json(plants);
  }catch(err){
    res.status(500).json(err);
  }
});


module.exports = router;
