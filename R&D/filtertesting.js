// below was put into plantRoutes to test for watering. Was able to return all watering results, 
// was advised against filtering for sunlight as the only version considered feasible
// involved creating a for loop, adding time to the filter processing.
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
