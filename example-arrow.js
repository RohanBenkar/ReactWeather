var names = ['Rohan', 'Madhuri', 'Prachi'];

var normal = {
	name: "Ron",
	disp: function() {
		names.forEach(function(name){
			console.log(this.name + " says hi to " +name);
		});
	}
};

var arrow = {
	name: "Ron",
	disp: function() {
		names.forEach((name) => {
			console.log(this.name + " says hi to " +name);
		});
	}
};

normal.disp();
arrow.disp();