interface ILink {
  id: string;
  parentId?: string;
  sensesShowWhen: string;
  details?: IDetails;
}

interface IDetails {
  type: ItemType;
  download?: {
    url: {
      nl: string;
      en: string;
    };
    extension: string;
  };
  translationKeys: {
    header: string;
    description: string;
  };
  itemOptions: {
    icon: '';
    iconLabelEnd: 'box-arrow-down'; // right icon
  };
}
