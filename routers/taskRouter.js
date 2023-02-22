const express = require("express");
const taskController = require("../controllers/taskController");
const router = express.Router();


router.get('/', taskController.getTasks)
router.get('/:id', taskController.getTask)
router.post('/',taskController.creatTask)
router.put('/:id',taskController.updateTask)
router.delete('/:id',taskController.deletTask)


module.exports = router;
