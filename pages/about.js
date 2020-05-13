import Link from 'next/link'
import Layout from '../components/Layout'

export default () => <Layout title="About me">
    <p>A JavaScript programmer.</p>
    <Link href='/'>
        <a>Go To Home</a>
    </Link>
</Layout>