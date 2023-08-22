const componentGenerator = require('./component/index');
const viewGenerator = require('./view/index');
const baseModalGenerator = require('./base-modal/index');
const customBaseModalGenerator = require('./custom-base-modal/index');
const apiGenerator = require('./api/index');
const customViewGenerator = require('./custom-view/index');
const addRouterGenerator = require('./router/index');
const svgComponentGenerator = require('./svg-component/index');

module.exports = function (plop) {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('svg-component', svgComponentGenerator);
  plop.setGenerator('view', viewGenerator);
  plop.setGenerator('custom-view', customViewGenerator);
  plop.setGenerator('base-modal', baseModalGenerator);
  plop.setGenerator('custom-base-modal', customBaseModalGenerator);
  plop.setGenerator('api', apiGenerator);
  plop.setGenerator('add-router', addRouterGenerator);
};
