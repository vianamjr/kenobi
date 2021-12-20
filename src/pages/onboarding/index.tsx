
import { OnboardingCard, Onboarding } from '../../components/OnboardingCard'
import styles from './styles.module.scss'
import { NavButton } from '../../components/NavButton';


export default function Index() {
	const onboardings = [
		{ name: 'Helio', role: 'Assessor', status: 'created', tasks: [{ description: 'some bla', isCompleted: false }] },
		{
			name: 'Blanco', role: 'SDR', status: 'created', tasks: [
				{ description: 'email', isCompleted: true },
				{ description: 'moskit', isCompleted: false },
				{ description: 'telefonia', isCompleted: true },
				{ description: 'registro rh', isCompleted: false },
				{ description: 'alguma outra coisa', isCompleted: false },
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