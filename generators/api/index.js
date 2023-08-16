module.exports = {
  description: 'create a api request',
  prompts: [
    {
      type: 'input',
      name: 'fileName',
      message: 'file name',
      validate(value) {
        if (!value) {
          return 'file name required';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'functionName',
      message: 'api function name',
      validate(value) {
        if (!value) {
          return 'function name required';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'api',
      message: 'api path',
      validate(value) {
        if (!value) {
          return 'api path required';
        }
        return true;
      }
    }
  ],
  actions: [
    {
      type: 'add',
      path: '../src/api/{{fileName}}/index.ts',
      templateFile: './api/index.ts.hbs'
    },
    {
      type: 'add',
      path: '../src/api/{{fileName}}/types.ts',
      templateFile: './api/types.ts.hbs'
    }
  ]
};
