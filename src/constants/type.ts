export interface IPageItemDetails {
  id: number;
  weight: number;
  tradingsymbol: string;
  instrument_token: number;
  segment: string;
  exchange: string;
  expiry: string;
}

export interface IPageItems {
  id: number;
  name: string;
  items: Array<IPageItemDetails>;
}

export interface IMarketWatchData {
  status: string;
  data: Array<IPageItems>;
}

export interface IPriceData {
  mode: string;
  isTradeable: boolean;
  token: number;
  lastPrice: number;
  closePrice: number;
  change: number;
  absoluteChange: number;
  openChange: number;
  openChangePercent: number;
}

export interface IMarketWatchSliceData {
  currentPageData: IPageItems;
  priceData: { [key: string]: IPriceData };
  totalInvestment: number;
}
