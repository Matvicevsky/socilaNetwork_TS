import React from 'react';
import {connect} from 'react-redux';
import {
    follow, followTC,
    getUsersTC,
    setCurrentPage,
    setIsFollowingProgress,
    unfollow,
    unFollowTC
} from '../../Redux/findUsersReducer';
import {AppReduxStateType} from '../../Redux/ReduxStore';
import {Users} from './Users';


type MapStatePropsType = {
    users: any,
    pageSize: number,
    totalUserCount:number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: boolean
}

type mapDispatchToPropsType = {
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    setIsFollowingProgress: (followingInProgress: boolean) => void,
    getUsersTC: (currentPage: number ,pageSize: number) => void,
    setCurrentPage: (currentPage: number) => void,
    unFollowTC: (userId: string) => void,
    followTC: (userId: string) => void
}

export type FindUsersPropsType = MapStatePropsType & mapDispatchToPropsType


export type UsersPropsType = {
    totalUserCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void
    users: any,
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    isFetching: boolean,
    followingInProgress: boolean,
    getUsersTC: (currentPage: number ,pageSize: number) => void,
    setCurrentPage: (currentPage: number) => void,
    unFollowTC: (userId: string) => void,
    followTC: (userId: string) => void
}


export class UsersContainer extends React.Component<FindUsersPropsType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize)
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
                      followingInProgress={this.props.followingInProgress}
                      getUsersTC={this.props.getUsersTC}
                      setCurrentPage={this.props.setCurrentPage}
                      unFollowTC={this.props.unFollowTC}
                      followTC={this.props.followTC}
         />
    }
}

let mapStateToProps = (state: AppReduxStateType): MapStatePropsType => {
    return {
        users: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}


export const FindUsersContainer = connect(mapStateToProps, {follow, unfollow, setCurrentPage, setIsFollowingProgress, getUsersTC, unFollowTC, followTC})(UsersContainer)