import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

 //um componente comunica com o outro através de suas propriedades
export function Comment({content, onDeleteComment}){
    const [likeCount,setLikeCount] = useState(0)

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    // setLikeCount pode ser chamada de duas maneiras:
    // Com um valor direto: setLikeCount(5) simplesmente define likeCount para 5.
    // Com uma função: setLikeCount((state) => state + 1), onde você passa uma função que recebe o valor atual do estado como argumento (no caso, state).

    function handleLikeComment(){
        setLikeCount(state => state + 1);
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/marquezzin.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Marques</strong>
                            <time  title='11 de maio às 13:05' dateTime='2022-05-11'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
