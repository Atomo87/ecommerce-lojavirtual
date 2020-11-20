import Head from './Head';

import Style from './Style';

const Layout = ({ children, title, description, url, image, pagSeguro }) => (
    <div>
        <Head
            title={title}
            description={description}
            url={url}
            ogImage={image}
            pagSeguro={pagSeguro}></Head>
        <Style />
        <div className="body">
            { children }
        </div>
        <footer>
            <div className="flex flex-center" >
            <div align="center" class="col-lg-12 col-md-12">
 <h4>	&copy; Sobre o Portal TI, Termos de uso, Política de privacidade e Proteção à Propriedade Intelectual</h4>

            </div>
            </div>
        </footer>
    </div>
);

export default Layout;