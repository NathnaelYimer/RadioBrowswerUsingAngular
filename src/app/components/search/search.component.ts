import { Component, OnInit } from '@angular/core';
import { DataStation } from 'src/app/data/station';
import { RadiobrowserService } from 'src/app/services/radiobrowser.service';
import { SearchOption } from 'src/app/data/search-option';
import { SearchService } from 'src/app/services/search.service';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public stations: DataStation[];
  constructor(
    private radiobrowser: RadiobrowserService,
    private searchservice: SearchService,
    public playerservice: PlayerService,
  ) { }

  public searchOptions: any;
  public displayOptions: SearchOption[];

  ngOnInit(): void {
    this.searchservice.searchOptionsBehaviour.subscribe(data => {
      this.searchOptions = data;
      this.refresh();
    });
    this.searchservice.displayOptionsBehaviour.subscribe(data => {
      this.displayOptions = data;
    });
  }

  setorder(order: string){
    this.searchservice.setorder(order);
  }

  refresh() {
    this.radiobrowser.getStations(this.searchOptions).toPromise().then(data => {
      this.stations = data;
    });
  }

  toggle(key: string) {
    this.searchservice.toggle(key);
  }

  removeoption(key: string, value: string) {
    this.searchservice.removeoption(key, value);
  }

  nextpage() {
    this.searchservice.nextpage();
  }

  prevpage() {
    this.searchservice.prevpage();
  }
}
