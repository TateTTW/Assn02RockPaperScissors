/**
 * Tate's Game's JavaScript
 */

var count  = 0;

function process(e) {
	var result = '';
	var dropdown = document.getElementById('select');
	if(dropdown != undefined){
		var user  = parseInt(dropdown.value);
		var enemy = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
		
		if (user === enemy){
			result = 'Tied';
		} else {
			switch(user){
				case 1:
					result = (enemy === 2 ? 'Lost' : 'Won');
					break;
				case 2:
					result = (enemy === 3 ? 'Lost' : 'Won');
					break;
				case 3:
					result = (enemy === 1 ? 'Lost' : 'Won');
					break;
			}
		}
				
		var display = document.getElementById('results');

		display.innerHTML += '<tr><td>' + ++count + '</td><td>' + valueToString(user) + '</td><td>' + valueToString(enemy) + '</td><td>You ' + result + '</td></tr>';	
		alert('You ' + result + '!');
	}
}

function valueToString(e){
	return (e === 1 ? 'Rock': e === 2 ? 'Paper' : 'Scissors');
}