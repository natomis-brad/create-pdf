
'option strict';

var data = require('../data'),
template = require('../templates/landscape'),
pdfoptions = require('../options/landscape');
var options = {
    data: data,
    template: template,
    options: pdfoptions
};
module.exports = options;