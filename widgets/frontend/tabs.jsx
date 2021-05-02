import React from "react";

class Tabs extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selectedPane: 0
        }

        this.switchTab = this.switchTab.bind(this);
    }

    switchTab(idx) {
        this.setState({selectedPane: idx})
    }

    render() {
        const pane = this.props.panes[this.state.selectedPane];

        return (
            <div className="tabs">
                <div>
                    <Headers 
                        selectedPane={this.state.selectedPane}
                        panes={this.props.panes} 
                        onTabChosen={this.switchTab}/> 
                </div>
                <div className="pane">
                    <p>{pane.content}</p>
                </div>
            </div>
        );
    }
}

class Headers extends React.Component {
    render() {
        const selected = this.props.selectedPane;
        const headers = this.props.panes.map((pane, index) => {
            const title = pane.title;
            const selectedClass = index === selected ? 'active' : '';

            return (
                <li
                    key={index}
                    className={selectedClass}
                    onClick={() => this.props.onTabChosen(index)}>
                    {title}
                </li>
            );
        });


        return (
            <ul className='tabs-headers'>
                {headers}
            </ul>

        );
    }
}

export default Tabs;