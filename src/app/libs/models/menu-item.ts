export enum AppType {
  RBO = "RBO",
  RBB = "RBB",
}

export enum ItemType {
  Internal = "INTERNAL",
  External = "EXTERNAL",
  Download = "DOWNLOAD",
  ClickAction = "CLICK_ACTION",
  Relevance = "RELEVANCE",
}

export enum IFileExtension {
  PDF = "pdf",
  ZIP = "zip",
}

export interface IFileURLs {
  nl: string;
  en: string;
}

export interface IIcons {
  left?: string;
  right?: string;
}

export interface ITranslation {
  en?: ITranslationData;
  nl: ITranslationData;
}

export interface ITranslationData {
  header: string;
  description?: string;
}

export interface IMenuItem {
  id: string;
  sensesShowWhen?: string;
  type?: ItemType;
  routing?: {
    path?: string;
    extension?: IFileExtension;
  };
  translations: ITranslation;
  icons?: IIcons;
  menuItems?: IMenuItem[];
}
