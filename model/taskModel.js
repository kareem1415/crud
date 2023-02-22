const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

taskSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

taskSchema.set("toJSON", {
  virtuals: true,
});

const Task = mongoose.model("task", taskSchema);
module.exports = Task;
