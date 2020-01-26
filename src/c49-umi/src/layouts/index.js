import { Layout, Menu, Icon, Badge, Dropdown } from 'antd';
import { Link } from "umi/link";
import styles from './index.css';
import { connect } from 'dva';

const { Header, Content, Footer } = Layout;

export default (props) => {
  return <>{props.children}</>
}
