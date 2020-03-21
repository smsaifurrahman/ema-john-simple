import React from 'react';
import Auth from './useAuth';


const Login = () => {
    const auth = Auth();
    const handleSignIn = () =>{
            auth.signInWithGoogle()
            .then(res => {
               window.location.pathname ='/review';
            })
    }

     const handleSignOut = ()=>{
         auth.signOut()
         .then(res=>{
             window.location.pathname='/';
         });
     }
    return (
        <div>
            <h1>join the party</h1>

            {    auth.user?<button onClick = {handleSignOut}>Sign  out</button>:   
                <button onClick = {handleSignIn }>Sign In With Google</button>
            }
        </div>
    );
};

export default Login;