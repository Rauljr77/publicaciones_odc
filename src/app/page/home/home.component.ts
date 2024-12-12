import { Component, OnInit } from '@angular/core';
import { AuthTokenService } from '../../service/auth-token.service';
import { PublicationService } from '../../service/publication.service';
import { IPublication, IResponseToken, IResult } from '../../interface/response';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../component/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    CardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  publicationList: IPublication[] = [];

  constructor(
    private readonly tokenService       : AuthTokenService,
    private readonly publicationService : PublicationService
  ) {}

  ngOnInit(): void {
    this.initList();
  }
  
  initList(): void {
    this.tokenService.getToken().subscribe((dataToken: IResponseToken) => {
      this.publicationService.getAllPublication(dataToken.token).subscribe((data: IResult<IPublication[]>) => {
        if (data.success) this.publicationList = data.data;
        else alert("Hubo un error");
      });
    });
  }
}

