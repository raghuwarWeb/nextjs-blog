import React from 'react'
import Layout from '../../components/layout'
import Link from 'next/link'
import styles from './me.module.scss';
const Me = () => {
  return (
    <Layout>
        <h1 className={styles.pink}>hey it's Me</h1>       
    </Layout>
  )
}

export default Me