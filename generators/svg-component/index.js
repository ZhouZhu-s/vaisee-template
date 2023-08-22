module.exports = {
  description: "create a public svg component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "component name",
      validate(value) {
        if (!value) {
          return 'name required';
        }
        return true;
      }
    }
  ],
  actions: [
    {
      type: "add",
      path: "../src/components/svgs/{{name}}/index.vue",
      templateFile: "./svg-component/index.vue.hbs"
    },
    {
      type: "add",
      path: "../src/components/svgs/{{name}}/types.ts",
      templateFile: "./svg-component/types.ts.hbs"
    }
  ]
}
