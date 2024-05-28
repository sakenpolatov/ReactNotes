import { useContext } from 'react'
import styles from './addButton.module.scss'
import { Button } from '@mantine/core'
import { NotesContext } from '../../context/NotesProvider/NotesProvider'
import { MdOutlineNoteAdd } from 'react-icons/md'

export const AddNoteButton = () => {
	const { darkMode } = useContext(NotesContext)

	return (
		<div className={styles.wrapper}>
			<Button
				variant='filled'
				className={`${styles.addButton} ${darkMode ? styles.darkMode : ''}`}
				style={{ width: '90%', height: '40px' }}
			>
				Добавить заметку
				<MdOutlineNoteAdd className={styles.icon} />
			</Button>
		</div>
	)
}
