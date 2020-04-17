import Meganav from '../meganav/meganav';

const Layout = props => (
    <div>
        <Meganav />
        { props.children }
    </div>
)

export default Layout;