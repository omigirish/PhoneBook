import { Injectable } from '@angular/core';
import { Contact } from '../Models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  contactList:Contact[]=[
    {id:1,contactName:"Girish Salunke",  phoneNo:"+91 9136091244" ,hidden:false},
    {id:2,contactName:"Vinit Soni",  phoneNo:"+91 9135091255", hidden:false},
    {id:3,contactName:"Girish Salunke",  phoneNo:"+91 9136091244" ,hidden:false},
    {id:4,contactName:"Vinit Soni",  phoneNo:"+91 9135091255", hidden:false},
    {id:5,contactName:"Girish Salunke",  phoneNo:"+91 9136091244" ,hidden:false},
    {id:6,contactName:"Vinit Soni",  phoneNo:"+91 9135091255", hidden:false},
    {id:7,contactName:"Girish Salunke",  phoneNo:"+91 9136091244" ,hidden:false},
    {id:8,contactName:"Vinit Soni",  phoneNo:"+91 9135091255", hidden:false}
  ];

  addNewContact(contact:Contact):void {
    this.contactList.push(contact); 
    this.contactList.sort((a,b) =>a.contactName>b.contactName? 1: -1 )
  }

  getAllContacts():Contact[]
  {
    this.contactList.sort((a,b) =>a.contactName>b.contactName? 1: -1 )
    return this.contactList
  }

  deleteContactByNo(id:string):void
  {
    for(let c of this.contactList)
    {
      if(c.id==parseInt(id))
      {
          this.contactList.splice(this.contactList.indexOf(c),1);
      }
    }
  }

  searchByName(name:string):void
  {
    for(let c of this.contactList)
    {
      if(c.contactName.indexOf(name) != -1)
      {
          c.hidden=false;
      }
      else
      {
        c.hidden=true;
      }
    }

  }

  updateById(id:string,contact:Contact)
  {
    for(let c of this.contactList)
    {
      if(c.id == parseInt(id))
      {
          c.contactName=contact.contactName;
          c.phoneNo=contact.phoneNo;
      }
    }
  }



}
