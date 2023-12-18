import { Component, OnInit } from '@angular/core';
import { RadiobrowserService } from 'src/app/services/radiobrowser.service';
import { SearchService } from 'src/app/services/search.service';
import { DataCountry } from 'src/app/data/country';
import { RestcountriesService, Country } from 'src/app/services/restcountries.service';

class DataCountryListItem {
  stationcount: number;
  country_db: DataCountry;
  country_map: Country;
}

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountrylistComponent implements OnInit {

  countries: DataCountryListItem[] = [];

  constructor(private rbservice: RadiobrowserService, private searchservice: SearchService, private restcountries: RestcountriesService) { }

  getTags(): void {
    this.rbservice.getCountries("", "stationcount", 100)
      .subscribe(countries => {
        this.countries = countries.map(item => {
          const converted: DataCountryListItem = {
            stationcount: item.stationcount,
            country_db: item,
            country_map: this.restcountries.getCountryByCode(item.name),
          };
          return converted;
        });

      });
  }

  ngOnInit() {
    this.getTags();
  }

  select(country: DataCountry) {
    this.searchservice.addoption([{
      key: "countrycode",
      displayName: "country",
      operator: "=",
      searchValue: country.name,
      multiValue: false,
    }]);
  }

}
