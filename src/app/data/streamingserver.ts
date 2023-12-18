import { DataStreamingServerIcecast } from './icecast_stats';

export interface DataStreamingServer {
  uuid: string;
  url: string;
  statusurl: string;
  error: string;
  status: string;
  statusobj: any;
  icecast: DataStreamingServerIcecast;
}
