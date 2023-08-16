const isFileExists = require("../_utils/componentExists")

module.exports = {
  description: "create a public component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "component name",
      validate(value) {
        if (/.+/.test(value)) {
          return isFileExists(value) ? "the same container or component name already exists" : true
        }
        return "component name required"
      }
    }
  ],
  actions: [
    {
      type: "add",
      path: "../src/components/{{name}}/index.vue",
      templateFile: "./component/index.vue.hbs"
    },
    {
      type: "add",
      path: "../src/components/{{name}}/types.ts",
      templateFile: "./component/types.ts.hbs"
    }
  ]
}
