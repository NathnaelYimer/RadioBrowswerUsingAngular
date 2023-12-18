export interface DataCheck {
  timestamp_iso8601: Date;
  source: string;
  codec: string;
  bitrate: number;
  name: string;
  tags: string;
  homepage: string;
  favicon: string;
  loadbalancer: string;
  server_software: string;
  timing_ms: number;
  countrycode: string;
  countrysubdivisioncode: string;
  languagecodes: string;
  sampling: number;
  description: string;
  geo_lat: number;
  geo_long: number;
  ok: number;
  metainfo_overrides_database: number;
}
