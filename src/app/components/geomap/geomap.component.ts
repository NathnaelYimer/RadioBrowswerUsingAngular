import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataStation } from 'src/app/data/station';
import { PlayerService } from 'src/app/services/player.service';
import { RadiobrowserService } from 'src/app/services/radiobrowser.service';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.markercluster.layersupport';

@Component({
  selector: 'app-geomap',
  templateUrl: './geomap.component.html',
  styleUrls: ['./geomap.component.css']
})
export class GeomapComponent implements OnInit, AfterViewInit {

  private stations: DataStation[] = null;
  private mymap = null;
  private groupValidated = null;
  private groupNotValidated = null;
  public playing_station: DataStation = null;

  constructor(private rb: RadiobrowserService, private player: PlayerService) { }

  initMap() {
    const bounds = L.latLngBounds(L.latLng(-90,-180), L.latLng(90,180));
    this.mymap = L.map('map', {
      maxBounds: bounds,
      maxBoundsViscosity: 1.0,
    }).setView([51.505, -0.09], 3);
    const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png ', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 10,
      minZoom: 3,
      tileSize: 256,
      continuousWorld: false,
      noWrap: true,
    }).addTo(this.mymap);

    this.groupValidated = L.layerGroup();
    this.groupNotValidated = L.layerGroup();

    const baseMaps = {
      "OpenStreetMap": osm
    };
    const overlayMaps = {
      "Verified": this.groupValidated,
      "Not verified": this.groupNotValidated
    };
    const controlOptions = {
      collapsed: false,
      hideSingleBase: true,
    };
    L.control.layers(baseMaps, overlayMaps, controlOptions).addTo(this.mymap);

    const mcgLayerSupportGroup = L.markerClusterGroup.layerSupport({});
    mcgLayerSupportGroup.addTo(this.mymap);
    mcgLayerSupportGroup.checkIn(this.groupValidated);
    mcgLayerSupportGroup.checkIn(this.groupNotValidated);

    this.groupValidated.addTo(this.mymap);
    this.groupNotValidated.addTo(this.mymap);
  }

  ngOnInit(): void {
    this.player.active_station.subscribe(station => this.playing_station = station);
  }

  ngAfterViewInit(): void {
    const iconRetinaUrl = 'assets/marker-icon-2x.png';
    const iconUrl = 'assets/marker-icon.png';
    const iconGreenRetinaUrl = 'assets/marker-icon-green-2x.png';
    const iconGreenUrl = 'assets/marker-icon-green.png';
    const shadowUrl = 'assets/marker-shadow.png';
    const iconDefault = L.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
    const iconGreen = L.icon({
      iconRetinaUrl: iconGreenRetinaUrl,
      iconUrl: iconGreenUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });

    this.initMap();
    this.rb.getStationsWithGeoInfos(10000).subscribe(stations => {
      this.stations = stations;
      for (const station of stations) {
        const s = station;
        const options = {
          icon: iconDefault
        };
        if (s.has_extended_info){
          options.icon = iconGreen;
        }
        const marker = L.marker(L.latLng(station.geo_lat, station.geo_long), options);
        marker.bindPopup("<p>" + station.name + "</p>");
        marker.on("click", () => {
          this.player.play(s);
          this.rb.count_click(s).toPromise().then(()=>console.log("counted click"));
        });
        if (s.has_extended_info){
          this.groupValidated.addLayer(marker);
        }else{
          this.groupNotValidated.addLayer(marker);
        }
      }
    });
  }
}
