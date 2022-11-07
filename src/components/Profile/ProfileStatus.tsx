import React from 'react';
import classes from "./ProfileInfo.module.css";

type ProfileStatusPropsType = {
    status: string
}


export class ProfileStatus extends React.Component <ProfileStatusPropsType> {

    state = {
        editMode: false
    }

    activateEditMode = () => {
       //debugger
        console.log('this:', this)
        this.setState({       //метод из reactComponent, в него передаем объект свойство которого перезапишут те свойства, которые были в стейте
            editMode:true
        })
        //this.state.editMode = true
        // this.forceUpdate()  //принудительно меняет стейт, нужно избегать, на крайний случай
    }

    deactivateEditMode = () => {
        this.setState({
            editMode:false
        })
    }

    render() {
        return (
            <div>
                {/*если у нас false отображаем эту div*/}
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }

                {/*если у нас true отображаем эту div*/}
                {this.state.editMode &&
                    <div>
                        <input value={this.props.status} onBlur={this.deactivateEditMode} autoFocus={true}/>
                    </div>
                }

            </div>
        );
    }


};

