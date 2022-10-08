import { observer } from 'mobx-react';
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState } from 'react';
import { ReactI18NextChild } from 'react-i18next';
import { TodoStoreImpl } from '../stores/storemobx';


interface TodoListProps {
    todoStore: TodoStoreImpl
}

const TodoListMobx: React.FC<TodoListProps> = observer(({todoStore}) => {

    const [value, setValue] = useState<string>('');
    const status = todoStore.status;

    return <div>
        <input
            value={value}
            onChange={(event) => { 
                setValue(event.target.value);
            }}
            type="text" />  
        <button onClick={() => {
            if (value) {
                todoStore.addTodo(value);
                setValue('');
            }
        }}>submit</button>

        <div>Completed: {status.completed}</div>
        <div>Remaining: {status.remaining}</div>

        <ul>
            {todoStore.todos.map((todo: { id: any; completed: any; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | Iterable<ReactI18NextChild> | null | undefined; }) => {
                // eslint-disable-next-line react/jsx-key
                return <li onClick={() => {
                    todoStore.toggleTodo(todo.id);
                }}>[{todo.completed ? 'x' : ' '}] {todo.title}</li>;
            })}
        </ul>
    </div>
});
export default TodoListMobx;