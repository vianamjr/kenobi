import styles from './styles.module.scss'
import Link from 'next/link'

type NavButtonProps = {
	path: string;
	text: string
}

export function NavButton({path, text}: NavButtonProps) {
	return (
		<Link href={path}>
			<a className={styles.newButton}>{text}</a>
		</Link>
	);
}