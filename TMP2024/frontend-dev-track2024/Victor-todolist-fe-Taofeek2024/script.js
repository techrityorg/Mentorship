document.addEventListener('DOMContentLoaded', () => {

	//get the html elements taskInput and taskList
	const taskInput = document.getElementById('taskInput');
	const taskList = document.getElementById('taskList');

	//add an eventlistener to taskInput and write an if statement for taskInput
	taskInput.addEventListener('keydown', (Event) => {
		if (Event.key === 'Enter') {
			addTaskItem(taskInput.value);
			taskInput.value = '';
		}
	});

	//create a function for addTaskItem and an if statement
	function addTaskItem(taskText) {
		if (taskText.trim() === '') return;
		//create a list element and let listItem  be the list Element created
		const listItem = document.createElement('li');
		//do thesame for textSpan and add an eventlistener that fires when the text is double clicked 
		const textSpan = document.createElement('span');
		textSpan.textContent = taskText;
		textSpan.addEventListener('dblclick', () =>
			editTaskItem(listItem, textSpan)  //the event listener fires the editTaskItem function that is created in line 

		);

		//create another span element and add a classlist of date
		const dateSpan = document.createElement('span');
		dateSpan.classList.add('date');
		dateSpan.textContent = `(${new Date().toLocaleTimeString()})`;

		//create a button element and add a classList and an eventlistener that fires when its clicked 
		const completeButton = document.createElement('button');
		completeButton.textContent = 'Done';
		completeButton.classList.add('complete');
		completeButton.addEventListener('click', () => {
			listItem.classList.toggle('completed');
		});

		const deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.classList.add('delete');
		deleteButton.addEventListener('click', () => {
			taskList.removeChild(listItem);
		});

		listItem.appendChild(textSpan);
		listItem.appendChild(dateSpan);
		listItem.appendChild(completeButton);
		listItem.appendChild(deleteButton);
		taskList.insertBefore(listItem, taskList.firstChild);
	}
	//create the editTask function and add a classlist
	function editTaskItem(listItem, textSpan) {
		const editInput = document.createElement('input');
		editInput.type = 'text';
		editInput.value = textSpan.textContent;
		editInput.classList.add('edit-input');
		const finalEdit = () => {
			textSpan.textContent = editInput.value;
			listItem.replaceChild(textSpan, editInput);
		};
		//add an eventlistener for finalEdit
		editInput.addEventListener('keydown', (Event) => {
			if (Event.key === 'Enter') {
				finalEdit();
			}
		})

		editInput.addEventListener('blur', finalEdit);

		listItem.replaceChild(editInput, textSpan);
		editInput.focus();

	};
});
