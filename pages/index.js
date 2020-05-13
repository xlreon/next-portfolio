import Link from 'next/link'
import Layout from '../components/Layout'

const index = () => 
<Layout title='Welcome'>
    <div>
        <Link href='/about'>
            <a>Go to About</a>
        </Link>
    </div>
</Layout>

export default index