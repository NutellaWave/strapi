import type { Attribute, Schema } from '@strapi/strapi';

export interface ChapitresChapitre extends Schema.Component {
  collectionName: 'components_chapitres_chapitres';
  info: {
    displayName: 'chapitre';
    icon: 'information';
  };
  attributes: {
    contenu: Attribute.Text;
    duree: Attribute.String;
    termine: Attribute.Boolean;
    titre: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'chapitres.chapitre': ChapitresChapitre;
    }
  }
}
