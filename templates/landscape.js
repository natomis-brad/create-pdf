var source = 
'<html style="margin-left: 10px; margin-right: 10px;"><head></head><body>'+
'<div style="width:100%;"><img style="height: 100px;" src="{{header}}" /></div>'+

'<div style="width:100%;">' +
'<table style="width: 100%;">' +
'<tr><td><strong>NAME</strong> {{project.firstname}} {{project.lastname}}</td><td><strong>DATE</strong></td></tr>' +
'<tr><td colspan="2"><strong>ADDRESS</strong> {{project.address1}} {{project.address2}}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{project.city}}, {{project.state}}  {{project.zip}}</td></tr>' +
'<tr><td><strong>PHONE</strong> <a href="tel:{{project.phone}}">{{project.phone}}</a></td><td><strong>BEST TIME TO CALL</strong> {{project.besttimetocall}}</td><tr>' +
'<tr><td colspan="2"><strong>EMAIL</strong> <a href="mailto:{{project.email}}">{{project.email}}</a></td><tr>' +
'</table>' +
'</div>'+
'<div style="width:100%;">' +

'{{#each project.details}}' +
'<table style="width: 100%;">' +
'<tr>'+
'<td><strong>Area Name</strong> {{this.areaname}}</td>'+
'<td><strong>System</strong> {{this.systemname}}</td>'+
'<td><strong>Area</strong> {{this.area}}</td>'+
'<td><strong>Price</strong> ${{this.price}}</td>'+
'</tr>' +

'<tr>' +
'<td colspan="4">' +
'<table style="width: 100%; border: 1px solid black;">' +
'<thead>' +
'<tr style="text-align: left;">' +
'<th>Ingredient</th>'+
'<th>Amount</th>'+
'<th>Color</th>'+
'<th>Pattern</th>'+
'</tr>' +
'</thead>' +
'<tbody>' +
'{{#each this.ingredients}}' +
'<tr>' +
'<td>{{this.ingredientname}}</td>'+
'<td>{{this.amount}}</td>'+
'<td>{{this.color}}</td>'+
'<td>{{this.pattern}}</td>'+
'</tr>' +
'{{/each}}' +
'</tbody> ' +
'</table>' +
'</td>' +

'</tr>'+
'</table>' +
'{{/each}}' +
'</div>'+
'<div style="width:100%;">'+
'<table>' +
'<tr>' +
'<td><strong>Estimate Total</strong></td>'+
'<td>{{price}}</td>'+
'<tr>' +
'</tr>' +
'<td><strong>Discount</strong></td>'+
'<td>{{discount}}</td>'+
'</tr>' +
'</table>' +
'</div>'+

'<br />' +
'<div style="width:100%;"><strong>Notes</strong><br />'+

'{{#each project.notes}}' +
'<span>{{{this.notebody}}}</span><br />'+
'{{/each}}' +
'</div>'+
'<br />' +
'<div style="width:100%;"><strong>Terms & Conditions</strong><br />{{{terms}}}</div>'+
'<br />' +
'<div style="width:100%; text-align: right;"><strong>Customer Signature</strong>&nbsp;<span style="border-bottom: 1px solid black;">&nbsp;&nbsp;&nbsp;<img src="{{signature}}" />&nbsp;&nbsp;&nbsp;</span> <strong>Date</strong></div>'+
'<br />' +
'<div style="width:100%;"><img src="{{footer}}" /></div>'+
'</body></html>';

module.exports = source;