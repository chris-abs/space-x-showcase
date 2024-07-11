export interface Launch {
  id: string;
  name: string;
  date_utc: string;
  rocket: string;
  details: string | null;
  links: {
    patch: {
      small: string | null;
      large: string | null;
    };
    webcast: string;
  };
  upcoming: boolean;
  success: boolean | null;
}

export interface Company {
  id: string;
  name: string;
  founder: string;
  founded: number;
  test_sites: string;
  launch_sites: string;
  employees: number;
  headquarters: {
    state: string;
    city: string;
    address: string;
  };
  summary: string;
}
