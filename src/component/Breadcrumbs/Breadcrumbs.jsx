import { Link , useLocation ,matchPath } from "react-router-dom";
import { routes } from "../../App";
const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x); 


    return  (
        <>
         <nav className="breadcrumb-nav" style={{ margin: '16px 0' }}>
            <Link to="/" className="breadcrumb-link" style={{ textDecoration: 'none', color: '#007bff' }}>Home</Link>
            {
                pathnames.map((value, index) => {
                   const route= `/${pathnames.slice(0, index + 1).join('/')}`;
                   const routeName = routes.find(x => matchPath(x.path, route))?.name;
                   return (
                    <span key={route} className="breadcrumb-item" style={{ marginLeft: 8 }}>
                      <span style={{ margin: '0 8px', color: '#6c757d' }}>/</span>
                      <Link to={route} className="breadcrumb-link" style={{ textDecoration: 'none', color: '#007bff' }}>
                        {routeName}
                      </Link>
                    </span>
                   )
                })
            }
         </nav>
         <style>
           {`
             .breadcrumb-nav {
               font-size: 16px;
               background: #f8f9fa;
               padding: 8px 16px;
               border-radius: 4px;
               display: inline-block;
             }
             .breadcrumb-link:hover {
               text-decoration: underline;
               color: #0056b3;
             }
             .breadcrumb-item:last-child .breadcrumb-link {
               font-weight: bold;
               color: #343a40;
               pointer-events: none;
               cursor: default;
             }
           `}
         </style>
        </>
    )
}

export default Breadcrumbs;