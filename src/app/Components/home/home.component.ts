import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactBlockComponent } from 'src/app/Components/contact-block/contact-block.component';
import { Contact } from 'src/app/Models/contact';
import { ContactService } from 'src/app/Services/contact.service';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contactList:Contact[] = [];
  searchFieldText:string="";
  contactService:ContactService;
  newContactForm = new FormGroup(
    {
    contactName:new FormControl(""),
    phoneNo: new FormControl(""),
    hidden:new FormControl(true)
    }
  );



  constructor(contactService:ContactService) { 
    this.contactService=contactService;
  }

  ngOnInit(): void {
      this.contactList=this.contactService.getAllContacts();
       (<any>$('.modal2')).modal();

  }


  onSubmit()
  {
    let temp= this.newContactForm.value;
    let contact:Contact = new Contact(temp.contactName,temp.phoneNo); 
    contact.hidden = this.searchFieldText==""?false:true;
    this.contactService.addNewContact(contact);
    this.newContactForm.reset();
  }

  onSearch()
  {
    this.contactService.searchByName(this.searchFieldText);
  }

}



      