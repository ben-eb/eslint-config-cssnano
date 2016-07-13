module.exports = {
    'plugins': [
        'flow-vars',
        'flowtype',
    ],

    'extends': [
        './index.js',
    ],

    'rules': {
        'flowtype/space-after-type-colon': [2, 'always'],
        'flowtype/space-before-type-colon': [2, 'never'],
        'flow-vars/define-flow-type': 2,
        'flow-vars/use-flow-type': 2,
    },
};
