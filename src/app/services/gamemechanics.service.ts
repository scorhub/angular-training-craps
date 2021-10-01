import { Injectable } from "@angular/core";

@Injectable()

export class GameMechanics {

    private game:string = "";
    private credits:number = 0;
    private bet:number = 0;
    private rollCount:number = 0;
    private payOut:number = 0;
    private die1:number = 0;
    private die2:number = 0;
    private totalRoll:number = 0;
    private point:number = 0

    checkGameStatus(){
        let gameStatus = {
            game: this.game,
            credits: this.credits
        }
        return gameStatus
    }

    startPassLine(){
        this.resetTable()
        this.game = "passline"
        this.credits = 100;
    }
    
    private emptyDataObject() {
        let dataObject = {
            message: "",
            status: "",
            dieA: 0,
            dieB: 0,
            total: 0,
            pay: 0,
            credits: this.credits
        }
        return dataObject
    }

    private setData(msg:string, status:string){
        let dataObject = this.emptyDataObject();
        dataObject.message = msg;
        dataObject.status = status;
        dataObject.dieA = this.die1;
        dataObject.dieB = this.die2;
        dataObject.total = this.totalRoll;
        dataObject.pay = this.payOut;
        return dataObject;
    }

    private rollDice(){
        this.die1 = Math.floor(Math.random()*6)+1;
        this.die2 = Math.floor(Math.random()*6)+1;
        this.totalRoll = this.die1 + this.die2
    }

    private resetRolls(){
        this.die1 = 0;
        this.die2 = 0;
        this.totalRoll = 0;
    }

    private resetTable(){
        this.bet = 0;
        this.rollCount = 0;
        this.payOut = 0;
        this.resetRolls()
    }

    runPassLine(bet:number){

        if (this.rollCount === 0 && bet < 1) {
            let msg:string = "Starting bet cannot be 0.";
            let data = this.setData(msg, "error")
            return data
        }
        
        if (bet > this.credits) {
            let msg:string = "Cannot bet more than you have credits! Your bet: " + bet + ". Your credits: " + this.credits;
            let data = this.setData(msg, "error")
            return data
        }

        this.bet += bet;
        this.credits -= bet;
        
        this.rollDice()
        
        if(this.rollCount === 0){
            this.rollCount++;
            if (this.totalRoll === 7 || this.totalRoll === 11){
                this.payOut = this.bet * 2;
                this.credits += this.payOut
                let msg:string = "You have rolled " + this.die1 + " and " + this.die2 + ". You won " + this.payOut + " credits.";
                let data = this.setData(msg, "win")
                this.resetTable()
                return data
            }
            if (this.totalRoll === 2 || this.totalRoll === 3 || this.totalRoll === 12){
                let msg:string = "You have rolled " + this.die1 + " and " + this.die2 + ". You lost.";
                let data = this.setData(msg, "lost")
                this.resetTable()
                return data
            }
            this.point = this.totalRoll;
            let msg:string = "You have rolled " + this.die1 + " and " + this.die2 + ". Point set at " + this.totalRoll + ".";
                let data = this.setData(msg, "point")
                this.resetRolls()
                return data
        }

        if(this.totalRoll === this.point){
            this.payOut = this.bet * 2;
            this.credits += this.payOut
            let msg:string = "You have rolled " + this.die1 + " and " + this.die2 + ". You hit the point and won " + this.payOut + " credits.";
            let data = this.setData(msg, "win")
            this.resetTable()
            return data
        }

        if(this.totalRoll === 7){
            let msg:string = "You have rolled " + this.totalRoll + " and lost.";
            let data = this.setData(msg, "lost")
            this.resetTable()
            return data
        }

        let msg:string = "You have rolled " + this.totalRoll + " and point is " + this.point+". Please try again.";
        let data = this.setData(msg, "point")
        return data
    }
}