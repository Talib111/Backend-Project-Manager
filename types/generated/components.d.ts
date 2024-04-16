import type { Schema, Attribute } from '@strapi/strapi';

export interface BasicComp1 extends Schema.Component {
  collectionName: 'components_basic_comp1s';
  info: {
    displayName: 'comp1';
    icon: 'book';
  };
  attributes: {
    Name: Attribute.String;
    mark: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'basic.comp1': BasicComp1;
    }
  }
}
