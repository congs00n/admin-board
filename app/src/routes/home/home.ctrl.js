'use strict';

const home = (req, res) => {
  res.render("home/index");
};

const tables = (req, res) => {
  res.render("home/tables");
};

module.exports = {
  home,
  tables
}