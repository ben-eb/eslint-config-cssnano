# 3.0.0

* Added new rules to validate module imports/exports.
* Tweaks for code style.

# 2.1.0

* Now uses babel-eslint to parse.
* Replaced *object-curly-spacing* with the fix from *eslint-plugin-babel*; now
  `export foo from './foo'` is recognised correctly.

# 2.0.0

* Updated to eslint 2.0.0 (thanks to @ntwb).
* Removed `consistent-return` rule as it now always expects functions to
  return a value (which isn't always necessary).

# 1.0.0

* Initial release.
