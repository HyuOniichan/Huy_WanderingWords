import { Link } from 'react-router-dom';

function Breadcrumb() {

    const paths = ['blog']

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    {paths.map((path, index) => 
                        <li class="breadcrumb-item">
                            <Link to={'/' + path} className="breadcrumb-item">
                                {path}
                            </Link>
                        </li>
                    )}
                    {/* <li class="breadcrumb-item">
                        <a href="/" className="breadcrumb-item active">
                            This Blog
                        </a>
                    </li> */}
                </ol>
            </nav>
        </div>
    )
}

export default Breadcrumb; 
