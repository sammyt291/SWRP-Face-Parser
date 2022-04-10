let findface = function( inp, dir = 0 ){

  let dirs = [ "F", "R", "L", "B" ];
  let aboutFaceLookup = {
    "F": 3,
    "B": 0,
    "R": 2,
    "L": 1
  }

	let count = 0;
	let preParts = inp.split(" ");
	
	let instructions = [];
  
  instructions[#instructions+1] = "Start Face: " + dirs[dir];
	
	for(k in preParts){
		let v = preParts[k]
		//console.log("Ask:", v);
		switch(v) {
			case "F":
				dir = 0;
				count++;
        instructions[#instructions+1] = count + " " + dirs[dir];
			break;
			case "R":
				dir++
				count++;
				if(dir > 3){
					dir = 0;
				}
				instructions[#instructions+1] = count + " " + dirs[dir];
			break;
			case "L":
				dir--
				count++;
				if(dir < 0){
					dir = 3;
				}
				instructions[#instructions+1] = count + " " + dirs[dir];
			break;
			case "A":
				let curFace = dirs[dir];
				//console.log("curFace", curFace);
				let about = aboutFaceLookup[curFace];
				//console.log("about", about);
				dir = about;
				count++;
				instructions[#instructions+1] = count + " " + dirs[dir];
			break;
		}
		
	} //Main Loop
	
	instructions[#instructions+1] = "End Face: " + dirs[dir];
	
  return instructions;
}
