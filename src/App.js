
import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header
from './components/header/Header';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Carousel from './components/carousel/Carousel';
import Categories from './components/categories/Categories';
import Productlist from './components/productlist/Productlist';
import Dropdowndatalist from './components/datalist/Dropdowndatalist';
import Forceupdate from './components/forceupdate/Forceupdate';
import PropsDemo from './components/propsDemo/PropsDemo';
import PropsDemo1 from './components/propsDemo/PropsDemo1';
import TodoParent from './components/TodoDemo/TodoParent';
import Pagination from './components/productlist/Pagination';
import EmployeeCrud from './components/EmployeeCrud/EmployeeCrud';
import ComponentLifeCycle from './components/ComponentLifeCycle/ComponentLifeCycle';
import FunctionalComponentLifecycle from './components/ComponentLifeCycle/FunctionalComponentLifecycle';
import FormsDemo1 from './components/Forms/FormsDemo1';
import ApiDemo from './components/Api/ApiDemo';
import FetchDemo from './components/Api/FetchDemo';
import ClientDemo from './components/Api/ClientDemo';
import { requestStartedInterceptor,responseReceivedInterceptor } from './utils/Myinterceptor';
import Myinterceptor from './utils/Myinterceptor';
import MoviesCrud from './components/AxiosCrudDemo/MoviesCrud';
import Usercrud from './components/UserCrud/Usercrud'
import { Routes,Route } from 'react-router-dom';
import WhatwedoPage from './Pages/WhatwedoPage';
import SearchPage from './Pages/SearchPage';
import WhatinstorePage from './Pages/WhatinstorePage'
import Products from './Pages/Products'
import Users from './Pages/Users'
import UsersDetails from './Pages/UsersDetails';
import ProductDetails from './Pages/ProductDetails';
import Career
 from './Pages/Career';
 import PerminentJobs from './Pages/PerminentJobs';
 import ContractJobs from './Pages/ContractJobs';
import ProtectedRoute from './Pages/ProtectedRoute';
import DisplayErrorDemo from './components/ErrorBoundryDemo/DisplayErrorDemo';
import ErrorBoundry from './components/ErrorBoundryDemo/ErrorBoundry'
function App() {
  // Myinterceptor();
  // requestStartedInterceptor();
  // responseReceivedInterceptor();

   return <div>
   <Header />
   {/* <Navbar />  */}
    <div className='router'>
         <Routes>
             <Route path='/' element={<Navbar />}>

            </Route>
             <Route path='WhatwedoPage' element={<WhatwedoPage/>}>

            </Route>
          <Route path='/SearchPage' element={<SearchPage />}>
             </Route>
          <Route path='WhatinstorePage' element={<WhatinstorePage />}>
            </Route>



            <Route path='Products' element={<ProtectedRoute><Products /></ProtectedRoute>}>
            </Route>


            <Route path='ProductDetails/:id' element={<ProductDetails />}>
             </Route>
            <Route path='Users' element={<Users />}> 
            </Route>
             <Route path='UsersDetails' element={<UsersDetails/>}>
             </Route> 

           <Route path='Career' element={<Career/>}>
            <Route index element={<PerminentJobs/>}/>
                <Route path='PerminentJobs' element={<PerminentJobs/>}/>
               <Route path='ContractJobs' element={<ContractJobs/>}/>
           </Route>


       </Routes>


     </div> 










    {/*<Categories />*/}

    {/*<Carousel />*/}
    {/*<Dropdowndatalist/>
    
    {/*<PropsDemo/>*/}
    {/*<Forceupdate/>*/}
    {/*<PropsDemo1/>*/}
    {/* <Productlist/>  */}
    {/* <TodoParent/> */}
    {/* <Pagination/> */}
    {/* <ComponentLifeCycle/> */}
    {/* <FunctionalComponentLifecycle/> */}

    {/* <EmployeeCrud/> */}
   {/* < FormsDemo1/> */}
    {/* <ApiDemo/>  */}
   {/*/* <FetchDemo/> */}
   {/* <ClientDemo/> */}
   {/* <MoviesCrud/> */}
   {/* <Usercrud/> */}
   {/* <ErrorBoundry>
   <DisplayErrorDemo name='john'/>
   </ErrorBoundry> */}
   </div>
 
    
}

export default App;
