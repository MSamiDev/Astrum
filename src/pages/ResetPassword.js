import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../partials/Header';
import { sendPasswordResetEmail } from 'firebase/auth';
import {auth} from '../firebase';
import toast, { Toaster } from 'react-hot-toast';

function ResetPassword() {
  const [email, setemail] = useState("");

  const sendLink = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        toast.success("Reset Link Dispatched")
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error("User not exist");
        // ..
      });
  }
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-back">
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
      <Helmet>
        <title>Astrum | ResetPassword</title>
      </Helmet>
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow bg-back">

        <section className="bg-gradient-to-b bg-back">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1 mb-4 text-text">Let’s get you back up on your feet</h1>
                <p className="text-xl text-gray-600">Enter the email address you used when you signed up for your account, and we’ll email you a link to reset your password.</p>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-text text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                      <input id="email" onChange={(e)=>setemail(e.target.value)} type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-black bg-yell hover:bg-yell w-full" onClick={sendLink}>Send reset link</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default ResetPassword;