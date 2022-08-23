function MarsRover(location, direction, grid, obstacles) {
self = this;
        
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
            self.location = [
                (self.location[0] + self.grid[0]) % self.grid[0],
                (self.location[1] + self.grid[1]) % self.grid[1],
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

        var newLocation = [self.location[0] + xIncrease, self.location[1] + yIncrease];
        if (isObstacle(newLocation)) {
            return false;
        }
        self.location = newLocation;

        return true;

        }
         function isObstacle(newLocation) {
            for(var index = 0; index < this.obstacles.length; index++) {
                if (newLocation.toString() == self.obstacles[index].toString()) {
                    self.status = 'obstacle';
                    return true;
                }
            }
            return false;
        }
        function turn(command) {
            var newDirection;
            switch(self.direction){
            case 'N':
            if(command==='r') {
                self.direction ='E';
                newDirection = self.direction;
            }
            else if(command==='l'){
                self.direction ='W';
                newDirection = self.direction;

            }
            break;
            
            case 'S':
            if(command==='r') {
                self.direction ='W';
                newDirection = self.direction;

            }
            else if(command==='l'){
                self.direction ='E';
                newDirection = self.direction;

            }
            break;
            
            case 'E':
            if(command==='r') {
                self.direction ='S';
                newDirection = self.direction;

            }
            else if(command==='l'){
                self.direction ='N';
                newDirection = self.direction;

            }
            break;
            
            case 'W':
            if(command==='r') {
                self.direction ='N';
                newDirection = self.direction;

            }
            else if(command==='l'){
                self.direction ='S';
                newDirection = self.direction;

            }
            break;
            }

           
            self.direction = newDirection ;
            
            return true;
                }




                

    }



let rover = new MarsRover([12,21],"N");
rover.commands(["F"],["F"]);



console.log(rover.location);
