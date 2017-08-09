	// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group

//
// create base UI tab and root window
//

Ti.include('include/Util.js');
var db = Ti.Database.install('data.sqlite','data');
db.close();

var win1 = Titanium.UI.createWindow({
    title:"Self View",
	backgroundColor:'#eee',
	navBarHidden: true
});
win1.addEventListener('open', function(){
});


// var loginLabel = Titanium.UI.createLabel({
  // color: '#000',
  // font: { fontSize:36 },
  // shadowColor: '#aaa',
  // shadowOffset: {x:5, y:5},
  // shadowRadius: 3,
  // text: 'Login',
  // textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  // top: 20,
  // width: Ti.UI.SIZE, height: Ti.UI.SIZE
// });
var logo = Ti.UI.createImageView({
	image: '/modules/img/logo.png',
	top: 40
});


var nameTextField = Ti.UI.createTextField({	
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_BEZEL,
  color: '#000',
  hintText: 'Nome Completo',
  hintTextColor: 'black',
  top: 200, left: '20%',
  width: '60%', height: 60
});
var emailTextField = Ti.UI.createTextField({	
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_BEZEL,
  keyboardType: Titanium.UI.KEYBOARD_TYPE_EMAIL,
  color: '#000',
  hintText: 'E-mail',
  hintTextColor: 'Black',
  top: 265, left: '20%',
  width: '60%', height: 60
});

var loginButton = Ti.UI.createButton({
	title: 'Confirmar',
	bottom: 10, right: 10
})
loginButton.addEventListener('click', function(){
	if (!nameTextField.value || !emailTextField.value){
		alert('É obrigatório o preenchimento de todos os campos');
	}
	else if(!validateEmail(emailTextField.value)){
		alert('E-mail inválido');
	}
	else if(validateName(nameTextField.value) < 0){
		alert('Por favor preencher com seu nome completo.');
	}
	else{
		db = Ti.Database.open('data');
		db.execute('INSERT INTO usuario VALUES(?,?)', nameTextField.value, emailTextField.value);
		db.close();
		Ti.include('/modules/Main.js');
		main.open();
	}
})
// var loginView = Titanium.UI.createView({
   // borderRadius:5,
   // backgroundColor:'#fff',
   // width:300,
   // height:500,
   // top: 10
// });

// loginView.add(loginTextField);

win1.add(logo);
win1.add(nameTextField);
win1.add(emailTextField);
win1.add(loginButton);



//
//  add tabs
//
	


// open tab group
win1.open();
