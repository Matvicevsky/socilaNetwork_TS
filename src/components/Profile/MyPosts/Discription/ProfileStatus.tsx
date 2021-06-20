import React, {ChangeEvent} from "react";
import status from "./ProfileStatus.module.css"

type StatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}


export class ProfileStatus extends React.Component<StatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    componentDidUpdate(prevProps: Readonly<StatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    render() {

        return (
            <div className={status.container}>
                {!this.state.editMode &&
                <div>
                    <span
                        onDoubleClick={this.activateEditMode}>
                        {this.props.status || '-------'}
                    </span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input type="text"
                           autoFocus={true}
                           onBlur={this.deactivateEditMode}
                           value={this.state.status}
                           onChange={this.onStatusChange}
                    />
                </div>}
            </div>

        )
    }
}
