import {AppStateType} from "../../components/redux/redux-store";
import {connect} from "react-redux";
import {ErrorSnackbar} from "./ErrorSnackbar";

type MapStateToPropsType = {
    error: null | string
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        error: state.auth.error
    }
}

export default connect(mapStateToProps)(ErrorSnackbar)