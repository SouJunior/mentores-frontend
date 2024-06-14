module.exports = {
  extends: ['plugin:@next/next/recommended'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  root: true,
  rules: {
    '@next/next/no-img-element': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/?(*.)+(test|spec).{ts,tsx}'],
      },
    ],
  },
};
