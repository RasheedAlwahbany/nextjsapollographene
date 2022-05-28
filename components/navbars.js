import styles from '../styles/Home.module.css'
import Link  from 'next/link'

export default function NavBars() {
  return (
    <div className={styles.container}>
     
     <ul>
       <li><Link href="/">Home</Link></li>
       <li><Link href="/all_books">All books</Link></li>
       <li><Link href="/add_book">Add books</Link></li>
     </ul>

    </div>
  )
}
