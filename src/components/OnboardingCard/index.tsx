import styles from './styles.module.scss'

export type Onboarding = {
	name: string;
	role: string;
	status: string;
	tasks: Task[];

}

export type Task = {
	description: string;
	isCompleted: boolean;
}

type OnboardingCardProps = {
	onboarding: Onboarding
}

export function OnboardingCard({ onboarding }: OnboardingCardProps) {

	return (
		<div className={styles.container}>
			<div className={styles.head}>
				<span className={styles.name}>{onboarding.name}</span>
				<span className={styles.role}>{onboarding.role}</span>
			</div>
			<div className={styles.tasks}>
				<span>{onboarding.status}</span>
				{onboarding.tasks.map((task) => {
					return (<span key={task.description} className={task.isCompleted? styles.completed : ""}>{task.description}</span>)
				})}
			</div>
		</div>
	)
}