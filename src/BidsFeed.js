import React,{Component, Fragment} from 'react'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'
import Bid from "./Bid";

class JobsFeed extends Component {
    state = {

    }
    render() {
        return (
            <Fragment>
                <Query query={BIDS_QUERY}>
                    {({ data, loading, error, refetch }) => {
                        if (loading) {
                            return (
                                <div className="flex w-100 h-100 items-center justify-center pt7">
                                    <div>Its Still Loading ...</div>
                                </div>
                            )
                        }

                        if (error) {
                            return (
                                <div className="flex w-100 h-100 items-center justify-center pt7">
                                    <div>An unexpected error occured...Sorry</div>
                                </div>
                            )
                        }

                        return (
                            <Fragment>
                                <h1>BidFeed</h1>
                                {data.bids &&
                                data.bids.map(bid => (
                                    <Bid
                                        key={bid.id}
                                        bid={bid}
                                        refresh={() => refetch()}


                                    />
                                ))}

                                {this.props.children}

                            </Fragment>
                        )
                    }}
                </Query>


            </Fragment>
        );
    }
}

const BIDS_QUERY = gql`
    query bids {
        bids{
            price
            comment
            company
        }
    }
`


export default JobsFeed;