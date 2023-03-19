class MailBox {
    constructor(box){
        this.box = [];
    }

    get messageCount(){
        return this.box.length;
    }

    toString(){
        console.log('sass')
    }
}
let mb = new MailBox();
