import { useNavigate } from 'react-router-dom';
import SearchContext from '../../../context/context';
import { useContext, useEffect, useState } from 'react';
import Loder from '../../reauseblecomponet/loder/Loder';
import { toast } from 'react-toastify';

export default function withLogin(Component) {
  return function ValidateUser(props) {
    const { isloggedin } = useContext(SearchContext);
    
    const navigate = useNavigate();
    const [checking, setChecking] = useState(true);

    useEffect(() => {
      if (!isloggedin) {
        //alert("");
        toast.warning("Please login first");
        navigate('/login');
      } else {
        setChecking(false);
      }
    }, [isloggedin, navigate]);

    if (checking) return <Loder />;

    return <Component {...props} />;
  };
}
