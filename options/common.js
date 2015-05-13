var options = {
    filename: 'filename_not_set!', 
    format: "Letter",
    orientation: "portrait",
    border: '1px',
    header: {
      height: '5mm',
      contents: '<div style="text-align: center;"></div>'
    },
    footer: {
      height: "5mm",
      contents: '<div style="width: 100%; text-align: right;"><span style="color: #555;">page {{page}}</span><span> of {{pages}}</span></div>'
    }
};
module.exports = options;