export type LaunchesStateType = {
  requested: boolean;
  launches: launch[];
  currentPage: number;
  totalLaunches: number;
  failed: boolean;
};

export type launch = {
  auto_update: boolean;
  capsules: string[];
  crew: [];
  date_local: string;
  date_precision: string;
  date_unix: number;
  date_utc: string;
  details?: string;
  failures: [];
  fairings: null;
  flight_number: number;
  id: string;
  launch_library_id: null;
  launchpad: string;
  links: { presskit?: string };
  name: string;
  net: boolean;
  payloads: string[];
  rocket: string;
  ships: string[];
  static_fire_date_unix: number;
  static_fire_date_utc: string;
  success: boolean;
  tbd: boolean;
  upcoming: boolean;
  window: number;
};
