import React, {ChangeEvent} from "react";
import status from "./ProfileStatus.module.css"

type StatusPropsType = {
    status: string | null
    updateStatus: (status: string | null) => void
    userId: number
    myId: number
}


export class ProfileStatus extends React.Component<StatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        if (this.props.userId === this.props.myId) {
            this.setState({
                editMode: true
            })
        }
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
                           value={this.state.status as string}
                           onChange={this.onStatusChange}
                    />
                </div>}
            </div>

        )
    }
}
