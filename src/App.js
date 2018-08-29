import React, { Component, Fragment } from 'react';
import PostAJob from './PostAJob'
import JobsFeed from './JobsFeed'
import BidsFeed from './BidsFeed'
import MakeABid from './MakeABid'


class App extends Component {

  render() {
    return (
      <Fragment>
          <h1>Bidme</h1>
          <PostAJob/>
          <JobsFeed/>
          <BidsFeed/>
          <MakeABid/>

      </Fragment>
    );
  }
}




export default App;
