export class Contact {
    static id_seed=3;
    contactName:string;
    phoneNo:string;
    hidden:boolean;
    id:number;
    constructor(contactName:string,phoneNo:string){
        this.id = Contact.id_seed++;
        this.contactName=contactName;
        this.phoneNo=phoneNo;
        this.hidden=true;
    }
    
}
