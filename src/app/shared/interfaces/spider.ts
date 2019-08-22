export interface IElement {
  id?: string;
  name: string;
  selector: string;
  value?: string;
}
export interface ISpiderUrlForm {
  url: string;
  elements: IElement[];
}
export interface ISpiderUrlsForm {
  urls: string[];
  elements: IElement[];
}
