import ArticlesWithProgress from '@c/ArticlesWithProgress'
import Footer from '@c/comm/Footer'

const Layout = ({children})=>{
    return <>
        <ArticlesWithProgress>
            {children}
        </ArticlesWithProgress>
        <Footer/>
    </>
}

export default Layout;