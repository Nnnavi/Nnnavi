class Stringer{
    constructor(innerString,innerLength){
        this.innerString=innerString;
        this.innerLength=innerLength;
    }
    increase(length){
        this.innerLength+=length;
    }
    decrease(length){
        this.innerLength-=length;
        if(this.innerLength<0){
            this.innerLength=0;
        }
    }
    toString(){
        let output=this.innerString;
        if(this.innerLength===0){
            output='...';
        }
        else if(this.innerString.length>this.innerLength){
            let cutedString=this.innerString.length-this.innerLength;
            output=this.innerString.substr(0,cutedString);
            output+='...';
            return output;
        }

    }

}

///////////////////работещо решение от интернет, горното дава 80/100
class Stringer{
    constructor(string, length){
        this.innerString = string;
        this.innerLength = length;
    }

    increase(length){
        this.innerLength += length;
        if(this.innerLength < 3){
            this.innerLength = 0;
        }
    }

    decrease(length){
        this.innerLength -= length;
        if(this.innerLength < 3){
            this.innerLength = 0;
        }
    }

    toString(){
        if(this.innerLength == 0){
            return "...";
        }

        if(this.innerString.length > this.innerLength){
            this.innerString = this.innerString.substr(0, this.innerLength) + "...";
        }
        return this.innerString;
    }
}