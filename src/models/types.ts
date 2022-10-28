export type TaxItem = {
  id: number,
  name: string,
  net: string,
  tax: string
};

export type TaxItems = {
  items: TaxItem[]
};

export interface TaxItemRow extends TaxItem {
  isFav: boolean
}