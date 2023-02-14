import React from 'react'

export class Card {
    constructor(number, suit){
        this.suit = suit;
        this.number = number;
    }

    getNumber(){
        return this.number;
    }

    getSuitNumber(){
        return this.suit;
    }

    numVal(){
        if(this.number>1&&this.number<11){
            return this.number;
        } else if(this.number==1||this.number==14){
            return "Ace";
        } else if(this.number==11){
            return "Jack";
        } else if(this.number==12){
            return "Queen";
        } else if(this.number==13){
            return "King";
        }
    }

    suitVal(){
        if(this.suit==0){
            return "Spades";
        } else if(this.suit==1){
            return "Diamonds";
        } else if(this.suit==2){
            return "Hearts";
        } else if(this.suit==3){
            return "Clubs";
        }
    }

    suitLetter(){
        if(this.suit==0){
            return "s";
        } else if(this.suit==1){
            return "d";
        } else if(this.suit==2){
            return "h";
        } else if(this.suit==3){
            return "c";
        }
    }

    numLetter(){
        if(this.number>1&&this.number<10){
            return "" + this.number;
        } else if(this.number==10){
            return "t";
        }else if(this.number==1||this.number==14){
            return "a";
        } else if(this.number==11){
            return "j";
        } else if(this.number==12){
            return "q";
        } else if(this.number==13){
            return "k";
        }
    }

    imageFile(){
        return './Cards/' + this.numLetter() + "o" + this.suitLetter() + '.png';
    }

    print(){
        return this.numVal() + " of " + this.suitVal();
    }

    getImageIndex(){
        return (this.getSuitNumber()*13)+this.getNumber()-1;
    }
}

export class Deck {
    constructor(){
        this.deck = [];
        for (let j = 0; j < 4; j++) {
            for (let k = 1; k <= 13; k++) {
                var card = new Card(k, j);
                this.deck.push(card);
            }
        }
    }

    getDeck(){
        return this.deck;
    }

    addCard(number, suit){
        a = new Card(number, suit);
        this.deck.push(a);
    }

    drawCard(){
        var rand = Math.floor(Math.random() * ((this.deck.length-1) + 1));
        var a = this.deck[rand];
        this.deck.splice(rand, 1);
        return a;
    }
}

var a = new Card(13,0);

console.log(a.getImageIndex());