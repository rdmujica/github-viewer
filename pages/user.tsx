import { User } from '@components/User'
import axios from 'axios'

type QueryPropsT = {
  login: string
}
interface IUserProps {
  query: QueryPropsT
}

export const getServerSideProps = async ({ query: { login } }: IUserProps) => {
  const { data: repos } = await axios.get(
    `https://api.github.com/users/${login}/repos`
  )
  const repositories: string[] = repos.map((repo: any) => repo.clone_url)
  return { props: { login, repositories } }
}

interface IUserPage {
  login: string
  repositories: string[]
}

const UserPage = ({ login, repositories }: IUserPage) => {
  return (
    <>
      <User login={login} repositories={repositories} />
    </>
  )
}

export default UserPage
