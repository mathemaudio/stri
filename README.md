<!---
To create this package, I read this cool article: https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c

In a nutshell, to publish:

* increase the version in package.json
* `npm test`
* `npm publish` - this will also run the `npm prepare` before publishing

If it requests login, do `npm login` and try again

-->

Here goes yet another string manipulation package.

# Another one!?

Well, there are many other string npm packages, like `string` and others. `stri` contains functionality that I need, but other packages miss. Only a handful of functions, but useful ones.

# Installation

`npm i stri -S`

# Usage

To have all functions at your disposal, import it and then do this in your main:

`Stri.includeMe()`

After that all methods will be available as `String` members.




