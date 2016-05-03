# jsdoc-strip-async-await

A simple jsdoc plugin that very generically strips async and await keywords
from the source file before jsdoc processes it. This allows one to generate
documentation for source files that contain async or await.

## Installation

```shell
$ npm install --save-dev jsdoc-strip-async-await
```

## Usage

Add `jsdoc-strip-async-await` to your jsdoc config file.

[Configuring JSDoc with conf.json](http://usejsdoc.org/about-configuring-jsdoc.html)
```json
{
  "plugins": ["node_modules/jsdoc-strip-async-await"],
}
```

## Notes

As soon as jsdoc supports async and await natively, this plugin should be removed
from your documentation process.
