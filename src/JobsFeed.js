import React,{Component, Fragment} from 'react'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'
import Job from "./Job";

class JobsFeed extends Component {
    state = {

    }
    render() {
        return (
            <Fragment>
                <Query query={JOBS_QUERY}>
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
                                    <div>An unexpected error occured.</div>
                                </div>
                            )
                        }

                        return (
                            <Fragment>
                                <h1>JobFeed</h1>
                                {data.jobs &&
                                data.jobs.map(job => (
                                    <Job
                                        key={job.id}
                                        job={job}
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

const JOBS_QUERY = gql`
    query jobs {
        jobs{
            title
            description
            user
        }
    }
`


export default JobsFeed;
