import {signInWithGooglePopup, createUserDocFromAuth, signOutUser,} from '../../utils/firebase/firebase.utils.js';
import SignInForm from '../SignInForm/SignInForm'
import SignUpForm from '../SignUpForm/SignUpForm'

import {useAuth} from "../../hooks/userAuth";
import {Button} from "../Button/Button";
import {useRouter} from "next/router";


const Authentication = () => {

    let {isAuth} = useAuth();
    let router = useRouter();
    isAuth ? router.push('/') : '';

    // const dispatch = useAppDispatch();
    //
    // const handleGoogleSignIn = async () => {
    //     signInWithGooglePopup()
    //         .then(({user}) => {
    //             console.log(user);
    //             createUserDocFromAuth(user);
    //             const {uid, refreshToken, email} = user;
    //             dispatch(setUser({email: email, id: uid, token: refreshToken}))
    //         })
    //
    // }

    console.log(useAuth().name)
    return (<div className="auth-container">

            <div>
                <SignInForm/>
            </div>
            <div>
                <SignUpForm/>
            </div>
            {/*<button onClick={() => handleGoogleSignIn()}>*/}
            {/*    Sign In With Google*/}
            {/*</button>*/}
            <Button appearance={'primary'} onClick={() => signOutUser()}>Выйти</Button>

        </div>
    )
};

export default Authentication;
