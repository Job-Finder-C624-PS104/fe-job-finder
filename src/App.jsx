import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from '@/views/Auth/pages/LoginPage'
import RegisterPage from '@/views/Auth/pages/RegisterPage'
import Landing from '@/views/Landing/pages/Landing'
import SearchLokerPage from './views/Worker/pages/SearchLokerPage'
import Dashboard from './views/Hire/pages/Dashboard'
import ManageJobs from './views/Hire/pages/ManageJobs'
import HireProfile from './views/Hire/pages/HireProfile'
import NoteFoundPage from './views/Error/pages/NoteFoundPage'
import TipsPage from './views/Tips/page/TipsPage'
import DetailTips from './views/Tips/page/DetailTips'
import WorkerProfilePage from './views/Worker/pages/WorkerProfilePage'
import DetailJobPage from './views/Hire/pages/DetailJobPage'
import CreateJobPage from './views/Hire/pages/CreateJobPage'
import ManageApplyer from './views/Hire/pages/ManageApplyer'
import AboutUsPage from './views/Landing/pages/AboutUsPage'
import { useDispatch, useSelector } from 'react-redux'
import { asyncIsLoadingProccess } from './states/loading/action'
import { Spinner } from '@nextui-org/react'
import EditJobPage from './views/Hire/pages/EditJobPage'

const App = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((states) => states.isLoading)
  const authUser = useSelector((states) => states.authUser)

  useEffect(() => {
    dispatch(asyncIsLoadingProccess())
  }, [dispatch])

  if (isLoading) {
    return (
      <div
        className="flex items-center justify-center w-full h-screen"
      >
        <Spinner label='Halaman sedang dimuat....' labelColor='foreground' color="primary" size='lg' />
      </div>
    )
  }

  const isAuthorized = (allowedRoles) => {
    if (!authUser || !allowedRoles.includes(authUser.role)) {
      return <Navigate to="/" />
    }
    return null
  }

  return (
    <Routes>
      {isAuthorized(['hire']) && (
        <>
          <Route path="/">
          <Route index element={<Landing />} />
          <Route path="jobs" element={<SearchLokerPage />} />
          <Route path="tips" element={<TipsPage />} />
          <Route path="tips/:id" element={<DetailTips />} />
          <Route path="profile" element={<WorkerProfilePage />} />
          <Route path='about-us' element={<AboutUsPage />} />
          </Route>
        </>
      )}

      {/* Auth */}
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />

      {/* Hire */}
      {isAuthorized(['worker']) && (
        <>
          <Route path="hire-dashboard" element={<Dashboard />} />
          <Route path='manage-applyer' element={<ManageApplyer/>} />
          <Route path="manage-jobs" element={<ManageJobs />} />
          <Route path="manage-jobs/:id" element={<DetailJobPage />} />
          <Route path="hire-profile" element={<HireProfile />} />
          <Route path='create-job' element={<CreateJobPage/>} />
          <Route path='edit-job/:id' element={<EditJobPage/>} />
        </>
      )}
      <Route path="*" element={<NoteFoundPage />} />
    </Routes>
  )
}

export default App
