/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

// Based on GitHub theme, toned down to allow for background colors.
var theme = {
  plain: {
    color: 'black',
    backgroundColor: 'red'
  },
  styles: [{
    types: ['comment', 'prolog', 'doctype', 'cdata'],
    style: {
      color: 'red',
      fontStyle: 'italic'
    }
  }, {
    types: ['namespace'],
    style: {
      opacity: 1
    }
  }, {
    types: ['string', 'attr-value'],
    style: {
      color: 'yellow'
    }
  }, {
    types: ['punctuation', 'operator'],
    style: {
      color: '#b58a5e'
    }
  }, {
    types: ['entity', 'url', 'symbol', 'number', 'boolean', 'variable', 'constant', 'property', 'regex', 'inserted'],
    style: {
      color: 'black'
    }
  }, {
    types: ['atrule', 'keyword', 'attr-name', 'selector'],
    style: {
      color: '#2a6883'
    }
  }, {
    types: ['function', 'deleted', 'tag'],
    style: {
      color: 'black'
    }
  }, {
    types: ['function-variable'],
    style: {
      color: 'black'
    }
  }, {
    types: ['tag', 'selector', 'keyword'],
    style: {
      color: '#00009f'
    }
  }]
};

module.exports = theme;