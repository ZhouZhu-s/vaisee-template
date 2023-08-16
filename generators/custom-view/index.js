const isFileExists = require("../_utils/componentExists")

module.exports = {
  description: "create a custom view page",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "custom view page name",
      validate(value) {
        if (/.+/.test(value)) {
          return isFileExists(value) ? "the same container or view page name already exists" : true
        }
        return "view page name required"
      }
    }
  ],
  actions: [
    {
      type: "add",
      path: "../src/views/{{name}}/index.vue",
      templateFile: "./custom-view/index.vue.hbs"
    },
    {
      type: "add",
      path: "../src/views/{{name}}/types.ts",
      templateFile: "./custom-view/types.ts.hbs"
    },
    {
      type: "add",
      path: "../src/views/{{name}}/const.data.ts",
      templateFile: "./custom-view/const.data.ts.hbs"
    }
  ]
}
