let body =$('body');
body.before('<p>Hello world</p>')
body.before('<a></a>');
$('a').attr('name');
body.before('<div></div>');

let div1 =$('div').width('100px');
div1.height('100px');

div1.append('<div></div>');
div1.append('<div></div>');
div1.append('<div></div>');
div1.append('<div></div>');