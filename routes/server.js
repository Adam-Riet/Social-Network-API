const router = require('express').Router();
const apiRoutes = require('./api');
const userRoutes = require('./routes/api/userRoutes');
const thoughtRoutes = require('./routes/api/thoughtRoutes');


router.use('/api', apiRoutes);
app.use('/users', userRoutes);
app.use('/thoughts', thoughtRoutes);

router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;