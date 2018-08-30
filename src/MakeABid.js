import React,{Component, Fragment} from 'react'
import { Mutation } from 'react-apollo'
import  { gql } from 'apollo-boost'

class MakeABid extends Component {
    state = {
        company: "",
        comment: "",
        price: 0
    }
    render() {
        return (
            <Fragment>

                <Mutation
                    mutation={MAKE_BID_MUTATION}
                    // update={(cache, { data }) => {
                    //     const { drafts } = cache.readQuery({ query: BIDS_QUERY })
                    //     cache.writeQuery({
                    //         query: BIDS_QUERY,
                    //         data: { drafts: drafts.concat([data.makeBid]) },
                    //     })
                    // }}
                    //Study update and add it in later.
                    //How can I make the page auto-update1
                >
                    {(makeBid, { data, loading, error }) => {
                        return (
                            <div className="pa4 flex justify-center bg-white">
                                <form
                                    onSubmit={async e => {
                                        e.preventDefault()
                                        const { company, comment, price } = this.state
                                        await makeBid({
                                            variables: { company, comment, price },
                                        })
                                        window.location.reload();
                                        //     this.props.history.replace('/drafts') //What does this line do?
                                        // I should make the comment on bid optional. Right now the submit button won't work
                                        //unless it is filled in.
                                    }}
                                >
                                    <h1>Make Bid</h1>
                                    <input
                                        autoFocus
                                        className="w-100 pa2 mv2 br2 b--black-20 bw1"
                                        onChange={e => this.setState({ company: e.target.value })}
                                        placeholder="Company Name"
                                        type="text"
                                        value={this.state.company}
                                    />
                                    <input
                                        autoFocus
                                        className="w-100 pa2 mv2 br2 b--black-20 bw1"
                                        onChange={e => this.setState({ price: e.target.value })}
                                        placeholder="How much will you charge?"
                                        type="text"
                                        value={this.state.price}
                                        //Price is text right now. I should switch it to a number eventually
                                    />
                                    <textarea
                                        className="db w-100 ba bw1 b--black-20 pa2 br2 mb2"
                                        cols={50}
                                        onChange={e => this.setState({ comment: e.target.value })}
                                        placeholder="Leave a comment"
                                        rows={8}
                                        value={this.state.comment}
                                    />

                                    <input
                                        className={`pa3 bg-black-10 bn ${this.state.comment &&
                                        this.state.company && this.state.price &&
                                        'dim pointer'}`}
                                        disabled={!this.state.comment || !this.state.company || !this.state.price}
                                        type="submit"
                                        value="Create"
                                    />

                                </form>
                            </div>
                        )
                    }}
                </Mutation>


            </Fragment>
        );
    }
}


const MAKE_BID_MUTATION = gql`
    mutation MakeBidMutation($company: String!, $comment: String!, $price: String!) {
        makeBid(company: $company, comment: $comment, price: $price) {
            id
            company
            comment
            price
        }
    }
`
 const BIDS_QUERY = gql`
    query BidsQuery {
        bids {
            company
            comment
            price
        }
    }
`

export default MakeABid;