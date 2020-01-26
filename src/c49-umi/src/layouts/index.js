import { Layout, Menu, Icon, Badge, Dropdown} from 'antd';
import { Link } from "umi/link";
import styles from './index.css';
import { connect } from 'dva';

const { Header, Content, Footer } = Layout;

export default connect(state => ({
    count: state.cart.length,
    cart: state.cart
}))(function(props) {
    const selectedKeys = [props.location.pathname];
    const menu = (
        <Menu>
            {props.cart.map((item, index) => (
                <Menu.Item key={index}>
                    {item.name}x{item.count} <span>￥</span>
                </Menu.Item>
            ))}
        </Menu>
    );
    return (
        <Layout>
            {/* 页头 */}
            <Header className={styles.header}>
                <img src="https://img.kaikeba.com/logo-new.png" className={styles.logo} />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={selectedKeys}
                    style={{ lineHeight: "64px", float: "left" }}
                >
                    <Menu.Item key="/">
                        <Link to="/">商品</Link>
                    </Menu.Item>
                    <Menu.Item key="/users">
                        <Link to="/users">用户</Link>
                    </Menu.Item>
                    <Menu.Item key="/about">
                        <Link to="/about">关于</Link>
                    </Menu.Item>
                </Menu>
                <Dropdown overlay={menu} placement="bottomRight">
                    <div style={{ float: "right" }}>
                        <Icon type="shopping-cart" style={{ fontSize: 18 }} />
                        <span>我的购物车</span>
                        <Badge count={props.count} offset={[-4, -18]} />
                    </div>
                </Dropdown>
            </Header>
            <Content className={styles.content}>
                <div className={styles.box}>
                    {props.children}
                </div>
            </Content>
            {/* 页脚 */}
            <Footer className={styles.footer}>
            </Footer>
        </Layout>
    );
});