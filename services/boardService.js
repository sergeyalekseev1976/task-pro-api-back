const { Board } = require("../models/board");

const getAll = async (owner) => {
  try {
    const result = await Board.find({ owner }, "-createdAt -updatedAt");
    return result;
  } catch (error) {
    return error;
  }
};

const getOne = async (id) => {
  try {
    const result = await Board.findById(id, "-createdAt -updatedAt");
    return result;
  } catch (error) {
    return error;
  }
};

// const getBackgrounds = async () => {
//     try {
//         const result = await Board.
//         return result
//     } catch (error) {
//         return error
//     }
// }

const add = async (body) => {
  try {
    const result = await Board.create(body);
    return result;
  } catch (error) {
    return error;
  }
};

const update = async (id, body) => {
  try {
    const result = await Board.findByIdAndUpdate(id, body, { new: true });
    return result;
  } catch (error) {
    return error;
  }
};

const deleteOne = async (id) => {
  try {
    const result = await Board.findByIdAndRemove(id);
    return result;
  } catch (error) {
    return error;
  }
};

const updateActiveStatus = async (id, body) => {
  try {
    const result = await Board.findByIdAndUpdate(id, body, {
      new: true,
      select: "active",
    });
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = {
  add,
  deleteOne,
  update,
  getAll,
  getOne,
  updateActiveStatus,
};
