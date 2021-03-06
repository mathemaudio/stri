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

<!---
=================================================================
=================================================================
=================================================================
=================================================================
=================================================================
=================================================================
=================================================================
=================================================================
=================================================================
=================================================================
=================================================================
=================================================================
=================================================================
=================================================================
=================================================================
=================================================================
=================================================================
=================================================================
=================================================================
=================================================================
=================================================================
=================================================================
-->
### Methods

- [between](index.stri.md#between)
- [cutFirst](index.stri.md#cutfirst)
- [cutLast](index.stri.md#cutlast)
- [getBetween](index.stri.md#getbetween)
- [getBetweenClose](index.stri.md#getbetweenclose)
- [getFirst](index.stri.md#getfirst)
- [getLast](index.stri.md#getlast)
- [has](index.stri.md#has)
- [includeMe](index.stri.md#includeme)
- [oust](index.stri.md#oust)
- [swap](index.stri.md#swap)


## Methods

### between

??? `Static` **between**(`s`, `borderA`, `borderB`, `aIsFirst`, `bIsFirst`): [stringOrUndefined](../modules/index.md#stringorundefined)

returns string between borders

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | [stringOrUndefined](../modules/index.md#stringorundefined) | - |
| `borderA` | [stringOrUndefined](../modules/index.md#stringorundefined) | left border |
| `borderB` | [stringOrUndefined](../modules/index.md#stringorundefined) | right border |
| `aIsFirst` | `boolean` | true if borderA is first, false if is last |
| `bIsFirst` | `boolean` | true if borderB is first, false if is last |

#### Returns

[stringOrUndefined](../modules/index.md#stringorundefined)

#### Defined in

[index.ts:103](https://github.com/mathemaudio/stri/blob/d15d98a/src/index.ts#L103)

___

### cutFirst

??? `Static` **cutFirst**(`s`, `splitter`): [stringOrUndefined](../modules/index.md#stringorundefined)

fast way to cut away a first part split by smth, for instance
`"lalala/hahaha/bebebe".cutFirst('/')` will return `"hahaha/bebebe"`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | [stringOrUndefined](../modules/index.md#stringorundefined) |
| `splitter` | [stringOrUndefined](../modules/index.md#stringorundefined) |

#### Returns

[stringOrUndefined](../modules/index.md#stringorundefined)

#### Defined in

[index.ts:38](https://github.com/mathemaudio/stri/blob/d15d98a/src/index.ts#L38)

___

### cutLast

??? `Static` **cutLast**(`s`, `splitter`): [stringOrUndefined](../modules/index.md#stringorundefined)

fast way to cut away a last part split by smth, for instance
`"lalala/hahaha/bebebe".cutLast('/')` will return `"lalala/hahaha"`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | [stringOrUndefined](../modules/index.md#stringorundefined) |
| `splitter` | [stringOrUndefined](../modules/index.md#stringorundefined) |

#### Returns

[stringOrUndefined](../modules/index.md#stringorundefined)

#### Defined in

[index.ts:27](https://github.com/mathemaudio/stri/blob/d15d98a/src/index.ts#L27)

___

### getBetween

??? `Static` **getBetween**(`s`, `borderA`, `borderB`): [stringOrUndefined](../modules/index.md#stringorundefined)

returns string between borderA and B. Gets between the first A and the LAST B

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | [stringOrUndefined](../modules/index.md#stringorundefined) |
| `borderA` | [stringOrUndefined](../modules/index.md#stringorundefined) |
| `borderB` | [stringOrUndefined](../modules/index.md#stringorundefined) |

#### Returns

[stringOrUndefined](../modules/index.md#stringorundefined)

#### Defined in

[index.ts:80](https://github.com/mathemaudio/stri/blob/d15d98a/src/index.ts#L80)

___

### getBetweenClose

??? `Static` **getBetweenClose**(`s`, `borderA`, `borderB`): [stringOrUndefined](../modules/index.md#stringorundefined)

returns string between borderA and B. Gets between the FIRST A and the FIRST B

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | [stringOrUndefined](../modules/index.md#stringorundefined) |
| `borderA` | [stringOrUndefined](../modules/index.md#stringorundefined) |
| `borderB` | [stringOrUndefined](../modules/index.md#stringorundefined) |

#### Returns

[stringOrUndefined](../modules/index.md#stringorundefined)

#### Defined in

[index.ts:89](https://github.com/mathemaudio/stri/blob/d15d98a/src/index.ts#L89)

___

### getFirst

??? `Static` **getFirst**(`s`, `splitter`): [stringOrUndefined](../modules/index.md#stringorundefined)

fast way get the first part split by smth, for instance
`"lalala/hahaha/bebebe".getFirst('/')` will return `"lalala"`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | [stringOrUndefined](../modules/index.md#stringorundefined) |
| `splitter` | [stringOrUndefined](../modules/index.md#stringorundefined) |

#### Returns

[stringOrUndefined](../modules/index.md#stringorundefined)

#### Defined in

[index.ts:58](https://github.com/mathemaudio/stri/blob/d15d98a/src/index.ts#L58)

___

### getLast

??? `Static` **getLast**(`s`, `splitter`): [stringOrUndefined](../modules/index.md#stringorundefined)

fast way to get the last part split by smth, for instance
`"lalala/hahaha/bebebe".getLast('/')` will return `"bebebe"`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | [stringOrUndefined](../modules/index.md#stringorundefined) |
| `splitter` | [stringOrUndefined](../modules/index.md#stringorundefined) |

#### Returns

[stringOrUndefined](../modules/index.md#stringorundefined)

#### Defined in

[index.ts:49](https://github.com/mathemaudio/stri/blob/d15d98a/src/index.ts#L49)

___

### has

??? `Static` **has**(`s`, `what`): `boolean`

does this string contain `what`?

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | [stringOrUndefined](../modules/index.md#stringorundefined) |
| `what` | `string` |

#### Returns

`boolean`

#### Defined in

[index.ts:73](https://github.com/mathemaudio/stri/blob/d15d98a/src/index.ts#L73)

___

### includeMe

??? `Static` **includeMe**(): `string`

needs to be called once in the very beginning of your app

#### Returns

`string`

#### Defined in

[index.ts:18](https://github.com/mathemaudio/stri/blob/d15d98a/src/index.ts#L18)

___

### oust

??? `Static` **oust**(`s`, `what`): `boolean`

Removes all `what`s in the string
In fact, same as `str.split(what).join('')`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | [stringOrUndefined](../modules/index.md#stringorundefined) | - |
| `what` | [stringOrUndefined](../modules/index.md#stringorundefined) | what to remove |

#### Returns

`boolean`

#### Defined in

[index.ts:117](https://github.com/mathemaudio/stri/blob/d15d98a/src/index.ts#L117)

___

### swap

??? `Static` **swap**(`s`, `from`, `to`): `undefined` \| `string`

Replaces `from` with `to`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | [stringOrUndefined](../modules/index.md#stringorundefined) | - |
| `from` | [stringOrUndefined](../modules/index.md#stringorundefined) | what to replace |
| `to` | [stringOrUndefined](../modules/index.md#stringorundefined) | to what to replace |

#### Returns

`undefined` \| `string`

#### Defined in

[index.ts:67](https://github.com/mathemaudio/stri/blob/d15d98a/src/index.ts#L67)
