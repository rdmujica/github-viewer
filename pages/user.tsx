import axios from 'axios'

export const getServerSideProps = async ({
  query: { login }
}: {
  query: { login: string }
}) => {
  return { props: { login } }
}

const AboutPage = ({ login }: { login: string }) => {
  return (
    <>
      <h1>{`${login}`}</h1>
    </>
  )
}

export default AboutPage
