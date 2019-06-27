// Get route => to get Deal info

router.get('/user/deal', (req, res, next) => {
   
  if(req.isAuthenticated()) {

    const id = req.user._id;
    console.log(id);

    Deal.find({'userId' : id}).then ((result) => {
        console.log(result);
        const id = result[0].quoteId;
        console.log(id);
        const idu = result[0].userId;
    )}
        .catch (err => {
          res.status(500).json({ message: "Something went wrong"})
        
        })

    Quote.find({'_id' : id}).then ((result) => {
        res.send(result);
      })
      .catch (err => {
        res.status(500).json({ message: "Something went wrong"})
      
      })
      Request.find({'userid' : idu}).then((result) => {
        res.send(result);
      })
      .catch (err => {
        res.status(500).json({ message: "Something went wrong"})
      
  
      })
      
    } else {
    res.json({message: "You are not logged in"})
  }

});
