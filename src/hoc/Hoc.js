import React, {Component, Fragment} from "react";
import Spinner from "../components/UI/Spinner/Spinner";

const hoc = (WrappedComponent, axios) => {
    return class WithLoader extends Component{
        constructor(props) {
            super(props);

            this.state = {
                loading: false,
            };

            axios.interceptors.request.use(req =>{
                this.setState({loading: true});
                return req
            });
            this.state.interceptorId = axios.interceptors.response.use(res =>{
                this.setState({loading: false});
                return res
            })
        }


        componentWillUnmount() {
            axios.interceptors.response.eject(this.state.interceptorId);
        }

        render() {
            return(
                <Fragment>
                    {this.state.loading && <Spinner/>}
                    <WrappedComponent {...this.props}/>
                </Fragment>
            );
        }
    }
};

export default hoc;