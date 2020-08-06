import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import classNames from 'classnames'

export default function Blog() {
  return (
    <Link href="https://medium.com/@winlost" className="inline-flex flex-col">
      <FontAwesomeIcon icon={faMedium} size="4x" />
      <div>Medium</div>
    </Link>
  )
}

/**
 *
 * @param {import('react').AnchorHTMLAttributes<HTMLAnchorElement>} props
 */
function Link({ className, ...props }) {
  return <a {...props} className={classNames('hover:underline', className)} />
}
