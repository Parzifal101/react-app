import React from 'react';
import {Route, Routes,Navigate} from 'react-router-dom'
import Feed from '../pages/Feed'
// import Post from '../components/Post'; 
import Post from '../pages/Post'; 

const AppRouter = () => {
    return (
        <Routes>
          <Route path='/feed' element={<Feed></Feed>}/>
          <Route path='/post/:id' element={<Post></Post>}/>
          <Route path="*" element={<Navigate replace to="/feed" />}/>
        </Routes>

      //REACT ROUTER V5 version
    //   <BrowserRouter>
    //     <Switch>
    //         <Route path='/feed'>
    //             <Feed></Feed>
    //         </Route>
    //         <Route path='/post/:id'>
    //             <Post></Post>
    //         </Route>
    //         <Redirect to='/feed'>

    //         </Redirect>
    //     </Switch>
    //   </BrowserRouter>
    );
};

export default AppRouter;