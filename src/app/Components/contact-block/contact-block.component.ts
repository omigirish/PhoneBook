import { Component, Input, OnInit } from '@angular/core';
import { ContactService } from 'src/app/Services/contact.service';
import { FormControl, FormGroup, NgModel } from '@angular/forms';
import { Contact } from 'src/app/Models/contact';
@Component({
  selector: 'contact-block',
  templateUrl: './contact-block.component.html',
  styleUrls: ['./contact-block.component.css']
})
export class ContactBlockComponent implements OnInit {


  @Input("contactName") contactName:string ="";
  @Input("phoneNo") phoneNo:string = "";
  @Input("id") id:string="";


  updateForm:FormGroup = new FormGroup(
    {
    contactName:new FormControl(),
    phoneNo: new FormControl(),
    }
  );

  contactService:ContactService;
  constructor(contactService:ContactService) { 
    this.contactService=contactService;
  }

  ngOnInit(): void {

    (<any>$('.modal')).modal();
  }


  deleteContact()
  {
    console.log("Delete ME");
    this.contactService.deleteContactByNo(this.id);
    
  }


  onUpdate()
  {
    let temp= this.updateForm.value;
    let contact:Contact = new Contact(temp.contactName,temp.phoneNo); 
    this.contactService.updateById(this.id,contact);
    // this.updateForm.reset();
  }

}
