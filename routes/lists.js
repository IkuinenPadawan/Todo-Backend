const express = require('express');
const router = express.Router();
const lists = require('../database/listrepository');

const get = async (req, res, next) => {
  try {
    let result;
    const context = {};

    if (req.params.id) {
      context.id = +req.params.id;
      result = await lists.find(context);
      res.status(200).send(result);
    } else {
      context.offset = +req.query.offset;
      context.limit = +req.query.limit;
      result = await lists.find(context);
      res.status(200).send(result);
    }
  } catch (e) {
    res.status(404).end(e.message);
    next(e);
  }
};

router.route('/lists/:id([1-9]*)?').get(get);

module.exports = router;
