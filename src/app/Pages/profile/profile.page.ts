import { SearchProductsService } from 'src/app/Services/search-products.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: User

  asignarColor:number;
  etiqueta_uno="";

  constructor(private search:SearchProductsService,private userService: UserService) {
    this.user=this.userService.getUser();
   }

  ngOnInit() {
    this.asignarColor=this.search.ReturnConfg();
    this.DesignarStylo();
  }

  DesignarStylo(){
    if(this.asignarColor==1){
      //stylo mango
      this.etiqueta_uno="material-icons iconProfile-mango"
    }else if(this.asignarColor==2){
      //stylo dona
      this.etiqueta_uno="material-icons iconProfile"  
    }else if(this.asignarColor==3){
      //stylo dona
      this.etiqueta_uno="material-icons iconProfile-miquel"  
    }
  }

}
