import React, {ChangeEvent} from 'react';
import classes from "./ProfileInfo.module.css";

type ProfileStatusPropsType = {
    status: string
     updateStatusTC:(status:string)=>any
}


export class ProfileStatus extends React.Component <ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
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
        //для обновления статуса,при деактивации вызвать колбэк для обновления статуса
        debugger
        this.props.updateStatusTC(this.state.status)
    }

    onStatusChange = (e:ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            status: e.currentTarget.value
        } )

    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
       //в компонентдидмоунт мы должны вызвать изменение стейта
        // внутри компонент дидапдейт все сет стейты, всегда должны быть внутри какого либо условия, что бы не произошло зацикливание

        if (prevProps.status !== this.props.status){ //если в предыдущих пропсах, статус был, который не равен статусу в текущих пропсах то:
            this.setState({
                status:this.props.status
            }) //метод вызовется когда в пропсах прийдет новый статус, и когда он пришел мы заменяем старый статус на новый
        }
    }

    render() {
        return (
            <div>
                <h3>статус пользователя:</h3>
                {/*если у нас false отображаем эту div*/}
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '---статуса нет---'  }</span>
                    </div>
                }

                {/*если у нас true отображаем эту div*/}
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} value={this.state.status} onBlur={this.deactivateEditMode} autoFocus={true}/>
                    </div>
                }

            </div>
        );
    }


};

