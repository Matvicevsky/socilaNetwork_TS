import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import {
    follow,
    followTC,
    getUsersTC,
    setCurrentPage,
    setIsFollowingProgress,
    unfollow,
    unFollowTC
} from '../../Redux/findUsersReducer';
import {AppReduxStateType} from '../../Redux/ReduxStore';
import {Users} from './Users';
import {compose} from "redux";
import {
    getCurrentPageSelector,
    getFollowingInProgressSelector,
    getIsFetchingSelector,
    getPageSizeSelector,
    getTotalUserCountSelector,
    getUsersSelector
} from "../../Redux/findUsers-selector";
import {UsersType} from "../../api/api";


type MapStatePropsType = {
    users: ReturnType<typeof getUsersSelector>,
    pageSize: ReturnType<typeof getPageSizeSelector>
    totalUserCount: ReturnType<typeof getTotalUserCountSelector>
    currentPage: ReturnType<typeof getCurrentPageSelector>
    isFetching: ReturnType<typeof getIsFetchingSelector>
    followingInProgress: ReturnType<typeof getFollowingInProgressSelector>
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
    users: Array<UsersType>,
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
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUserCount: getTotalUserCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state),
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, setIsFollowingProgress, getUsersTC, unFollowTC, followTC}),
)(UsersContainer)