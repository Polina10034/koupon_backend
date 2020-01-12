const express = require('express');
const router = express.Router();

const publicController = require('../controllers/publicController');

router.get('/', async (req, res, next) => {
  Coupon.find()
    .then(coupons => {
      res.json(coupons);
    })
    .catch(err => next(err));
});



module.exports = router;

// couponRouter.get('/getCoupon', couponController.getCoupon);
// couponRouter.get('/searchCoupons', couponController.searchCoupon);

// couponRouter.post('/coupon', couponController.addCoupon);
// couponRouter.put('/editCoupon', couponController.editCoupon);
// couponRouter.put('/setCouponInactive', couponController.InactiveCoupon);
// couponRouter.delete('/coupon', couponController.deleteCoupon);

// module.exports = couponRouter;
