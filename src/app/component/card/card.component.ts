import { Component, Input } from '@angular/core';
import { IPublication } from '../../interface/response';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'card',
  standalone: true,
  imports: [
    CardModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input()
  publication!: IPublication
}
