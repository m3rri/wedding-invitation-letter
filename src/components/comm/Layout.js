import ArticlesWithProgress from 'components/ArticlesWithProgress'
import Footer from 'components/comm/Footer'

const Layout = ({children})=>{
    return <>
        <ArticlesWithProgress>
            {children}
        </ArticlesWithProgress>
        <Footer/>
    </>
}

export default Layout;