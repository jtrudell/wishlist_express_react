import React from 'react';
import PropTypes from 'prop-types';
import { Collection, CollectionItem } from 'react-materialize';
import DefaultLayout from './layouts/default';

class ListItem extends React.Component {
  render() {
    const items = this.props.items;
    let id = 0;

    if (!items || items.length === 0) {
      return <div>Nothing to see here.</div>
    }

    return (
      <Collection>
        {
          items.map(function(item) {
            // Could use item.id as key, but there are repeats
            id++;
            return <CollectionItem key={id} href={item.link}>{item.title}</CollectionItem>
          })
        }
      </Collection>
    );
  }
}

ListItem.propTypes = {
  items: PropTypes.array.isRequired,
};

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

Index.defaultProps = {
  items: [],
}

Index.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.array,
};

module.exports = Index;
