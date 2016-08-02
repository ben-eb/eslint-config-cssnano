# 3.1.3

* Resolves an issue where computed import references were being flagged.

# 3.1.2

* Resolves an issue where ESLint would produce false positives for undefined
  variables when using the Flow config.

# 3.1.1

* Fixed build.
* Fixed an issue where the default configuration was not being referenced
  correctly in the Flow configuration.

# 3.1.0

* Added a basic Flow configuration.

# 3.0.2

* Fixes an issue where JSON was being parsed for export statements.

# 3.0.1

* Codifies lack of 0.12 support.

# 3.0.0

* Added new rules to validate module imports/exports.
* Tweaks for code style.
* Breaking: ESLint 3 no longer supports Node versions less than 4.

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
