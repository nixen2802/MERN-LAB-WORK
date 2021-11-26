import React,{Component} from 'react';
class Welcome extends React.Component{
    render()
    {
        return(
            <div>This is the class Component {this.props.name} {this.props.lastname}</div>
        )
    }
}
export default Welcome;