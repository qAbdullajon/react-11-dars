import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from '../App'
import { SignIn, AdminLayout, StudentLayout, Student, Teacher, BoshSahifa, Tolov, Guruhim } from "../pages";

const index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<SignIn />} />
        <Route path="/admin-layout" element={<AdminLayout />}>
          <Route index element={<Teacher />} />
          <Route path="student" element={<Student />} />
        </Route>
        <Route path="/student-layout" element={<StudentLayout />}>
          <Route index element={<BoshSahifa />} />
          <Route path="tolovlar" element={<Tolov />} />
          <Route path="guruhim" element={<Guruhim />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />
}

export default index