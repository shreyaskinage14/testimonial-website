import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/screens/login/login';

function App() {

  useEffect(() => {
    if (!window.navigator.onLine) {
      toast("Connection Lost")
    } else {
      toast("Connection Gained")
    }

  })

  return (
    <>
      <div className="App">
        <Login />
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
