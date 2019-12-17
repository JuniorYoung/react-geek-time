import React, { Component } from 'react';
import { Input, Button } from 'antd';

function MyFormCreate(Comp) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.opts = {};
            this.state = {};
        }

        handleChange = (e) => {
            const { name, value } = e.target;
            this.setState({[name]: value});
        }
    
        getFieldDec = (field, opt) => {
            this.opts[field] = opt;
            return InputComp => (
                <div>
                    {React.cloneElement(InputComp, {
                        name: field,
                        value: this.state[field] || "",
                        onChange: this.handleChange
                    })}
                </div>
            );
        };
        
        render() {
            return (
                <Comp getFieldDec={this.getFieldDec} />
            );
        }
    };
}

@MyFormCreate
class MyForm extends Component {
    render() {
        return (
            <div>
                <Input />
                <Button>登录</Button>
            </div>
        );
    }
}

export default MyForm;