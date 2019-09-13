/**
 * 
 */

function process(e) {
	var result = '';
	var dropdown = document.getElementById('select');
	if(dropdown != undefined){
		var user  = parseInt(dropdown.value);
		var enemy = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
		
		if (user === enemy){
			result = 'Tie';
		} else {
			switch(user){
				case 1:
					result = (enemy === 2 ? 'Lost' : 'Win');
					break;
				case 2:
					result = (enemy === 3 ? 'Lost' : 'Win');
					break;
				case 3:
					result = (enemy === 1 ? 'Lost' : 'Win');
					break;
			}
		}
	
		var display = document.getElementById('results');
		
		display.innerHTML = result + ' ' + enemy;	
	}
}
