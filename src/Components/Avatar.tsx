import styles from './Avatar.module.css';

//Desestruturação no js
//const user = { name: "Gabriel"}
//const {name} = user -----pega o name dentro do objeto user
interface AvatarProps{
    hasBorder?: boolean; //?:opcional
    src: string;
    alt?: string;
}

export function Avatar({hasBorder = true , src,alt}: AvatarProps){
    //valor default do hasBorder é true
    return(
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar}
         src ={src}
         alt ={alt} />
    );
}
