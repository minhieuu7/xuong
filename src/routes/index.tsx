
import HomePage from '@/pages/(website)/home/page';
import LayoutWebsite from '@/pages/(website)/layout';
import { Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<LayoutWebsite/>}>
                <Route index element={<HomePage/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default Router;