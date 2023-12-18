import { Component, Input } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { RadiobrowserService } from 'src/app/services/radiobrowser.service';
import { DataStation } from '../../data/station';

@Component({
  selector: 'app-stationlist',
  templateUrl: './stationlist.component.html',
  styleUrls: ['./stationlist.component.css']
})
export class StationlistComponent {
  @Input() stations: DataStation[] = [];

  constructor(private player: PlayerService, private rb: RadiobrowserService) { }

  vote(event, station: DataStation) {
    this.rb.vote(station).subscribe(result => console.log("vote result",result));
    event.stopPropagation();
  }

  play(event, station: DataStation){
    this.player.play(station);
    this.rb.count_click(station).toPromise().then(()=>console.log("counted click"));
    event.stopPropagation();
  }
}
