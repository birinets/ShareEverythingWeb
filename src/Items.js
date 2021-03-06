import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import Right from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import RaisedButton from 'material-ui/RaisedButton';

import { connect } from 'react-redux';

const Items = ({ items = [] }, { router }) => {
  const showDetails = (id) => {
    router.push(`/details/${id}`);
  };

  const components = items.map(({ title, id, price, imageUrl, inCart }) => {
    const titleBackground = inCart ? 'rgba(14, 86, 115, 0.7)' : 'rgba(0, 0, 0, 0.4)';

    return (
      <GridTile
        onTouchTap={() => showDetails(id)}
        key={id}
        title={title}
        subtitle={<span>{price}</span>}
        titleBackground={titleBackground}
      >
        <img src={imageUrl} />
      </GridTile>
    )
  });

  const styles = {
    gridList: {
      backgroundColor: '#f6f6f6',
      flex: 1,
      padding: 4,
    },
  }

  return (
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      {components}
    </GridList>      
  );
};

Items.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

const mapStateToProps = ({ items }) => {
  return {
    items,
  }
};

export default connect(mapStateToProps, null)(Items);
