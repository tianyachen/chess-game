import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ChessBoardComponent } from '../chess-board/chess-board.component';
import { ComputerModeComponent } from '../computer-mode/computer-mode.component';

@Component({
  selector: 'app-nav-menu',
  imports: [MatToolbarModule, MatButtonModule, RouterModule],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css',
  standalone: true,
})
export class NavMenuComponent {}
