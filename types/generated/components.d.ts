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

export interface VideosVideo extends Schema.Component {
  collectionName: 'components_videos_videos';
  info: {
    displayName: 'video';
  };
  attributes: {
    description: Attribute.Text;
    name: Attribute.String;
    videoUrl: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'chapitres.chapitre': ChapitresChapitre;
      'videos.video': VideosVideo;
    }
  }
}
