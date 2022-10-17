import { wrapper } from "../redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
      // position="top-right"
      // autoClose={4000}
      // hideProgressBar={false}
      // newestOnTop={false}
      // draggable={false}
      // pauseOnVisibilityChange
      // closeOnClick
      // pauseOnHover
      />
    </>
  );
}

export default wrapper.withRedux(MyApp);
