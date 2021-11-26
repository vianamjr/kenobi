import { FormEvent, useState } from 'react'
import styles from './styles.module.scss'
import { NavButton } from '../../components/NavButton';

export default function New() {
	const [newOnboarding, setNewOnboarding] = useState('def');

	const roles = [
		{
			id: 1,
			name: 'Assessor',
		},
		{
			id: 2,
			name: 'Sdr',
		},
		{
			id: 3,
			name: 'Marketing',
		},
	]

	function handleOnSubmit(event: FormEvent) {
		event.preventDefault();
		setNewOnboarding('')
	}

	return (
		<div className={styles.container}>
			<h2>Novo integrante</h2>
			<NavButton text={"Voltar"} path={"/onboarding"} />
			<form className={styles.onboardingForm} action="post" onSubmit={handleOnSubmit}>

				<label htmlFor="fullName">Nome</label>
				<input type="text" id="fullName" onChange={event => setNewOnboarding(event.target.value)} />

				<label htmlFor="role">Função</label>

				<select id="role">
					{roles.map((role) => {
						return (
							<option value={role.name} key={role.id}>{role.name}</option>
						)
					})}
				</select>
				<button type="submit">
					Criar Link
				</button>
			</form>

			<p>Data: {newOnboarding}</p>
		</div>
	)
}