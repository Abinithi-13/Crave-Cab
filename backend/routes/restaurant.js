const express = require("express");
const router = express.Router({ mergeParams: true });
const { analyzeRestaurantReviews } = require("../controllers/ai.controller");

const {
  getAllRestaurants,
  createRestaurant,
  getRestaurant,
  deleteRestaurant,
} = require("../controllers/restaurantController");

router.put("/restaurants/:storeId/analyze", analyzeRestaurantReviews);


const { protect } = require("../controllers/authController");
const { authorizeRoles } = require("../middlewares/authorizeRoles");

const menuRoutes = require("./menu");

router
  .route("/")
  .get(getAllRestaurants)
  .post(protect, authorizeRoles("admin"), createRestaurant);

router
  .route("/:storeId")
  .get(getRestaurant)
  .delete(protect, authorizeRoles("admin"), deleteRestaurant);

router.use("/:storeId/menus", menuRoutes);

module.exports = router;
