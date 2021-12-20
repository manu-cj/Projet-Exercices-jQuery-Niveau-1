let body =$('body');
body.append('<p>Hello world</p>')
body.append('<a></a>');
$('a').attr('name');
body.append('<div></div>');

let div1 =$('div').width('100px');
div1.height('100px');

div1.append('<div></div>');
div1.append('<div>Squalala</div>');
div1.append('<div></div>');
div1.append('<div></div>');

alert(div1.index());
