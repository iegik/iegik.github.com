import LinkList from '@app/components/link-list/link-list'

const ErrorPage = ({ message, children }) => `
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
