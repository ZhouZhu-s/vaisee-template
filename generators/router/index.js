module.exports = {
  description: 'create a page router',
  prompts: [
    {
      type: 'input',
      name: 'routeName',
      message: 'route name',
      validate(value) {
        if (!value) {
          return 'route name required';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'routePath',
      message: 'route path',
      validate(value) {
        if (!value) {
          return 'route path required';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'componentPath',
      message: '@/views/{{componentPath}}/index.vue',
      validate(value) {
        if (!value) {
          return 'component path required';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'routeTitle',
      message: 'route title',
      validate(value) {
        if (!value) {
          return 'route title required';
        }
        return true;
      }
    }
  ],
  actions: [
    {
      type: 'modify',
      path: '../src/router/routes.ts',
      pattern: /(\/\/-- append router here --)/gi,
      templateFile: './router/index.ts.hbs'
    },
  ]
};
