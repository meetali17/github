class ParentComponent extends Component {
    render() {
    return (
    <ChildComponent name="First Child" />
    );
    }
    }
    const ChildComponent = (props) => {
    return <p>{props.name}</p>;
    };