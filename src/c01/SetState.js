import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        document.getElementById('btn').addEventListener('click', this.onClick.bind(this));
    }

    onClick() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
        console.log(this.state.count);
    }

    onClickLater() {
        setTimeout(() => {
            this.onClick.bind(this);
        });
    }

    render() {
        console.log('---render---');
        return (
            <div>{this.state.count}
                <button onClick={this.onClick.bind(this)}>异步更新</button><br /><br />
                <button id="btn">通过addEventListener</button><br /><br />
                <button onClick={this.onClickLater.bind(this)}>通过setTimeout</button>
            </div>
        );
    }
}