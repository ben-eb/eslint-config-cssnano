module.exports = {
    'plugins': [
        'flowtype',
    ],

    'extends': [
        'index.js',
    ],

    'rules': {
        'flowtype/space-after-type-colon': [2, 'always'],
        'flowtype/space-before-type-colon': [2, 'never'],
    },
};
