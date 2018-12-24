import React from 'react';


class Catagory extends React.Component {

  componentDidMount() {
    this.props.dispatch(getBlogs())
  }

  catagory = () => {
    return this.props.catagories
  }
}