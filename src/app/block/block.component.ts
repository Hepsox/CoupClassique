import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './block.component.html',
  styleUrl: './block.component.css',
})
export class BlockComponent {
  title: string = 'Bienvenu sur mon appli';
  isAdmin: boolean = false;
  toggleVisibility(): void {
    this.isAdmin = !this.isAdmin;
  }
}
