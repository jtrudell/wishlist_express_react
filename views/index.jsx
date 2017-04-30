import React from 'react';
import { Collection, CollectionItem } from 'react-materialize';
import DefaultLayout from './layouts/default';

class ListItem extends React.Component {
  render() {
    const items = this.props.items;

    if (!items || items === []) {
      return null;
    }

    return (
      <Collection>
        {
          items.map(function(item) {
            return (
              <li><CollectionItem href={item.link}>{item.title}</CollectionItem></li>
            )
          })
        }
      </Collection>
    );
  }
}

class Index extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <h2>Hey there, {this.props.name}</h2>
        <p>Here is an Amazon wishlist that is not yours:</p>
        <ListItem items={this.props.data} />
      </DefaultLayout>
    );
  }
}

module.exports = Index;
