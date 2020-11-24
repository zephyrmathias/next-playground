export default function Homepage({ locale }) {
  return <div>homepage - locale {locale}</div>
}

export async function getStaticProps({ locale }) {
  return {
    props: { locale }
  }
}