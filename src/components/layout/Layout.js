import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { AppBar } from "components/appbar/AppBar";

const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};






// const Layout=()=>{
//     return<Container>
//         <Header>
//       <nav >
//                 <Link to="/" end>Home</Link>
//                 {/* <Link to="/register">Register</Link>
//                 <Link to="/login">Login</Link> */}
//       </nav>
//       </Header> 
//       <main >
//         <Suspense fallback={<div>loading...</div>}>
//              <Outlet/>
//         </Suspense>
     
//       </main>
//       <footer></footer>
//     </Container>
// };
export default Layout;