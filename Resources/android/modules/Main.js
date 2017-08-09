var main = Ti.UI.createWindow({
	title:"Self View",
	backgroundColor:'#eee',
	navBarHidden: true
})

var logo = Ti.UI.createImageView({
	image: '/modules/img/logo.png',
	top: 40
});
db = Ti.Database.open('data');
var data = db.execute('SELECT * FROM usuario');
while(data.isValidRow()){
	var name = data.fieldByName('nome');
	var email = data.fieldByName('email');
	data.next();
}
data.close();
db.close();
var labelTeste = Ti.UI.createLabel({
	text: 'Nome: ' + name,
	top: 200, left: '20%',
	width: '60%', height: 60
});
main.add(logo);
main.add(labelTeste);