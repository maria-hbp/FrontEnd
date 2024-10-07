import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) {
  }

 register() {
    this.router.navigate(['/register']);
  }

  onSubmit(event: Event) {
    event.preventDefault(); // Evita el envío del formulario
    // Aquí puedes agregar la lógica de autenticación o lo que necesites
  }

}
