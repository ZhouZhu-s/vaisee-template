module.exports = {
  description: 'create a base modal',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'custom modal name',
      validate(value) {
        if (!value) {
          return 'modal name required';
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
