const router = require("express").Router();
const {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
} = require("../controllers/categoryController");

const { protect } = require("../middleware/auth");
const { isAdmin } = require("../middleware/admin");

router.get("/", getCategories);
router.get("/:id", getCategoryById);

router.post("/", protect, isAdmin, createCategory);
router.put("/:id", protect, isAdmin, updateCategory);
router.delete("/:id", protect, isAdmin, deleteCategory);

module.exports = router;

