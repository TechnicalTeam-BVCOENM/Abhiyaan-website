module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'chore']],
    'subject-case': [2, 'always', 'sentence-case'],
  },
  helUrl: 'Contact Abhiyaan website developers for more info @2023-24.',
};
