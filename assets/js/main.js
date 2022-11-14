





class Message {
constructor(author,text){
    this.author = author;
    this.time = new Date();
    this.text = text;
    
    
}
toString(){
    return `${this.time.getHours()}:${this.time.getMinutes()} ${this.author}: ${this.text}`
}
}
class Messenger{
    constructor(){
        this.messages= [];
    }
    showHistory(){
      this.messages.forEach(item=>console.log(item))
    }
    send(author,text){
let message1 = new Message(author,text)
this.messages.push(message1.toString())
    }
}

let first = new Messenger()
first.send("ali","salam")
first.send("amir","sagol");
first.showHistory()
let second = new Messenger()
second.send("arif","kak dela");
second.send("musa","super");;
second.showHistory()




