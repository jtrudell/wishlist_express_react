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
              <CollectionItem key={item.id} href={item.link}>{item.title}</CollectionItem>
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
        <div className="container">
          <h2>Hey there, {this.props.name}</h2>
          <p>Here is an Amazon wishlist that is not yours:</p>
          <ListItem items={this.props.data} />
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
