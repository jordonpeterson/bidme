import React,{Component, Fragment} from 'react'
import Job from './Job'
import { Mutation } from 'react-apollo'
import  { gql } from 'apollo-boost'

class PostAJob extends Component {
    state = {
        title: "",
        description: "",
        user: ""
    }
    render() {
        return (
            <Fragment>

                <Mutation
                    mutation={POST_JOB_MUTATION}
                    //Study update and add it in later.
                >
                    {(postJob, { data, loading, error }) => {
                        return (
                            <div className="pa4 flex justify-center bg-white">
                                <form
                                    onSubmit={async e => {
                                         e.preventDefault()
                                        const { title, description, user } = this.state
                                        await postJob({
                                            variables: { title, description, user },
                                        })
                                        window.location.reload();
                                   //     this.props.history.replace('/drafts') //What does this line do?
                                    }}
                                >
                                    <h1>Post Job</h1>
                                    <input
                                        autoFocus
                                        className="w-100 pa2 mv2 br2 b--black-20 bw1"
                                        onChange={e => this.setState({ title: e.target.value })}
                                        placeholder="Title"
                                        type="text"
                                        value={this.state.title}
                                    />
                                    <input
                                        autoFocus
                                        className="w-100 pa2 mv2 br2 b--black-20 bw1"
                                        onChange={e => this.setState({ user: e.target.value })}
                                        placeholder="User"
                                        type="text"
                                        value={this.state.user}
                                    />
                                    <textarea
                                        className="db w-100 ba bw1 b--black-20 pa2 br2 mb2"
                                        cols={50}
                                        onChange={e => this.setState({ description: e.target.value })}
                                        placeholder="Describe your job"
                                        rows={8}
                                        value={this.state.description}
                                    />
                                    <input
                                        className={`pa3 bg-black-10 bn ${this.state.description &&
                                        this.state.title && this.state.user &&
                                        'dim pointer'}`}
                                        disabled={!this.state.description || !this.state.title || !this.state.user}
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


const POST_JOB_MUTATION = gql`
    mutation CreateJobMutation($title: String!, $description: String!, $user: String!) {
        postJob(title: $title, description: $description, user: $user) {
            id
            title
            description
            usergit 
        }
    }
`

export default PostAJob;

