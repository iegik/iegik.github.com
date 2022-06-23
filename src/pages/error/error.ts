import LinkList from '@app/components/link-list/link-list.ts'

interface ErrorPageProps {
  message: string;
  children?:string[]
}

const ErrorPage:FC<ErrorPageProps> = ({ message, children } = { message: 'Unknown error' }) => `
  <div class="error">
    <div class="card error__card">
      <p>${message}</p>
      ${LinkList({
    children,
  })}
    </div>
  </div>
`


export default ErrorPage
