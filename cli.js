#!/usr/bin/env node

/**
 *
 *
 *
 *
 * Created by yayayahei on 7/10/2017.
 */

var path = require('path');
var gitStatusAll = require('.');

// Parse command line arguments
var argv = process.argv.slice(2);
// var parentDir = path.join(process.cwd(), argv.shift() || '.');
var parentDir = argv.shift() || path.join(process.cwd(), '.');

gitStatusAll(parentDir);