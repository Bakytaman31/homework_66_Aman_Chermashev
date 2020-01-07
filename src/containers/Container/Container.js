import React, {Component} from 'react';
import axiosApp from "../../axios-app";
import hoc from "../../hoc/Hoc";

class Container extends Component {
    state = {
        data: [],
        name: '',
    };

    async componentDidMount() {
        this.getData();
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.name !== prevProps.match.params.name){
            this.getData();
        }
    }

    getData = async () => {
        const name = this.props.match.params.name;
        let data = [];
        const request = await axiosApp.get(`${name}.json`);
        data.push(request.data);
        this.setState({data, name: name})
    };

    render() {
            const data = this.state.data.reverse().map(data => (
                <div key={data}>
                    <h2 style={{textTransform: 'capitalize'}}>{data.title}</h2>
                    <p>{data.description}</p>
                </div>
            ));


        return (
            <div>
                {data}
            </div>
        );
    }
}

export default hoc(Container, axiosApp);