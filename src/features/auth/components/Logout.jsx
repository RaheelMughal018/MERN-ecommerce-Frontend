import { useEffect } from 'react';
import { selectLoggedInUser, signoutAsync } from '../AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function Logout() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  console.log('🚀 ~ Logout ~ user:', user);
  useEffect(() => {
    dispatch(signoutAsync());
  }, [dispatch, user]);
  return <>{!user && <Navigate to='/login' replace={true} />}</>;
}
