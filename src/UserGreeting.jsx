import PropTypes from 'prop-types'
function UserGreeting(props){
    if(props.isloggedIn){
        return <h2 className="welcome-msg">Welcome {props.username}</h2>
    }
    return <h2 className="login-prompt">Please login to continue</h2>
}
UserGreeting.propTypes={
    isloggedIn:PropTypes.bool,
    username:PropTypes.string,
}
UserGreeting.defaultProps={
    isloggedIn:false,
    username:"Guest",
}
export default UserGreeting