
import { OnboardingCard, Onboarding } from '../../components/OnboardingCard'
import styles from './styles.module.scss'
import { NavButton } from '../../components/NavButton';


export default function Index() {
	const onboardings = [
		{ name: 'Anakin', role: 'Jedi', status: 'created', tasks: [{ description: 'some bla', isCompleted: false }] },
		{
			name: 'Lea', role: 'Princes', status: 'created', tasks: [
				{ description: 'kill Anakin', isCompleted: true },
				{ description: 'don\'t die', isCompleted: false },
				{ description: 'do something useful', isCompleted: true },
				{ description: 'do another things', isCompleted: false },
				{ description: 'don\'t die, ok, can die', isCompleted: false },
			]
		},
	] as Onboarding[];
	return (

		<div className={styles.container}>
			<h2>Onboarding</h2>
			<NavButton path={"/onboarding/new"} text={"Novo Membro"}/>
			{onboardings.map((onboarding) => {
				return (
					<OnboardingCard onboarding={onboarding} key={onboarding.name} />
				)
			})}
		</div>
	)
}