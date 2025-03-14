const db = require('../models');
const Temple = db.temples;

const apiKey = process.env.API_KEY;

exports.create = async (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  // Create a Temple
  const temple = new Temple({
    _id: req.body._id,
    temple_id: req.body.temple_id,
    additionalInfo: req.body.additionalInfo,
    name: req.body.name,
    location: req.body.location,
    dedicated: req.body.dedicated,
  });

  try {
    const data = await temple.save();
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message:
        err.message || 'Some error occurred while creating the Temple.',
    });
  }
};

// Retrieve all Temples
exports.findAll = async (req, res) => {
  if (req.header('apiKey') !== apiKey) {
    res.send('Invalid apiKey, please read the documentation.');
    return;
  }

  try {
    const data = await Temple.find({}).select('-_id -__v');
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message:
        err.message || 'Some error occurred while retrieving temples.',
    });
  }
};

// Find a single Temple with an id
exports.findOne = async (req, res) => {
  const temple_id = req.params.temple_id;
  if (req.header('apiKey') !== apiKey) {
    res.send('Invalid apiKey, please read the documentation.');
    return;
  }

  try {
    const data = await Temple.find({ temple_id: temple_id }).select('-_id -__v');
    if (!data)
      res
        .status(404)
        .send({ message: 'Not found Temple with id ' + temple_id });
    else res.send(data[0]);
  } catch (err) {
    res.status(500).send({
      message: 'Error retrieving Temple with temple_id=' + temple_id,
    });
  }
};

// Update a Temple by the id in the request
exports.update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update can not be empty!',
    });
  }

  const id = req.params.id;

  try {
    const data = await Temple.findByIdAndUpdate(id, req.body, {
      useFindAndModify: false,
    }).select('-_id -__v');
    if (!data) {
      res.status(404).send({
        message: `Cannot update Temple with id=${id}. Maybe Temple was not found!`,
      });
    } else {
      res.send({ message: 'Temple was updated successfully.' });
    }
  } catch (err) {
    res.status(500).send({
      message: 'Error updating Temple with id=' + id,
    });
  }
};

// Delete a Temple with the specified id in the request
exports.delete = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Temple.findByIdAndDelete(id).select('-_id -__v');
    if (!data) {
      res.status(404).send({
        message: `Cannot delete Temple with id=${id}. Maybe Temple was not found!`,
      });
    } else {
      res.send({
        message: 'Temple was deleted successfully!',
      });
    }
  } catch (err) {
    console.error(err); // Log the error
    res.status(500).send({
      message: 'Could not delete Temple with id=' + id,
    });
  }
};

// Delete all Temples from the database.
exports.deleteAll = async (req, res) => {
  try {
    const data = await Temple.deleteMany({}).select('-_id -__v');
    res.send({
      message: `${data.deletedCount} Temples were deleted successfully!`,
    });
  } catch (err) {
    res.status(500).send({
      message:
        err.message || 'Some error occurred while removing all temple.',
    });
  }
};

// Find all published Temples
exports.findAllPublished = async (req, res) => {
  try {
    const data = await Temple.find(
      {
        dedicated: { $nin: ['Construction', 'Announced'] }, //Announced and Construction are not published
      },
      '-_id -__v' 
    );
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: err.message || 'Some error occurred while retrieving published temples.',
    });
  }
};

