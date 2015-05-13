
'option strict';

var data = require('../data'),
template = require('../templates/portrait'),
pdfoptions = require('../options/portrait');
var options = {
    data: data,
    template: template,
    options: pdfoptions
};
module.exports = options;