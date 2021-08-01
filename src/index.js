import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    // useMutation,
    gql
} from "@apollo/client"

const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache()
})

const DRIVER = gql`
    query {
        driver {
            id,
            fullname 
        }
    }`

// const ADD_DRIVER = gql`
//     mutation AddDriver($fullname: String!) {
//             addDriver(fullname: $fullname)
//         }
//     }`

function DriverList() {
    const {loading, error, data} = useQuery(DRIVER);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.driver.map(({id, fullname}) => (
        <div>
            <p>
                {id}: {fullname}
            </p>
        </div>
    ));
}

// function AddDriver() {
//     let input
//     const [addDriver, { data, loading, error }] = useMutation(ADD_DRIVER)
//
//     if (loading) return 'Submitting...'
//     if (error) return `Submission error! ${error.message}`
//
//     return (
//         <div>
//             <form
//                 onSubmit={e => {
//                     e.preventDefault();
//                     addDriver({ variables: { text: input.value } });
//                     input.value = '';
//                 }}
//             >
//                 <input
//                     ref={node => {
//                         input = node;
//                     }}
//                 />
//                 <button type="submit">Add Driver</button>
//             </form>
//         </div>
//     )
// }

ReactDOM.render(
    <ApolloProvider client={client}>
        {/*<App state={state}/>*/}
        <DriverList/>
    </ApolloProvider>,
    document.getElementById('root')
);

reportWebVitals();