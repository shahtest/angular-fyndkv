import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.creatSortData();
  }
  name = 'Angular';

  EMiData = [
    {
      serialNo: '1',
      paymentDate: '05-02-2020',
      principalAmount: '2322.69',
      interestAmount: '179.08',
      installmentAmount: '2501.77',
      transactionStatus: 'POST',
    },
    {
      serialNo: '2',
      paymentDate: '05-03-2020',
      principalAmount: '2360.9',
      interestAmount: '140.87',
      installmentAmount: '2501.77',
      transactionStatus: 'POST',
    },
    {
      serialNo: '3',
      paymentDate: '05-04-2020',
      principalAmount: '2388.43',
      interestAmount: '113.34',
      installmentAmount: '2501.77',
      transactionStatus: 'POST',
    },
    {
      serialNo: '4',
      paymentDate: '05-05-2025',
      principalAmount: '2416.27',
      interestAmount: '85.5',
      installmentAmount: '2501.77',
      transactionStatus: 'POST',
    },
    {
      serialNo: '5',
      paymentDate: '05-06-2020',
      principalAmount: '2444.44',
      interestAmount: '57.33',
      installmentAmount: '2501.77',
      transactionStatus: 'POST',
    },
    {
      serialNo: '6',
      paymentDate: '05-07-2020',
      principalAmount: '2472.79',
      interestAmount: '28.82',
      installmentAmount: '2501.61',
      transactionStatus: 'POST',
    },
    {
      serialNo: '6',
      paymentDate: '05-07-2020',
      principalAmount: '2472.79',
      interestAmount: '28.82',
      installmentAmount: '2501.61',
      transactionStatus: 'POST',
    },
    {
      serialNo: '6',
      paymentDate: '05-07-2021',
      principalAmount: '2472.79',
      interestAmount: '28.82',
      installmentAmount: '2501.61',
      transactionStatus: 'POST',
    },
  ];

  creatSortData() {
    var yearFilterArray = [];
    var filterUiArray :any = [];
    this.EMiData.map((data) => {
      let years = data.paymentDate.split('-')[2];
      yearFilterArray.push(years);
    });
    let UniqueYear = [...new Set(yearFilterArray)];
    console.log(UniqueYear);
    UniqueYear.forEach((year) => {
      const datareturn = this.EMiData.filter((data) => {
        if (data.paymentDate.split('-')[2] == year) {
          return data;}
      });
      filterUiArray.push({ year: year, objValue: datareturn });
    });
    console.log(filterUiArray);
    filterUiArray.sort((a :any, b:any )=>{
      var  key1 = +a.year;
      var  key2 = +b.year;
      return key2 - key1;
    })
    console.log(filterUiArray);

  }
}
