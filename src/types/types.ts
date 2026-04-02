export type Service = {
  id: string;
  label: string;
  base_price: number;
  description: string;
  is_active: boolean;
  display_order: number;
};

export type Addon = {
  id: string;
  label: string;
  price: number;
  description: string;
  is_active: boolean;
};

export type Vehicle = {
  id: string;
  label: string;
  vehicle_type: string;
  base_surcharge: number;
  is_active: boolean;
};

export type Location = {
  id: string;
  label: string;
  is_active: boolean;
};
