function MarsRover(location, direction, grid, obstacles) {

        
        this.location = (location === undefined) ? [0, 0] : location;
        this.direction = (direction === undefined) ? 'N' : direction;
        this.grid = (grid === undefined) ? [100, 100] : grid;
        this.obstacles = (obstacles === undefined) ? [] : obstacles;
       
        this.status = 'OK';

        this.commands = function (commands) {
            if (commands === undefined) { // Getter
                return this.commandsArray;
            } else { // Setter
                for (var index = 0; index < commands.length; index++) {
                    var command = commands[index];
                    if (command === 'f' || command === 'b') {
                        if (!move(command))
                            break;
                    } else if (command === 'l' || command === 'r') {
                        turn(command);
                    }
                }
                resetLocation();
                this.commandsArray = commands;
            }
        };

        function resetLocation() {
            this.location = [
                (this.location[0] + this.grid[0]) % this.grid[0],
                (this.location[1] + this.grid[1]) % this.grid[1],
            ];
        }

        function move(command) {
           var xIncrease = 0, yIncrease = 0;

            self.direction === 'N' ? yIncrease = -1 : 0;
            self.direction === 'E' ? xIncrease = 1 : 0;
            self.direction === 'S' ? yIncrease = 1 : 0;
            self.direction === 'W' ? xIncrease = -1 : 0;
         


        
        if (command === 'b') { // Backward
            xIncrease *= -1;
            yIncrease *= -1;
        }

        var newLocation = [this.location[0] + xIncrease, this.location[1] + yIncrease];
        if (isObstacle(newLocation)) {
            return false;
        }
        this.location = newLocation;

        return true;

        }
         function isObstacle(newLocation) {
            for(var index = 0; index < this.obstacles.length; index++) {
                if (newLocation.toString() == this.obstacles[index].toString()) {
                    this.status = 'obstacle';
                    return true;
                }
            }
            return false;
        }
        function turn(command) {
            var newDirection;
            switch(this.direction){
            case 'N':
            if(command==='r') {
                this.direction ='E';
                newDirection = this.direction;
            }
            else if(command==='l'){
                this.direction ='W';
                newDirection = this.direction;

            }
            break;
            
            case 'S':
            if(command==='r') {
                this.direction ='W';
                newDirection = this.direction;

            }
            else if(command==='l'){
                this.direction ='E';
                newDirection = this.direction;

            }
            break;
            
            case 'E':
            if(command==='r') {
                this.direction ='S';
                newDirection = this.direction;

            }
            else if(command==='l'){
                this.direction ='N';
                newDirection = this.direction;

            }
            break;
            
            case 'W':
            if(command==='r') {
                this.direction ='N';
                newDirection = this.direction;

            }
            else if(command==='l'){
                this.direction ='S';
                newDirection = this.direction;

            }
            break;
            }

           
            this.direction = newDirection ;
            
            return true;
                }




                

    }



let rover = new MarsRover([12,21],"N");
rover.commands(["F"],["F"]);



console.log(rover.location);