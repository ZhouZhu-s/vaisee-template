module.exports = {
  description: 'create a custom modal that includes create and update and reset functions',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'custom modal name',
      validate(value) {
        if (!value) {
          return 'name required';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'path',
      message: 'relative path under src',
      validate(value) {
        if (!value) {
          return 'path required';
        }
        return true;
      }
    }
  ],
  actions: [
    {
      type: 'add',
      path: '../src/{{path}}/{{name}}/index.vue',
      templateFile: './base-modal/index.vue.hbs'
    },
    {
      type: 'add',
      path: '../src/{{path}}/{{name}}/types.ts',
      templateFile: './base-modal/types.ts.hbs'
    }
  ]
};
