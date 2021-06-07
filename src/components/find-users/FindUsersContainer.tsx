import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {
    followAC,
    setCurrentPageAC,
    setIsFetchingAC,
    setTotalUserCountAC,
    setUsersAC,
    unFollowAC,
    UserType
} from '../../Redux/findUsersReducer';
import {AppReduxStateType} from '../../Redux/ReduxStore';
import axios from 'axios';
import {Users} from './Users';


type MapStatePropsType = ReturnType<typeof mapStateToProps>;

type MapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>

export type FindUsersPropsType = MapStatePropsType & MapDispatchToPropsType

export type UsersPropsType = {
    totalUserCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    users: any,
    follow: (userId: string)=> void,
    unfollow: (userId: string)=> void,
    isFetching: boolean
}


export class UsersContainer extends React.Component<FindUsersPropsType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
            })

    }

    render() {
        return <Users totalUserCount={this.props.totalUserCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                   isFetching={this.props.isFetching}
        />
    }
}

let mapStateToProps = (state: AppReduxStateType) => {
    return {
        users: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: string) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUserCount: (totalCount: number) => {
            dispatch(setTotalUserCountAC(totalCount))
        },
        setIsFetching:  (isFetching: boolean) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}

export const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)