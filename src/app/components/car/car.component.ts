import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  name: string;
  model: string;
  speed: number;
  colors: Colors;
  options:string[];
  test : any;
  isEdit : boolean = false;

  constructor() {
    this.name = "Audi";
    this.model = "100";
    this.speed = 200;
    this.colors = {
      car: "White",
      salon : "Black",
      wheels: "Silver"
    }
    this.options=["ABS", "Автопилот","Автопаркинг"];
  }

  ngOnInit(): void {
  }
  bmwSelect(){
    this.name = "BMW";
    this.model = "M5";
    this.speed = 320;
    this.colors = {
      car: "Синий",
      salon : "Красный",
      wheels: "Серебристый"
    }
    this.options=["ABS", "Автопилот","Автопаркинг"];
  }

  addOpt( option : string){
    this.options.unshift(option);
    return false;
  }
  deleteOpt(option :string){
    for(let i=0;i<this.options.length;i++)
      if(this.options[i] === option)
        this.options.splice(i,1);
  }

  carSelect(carName : string){
    switch (carName)
    {
      case "bmw":
        this.name = "BMW";
        this.model = "M5";
        this.speed = 320;
        this.colors = {
          car: "Синий",
          salon: "Красный",
          wheels: "Серебристый"
        }
        this.options = ["ABS", "Автопилот", "Автопаркинг"];
        break;
      case "audi":
        this.name = "Audi";
        this.model = "100";
        this.speed = 130;
        this.colors = {
          car: "Синий1",
          salon: "Красный1",
          wheels: "Серебристый1"
        }
        this.options = ["ABS", "Круиз контроль"];
        break;
      case "mercedes":
        this.name = "Mercedes";
        this.model = "3245";
        this.speed = 1330;
        this.colors = {
          car: "Синий3",
          salon: "Красный4",
          wheels: "Серебристый5"
        }
        this.options = ["ABS", "Автопилот", "Автопаркинг"];
        break;
    }
  }
  showEdit()
  {
    this.isEdit = !this.isEdit;
  }
}

interface  Colors{
  car: string,
  salon: string,
  wheels:string
}
