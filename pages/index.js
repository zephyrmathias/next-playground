import Link from 'next/link'

export default function Homepage({ locale }) {
  return (
    <div>
      homepage - locale {locale}
      <div>
        <Link href='/test'>test</Link>
      </div>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: { locale }
  }
}