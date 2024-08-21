import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { useState, FormEvent, ChangeEvent } from "react";


interface  Author{
  name:string;
  role:string;
  avatarUrl:string;
}

interface Content{
  type: 'paragraph' | 'link';
  content: string;
}

interface PostProps{
  author:Author;
  publishedAt: Date;
  content:Content[] ;
}

export function Post({ author, publishedAt , content}:PostProps) {
//funcionalidade dos comentarios funcionando para todo post
const [comments,setComments] = useState([ //valor inicial de comments
  "Post muito bacana, hein?!"
])
//comments: lista de comenatários que serão exibidos

const [newCommentText,setNewCommentText] = useState("")
//value da textarea = newCommentText


  //uso da 'date-fns'
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    //prefixo
    addSuffix: true,
  });


  function handleCreateNewComment(event:FormEvent) {
    event.preventDefault() //nao ter redirecionamento

    // newCommentText armazenando o conteudo da textarea
     setComments([...comments,newCommentText]) //passa o novo valor, não apenas oq quer inserir
    //ou  setComments((state) => [...state,newCommentText])
    setNewCommentText("") //limpando a textarea
    //value = newCommentText
  }

  function handleNewCommentChange(event:ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("")
    setNewCommentText(event.target.value)
    //newCommentText que antes era "", agora é o conteudo da textarea
    //onSubmit,newCommentText irá para a função handleCreateNewComment
  }

  function deleteComment(commentToDelete:string) {
    const commentWithoutDeletedOne = comments.filter(comment => {
      // true mantém , false tira
      //retorna a lista apenas com os elementos diferentes do qual eu quero deletar
      return comment != commentToDelete
    })
    setComments(commentWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length == 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
            {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
            if (line.type == "paragraph"){
                return <p key={line.content}>{line.content}</p> //key no primeiro elemento de retorno
            } else if (line.type == "link"){
                return <p key={line.content}><a href="">{line.content}</a></p>
            }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} //incrementa a lista comments
       className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name = "comment"
          placeholder = "Deixe um comentário"
          onChange = {handleNewCommentChange}
          value = {newCommentText} //conteúdo da textarea
          />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
            </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment =>{ //expõe os comentarios de acordo com os elementos da lista
          return(
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}/>)
        })}
      </div>
    </article>
  );
}
