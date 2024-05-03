import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [[FormsModule, ReactiveFormsModule], [CommonModule]],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  contactForms = [
    {
      'src': './../../../assets/icon/github.png',
      'url': 'https://github.com/ChristianBockshorn',
      'name': 'Github',
      'addition':'ChristianBockshorn'

    },
    {
      'src': './../../../assets/icon/email.png',
      'url': 'mailto:contact@christian-bockshorn.de',
      'name': 'E-Mail',
      'addition':'contact@christian-bockshorn.de'

    },
    {
      'src': './../../../assets/icon/linkedin.png',
      'url': 'https://www.linkedin.com/in/christian-bockshorn/',
      'name': 'LinkedIn',
      'addition':'Christian Bockshorn'

    },
    {
      'src': './../../../assets/icon/phone.png',
      'url': 'href="tel:+49170463920"',
      'name': 'Phone',
      'addition':'+49170463920'

    },
  ]


  // @ViewChild('myForm') myForm!: ElementRef;
  // @ViewChild('nameField') nameField!: ElementRef;
  // @ViewChild('emailField') emailField!: ElementRef;
  // @ViewChild('messageField') messageField!: ElementRef;
  // @ViewChild('sendButton') sendButton!: ElementRef;

  // async sendMail() {
  //   console.log('Sending Mail ', this.myForm);

  //   let nameField = this.nameField.nativeElement;
  //   let emailField = this.emailField.nativeElement;
  //   let messageField = this.messageField.nativeElement;
  //   let sendButton = this.sendButton.nativeElement;

  //   nameField.disabled = true;
  //   emailField.disabled = true;
  //   messageField.disabled = true;
  //   sendButton.disabled = true;
  //   //Animation anzeigen

  //   let fd = new FormData();
  //   fd.append('name', nameField.value);
  //   fd.append('email', emailField.value);
  //   fd.append('message', messageField.value);

  //   // Senden
  //   await fetch('https://f0155033@christian-bockshorn.developerakademie.net/send_mail/send_mail.php', {
  //     method: 'POST',
  //     body: fd
  //   })

  //   //Text anzeigen, Nachricht gesendet
  //   nameField.disabled = false;
  //   emailField.disabled = false;
  //   messageField.disabled = false;
  //   sendButton.disabled = false;

  // }
}


