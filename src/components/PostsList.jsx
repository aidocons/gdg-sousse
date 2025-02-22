import TodoCard from "./TodoCard/TodoCard"
import styles from "./PostsList.module.css"

function PostsList(){
  return(
  <div className={styles.list}>
    <TodoCard></TodoCard>
    <TodoCard></TodoCard>
    </div>);
}

export default PostsList